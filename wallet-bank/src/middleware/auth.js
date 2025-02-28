import { getUser } from "../utils/helpers.js";

export function checkUserAccess() {
    const user = getUser();

    if (!user?.email) {
        window.location.href = './signin.html';
    }
}