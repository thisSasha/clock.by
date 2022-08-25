let startTime = {
    'second': new Date().getSeconds(),
    'minut': new Date().getMinutes(),
    'hour': new Date().getHours(),
};
let audio = getid('audio')
let time = document.getElementById('time');
let body = document.querySelector('body');
body.style.setProperty('--secondStartPosition', (startTime.second * 6) + 'deg');
body.style.setProperty('--secondEndPosition', (startTime.second * 6 + 360) + 'deg');
body.style.setProperty('--minutStartPosition', (startTime.minut * 6 + startTime.second * 0.1) + 'deg');
body.style.setProperty('--minutEndPosition', (startTime.minut * 6 + startTime.second * 0.1 + 360) + 'deg');
body.style.setProperty('--hourStartPosition', (startTime.hour * 30 + startTime.minut * 0.5 + startTime.second * 0.0166666666666667 ) + 'deg');
body.style.setProperty('--hourEndPosition',    (startTime.hour * 30 + startTime.minut * 0.5 + startTime.second * 0.0166666666666667 + 360) + 'deg');
// 1s,1m= 6deg
// // 1s m= 0.1deg
// let audio = document.querySelector('audio')
// audio.play()
setInterval(() => {
    let h = new Date().getHours().toString();
    let m = new Date().getMinutes().toString();
    let s = new Date().getSeconds().toString();
    if(h.length<2){
        h= "0" + h;
    };
    if(m.length<2){
        m= "0" + m;
    };
    if(s.length<2){
        s= "0" + s;
    };
    if(s%2==0){
        time.innerHTML = `${h}:${m}:${s}`;
    } else{
        time.innerHTML = `${h} ${m} ${s}`;
    };
    if(timeSound!=false && timeSound==m && s==0){
        audio.play()
        print(m)
}
}, 1000);
console.log(startTime.second)