const nav =document.querySelector('nav');
window.addEventListener('scroll', function(){
    nav.classList.toggle('sticky', window.scrollY>0)
});

const burgerMenu = document.querySelector('.burger');
const navUl = document.querySelector('nav ul');
burgerMenu.addEventListener('click', function(){
    navUl.classList.toggle('aktif');
});

const burger = document.querySelector('.burger');
burger.addEventListener('click', function(){
    burger.classList.toggle('aktif');
});

// animate ON Scroll
function scrollAnimate(){
    const imgBox = document.querySelector('.img img');
    const imgboxPosition = imgBox.getBoundingClientRect().top;
    const windowPosition = window.innerHeight/1.1;

    if(imgboxPosition < windowPosition){
        imgBox.classList.add('scroll');
    }
}
window.addEventListener('scroll', scrollAnimate);
function scrollP(){
    const imgBox = document.querySelector('.img p');
    const imgboxPosition = imgBox.getBoundingClientRect().top;
    const windowPosition = window.innerHeight/1.1;

    if(imgboxPosition < windowPosition){
        imgBox.classList.add('scroll');
    }
}
window.addEventListener('scroll', scrollP);

function scrollMenu(){
    const menuBox = document.querySelector('.menu1');
    const menuboxPosition = menuBox.getBoundingClientRect().top;
    const windowPosition = window.innerHeight/1.4;

    if(menuboxPosition < windowPosition){
        menuBox.classList.add('scrollmenu');
    }
}
window.addEventListener('scroll', scrollMenu);

function scrollMenu2(){
    const menu2 = document.querySelector('.menu2');
    const menuboxPosition = menu2.getBoundingClientRect().top;
    const windowPosition = window.innerHeight/1.4;

    if(menuboxPosition < windowPosition){
        menu2.classList.add('scrollmenu');
    }
}
window.addEventListener('scroll', scrollMenu2);

function scrollMenu3(){
    const menu3 = document.querySelector('.menu3');
    const menuboxPosition = menu3.getBoundingClientRect().top;
    const windowPosition = window.innerHeight/1.4;

    if(menuboxPosition < windowPosition){
        menu3.classList.add('scrollmenu');
    }
}
window.addEventListener('scroll', scrollMenu3);

function scrollMenu4(){
    const menu4 = document.querySelector('.menu4');
    const menuboxPosition = menu4.getBoundingClientRect().top;
    const windowPosition = window.innerHeight/1.4;

    if(menuboxPosition < windowPosition){
        menu4.classList.add('scrollmenu');
    }
}
window.addEventListener('scroll', scrollMenu4);

function scrollMenu5(){
    const menu5 = document.querySelector('.menu5');
    const menuboxPosition = menu5.getBoundingClientRect().top;
    const windowPosition = window.innerHeight/1.4;

    if(menuboxPosition < windowPosition){
        menu5.classList.add('scrollmenu');
    }
}
window.addEventListener('scroll', scrollMenu5);

function scrollMenu6(){
    const menu6 = document.querySelector('.menu6');
    const menuboxPosition = menu6.getBoundingClientRect().top;
    const windowPosition = window.innerHeight/1.4;

    if(menuboxPosition < windowPosition){
        menu6.classList.add('scrollmenu');
    }
}
window.addEventListener('scroll', scrollMenu6);

// scroll chef
function scrollChef1(){
    const chef1 = document.querySelector('.chef1');
    const menuboxPosition = chef1.getBoundingClientRect().top;
    const windowPosition = window.innerHeight/1.4;

    if(menuboxPosition < windowPosition){
        chef1.classList.add('scrollchef');
    }
}
window.addEventListener('scroll', scrollChef1);
function scrollChef2(){
    const chef2 = document.querySelector('.chef2');
    const menuboxPosition = chef2.getBoundingClientRect().top;
    const windowPosition = window.innerHeight/1.4;

    if(menuboxPosition < windowPosition){
        chef2.classList.add('scrollchef');
    }
}
window.addEventListener('scroll', scrollChef2);
function scrollChef3(){
    const chef3 = document.querySelector('.chef3');
    const menuboxPosition = chef3.getBoundingClientRect().top;
    const windowPosition = window.innerHeight/1.4;

    if(menuboxPosition < windowPosition){
        chef3.classList.add('scrollchef');
    }
}
window.addEventListener('scroll', scrollChef3);

// animate scroll testimonials
function scrollTesti(){
    const testiBox = document.querySelector('.container-review');
    const menuboxPosition = testiBox.getBoundingClientRect().top;
    const windowPosition = window.innerHeight;

    if(menuboxPosition < windowPosition){
        testiBox.classList.add('scrolltesti');
    }
}
window.addEventListener('scroll', scrollTesti);


