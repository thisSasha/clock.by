//varaibie
let smoothTF = true;
let smooth = getid('smooth');

let popups = getid('popups');
let timerSound = null;
let inputConfTimer = document.getElementById('inputConfTimer')
let buttonConfTimer = get.id('buttonConfTimer');
let confTimerSoundPopup = get.id('confTimerSound');

let cross = getid('cross');
let clock = get.class('box');
let moreButton = get.id('moreButton');
let showedButtonsClock = false;

let buttonsClock = get.id('buttonsClock');
let buttonConfTime = get.id('buttonConfTime');
let confTimeSoundPopup = get.id('confTimeSound');
let inputConfTime = get.id('inputConfTime');
let timeSound = null;
let timeSoundSaved = false;
//events
smooth.onclick = function () {
    if (smoothTF == true) {
        get.class('second-arrow')[0].style.animationTimingFunction = 'steps(60)';
        smoothTF = false;
    } else {
        get.class('second-arrow')[0].style.animationTimingFunction = '';
        smoothTF = true;
    };
};
inputConfTime.oninput = checkInput;
moreButton.onclick = displayButtons;
buttonConfTimer.onclick = displayConfTimerPopup;
buttonConfTime.onclick = displayConfTimePopup;
cross.onclick = unDisplayPopups;
getid('buttonConfTimePopup').onclick = saveTimeSound;
getid('buttonConfTimerPopup').onclick = saveTimerSound;
//functions
function checkInput() {
    if (inputConfTime.value > 59) {
        inputConfTime.value = '59'
    }
    if (inputConfTime.value < 0) {
        inputConfTime.value = '0'
    }
};
function displayConfTimerPopup() {
    confTimerSoundPopup.style.display = 'block';
    confTimerSoundPopup.style.display = 'block';
    popups.style.display = 'block';
    if (timerSound != null) {
        inputConfTimer.value = timeSound
        getid('buttonConfTimerPopup').innerHTML = 'Изменить'
    }
    confTimerSoundPopup.style.display = 'block';
    cross.style.display = 'block';
};
function saveTimerSound() {
    if (inputConfTimer.value != null) {
        getid('buttonConfTimerPopup').innerHTML = 'Сохраненено';
        timerSound = inputConfTimer.value;
        setTimeout(() => {
            unDisplayPopups()
        }, 2000);
        setTimeout(() => {
            if(timerSound!=null){
                timerSound--;
                return;
            }
        }, timerSound*60*1000-2000);
    }
}



function displayButtons() {
    if (showedButtonsClock == false) {
        buttonsClock.classList.add('visible');
        showedButtonsClock = true;
    } else {
        buttonsClock.classList.remove('visible');
        showedButtonsClock = false;
    };
};

function unDisplayPopups() {

    confTimerSoundPopup.style.display = 'none';
    confTimeSoundPopup.style.display = 'none';
    popups.style.display = 'none';
    cross.style.display = 'none';
};


function displayConfTimePopup() {
    confTimeSoundPopup.style.display = 'block';
    confTimeSoundPopup.style.display = 'block';
    popups.style.display = 'block';
    if (timeSound != null) {
        inputConfTime.value = timeSound
        getid('buttonConfTimePopup').innerHTML = 'Изменить'
    }
    confTimeSoundPopup.style.display = 'block'
    cross.style.display = 'block'
};
function saveTimeSound() {
    if (inputConfTime.value != null) {
        getid('buttonConfTimePopup').innerHTML = 'Сохраненено'
        timeSound = inputConfTime.value;
        setTimeout(() => {
            unDisplayPopups()
        }, 2000);
    }
}