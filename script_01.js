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

// ausgabeNamenParam("Martin"); // Call + Argument(e)
// ausgabeNamenParam("Lawrence");
// // Argumente sind Daten für Parameter

// function ausgabeNamenParam(firstName) { //Funktion + Parameter
//     console.log("hallo " + firstName + "!");
// }

/*******Funktionen 02c *****/
// 2c Mehrere Parameter

// ausgabeNamenParams("Max", "Mütze");
// ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname?"));


// function ausgabeNamenParams(firstName, familyName) {
//     console.log("hallo " + firstName + " " + familyName +"!");
// }


/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenParams("Max", "Mütze");

function ausgabeNamenParams(firstName, familyName) 
{
    const gap = " ";
    let outputStr = "Hallo" + gap + firstName + gap + familyName +"!";
}
//     // 1. Funktionalität: string composing
    


//     // 2. Funktionalität: string output


/******Funktionen 03b ****/
// Trennen der Funktionalitäten | return


// 1. Funktionalität: sting composing
output(getString("Max","Mütze")); //call
output("Hallo Max Mütze!");
function getString(firstName, familyName) 
{
    const GAP = " ";
    let outputStr = "Hallo" + GAP + firstName + GAP + familyName +"!";
    return outputStr // return sendet Daten an den call zurück
    console.log("Funktion beendet"); // return bricht die Fkt ab!
}


/* 2. Funktionalität: string output */
// output("Hi");// Call ...
function output(outputData) {
    console.log(outputData)
}
