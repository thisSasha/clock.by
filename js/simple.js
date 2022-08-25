let get = {
    id: function(id){
        return(document.getElementById(id))
    },
    class: function(clas){
        return(document.getElementsByClassName(clas))
    }
}
let getid = function(id){
    return(document.getElementById(id));
    }
let getclass = function(clas){
    return(document.getElementById(clas));
};
let print = function(i){
    console.log(i)
}
function commands(){
    let comand = [
        'sim.help()-вывести в консоль помощь\n \
        sim.print(i)-вывести в консоль i \n \
        sim.get.id(i) вывести в переменную обьект с id i, \n \
        sim.get.class(i) вывести в переменную обьект с class i \n \ ',
    ]
    return comand[0]
}
let help = function(){
    let userLang = navigator.language || navigator.userLanguage; 
    if(userLang='ru'){
        print(' \
        Привет, я тебе помогу разобраться в модуле simple. \n \
        Он упрощает работу.\n \
        Для того чтобы его импортировать желательно\n \
        прописать «import * as sim "./simple"».\n \
        это импорт всего в переменную sim из файла "этаПапка/simple.js"\n \
        \n \
        Команды: \n \
        \n \
        '+commands())
    }
}
help()