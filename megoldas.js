"use strict";
exports.__esModule = true;
//1.feladat
function DiakInfo(nev, csoport, tipus) {
    if (tipus == true) {
        return nev + "[Team0" + csoport + "] - Junior Fronted";
    }
    else {
        return nev + "[Team0" + csoport + "] - Webfejlesztő";
    }
}
//2.feladat
function SzovegesErtekeles(jegy) {
    if (jegy == 2) {
        return ["Hanyag", "Rossz"];
    }
    else if (jegy == 3) {
        return ["Változó", "Változó"];
    }
    else if (jegy == 4) {
        return ["Jó", "Jó"];
    }
    else if (jegy == 5) {
        return ["Példás", "Példás"];
    }
}
//3.feladat
function HarommalOszthatokSzama(szamok) {
    var darab = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 3 == 0) {
            darab++;
        }
    }
    return darab;
}
//4.feladat
function NyeroSzamok(mennyiseg, alsoHatar, felsoHatar) {
    var szamok = [];
    var i = 0;
    while (i < mennyiseg) {
        var generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        var szerepelE = false;
        for (var j = 0; j < szamok.length; j++) {
            if (generaltSzam == szamok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            szamok.push(generaltSzam);
            i++;
        }
    }
    return szamok;
}
function NyeroSzamok2(mennyiseg, alsoHatar, felsoHatar) {
    var generaltTomb = [];
    var kivalogatottSzamok = [];
    for (var i = 0; i < mennyiseg; i++) {
        generaltTomb.push(Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
        var szerpelE = false;
        for (var j = 0; j < kivalogatottSzamok.length; j++) {
            if (kivalogatottSzamok[j] == generaltTomb[i]) {
                szerpelE = true;
            }
        }
        if (szerpelE == false) {
            kivalogatottSzamok.push(generaltTomb[i]);
        }
    }
    return kivalogatottSzamok;
}
function NyeroSzamok3(mennyiseg, alsoHatar, felsoHatar) {
    var generaltTomb = [];
    var kivalogatottSzamok = [];
    for (var i = 0; i < mennyiseg; i++) {
        generaltTomb.push(Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
        for (var j = 0; j < kivalogatottSzamok.length; j++) {
            if (kivalogatottSzamok[j] != generaltTomb[i]) {
                kivalogatottSzamok.push(generaltTomb[i]);
            }
        }
    }
    return kivalogatottSzamok;
}
