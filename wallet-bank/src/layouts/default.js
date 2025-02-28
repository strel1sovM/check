function LogoutIcon() {
    return `
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.75 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H6.75"
                stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 12.75L15.75 9L12 5.25" stroke="#FF0000" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            <path d="M15.75 9H6.75" stroke="#FF0000" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    `
}

const links = [
    {
        textContent: 'Главная',
        href: 'mainPage.html'
    },
    {
        textContent: 'Мои кошельки',
        href: 'wallets.html'
    },
    {
        textContent: 'Мои транзакции',
        href: 'transactions.html'
    }
];

export function drawDeafultLayout() {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const userEmailDiv = document.createElement("div");
    const emailSpan = document.createElement("span");
    const svgSpan = document.createElement('div');

    for (let link of links) {
        const linkTag = document.createElement("a");

        linkTag.href = `./${link.href}`;
        linkTag.textContent = link.textContent;

        if (window.location.href.includes(link.href)) {
            linkTag.classList.add('active');
        }

        nav.append(linkTag);
    }
    svgSpan.innerHTML = LogoutIcon();

    userEmailDiv.className = "user_email";
    emailSpan.className = "email";

    header.append(nav);
    userEmailDiv.append(emailSpan, svgSpan);
    header.append(userEmailDiv);
    document.body.prepend(header);


    svgSpan.onclick = () => {
        localStorage.removeItem('user');
        window.location.href = './signin.html';
    }
}
