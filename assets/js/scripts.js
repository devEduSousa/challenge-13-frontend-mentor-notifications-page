const header = document.querySelector('header');
const notificationsNumbersDiv = document.querySelector('.notifications-numbers');
const notificationsDiv = document.querySelectorAll('.notification');
const i = document.querySelectorAll('i');
let counter = 0;

notificationsDiv.forEach((notification, index) => {
    if(notification.classList.contains('new-message')) counter++;
    notificationsNumbersDiv.querySelector('span').innerHTML = counter;
    notification.addEventListener('click', () => {
        if(notification.classList.contains('new-message')){
            notification.classList.remove('new-message');
            notificationsNumbersDiv.querySelector('span').innerHTML = --counter;
            if(counter === 0) notificationsNumbersDiv.classList.toggle('invisible');
        };
        if(!i[index].classList.contains('.hide')) i[index].classList.add('hide');
    });
});

header.addEventListener('click', () => {
    notificationsDiv.forEach((notification,index) => {
        if(notification.classList.contains('new-message')) {
            notification.classList.remove('new-message');
            notificationsNumbersDiv.querySelector('span').innerHTML = --counter;
            notificationsNumbersDiv.classList.toggle('invisible');
        };
        if(!i[index].classList.contains('.hide')) i[index].classList.add('hide');
    });
});

