const signin = document.forms.signin;
const users = JSON.parse(localStorage.getItem('users')) ?? [];

signin.onsubmit = (e) => {
    e.preventDefault();

    const fm = new FormData(signin);
    const email = fm.get('email');
    const password = fm.get('password');

    const user = users.find((item) => item.email === email && item.password === password);

    if (!user) {
        alert('Пользователь не найден!');
        return;
    }

    localStorage.setItem('user', JSON.stringify(user));

    signin.reset();

    window.location.href = 'mainPage.html';
};


