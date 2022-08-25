//varaibie
let cross = getid('cross');
let clock = get.class('box');
let buttonsClock = get.id('buttonsClock');
let buttonConfTime = get.id('buttonConfTime');
let button2 = get.class('button2');
let confTimeSoundPopup = get.id('confTimeSound');
let inputConfTime = get.id('inputConfTime');
let moreButton = get.id('moreButton');
let showedButtonsClock = false;
let timeSound = false
let timeSoundSaved = false
//events
moreButton.onclick = displayButtons;
getid('buttonConfTime').onclick = displayConfTimePopup;
cross.onclick = unDisplayConfTimePopup
getid('buttonConfTimePopup').onclick = saveTimeSound
//functions
function displayButtons() {
    if (showedButtonsClock == false) {
        buttonsClock.classList.add('visible');
        showedButtonsClock = true;
    } else {
        buttonsClock.classList.remove('visible');
        showedButtonsClock = false;
    };
};
function displayConfTimePopup() {
    if(timeSound!=false){
        inputConfTime.value = timeSound
        getid('buttonConfTimePopup').innerHTML = 'Изменить'
    }
    confTimeSoundPopup.style.display = 'block'
    cross.style.display = 'block'
};
function unDisplayConfTimePopup() {
    confTimeSoundPopup.style.display = 'none'
    cross.style.display = 'none'
};
function saveTimeSound(){
    getid('buttonConfTimePopup').innerHTML = 'Сохраненено'
    timeSound = inputConfTime.value
    setTimeout(() => {
        unDisplayConfTimePopup()
    }, 2000);
}