let randomStuff = ["a","b",true,432,"potato",32.2,"Hello",["array"],34,"end"];
console.log(randomStuff);
for(let i=0;i<randomStuff.length;i++){
    console.log(randomStuff[i]);
}

let book1 = {
    title:"The First",
    pageCount:236,
    genre:"Detective"
};
let book2 = {
    title:"The Second",
    pageCount:340,
    genre:"Detective"
};
let book3 = {
    title:"The Pond",
    pageCount:220,
    genre:"Novel"
};

let authorBook1 = {
    title:"Javascript for Dummies",
    pageCount:240,
    genre:"Guide book",
    authors: [{name:"John",age:37},{name:"Hannah",age:35}]
};
let authorBook2 = {
    title:"Book of Everything",
    pageCount:1587,
    genre:"Encyclopedia",
    authors: [{name:"Isaac",age:57},{name:"Thomas",age:48},{name:"Marie",age:37}]
};
let authorBook3 = {
    title:"Romeo and Juliet",
    pageCount:480,
    genre:"Novel",
    authors: [{name:"William",age:60}]
};

let users = [
    {name:"Adam",username:"Adam",password:"VeryComplex34@"},
    {name:"Pete",username:"PetePeterson",password:"n43vhHly4&*32t4"},
    {name:"Sarah",username:"sara234",password:"17091987"},
    {name:"John",username:"the J",password:"InputPasswordHere"},
    {name:"Rose",username:"Rose",password:"!NewPass98"},
    {name:"Lily",username:"Lily",password:"476389726495"},
    {name:"Bob",username:"the Bobster",password:"TheCarPark3438"},
    {name:"Alice",username:"Alice from Wonderland",password:"M4dHatt3r%$#^"},
    {name:"Patrick",username:"Star",password:"MyNameIsPatrick!!!"},
    {name:"Paul",username:"Paul",password:"Paul"}
];
for(let i =0; i<10;i++){
    console.log(users[i].password);
}

function checkX(x){
    if(x === 0){
        console.log("Вірно");
    }else{
        console.log("Невірно");
    }
}

checkX(1);
checkX(0);
checkX(-3);

function checkTime(time){
    if(time <0 || time >59){
        console.log("Неправильне значення часу");
        return;
    }
    if(time <15){
        console.log(1);
        return;
    }
    if(time <30){
        console.log(2);
        return;
    }
    if(time <45){
        console.log(3);
    }else{
        console.log(4);
    }
}
checkTime(-3);
checkTime(62);
checkTime(4);
checkTime(24);
checkTime(36);
checkTime(50);

function checkDate(day){
    if(day<1 || day>31){
        console.log("Неправильне значення дня");
        return;
    }
    if(day < 11){
        console.log(1);
        return;
    }
    if(day < 21){
        console.log(2);
    }else{
        console.log(3);
    }
}

checkDate(1);
checkDate(16);
checkDate(23);

let weekday = prompt();
switch (weekday){
    case "Понеділок":
        console.log("купити продукти");
        break;
    case "Вівторок":
        console.log("помити автомобіль");
        break;
    case "Середа":
        console.log("відвідати дідуся");
        break;
    case "Четвер":
        console.log("сходити в парк");
        break;
    case "П'ятниця":
        console.log("купити продукти");
        break;
    case "Субота":
        console.log("помити дім");
        break;
    case "Неділя":
        console.log("зустрітися з друзями");
        break;
}

function checkGreater(a,b){
    if(typeof a !== "number" || typeof  b !== "number"){
        console.log("Введені значення не є числами");
        return;
    }
    if(a === b){
        console.log("Числа рівні");
        return;
    }
    if (a>b) {
        console.log("Число a="+a+" є більшим за b="+b);
    }else{
        console.log("Число b="+b+" є більшим за a="+a);
    }
}
checkGreater(2,4);
checkGreater(43,43);
checkGreater(534,345);
checkGreater("dsf",23);

let x = prompt() || "Nope";
console.log(x);

for(let i =0;i<coursesAndDurationArray.length;i++){
    if(coursesAndDurationArray[i].monthDuration >5){
        console.log("Супер");
    }
}