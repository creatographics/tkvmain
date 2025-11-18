/**
 * Security Logger - Tracks suspicious activities and unauthorized access attempts
 */

export interface SecurityEvent {
  type: 'unauthorized_access' | 'invalid_route' | 'auth_failure' | 'suspicious_activity';
  timestamp: string;
  path: string;
  userAgent?: string;
  ip?: string;
  userId?: string;
  details?: string;
}

class SecurityLogger {
  private events: SecurityEvent[] = [];
  private readonly MAX_EVENTS = 100;

  /**
   * Log a security event
   */
  log(event: Omit<SecurityEvent, 'timestamp'>): void {
    const securityEvent: SecurityEvent = {
      ...event,
      timestamp: new Date().toISOString(),
    };

    // Add to in-memory store
    this.events.unshift(securityEvent);
    if (this.events.length > this.MAX_EVENTS) {
      this.events.pop();
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.warn('🔒 Security Event:', securityEvent);
    }

    // In production, you would send this to your backend/monitoring service
    if (process.env.NODE_ENV === 'production') {
      this.sendToBackend(securityEvent);
    }
  }

  /**
   * Send security event to backend
   */
  private async sendToBackend(event: SecurityEvent): Promise<void> {
    try {
      // TODO: Implement actual backend logging
      // await fetch('/api/security/log', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(event),
      // });
    } catch (error) {
      console.error('Failed to log security event:', error);
    }
  }

  /**
   * Get recent security events (for admin dashboard)
   */
  getRecentEvents(limit: number = 20): SecurityEvent[] {
    return this.events.slice(0, limit);
  }

  /**
   * Check if IP/user has too many failed attempts
   */
  checkRateLimit(identifier: string, timeWindowMs: number = 300000): boolean {
    const recentEvents = this.events.filter(
      (event) =>
        (event.ip === identifier || event.userId === identifier) &&
        Date.now() - new Date(event.timestamp).getTime() < timeWindowMs
    );
    
    return recentEvents.length > 10; // More than 10 attempts in time window
  }
}

export const securityLogger = new SecurityLogger();
