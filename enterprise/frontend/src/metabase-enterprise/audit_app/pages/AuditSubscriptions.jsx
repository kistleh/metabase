import React from "react";
import { t } from "ttag";
import AuditAlertsTab from "../components/AuditAlertsTab";

import AuditContent from "../components/AuditContent";
import AuditSubscriptionsTab from "../components/AuditSubscriptionsTab";

const AuditSubscriptions = props => (
  <AuditContent {...props} tabs={AuditSubscriptions.tabs} />
);

AuditSubscriptions.tabs = [
  {
    path: "subscriptions",
    title: t`Subscriptions`,
    component: AuditSubscriptionsTab,
  },
  {
    path: "alerts",
    title: t`Alerts`,
    component: AuditAlertsTab,
  },
];

export default AuditSubscriptions;
