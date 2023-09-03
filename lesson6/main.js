
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log(' dirty string   '.replaceAll(" ",""));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str = 'Ревуть воли як ясла повні';
function stringToarray(str){
    return str.split(" ");
}
let arr = stringToarray(str); //['Ревуть', 'воли', 'як', 'ясла', 'повні']
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0];
let words = numbers.map((x)=>{return x.toString()});
console.log(words);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
function sortNums(numbers,direction){

    let result = numbers.copyWithin();
    switch (direction){
        case "ascending":
            result.sort((a,b)=>{if(a>b){return 1}else{return -1}});
            break;

        case "descending":
            result.sort((a,b)=>{if(b>a){return 1}else{return -1}});
            break;

        default:
            console.log("Error");
    }
    return result;
}
let nums = [11,21,3];
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]


// ==========================
// - є масив
 let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let newArray = coursesAndDurationArray.sort((a,b)=>{
    if(a.monthDuration < b.monthDuration){
        return -1;
    }
    else{
        return 1;
    }
}).filter((a)=>{return a.monthDuration >5;}).map(
    (a)=>{
        return {id:a.title.charCodeAt(4),title:a.title,monthDuration:a.monthDuration};
    }
)
console.log(newArray);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let deck = []
for(let cardSuit of ['spade', 'diamond','heart', 'clubs']){
    let color;
    if(cardSuit === 'diamond' || cardSuit === 'heart'){
        color = 'red';
    }else{
        color = 'black';
    }
    for(let value of ['6','7','8','9','10','ace','jack','queen','king','joker']){
        deck.push({cardSuit:cardSuit,value:value,color:color});
    }
}

console.log(deck.filter((a)=>{return a.cardSuit === 'spade' && a.value === 'ace'}));

console.log(deck.filter((a)=>{return a.value === '6'}));

console.log(deck.filter((a)=>{return a.color === 'red'}));

console.log(deck.filter((a)=>{return a.cardSuit === 'clubs'}));

console.log(deck.filter((a)=>{return a.cardSuit === 'diamond' && (['6','7','8'].indexOf(a.value) === -1)}));

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let deckObj = {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
}

deckObj = deck.reduce((deckObj,a)=>{
    switch(a.cardSuit){
        case 'spade':
            deckObj.spades.push(a);
            break;
        case 'diamond':
            deckObj.diamonds.push(a);
            break;
        case 'heart':
            deckObj.hearts.push(a);
            break;
        case 'clubs':
            deckObj.clubs.push(a);
            break;
        default:
            console.log("Error");
    }
    return deckObj;
},deckObj);

console.log(deckObj);
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.filter((a)=>{return a.modules.indexOf("sass") !== -1}));

console.log(coursesArray.filter((a)=>{return a.modules.indexOf("docker") !== -1}));