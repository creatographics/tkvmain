import { useAuth } from '@/lib/auth-context';
import { activityLogger, type ActivityType, type ResourceType } from '@/lib/activity-logger';

/**
 * Hook to easily log activities from any component
 */
export function useActivityLogger() {
  const { user } = useAuth();

  const logActivity = (params: {
    type: ActivityType;
    action: string;
    description: string;
    resource?: ResourceType;
    resourceId?: string;
    resourceName?: string;
    metadata?: Record<string, any>;
  }) => {
    if (!user) return;

    activityLogger.log({
      userId: user.id,
      userName: user.user_metadata?.full_name,
      userEmail: user.email,
      ...params,
    });
  };

  const logChange = (params: {
    resource: ResourceType;
    resourceId: string;
    resourceName: string;
    changes: { field: string; oldValue: any; newValue: any }[];
    action?: string;
  }) => {
    if (!user) return;

    activityLogger.logChange({
      userId: user.id,
      userName: user.user_metadata?.full_name,
      ...params,
    });
  };

  const logCreate = (resource: ResourceType, resourceName: string, resourceId: string) => {
    logActivity({
      type: 'create',
      resource,
      resourceId,
      resourceName,
      action: `Created ${resource}`,
      description: `Created new ${resource}: ${resourceName}`,
    });
  };

  const logUpdate = (resource: ResourceType, resourceName: string, resourceId: string) => {
    logActivity({
      type: 'update',
      resource,
      resourceId,
      resourceName,
      action: `Updated ${resource}`,
      description: `Updated ${resource}: ${resourceName}`,
    });
  };

  const logDelete = (resource: ResourceType, resourceName: string, resourceId: string) => {
    logActivity({
      type: 'delete',
      resource,
      resourceId,
      resourceName,
      action: `Deleted ${resource}`,
      description: `Deleted ${resource}: ${resourceName}`,
    });
  };

  const logView = (resource: ResourceType, resourceName: string, resourceId: string) => {
    logActivity({
      type: 'view',
      resource,
      resourceId,
      resourceName,
      action: `Viewed ${resource}`,
      description: `Viewed ${resource}: ${resourceName}`,
    });
  };

  const logExport = (resource: ResourceType, format: string) => {
    logActivity({
      type: 'export',
      resource,
      action: `Exported ${resource}`,
      description: `Exported ${resource} data as ${format}`,
      metadata: { format },
    });
  };

  return {
    logActivity,
    logChange,
    logCreate,
    logUpdate,
    logDelete,
    logView,
    logExport,
  };
}
