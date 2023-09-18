// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================
let form = document.getElementById("info_form");

let body = document.body;

form.addEventListener("submit",function (event){
    event.preventDefault();
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let age = document.getElementById("age");

    let box = document.createElement("div");
    box.classList.add("user");
    let nameElement = document.createElement("h1");
    let surnameElement = document.createElement("h2");
    let ageElement = document.createElement("p");
    nameElement.innerHTML = "Ім'я:"+name.value;
    surnameElement.innerHTML = "Прізвище:"+surname.value;
    ageElement.innerHTML = "Вік:"+age.value;
    box.append(nameElement,surnameElement,ageElement);
    body.appendChild(box);
})

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================
if(!localStorage.getItem("counter")){
    localStorage.setItem("counter",10+"");
}
window.addEventListener("load",function (event){
 let num = document.getElementById("number");
 let next = parseInt(localStorage.getItem("counter")) + 1 + "";
 num.innerHTML = next;
 localStorage.setItem("counter",next);
 // Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================

 let curDate = new Date();
 let date = curDate.getFullYear()+'-'+(curDate.getMonth()+1)+'-'+curDate.getDate();
 let time = curDate.getHours() + ":" + curDate.getMinutes() + ":" + curDate.getSeconds();
 let sessions = localStorage.getItem("sessions");
 if(! sessions){
     sessions = [{time:time,date:date}];
     localStorage.setItem("sessions",JSON.stringify(sessions));
 }else{
     let obj = JSON.parse(sessions);
     obj.push({time:time,date:date});
     localStorage.setItem("sessions",JSON.stringify(obj));
 }
});



//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let bigArray = [];
for(let i=0;i<100;i++){
    bigArray.push({name:"item"+(i+1),id:15*i+i^3});
}
let curPage = 1;
function loadItems(page){
    let items = document.getElementById("items");
    items.innerHTML = "";
    for(let i=10*(page-1);i<10*page;i++){
        let box = document.createElement("div");
        let itemName = document.createElement("h1");
        let itemID = document.createElement("p");
        itemName.innerHTML = "Назва:"+bigArray[i].name;
        itemID.innerHTML = "ID:"+bigArray[i].id;
        box.classList.add("item");
        box.append(itemName,itemID);
        items.appendChild(box);
    }
}
loadItems(curPage);

let prev = document.getElementById("prev");
let next = document.getElementById("next");
prev.addEventListener("click",function (event){
    event.preventDefault();
    if(curPage > 1){
        curPage--;
        loadItems(curPage);
    }
});
next.addEventListener("click",function (event){
    event.preventDefault();
    if(curPage < 10){
        curPage++;
        loadItems(curPage);
    }
});



// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let removeText = document.getElementById("rmTxt");
removeText.addEventListener("click",function (event){
    event.preventDefault();
    let text = document.getElementById("text");
    if(text.style.display === "none"){
        text.style.display = "block";
    }
    else {
        text.style.display = "none";
    }
})

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let warn = document.getElementById("warning");
warn.style.display = "none";
warn.style.color = "red";
let ageBtn = document.getElementById("checkAge");
ageBtn.addEventListener("click", function (event){
    event.preventDefault();
    let age = document.getElementById("age1");
    if(age.value<18){
        warn.style.display = "block";
    }else{
        warn.style.display = "none";
    }
})

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)



// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
