// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(name,surname,email,phone){
    this.id = Math.floor(Math.random()*1000);
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}



// створити пустий масив, наповнити його 10 об'єктами new User(....)
users = [];
users.push(new User("Michael","Potapenko","michael@email.com","3683916323"));
users.push(new User("Olga","Biletska","olga23@email.com","368354343"));
users.push(new User("Anastasia","Morozenko","morozanna@email.com","6395632075"));
users.push(new User("Oleh","Pavliv","oleg@email.com","8629541259"));
users.push(new User("Oleksandr","Strugal","oleksandr@email.com","4730956743"));
users.push(new User("Vladislav","Hrytsenko","vlad@email.com","6759304635"));
users.push(new User("Oksana","Tkachenko","oksana234@email.com","5638923692"));
users.push(new User("Dmytro","Kovalenko","dymakoval@email.com","4780326823"));
users.push(new User("Roman","Gavriluk","roman@email.com","1034739752"));
users.push(new User("Sophie","Potapenko","sophie@email.com","5783026473"));

console.log(users);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(users.filter((a)=>{return a.id%2 === 0}));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(users.sort((a,b)=>{return a.id - b.id}));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client{
    constructor(name,surname,email,phone,order) {
        this.id = Math.floor(Math.random()*1000);
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
clients = [];
clients.push(new Client("John","Smith","john@email.com","7403751243",["book","pen","spray paint"]));
clients.push(new Client("Olga","Biletska","olga23@email.com","368354343",["apples","grapes"]));
clients.push(new Client("Anastasia","Morozenko","morozanna@email.com","6395632075",["car"]));
clients.push(new Client("Oleh","Pavliv","oleg@email.com","8629541259",["milk","cheese","bread","sausage","candy"]));
clients.push(new Client("Oleksandr","Strugal","oleksandr@email.com","4730956743",["water","cola","chips"]));
clients.push(new Client("Vladislav","Hrytsenko","vlad@email.com","6759304635",["bananas","cereal","bread","pen","sauce"]));
clients.push(new Client("Oksana","Tkachenko","oksana234@email.com","5638923692",["calculator","copybooks"]));
clients.push(new Client("Dmytro","Kovalenko","dymakoval@email.com","4780326823",["screws","nails","bolts"]));
clients.push(new Client("Roman","Gavriluk","roman@email.com","1034739752",["watermelon"]));
clients.push(new Client("Sophie","Potapenko","sophie@email.com","5783026473",["beer","donuts","cream"]));
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a,b)=>{return a.order.length - b.order.length}));


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function car(model, manufacturer, year, topSpeed, engineVolume){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.topSpeed = topSpeed;
    this.engineVolume = engineVolume;

    this.drive =  () =>{
        console.log(`їдемо зі швидкістю ${this.topSpeed} кілометрів на годину`);
    }
    this.info = ()=>{
        console.log(`Модель - ${this.model}`);
        console.log(`Виробник - ${this.manufacturer}`);
        console.log(`Рік випуску - ${this.year}`);
        console.log(`Максимальна швидкість - ${this.topSpeed}`);
        console.log(`Об'єм двигуна - ${this.engineVolume}`);
    }
    this.increaseMaxSpeed = (newSpeed)=>{
        this.topSpeed = newSpeed;
    }
    this.changeYear = (newValue)=>{
        this.year = newValue;
    }
    this.addDriver = (driver)=>{
        this.driver = driver;
    }
}

let golf = new car("Golf","Volkswagen",2009,180,1.4);

console.log(golf);
golf.drive();
golf.info();
golf.increaseMaxSpeed(190);
golf.changeYear(2012);
golf.addDriver({name:"Olexandr",surname:"Trosh",age:26});
console.log(golf);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car{
    constructor(model,manufacturer,year,topSpeed,engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.topSpeed = topSpeed;
        this.engineVolume = engineVolume;
    }

    drive(){
        console.log(`їдемо зі швидкістю ${this.topSpeed} кілометрів на годину`);
    }
    info(){
        console.log(`Модель - ${this.model}`);
        console.log(`Виробник - ${this.manufacturer}`);
        console.log(`Рік випуску - ${this.year}`);
        console.log(`Максимальна швидкість - ${this.topSpeed}`);
        console.log(`Об'єм двигуна - ${this.engineVolume}`);
    }
    increaseMaxSpeed(newSpeed){
        this.topSpeed = newSpeed;
    }
    changeYear(newValue){
        this.year = newValue;
    }
    addDriver(driver){
        this.driver = driver;
    }
}

let prius = new Car("Prius","Toyota",2018,180,1.8);

console.log(prius);
golf.drive();
golf.info();
golf.increaseMaxSpeed(160);
golf.changeYear(2020);
golf.addDriver({name:"Andriy",surname:"Pastukh",age:23});
console.log(prius);



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

class Prince{
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

cinderallas = [];
cinderallas.push(new Cinderella("Anny",19,25));
cinderallas.push(new Cinderella("Jenny",23,28));
cinderallas.push(new Cinderella("Juliana",20,24));
cinderallas.push(new Cinderella("Rosa",28,32));
cinderallas.push(new Cinderella("Leah",20,26));
cinderallas.push(new Cinderella("Olesya",23,27));
cinderallas.push(new Cinderella("Diane",33,29));
cinderallas.push(new Cinderella("Lily",22,22));
cinderallas.push(new Cinderella("Penelope",19,26));
cinderallas.push(new Cinderella("Sally",27,30));

prince = new Prince("William",25,27);

for(let cin of cinderallas){
    if(cin.size === prince.shoeSize){
        console.log(`${prince.name} знайшов ${cin.name}`);
    }
}

console.log(cinderallas.find(cin => cin.size === prince.shoeSize));