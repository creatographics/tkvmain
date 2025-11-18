/**
 * Activity Logger - Tracks user activities and changes across the application
 */

export type ActivityType = 
  | 'login'
  | 'logout'
  | 'create'
  | 'update'
  | 'delete'
  | 'view'
  | 'export'
  | 'import'
  | 'settings_change'
  | 'password_change'
  | 'profile_update';

export type ResourceType = 
  | 'client'
  | 'service'
  | 'expense'
  | 'invoice'
  | 'payment'
  | 'user'
  | 'profile'
  | 'settings';

export interface ActivityLog {
  id: string;
  userId: string;
  userName?: string;
  userEmail?: string;
  type: ActivityType;
  resource?: ResourceType;
  resourceId?: string;
  resourceName?: string;
  action: string;
  description: string;
  changes?: {
    field: string;
    oldValue: any;
    newValue: any;
  }[];
  metadata?: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
  timestamp: string;
  location?: string;
}

export interface LoginHistory {
  id: string;
  userId: string;
  userName?: string;
  userEmail?: string;
  loginTime: string;
  logoutTime?: string;
  ipAddress?: string;
  userAgent?: string;
  device?: string;
  browser?: string;
  location?: string;
  status: 'active' | 'logged_out' | 'expired';
  sessionDuration?: number; // in minutes
}

class ActivityLogger {
  private activities: ActivityLog[] = [];
  private loginHistory: LoginHistory[] = [];
  private readonly MAX_ACTIVITIES = 500;
  private readonly MAX_LOGIN_HISTORY = 100;

  /**
   * Get client IP address (best effort in browser)
   */
  private getClientIP(): string {
    // In browser, we can't directly get the IP
    // This would need to be set from server-side or API
    return 'Client IP'; // Placeholder - will be populated from server
  }

  /**
   * Log an activity
   */
  log(activity: Omit<ActivityLog, 'id' | 'timestamp'>): void {
    const activityLog: ActivityLog = {
      ...activity,
      id: this.generateId(),
      timestamp: new Date().toISOString(),
      ipAddress: activity.ipAddress || this.getClientIP(),
    };

    // Add to in-memory store
    this.activities.unshift(activityLog);
    if (this.activities.length > this.MAX_ACTIVITIES) {
      this.activities.pop();
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📝 Activity:', activityLog);
    }

    // In production, send to backend
    if (process.env.NODE_ENV === 'production') {
      this.sendToBackend('activity', activityLog);
    }
  }

  /**
   * Log a login event
   */
  logLogin(login: Omit<LoginHistory, 'id' | 'loginTime' | 'status'>): string {
    const sessionId = this.generateId();
    const loginLog: LoginHistory = {
      ...login,
      id: sessionId,
      loginTime: new Date().toISOString(),
      status: 'active',
    };

    this.loginHistory.unshift(loginLog);
    if (this.loginHistory.length > this.MAX_LOGIN_HISTORY) {
      this.loginHistory.pop();
    }

    // Also log as activity
    this.log({
      userId: login.userId,
      userName: login.userName,
      userEmail: login.userEmail,
      type: 'login',
      action: 'User logged in',
      description: `Login from ${login.device || 'unknown device'}`,
      ipAddress: login.ipAddress,
      userAgent: login.userAgent,
      metadata: {
        browser: login.browser,
        location: login.location,
      },
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('🔐 Login:', loginLog);
    }

    if (process.env.NODE_ENV === 'production') {
      this.sendToBackend('login', loginLog);
    }

    return sessionId;
  }

  /**
   * Log a logout event
   */
  logLogout(sessionId: string, userId: string): void {
    const session = this.loginHistory.find(s => s.id === sessionId);
    if (session) {
      session.logoutTime = new Date().toISOString();
      session.status = 'logged_out';
      
      const loginTime = new Date(session.loginTime);
      const logoutTime = new Date(session.logoutTime);
      session.sessionDuration = Math.round((logoutTime.getTime() - loginTime.getTime()) / 60000);
    }

    this.log({
      userId,
      type: 'logout',
      action: 'User logged out',
      description: 'User session ended',
    });
  }

  /**
   * Log a change/update with before and after values
   */
  logChange(params: {
    userId: string;
    userName?: string;
    resource: ResourceType;
    resourceId: string;
    resourceName: string;
    changes: { field: string; oldValue: any; newValue: any }[];
    action?: string;
  }): void {
    const changeDescription = params.changes
      .map(c => `${c.field}: "${c.oldValue}" → "${c.newValue}"`)
      .join(', ');

    this.log({
      userId: params.userId,
      userName: params.userName,
      type: 'update',
      resource: params.resource,
      resourceId: params.resourceId,
      resourceName: params.resourceName,
      action: params.action || `Updated ${params.resource}`,
      description: changeDescription,
      changes: params.changes,
    });
  }

  /**
   * Get activities for a specific user
   */
  getUserActivities(userId: string, limit: number = 50): ActivityLog[] {
    return this.activities
      .filter(a => a.userId === userId)
      .slice(0, limit);
  }

  /**
   * Get all activities (admin view)
   */
  getAllActivities(limit: number = 100): ActivityLog[] {
    return this.activities.slice(0, limit);
  }

  /**
   * Get login history for a specific user
   */
  getUserLoginHistory(userId: string, limit: number = 20): LoginHistory[] {
    return this.loginHistory
      .filter(l => l.userId === userId)
      .slice(0, limit);
  }

  /**
   * Get all login history (admin view)
   */
  getAllLoginHistory(limit: number = 50): LoginHistory[] {
    return this.loginHistory.slice(0, limit);
  }

  /**
   * Get activities by type
   */
  getActivitiesByType(type: ActivityType, limit: number = 50): ActivityLog[] {
    return this.activities
      .filter(a => a.type === type)
      .slice(0, limit);
  }

  /**
   * Get activities by resource
   */
  getActivitiesByResource(resource: ResourceType, resourceId?: string, limit: number = 50): ActivityLog[] {
    return this.activities
      .filter(a => a.resource === resource && (!resourceId || a.resourceId === resourceId))
      .slice(0, limit);
  }

  /**
   * Search activities
   */
  searchActivities(query: string, limit: number = 50): ActivityLog[] {
    const lowerQuery = query.toLowerCase();
    return this.activities
      .filter(a => 
        a.action.toLowerCase().includes(lowerQuery) ||
        a.description.toLowerCase().includes(lowerQuery) ||
        a.resourceName?.toLowerCase().includes(lowerQuery) ||
        a.userName?.toLowerCase().includes(lowerQuery)
      )
      .slice(0, limit);
  }

  /**
   * Get activity statistics
   */
  getStatistics(userId?: string) {
    const activities = userId 
      ? this.activities.filter(a => a.userId === userId)
      : this.activities;

    const typeCount: Record<string, number> = {};
    const resourceCount: Record<string, number> = {};

    activities.forEach(a => {
      typeCount[a.type] = (typeCount[a.type] || 0) + 1;
      if (a.resource) {
        resourceCount[a.resource] = (resourceCount[a.resource] || 0) + 1;
      }
    });

    return {
      total: activities.length,
      byType: typeCount,
      byResource: resourceCount,
      recentActivity: activities.slice(0, 10),
    };
  }

  /**
   * Parse user agent to extract device and browser info
   */
  parseUserAgent(userAgent: string): { device: string; browser: string } {
    let device = 'Desktop';
    let browser = 'Unknown';

    if (/mobile/i.test(userAgent)) device = 'Mobile';
    else if (/tablet|ipad/i.test(userAgent)) device = 'Tablet';

    if (/chrome/i.test(userAgent)) browser = 'Chrome';
    else if (/safari/i.test(userAgent)) browser = 'Safari';
    else if (/firefox/i.test(userAgent)) browser = 'Firefox';
    else if (/edge/i.test(userAgent)) browser = 'Edge';

    return { device, browser };
  }

  /**
   * Generate unique ID
   */
  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Send to backend
   */
  private async sendToBackend(type: 'activity' | 'login', data: any): Promise<void> {
    try {
      // TODO: Implement actual backend API
      // await fetch(`/api/logs/${type}`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
    } catch (error) {
      console.error(`Failed to log ${type}:`, error);
    }
  }
}

export const activityLogger = new ActivityLogger();
