// №1
// a=5, b=1, c=5, d=0


// №2
// e=5, f=4, x=6, y=5



// №3a

if (confirm("Привет! Узнаем чемпиона Англии по футболу в период с 2011г. по 2022г.?")) {
    alert('Отлично! Вперед к победителям!');
} else {
    alert('Ну и ладно');
}
let year = prompt('Введите интересующий Вас год.', '');
if (year == 2011 || year == 2013) {
    alert('Манчестер Юнайтед');
} else if (year == 2012 || year == 2014 || year == 2018 || year == 2019 || year == 2021) {
    alert('Манчестер Сити');
} else if (year == 2015 || year == 2017) {
    alert('Челси');
} else if (year == 2020) {
    alert('Ливерпуль');
} else if (year == 2016) {
    alert('Лестер Сити');
} else if (year < 2011) {
    alert('Статистика еще не велась.');
} else if (year == 2022) {
    alert('Сезон еще идет');
} else {
    alert('Все лучшее впереди');
}




// №3b

// if (confirm("Привет! Узнаем чемпиона Англии по футболу в период с 2011г. по 2022г.?")) {
//     alert('Отлично! Вперед к победителям!');
// } else {
//     alert('Ну и ладно');
// }

// let year = prompt('Введите интересующий Вас год.', '');

// let winner = (year == 2011 || year == 2013) ? 'Манчестер Юнайтед' : (year == 2012 || year == 2014 || year == 2018 || year == 2019 || year == 2021) ? 'Манчестер Сити' : (year == 2015 || year == 2017) ? 'Челси' : (year == 2020) ? 'Ливерпуль' : (year == 2016) ? 'Лестер Сити' : (year < 2011) ? 'Статистика еще не велась.' : (year == 2022) ? 'Сезон еще идет' : 'Все лучшее впереди';
// alert(winner);
// let pass = '';


// №4

// let userName = prompt('Кто Вы?', '');
// if (userName === 'Админ') {
//     let pass = prompt('Ввведите пароль для подтверждения:', '');
//     if (pass === 'Я главный') {
//         alert('Здравствуйте!');
//     } else if (pass === '' || pass === null) {
//         alert('Действие отменено');
//     } else {
//         alert('Неверный пароль');
//     }
// } else if (userName === '' || userName === null) {
//     alert('Отменено');
// } else {
//     alert('Я Вас не знаю');
// }



// №5

// let outer = '12. Цикл прерван.'
// let i;
// for (let i = 7; i <= 17; i = i + 1) {
//     if (i == 12) break;
//     if (i % 2 == 0) continue;
//     console.log(i);
// }
// console.log('12. Цикл прерван');


// №6

// for (let j = 0; j < 5; j++) {
//     console.log(j);
// }

// let j = 0;
// while (j < 5) {
//     console.log(j);
//     j++;
// }