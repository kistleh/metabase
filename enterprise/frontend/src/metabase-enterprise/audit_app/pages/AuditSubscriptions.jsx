import React from "react";
import { t } from "ttag";

import AuditContent from "../components/AuditContent";
import AuditTableWithSearch from "../containers/AuditTableWithSearch";

import * as SubscriptionAlertsCards from "../lib/cards/subscriptions_alerts";

const AuditSubscriptions = props => (
  <AuditContent {...props} tabs={AuditSubscriptions.tabs} />
);

const AuditSubscriptionsTab = () => (
  <AuditTableWithSearch
    placeholder={t`Filter by dashboard name`}
    table={SubscriptionAlertsCards.subscriptions()}
  />
);

const AuditAlertsTab = () => (
  <AuditTableWithSearch
    placeholder={t`Filter by question name`}
    table={SubscriptionAlertsCards.alerts()}
  />
);

AuditSubscriptions.tabs = [
  {
    path: "subscriptions",
    title: "Subscriptions",
    component: AuditSubscriptionsTab,
  },
  {
    path: "alerts",
    title: "Alerts",
    component: AuditAlertsTab,
  },
];

export default AuditSubscriptions;
