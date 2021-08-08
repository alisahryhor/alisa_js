//1 скрин

let langName = prompt('Каково "официальное" название Javascript?');

    if (langName == 'ECMAScript') {
        alert('Верно!');}
    else {
        alert('Не знаете? "EcmaScript"!');
    }

//2 скрин

let test = prompt();

    if (test > 0) {
        alert(1);
    }
    else if (test < 0) {
            alert(-1);
        }
    else  {
        alert(0);
    }

//3 скрин

let login = prompt('Кто пришел?');

if (login == 'Админ') {
    let password = prompt('Пароль?');
    if (password == 'Черный Властелин') {
        alert('Добро пожаловать!');
    } else if (password == null) {
        alert('Вход отменен');
    } else {
        alert('Пароль неверен');
    }
}
else if (login == null) {
    alert('Вход отменен');
}
else {
    alert('Я вас не знаю');
}
