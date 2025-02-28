import { drawDeafultLayout } from "../layouts/default.js";
import { checkUserAccess } from "../middleware/auth.js";
import { wallets } from "../utils/db.js";
import { renderWallets, updateUserInfo } from "../utils/draw.js";
import { getUser } from "../utils/helpers.js";

const user = getUser();

drawDeafultLayout();
updateUserInfo(user);
checkUserAccess();
renderWallets(wallets);