'use strict';

/**
 * Double Cola
 *
 * Шелдон, Леонард, Пенни, Раджеш и Говард стоят в очереди к автомату по продаже баночек с напитком «Double Cola»,
 * других людей в очереди нет. Первый в очереди (Шелдон) покупает баночку, выпивает ее содержимое и раздваивается!
 * Получившиеся два Шелдона встают в конец очереди. Затем следующий в очереди (Леонард) покупает баночку,
 * выпивает и встает в конец очереди в двойном экземпляре, и так далее. Этот процесс продолжается до бесконечности.
 *
 * Например, третью баночку колы выпьет Пенни, и очередь будет выглядеть так:
 * Раджеш, Говард, Шелдон, Шелдон, Леонард, Леонард, Пенни, Пенни.
 *
 * Напишите программу, которая выведет имя человека, выпившего n-ую баночку.
 *
 * Обратите внимание, что в самом начале очередь выглядит так: Шелдон, Леонард, Пенни, Раджеш, Говард.
 * Первым человеком является Шелдон.
 *
 * Входные данные
 * Входные данные состоят из единственного целого числа n.
 *
 * Выходные данные
 * Выведите единственную строку — имя человека, который выпьет n-ую баночку колы. Баночки нумеруются от 1.
 * Обратите внимание, что следует выводить имена в следующем написании: "Sheldon", "Leonard", "Penny", "Rajesh", "Howard".
 * Именно в этом порядке друзья стоят в очереди изначально.
 */

var doubleColaTests = [
    {
        parameters: [1],
        expectedResult: "Sheldon"
    },
    {
        parameters: [6],
        expectedResult: "Sheldon"
    },
    {
        parameters: [1802],
        expectedResult: "Penny"
    },
    {
        parameters: [12345],
        expectedResult: "Leonard"
    }
];

// Вариант 1
// Но люди не покидают очередь
// function doubleCola(n) {
// 	var queue = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
//
// 	if(n < 1) {
// 		alert('Число должно быть равным или больше 1!');
// 	} else {
// 		for (var j = 0; j < n; j++) {
// 			queue.push(queue[j]);
// 			queue.push(queue[j]);
// 		}
// 	}
// 	return queue[n - 1];
//}


// Вариант 2
function doubleCola(n) {
	var queue = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];

	if(n < 1) {
		alert('Число должно быть равным или больше 1!');
	} else {
		for (var j = 0; j < n; j++) {
			var person = queue.shift();

			queue.push(person);
			queue.push(person);
		}
	}
	return person;
}

tasks.push({
    title: "Double Cola",
    solution: doubleCola,
    tests: doubleColaTests
});
