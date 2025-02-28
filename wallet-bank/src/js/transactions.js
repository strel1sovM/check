import { drawDeafultLayout } from "../layouts/default.js";
import { checkUserAccess } from "../middleware/auth.js";
import { last_transactions } from "../utils/db.js";
import { renderLastTransactions, updateUserInfo } from "../utils/draw.js";
import { getUser } from "../utils/helpers.js";

const user = getUser();

drawDeafultLayout();
updateUserInfo(user);
checkUserAccess();
renderLastTransactions(last_transactions);