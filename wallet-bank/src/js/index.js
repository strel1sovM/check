import { drawDeafultLayout } from "../layouts/default.js";
import { checkUserAccess } from "../middleware/auth.js";
import { last_transactions, wallets } from "../utils/db.js";
import { renderLastTransactions, renderWallets, updateUserInfo } from "../utils/draw.js";
import { getUser } from "../utils/helpers.js";

const user = getUser();

drawDeafultLayout();
checkUserAccess();
updateUserInfo(user);
renderWallets(wallets.splice(0, 4));
renderLastTransactions(last_transactions.splice(0, 7));