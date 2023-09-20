//167

/*
№1
Выведите с помощью цикла столбец чисел от 1 до 100.
*/
for (let i=1; i<=100; i++){
    console.log(i);
}

/*
№2
Выведите с помощью цикла столбец чисел от 100 до 1.
*/
for(let i=100; i>=1; i--){
    console.log(i);
}

/*
№3
Выведите с помощью цикла столбец четных чисел от 1 до 100.
*/
for(let i=1; i<=100; i++){
    if(i%2==0){
        console.log(i);
    }
}

/*
№4
Заполните массив 10-ю иксами с помощью цикла.
*/

let arr=[];
for(let i=1; i<=10; i++){
    arr.push('x');
}
console.log(arr);

/*
№5
Заполните массив числами от 1 до 10 с помощью цикла.
*/
let arr1=[];
for(let i=1; i<=10; i++){
    arr1.push(i);
}
console.log(arr1);

/*
№6
Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
*/
let arr2=[1, 2, 3, 4, -1];
for( let elem of arr2){
    if (elem>0 && elem<10){
        console.log(elem);
    }
}

/*
№7
Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
*/
let arr3=[1, 2, 3, 4, -1];
let flag=false;
for (let elem of arr3){
    if (elem ==5){
        flag=true;
        break;
    }
}
if(flag===true){
    console.log("В массиве есть 5")
}else {
    console.log("В массиве нет 5")
}

/*
№8
Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
*/
let arr4=[1, 2, 3, 4, -1];
let summ=0;
for(let elem of arr4){
    summ+=elem;
}
console.log(summ);

/*
№9
Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
*/
let arr5=[1, 2, 3];
let summ1=0;
for(let elem of arr5){
    summ1+=elem**2;
}
console.log(summ1);

/*
 № 10
 Дан массив с числами. Найдите среднее арифметическое его элементов.
 */
let arr6=[1, 2, 3];
let cout=0;
let summ2=0;
for (let elem of arr6){
    summ2+=elem;
    cout+=1;
}
console.log(summ2/cout);

/*
№11
Напишите скрипт, который будет находить факториал числа. Факториал - это произведение всех целых чисел от единицы до заданного числа.
*/
let num=4;
let factorial=1;
for (let i=1; i<=num; i++){
    factorial*=i;
}
console.log(factorial);

/*
№12
Заполните массив числами от 10 до 1 с помощью цикла.
*/
 let arr7 =[];
 for (let i=10; i>=1; i--){
    arr7.push(i);
 }
console.log(arr7);

/*
№13
Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
*/
let arr8=[1, 2, 3, 4, -1];
let summ3=0;
for (let elem of arr8){
    if (elem >0){
        summ3+=elem;
    }
}
console.log(summ3);

/*
№14
Дан массив числами, например:

let arr = [10, 20, 30, 50, 235, 3000];
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
*/

let arr9 = [10, 20, 30, 50, 235, 3000];
for (let elem of arr9){
    if (String(elem)[0]==1 || String(elem)[0]==2 || String(elem)[0]==5){
        console.log(elem);
    }
}

/*
№15
Дан массив с числами. Выведите элементы этого массива в обратном порядке.
*/
let arr10 = [1, 2, 3, 4, -1];
for (let i = arr10.length-1; i>=0; i--){
    console.log(arr10[i]);
}

/*
№16
Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.
*/
let arr11=[1, 5, 3, 4, -1];
for (let i=0; i<arr11.length; i++){
    if(arr11[i]==i+1){
        console.log(arr11[i])
    }
}

/*
№17
Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br.
*/
let arr12=[1, 2, 3, 4, -1];
for (let i=0; i<arr12.length; i++) {
    document.write(arr12[i] + '<br>');
}

document.write('<br>');
/*
№18
Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.
*/
let arr13=[1, 2, 3, 4, -1];
for (let i=0; i<arr12.length; i++) {
    document.write("<p>"+arr12[i] + '</p>');
}

document.write('<br>');
/*
№19
Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
*/
let arr14= ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
for(let i =0; i<arr14.length; i++){
    if(arr14[i] == 'сб' || arr14[i] == 'вс'){
        document.write("<strong>" + arr14[i]+"</strong>"+' ')
    }else{
        document.write(arr14[i]+' ');
    }
}

document.write('<br><br>');

/*
№20
Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. 
Номер текущего дня должен храниться в переменной day.
*/
let arr15= ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let day = "сб";
for(let i =0; i<arr15.length; i++){
    if(arr15[i]==day){
        document.write('<em>'+arr15[i]+'</em>'+' ')
    }else{
        document.write(arr15[i]+' ')
    }
}

/*
№21
Дан следующий объект с работниками и их зарплатами:
let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
Увеличьте зарплату каждого работника на 10%.
*/
let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for(let key in obj){
    obj[key]+=obj[key]*0.1;
}
console.log(obj);

/*
№22
Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.
*/
let obj1 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for(let key in obj1){
    if(obj1[key]<=400){
        obj1[key]+=obj1[key]*0.1;
    }
}
console.log(obj1);

/*
№23
Даны следующие массивы:
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.
*/
let arr16 = [1, 2, 3, 4, 5];
let arr17 = [6, 7, 8, 9, 10];
let obj3={};
for (let i=0; i<arr16.length; i++){
    obj3[arr16[i]]=arr17[i];
}
console.log(obj3);

/*
№24
Дан следующий объект:
let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
Найдите сумму ключей этого объекта и поделите ее на сумму значений.
*/
let obj4 = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
sumK=0;
sumV=0;
for(let key in obj4){
    sumK+=Number(key);
    sumV+=Number(obj4[key]);
}
console.log(sumK/sumV);

/*
№25
Дан следующий объект:
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
Запишите ключи этого объекта в один массив, а значения - в другой.
*/
let obj5 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let keys=[];
let values=[];
for(let key in obj5){
    keys.push(key);
    values.push(obj5[key])
}
console.log(keys);
console.log(values);

/*
№26
Дан следующий объект:
let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. То есть у вас в результате получится вот такой массив:
[
	125,
	225,
	128,
	145,
	281,
];
*/
let obj6 = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
let arr18=[];
for (let key in obj6){
    if(String(obj6[key]) [0]==1 || String(obj6[key])[0]==2){
        arr18.push(obj6[key]);
    }
}
console.log(arr18);

/*
№27
Дан следующий массив:
let arr = ['a', 'b', 'c', 'd', 'e'];
Создайте из этого массива следующий объект:
{1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};
*/
let arr19 = ['a', 'b', 'c', 'd', 'e'];
let obj7={};
for(let i=0; i<arr19.length; i++){
    obj7[i+1]=arr19[i];
}
console.log(obj7);

/*
№28
Дан следующий массив:
let arr = ['a', 'b', 'c', 'd', 'e'];
Создайте из этого массива следующий объект:
{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
*/
let arr20 = ['a', 'b', 'c', 'd', 'e'];
let obj8={};
for(let i=0; i<arr20.length; i++){
    obj8[`'`+arr20[i]+ `'`]=i+1;
}
console.log(obj8);