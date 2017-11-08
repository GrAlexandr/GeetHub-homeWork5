'use strict';

/**
 * Упражнение на строки
 *
 * Петя записался в кружок по программированию.
 * На первом занятии Пете задали написать простую программу.
 * Программа должна делать следующее: в заданной строке, которая состоит из прописных и строчных латинских букв, она:
 * удаляет все гласные буквы,
 * перед каждой согласной буквой ставит символ ".",
 * все прописные согласные буквы заменяет на строчные.
 *
 * Гласными буквами считаются буквы "A", "O", "Y", "E", "U", "I", а согласными — все остальные.
 * На вход программе подается ровно одна строка, она должна вернуть результат в виде одной строки,
 * получившейся после обработки.
 *
 * Помогите Пете справиться с этим несложным заданием.
 */

var stringDotTests = [
    {
        parameters: ["tour"],
        expectedResult: ".t.r"
    },
    {
        parameters: ["GeekHub"],
        expectedResult: ".g.k.h.b"
    },
    {
        parameters: ["aBAcAba"],
        expectedResult: ".b.c.b"
    },
    {
        parameters: ["aa"],
        expectedResult: ""
    }
];


function stringDot(word) {
	if(word.length === 0) return word;

	var strNew = word.toLowerCase(),
		arr = strNew.split('');

	for(var i = 0; i < arr.length; i++) {
		while(arr[i] === 'a' || arr[i] === 'o' || arr[i] === 'y' || arr[i] === 'e' || arr[i] === 'u' || arr[i] === 'i') {
			if( arr[i] === 'a' ) arr.splice(i, 1);
			if( arr[i] === 'o' ) arr.splice(i, 1);
			if( arr[i] === 'y' ) arr.splice(i, 1);
			if( arr[i] === 'e' ) arr.splice(i, 1);
			if( arr[i] === 'u' ) arr.splice(i, 1);
			if( arr[i] === 'i' ) arr.splice(i, 1);
		}
	}

	for(var j = 0; j < arr.length; j++) {
		arr[j] = '.' + 	arr[j];
	}

	return arr.join("");
}


tasks.push({
    title: "Упражнение на строки",
    solution: stringDot,
    tests: stringDotTests
});
