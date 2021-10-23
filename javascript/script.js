const clock = {
    soniya: document.querySelector('.s'),
    daqiqa: document.querySelector('.m'),
    soat: document.querySelector('.h'),
    hours: document.querySelector('.hours'),
    minutes: document.querySelector('.minutes'),
}

const date = new Date()
let soniya = date.getSeconds() * (360 / 60)
let daqiqa = date.getMinutes() * (360 / 60)
let soat = date.getHours() * (360 / 12)

let sDeg = (360 / 60)
let mDeg = (60 / 360)
let hDeg = 12 / 360

clock.soniya.style = `transform: rotate(${soniya}deg); transition: 1s linear`
clock.daqiqa.style = `transform: rotate(${daqiqa}deg); transition: 1s linear`
clock.soat.style = `transform: rotate(${soat}deg); transition: 1s linear`

function start() {
    const date = new Date()
    soniya += sDeg
    daqiqa += mDeg
    soat += hDeg

    clock.soniya.style = `transform: rotate(${soniya}deg); transition: 1s linear`
    clock.daqiqa.style = `transform: rotate(${daqiqa}deg); transition: 1s linear`
    clock.soat.style = `transform: rotate(${soat}deg); transition: 1s linear`

    clock.hours.innerHTML = date.getHours() > 9 ? date.getHours() : '0' + date.getHours()
    clock.minutes.innerHTML = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()

    setTimeout(() => {
        start()
    }, 1000);
}

start()

const tabsItem = document.querySelectorAll('.tabsItem')
const tabsContentItem = document.querySelectorAll('.tabsContentItem')

tabsItem.forEach(function (el, i) {
    el.addEventListener('click', function (e) {
        tabsItem.forEach(function (el, i) {
            el.classList.remove('active')
            tabsContentItem[i].classList.remove('active')
        })
        el.classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
})


const hour = document.querySelector('.stopwatch__hours')
const minute = document.querySelector('.stopwatch__minutes')
const second = document.querySelector('.stopwatch__seconds')
const btn = document.querySelector('.stopwatch__btn')
const span = document.querySelector('.tabsLink__span')


let interval;

btn.addEventListener('click', () => {
    if (btn.innerHTML === 'start') {
        btn.innerHTML = 'stop'
        span.classList.add('active')

        stopwatch()
    } else if (btn.innerHTML === 'stop') {
        btn.innerHTML = 'clear'
        span.classList.remove('active')
        span.classList.add('active_clear')
        span.classList.add
        clearTimeout(interval)
    } else if (btn.innerHTML === 'clear') {
        btn.innerHTML = 'start';
        second.innerHTML = 0;
        minute.innerHTML = 0;
        hour.innerHTML = 0;
        span.classList.remove('active_clear')
    }
})

function stopwatch() {
    if (second.innerHTML >= 59) {
        second.innerHTML = 0
        minute.innerHTML++
    }
    if (minute.innerHTML >= 59) {
        minute.innerHTML = 0
        hour.innerHTML++
    }

    second.innerHTML++;

    interval = setTimeout(() => {
        stopwatch()
    }, 1000);
}