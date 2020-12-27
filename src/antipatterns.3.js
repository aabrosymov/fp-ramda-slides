import { isNil, clone, isTrue, contains } from 'ramda';

const getDashboardTitles =  (application) => {
  if (isNil(application)) {
    return application;
  }
  const dashboardStatuses = clone(dashboardPreStatuses);
  const dashboardSubtitles = clone(dashboardPreSubtitles);
  const dashboardTitles = {};

  if (nextStatus === statuses.NEW) {
    if (isNil(application.studentConfirmed)) {
      dashboardTitles.status = dashboardStatuses.INCOMPLETE;
      dashboardTitles.subtitle = dashboardSubtitles.INFORMATION_SAVED;
    } else {
      dashboardTitles.status = dashboardStatuses.IN_PROGRESS;
      dashboardTitles.subtitle = dashboardSubtitles.REVIEWING;
      if (isTrue(isPendingIRS)) {
        dashboardTitles.showCallToAction = false;
        return dashboardTitles;
      }
      dashboardTitles.actionName = 'handleGoToApplicationSummary';
      return dashboardTitles;
    }
  }

  if (contains(nextStatus, [statuses.DATA_COMPLETE, statuses.HELD_BY_SUPPORT])) {
    dashboardTitles.status = dashboardStatuses.IN_PROGRESS;
    dashboardTitles.subtitle = dashboardSubtitles.REVIEWING;
    return dashboardTitles;
  }

  return dashboardTitles;
};
