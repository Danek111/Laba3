// N1
// var button = document.getElementById('button'); // Ищу элемент через ид 'button'
// button.addEventListener('click', Dan); // Зарегистрировать обработчик события

// Создаем функцию

// function Dan() { 
// 	var heightWindow = window.innerHeight; // InnerHeight - Высота в пикселя обласи просмотра окнf браузера.
// 	window.scrollBy(0, 500) // X - смещение в пикселях по горизонтали. Y - смещение в пикселях по вертикали.
// }


// N3
// let form = document.getElementById('form'); // Ищем элемент с id 'form'
// let sum = 0; // Сумма равна 0 
// let buff = document.querySelector('.buff'); // queryselector - возвращает первый элемент документа.


// buff.addEventListener('click', function() // Регаем обработчик события
// {
//     for (let a = 0; a < form.elements.length; a++  ){
//         sum+= +form.elements[a].value;
// }
//     alert(sum)
// });

// 4
// var country1= document.querySelector('#country');  // Создаем переменную страны
// var city1 = document.querySelector('#city'); // Создаем переменную городов

// Создаем переменные с городами
// var data = {
//   Россия: ['Москва', 'СПБ', 'Белгород'],
//   Татарстан: ['Казань', 'Алабуга', 'Альметьевск'],
//   Украина: ['Ужгород', 'Киев', 'Одесса'],
// }

// var country = Object.keys(data);

// for (var i = 0; i < country.length; i++) {
//   country1.add(new Option(country[i]));
// }

// var defaultCity = data[country[0]];
// for (var i = 0; i < defaultCity.length; i++) {
//   city1.add(new Option(defaultCity[i]));
// }

// country1.addEventListener('change', function() {
//   var city = data[this.value];
//   city1.length = 0;
// });
//   for (var i = 0; i < city.length; i++) {
//     city1.add(new Option(city[i]));
//   }
// });
// n5 
// let ol = document.getElementById('Danilka') // Ищем id 'Danilka'
// let li = document.createElement('li') // Создаем элемент 'li'

// li.innerHTML = 'Пункт'

// ol.appendChild(li) // добавляет узел в конец списка дочерних элементоd.


// // 6

// var elems = document.getElementsByTagName('a'); // Создаем var elem var - переменная
// for (var i = 0; i < elems.length; i++) {
//   elems[i].addEventListener('mouseover', func); // Событие mouseover происходит в момент, когда курсор оказывается над элементом
// }

// function func() {
//   this.innerHTML = this.innerHTML + ' (' + this.href + ')'; 
// }


// 7
// var elem = document.getElementsByTagName('p');
// for (var i = 0; i < elem.length; i++) {
// 	elem[i].addEventListener('click', func);
// }

// function func() {
// 	this.innerHTML = this.innerHTML * this.innerHTML;
// } 



// 9
// const Brosk = document.querySelector('.ovsyanka');
// const SUII1 = document.querySelector('.xarcho');

// SUII1.addEventListener('click', funcsa);
// Brosk.addEventListener('click',funcfa);

// function funcfa(event) {
//     event.target.innerHTML = `${event.target.innerHTML}!`;
//     {
    
// }};

// function funcsa() {
//     const createLi = document.createElement('li');
//     createLi.innerHTML = 'Пункт';
//    Brosk.appendChild(createLi);
// };


// 8
// var clicker = 0;

// function incrementClick() {
//     updateDisplay(++clicker);
// }

// function updateDisplay(bal) {
//     document.getElementById("BOOM").innerHTML = bal;
// }