//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area(a,b){
    return a*b;
}

console.log(area(5,10));

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function circleArea(r){
    return 3.14*r^2;
}
console.log(circleArea(12));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderArea(h,r){
    return 2*3.14*h*r+2*circleArea(r);
}
console.log(cylinderArea(4,2));

//- створити функцію яка приймає масив та виводить кожен його елемент
function printAll(arr){
    if(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
}
printAll(["a","C",2343,"DC",true]);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(text){
    document.write(`<p>${text}</p>`);
}
createParagraph("Big Circle");

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createList(text){
    document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
    </ul>`);
}
createList("List Item");

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createAdjustableList(text,count){
    if(!count || count<1){
        console.log("Invalid count");
        return;
    }
    document.write("<ul>");
    for(let i=0;i<count;i++){
        document.write(`<li>${text}</li>`);
    }
    document.write("</ul>");
}
createAdjustableList("AdjustableListItem",6);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createArray(){
    let lst=[];
    for(let i=0; i< arguments.length;i++){
        lst[i] = arguments[i];
    }
    return lst;
}
console.log(createArray("nho",24321,4.532,true,"no",false));

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function addObjects(objects){
    for(let obj of objects){
        document.write(`<div>
        <p>Name:${obj.name}</p>
        <p>Id:${obj.id}</p>
        <p>Age:${obj.age}</p>
    </div>`)
    }
}
let obj=[{id:2332,name:"item1",age:2},{id:3902,name:"item2",age:5},{id:7234,name:"item3",age:1}];
addObjects(obj);

//- створити функцію яка повертає найменьше число з масиву
function getMin(numbers){
    let min = NaN;
    for(let num of numbers){
        num = parseInt(num);
        if(isNaN(min) || min>num){
            min = num;
        }
    }
    return min;
}
console.log(getMin([232,21,1,90,0]));

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function arraySum(numbers){
    let result=0;
    for(let num of numbers){
        result += parseInt(num);
    }
    return result;
}
console.log(arraySum([23,77,50,200]));

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2){
    if(!arr || typeof index1 != "number" || typeof index2 != "number"){
        console.log("Invalid function input");
        return;
    }
    let temp = arr[index1];

    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
let arr1 = [32,124,34,11]
console.log(swap(arr1,0,3));

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValue, exchangeCurrency){
    let selectedCurrency = "Err";
    let rate = 0;
    for(let curr of currencyValue){
        if (curr.currency === exchangeCurrency){
            selectedCurrency = curr.currency;
            rate = curr.value;
        }
    }
    if(selectedCurrency === "Err"){
        console.log("Error, selected currency not found in list");
        return;
    }
    return sumUAH/rate;
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));
