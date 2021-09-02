import { t } from "ttag";
import { hasPremiumFeature } from "metabase-enterprise/settings";
import { PLUGIN_ADMIN_PERMISSIONS_DATABASE_RESTRICTIVE_OPTIONS } from "metabase/plugins";

const BLOCK_PERMISSION_OPTION = {
  label: t`Block`,
  value: "block",
  icon: "close",
  iconColor: "danger",
};

// TODO: change to "block_permission"? do we need BE changes for that?
if (hasPremiumFeature("sandboxes")) {
  PLUGIN_ADMIN_PERMISSIONS_DATABASE_RESTRICTIVE_OPTIONS.push(
    BLOCK_PERMISSION_OPTION,
  );
}
