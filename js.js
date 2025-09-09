//oppgave 1
document.write("Oppgave 1" + "<br>");
function arealSirkel (radius) {
let areal = Math.PI * radius * radius;
//Areal er pi * r^2
document.write("Sirkel med radius " + radius + " har areal " + areal + "<br>");
}

arealSirkel(24);
arealSirkel(32);

document.write("<br>");
document.write("Hvis man skal regne ut arealet til en sirkel som har 24 i areal så må man regne med stykker (pi*r^2)")

//oppgave 3
document.write("<br>" + "<br>");
document.write("Oppgave 3" + "<br>");

function sjekkalder () {

    let navn = prompt("Skriv inn navnet ditt");
    let alder = prompt("Hvor gammer er du?");

    alder = Number(alder);

    if (alder < 30) {
        document.write("Hei " + navn + ", du er ung!" + "<br>");
        console.log("Hei " + navn + ", du er ung!" + "<br>");
    }
    else { document.write("Hei " + navn + ", du er kjempe unc" + "<br>");
        console.log("Hei " + navn + ", du er kjempe unc" + "<br>");

}
} 
sjekkalder();


//oppgave 2
document.write("<br>" + "<br>");
document.write("Oppgave 2" + "<br>");
function volumKule(radius) {
    let volum = (4 / 3) * Math.PI * radius * radius;
    console.log("Kule med radius " + radius + " har volum " + volum);
    document.write("Kule med radius " + radius + " har volum " + volum + "<br>");
}
volumKule(11);
volumKule(21);

document.write("<br>" + "For å finne volumet til en kule må du bruke formellen 4/3 * pi * r2. for å kode dette brukte jeg koden fra oppgave 1")
