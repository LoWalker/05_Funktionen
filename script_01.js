"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// // Funktionsrumpf (body) | callee
// // Funktionsdeklaration
// function test()
// {
//     console.log("Hallo Patrick!");
// }

/********Funktionen 02a *****/
// 2a, Parametrisierung + Datenübergabe von INNEN


// // ausgabeNamen();
// // // console.log(firstName); // Fehler; Scope!

// // function ausgabeNamen() {
// //     let firstName = "Martin"; // what happens in Vegas, ...
// //     console.log("Hallo " + firstName + "!");
// }

/*****Funktionen 02b ******/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// Mein Beispiel
// function ausgabeNamenParam(firstName) {
//     const begruessung = "Hallo " + firstName + "!";
//     return begruessung;
// }
// console.log(ausgabeNamenParam("Herr Schmidt"));

// Beispiel von Dozent

ausgabeNamenParam("Martin"); // Call + Argument(e)
ausgabeNamenParam("Lawrence");
// Argumente sind Daten für Parameter

function ausgabeNamenParam(firstName) { //Funktion + Parameter
    console.log("hallo " + firstName + "!");
}