import { gradients } from "./db.js";

export function updateUserInfo(user) {
    const username = document.querySelector(".text h1");
    const user_email = document.querySelectorAll('.email')
    if (user.name && user.surname && user.email) {
        user_email.forEach((item) => {
            item.textContent = user.email;
        });
        username.textContent = `Добро пожаловать, ${user.name} ${user.surname}`;
    }
}

export function renderWallets(arr) {
    const wallets_container = document.querySelector('.wallets');
    wallets_container.innerHTML = '';

    arr.forEach((wallet, index) => {
        const wallet_div = document.createElement('div');
        const wallet_type = document.createElement('div');
        const wallet_currency = document.createElement('div');

        wallet_div.classList.add('wallet');
        wallet_div.style.background = getRandomGradient();

        wallet_type.textContent = wallet.type;
        wallet_currency.textContent = wallet.currency;

        wallet_div.append(wallet_type, wallet_currency);
        wallets_container.append(wallet_div);
    });
}

export function renderLastTransactions(arr) {
    const transactions_container = document.querySelector('tbody');
    transactions_container.innerHTML = '';

    arr.forEach((transaction) => {
        const tr = document.createElement('tr');
        const transaction_id = document.createElement('td');
        const transaction_type = document.createElement('td');
        const transaction_category = document.createElement('td');
        const transaction_amount = document.createElement('td');
        const transaction_when = document.createElement('td');

        transaction_id.textContent = transaction.id;
        transaction_type.textContent = transaction.type;
        transaction_category.textContent = transaction.category;
        transaction_amount.textContent = transaction.amount;
        transaction_when.textContent = transaction.when;

        tr.append(transaction_id, transaction_type, transaction_category, transaction_amount, transaction_when);
        transactions_container.append(tr);
    });
}

export function getRandomGradient() {
    return gradients[Math.floor(Math.random() * gradients.length)];
}
