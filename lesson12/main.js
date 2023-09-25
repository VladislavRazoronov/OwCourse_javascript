// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

fetch("http://jsonplaceholder.typicode.com/users"
 ).then(response => response.json()
).then(users=>{
 for(const user of users){
  let list = document.getElementById("list");
  let item = document.createElement("li");
  item.innerText = `ID:${user.id}\nName:${user.name}`;
  let ref = document.createElement("a");
  ref.innerText = "User Data"
  ref.href=`./user-details.html?id=${user.id}`;
  item.appendChild(ref);
  list.appendChild(item);
 }
});

let url = new URL(location.href)