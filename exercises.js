//================================https://github.com/DaniPhilo/JS_fundamentals/blob/main/README.md======================================================
//======================================================================================================================================================
//================================================================IF  / ELSE IF /  ELSE ================================================================
//======================================================================================================================================================
//1. Escribe una función que acepte un número y devuelva un string afirmando si el número es par o impar.
function number(parimpar) {
    if (parimpar % 2 == 0) {
        console.log("par")
    }
    else { console.log("impar") }
}
console.log(number());
//1.1. bonustrack
function number(parimpar) {
    return parimpar % 2 == 0 ?
        console.log("par") :
        console.log("impar");
}
console.log(number());
//###########################################
//###############-EJERCICIO 2-###############
//###########################################
//2. Escribe una función que acepte dos números y devuelva cuál es el mayor, o bien si son iguales.
function numbers(n1, n2) {
    if (n1 > n2) {
        console.log(n1 + " mayor que " + n2)
    }

    else if (n2 > n1) {
        console.log(n1 + " menor que " + n2)
    }
    else if (n1 === n2) {
        console.log(n1 + " es igual que " + n2)
    }
}
console.log(numbers(,));

//2.1. Bonustrack

function numbers(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        console.log(n1 + " mayor que " + n2 + "y" + n3)
    }

    else if (n2 > n1 && n2 > n3) {
        console.log(n2 + " mayor que " + n1 + "y" + n3)
    }
    else if (n3 > n1 && n3 > n2) {
        console.log(n3 + "mayor que" + n1 + "y" + n2)
    }
    else if (n1 === n2 && n1 === n3) {
        console.log(n1 + n2 + "y" + n3 + "son iguales")
    }
}
console.log(numbers(,));


//=======================================================================================================================================
//================================================================ ARRAY ================================================================
//=======================================================================================================================================
//1. Crea el siguiente array: ["January", "February", "Marj", "April", "Mei"]
let myArray = ["January", "February", "Marj", "April", "Mei"]

//1.1 Hay dos meses mal escritos: March y May. Modifica el array usando [] para solucionarlo.
let myArray = ["January", "February", "Marj", "April", "Mei"]
myArray[2] = "March";
myArray[4] = "May";
console.log(myArray);

//1.2 Crea la variable newMonths y asígnale el siguiente array:["June", "July", "August", "September"]. A continuación, escribe una función que devuelva un nuevo array que sea la concatenación del array del ejercicio 1 y éste. Asigna el resultado a una nueva variable, llamada totalMonths.
function newArray() {
    let newMonths1 = ["January", "February", "March", "April", "May"];
    let newMonths2 = ["June", "July", "August", "September"];
    return newMonths1.concat(newMonths2);
}
console.log(newArray());

//1.3 Pushea los siguientes 3 meses en el array anterior (totalMonths).
function newArray() {
    let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'];
    monthArray.push("October", "November", "December")
    return monthArray;

}
console.log(newArray());


//###########################################
//###############-EJERCICIO 4-###############
//###########################################
//4.Crea una función que acepte tres números:
function changeArray(num1, num2, num3) {

}

//a) Si el primer número es mayor que el segundo, elimina el último elemento del array.
function changeArray(num1, num2, num3) {

    totalMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    if (num1 > num2) {
        totalMonths.pop()
        return totalMonths
    }
}
console.log(changeArray(,,))

//b) O bien, si el segundo número es mayor que el tercero, pero menor que 10, elimina el primer elemento del array.
function changeArray(num1, num2, num3) {

    totalMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    if (num1 > num2) {
        totalMonths.pop()
        return totalMonths
    }
    else if (num2 > num3 && num2 < 10) {
        totalMonths.shift()
        return totalMonths
    }
}
console.log(changeArray(,,))

//c) O bien, si el segundo número es mayor que el tercero o que el primero, añade el string October al final del array.
function changeArray(num1, num2, num3) {

    totalMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    if (num1 > num2) {
        totalMonths.pop()
        return totalMonths
    }
    else if (num2 > num3 && num2 < 10) {
        totalMonths.shift()
        return totalMonths
    }
    else if (num2 > num3 || num2 > num1) {
        totalMonths.push("October")
        return totalMonths
    }
}
console.log(changeArray(,,))

//d) Si nada de lo anterior es verdadero, print Bad luck!.
function changeArray(num1, num2, num3) {

    totalMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    if (num1 > num2) {
        totalMonths.pop()
        return totalMonths
    }
    else if (num2 > num3 && num2 < 10) {
        totalMonths.shift()
        return totalMonths
    }
    else if (num2 > num3 || num2 > num1) {
        totalMonths.push("October")
        return totalMonths
    }
    else { console.log("Bad Luck!") }
}
console.log(changeArray(,,))


//###########################################
//###############-EJERCICIO 5-###############
//###########################################
//5. Dado el siguiente array: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//5.1 Escribe una función que:
//a) Encuentre la posición del string Wednesday.
function daysArray(days) {

    weekArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return weekArray.indexOf('Wednesday');
}
console.log(daysArray());

//b) Si la longitud de ese string es mayor que el número de su posición, dale la vuelta al array.
function daysArray() {

    weekArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    if (weekArray.indexOf('Wednesday') < weekArray[2].length) {
        weekArray.reverse()
        return weekArray
    }
}
console.log(daysArray());

//###########################################
//###############-EJERCICIO 5.2-#############
//###########################################
//5.2 Escribe otra función que:
//a) Compare la longitud de los elementos en primera y segunda posición.
function days(n1, n2, n3) {
    n1.length < n2.length
};

//b) Si el primero es más corto que el segundo, se debe hacer print de los tres primeros elementos del array (usa el método apropiado para cortar un trozo del array).
function days(n1, n2, n3) {
    weekArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    if (n1.length < n2.length) {
        return weekArray.slice(0, 3)

    }
}
console.log(days("uu", "uwu",));

//###########################################
//###############-EJERCICIO 5.3-#############
//###########################################
//5.3 Escribe otra función que:
//a) Compruebe si el array incluye el string Sunday.
function days() {

    weekArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    if (weekArray.includes("Sunday")) {
        console.log(weekArray)
        return "That's nice!"
    }
}
console.log(days())

//b) Si es así, print That's nice!.
weekArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
function days() {

    if (weekArray.includes("Sunday")) {
        console.log(weekArray)
        return "That's nice!"
    }
    else {
        weekArray.push("Sunday")
        console.log(weekArray)
        return "Oh no!"
    }

}
console.log(days())

//###########################################
//###############-EJERCICIO 6-###############
//###########################################
//6. Escribe una función que le de la vuelta al string "Paralelepípedo".
let word = "misantropía"
let reverseword = word.split("").reverse().join("");
console.log(reverseword);

//5. Escribe una función swap que tome un array de length 2 y cambie el orden de sus elementos, pero devolviendo el mismo array.
function swap(){
    let arraySwap = ["1n", "2n"];
    return arraySwap.reverse();
}
console.log(swap());

//bonus track.
function manualSwap(){
    let arrayManualSwap = ["a","b"]
    let b = arrayManualSwap[1]
    arrayManualSwap[1] = arrayManualSwap[0]
    arrayManualSwap[0] = b
    return arrayManualSwap

}
console.log(manualSwap())