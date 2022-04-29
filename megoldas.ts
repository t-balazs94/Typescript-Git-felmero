export { };

//1.feladat
function DiakInfo(nev: string, csoport: number, tipus: boolean): string {
    if (tipus == true) {
        return nev + "[Team0" + csoport + "] - Junior Fronted";
    }
    else {
        return nev + "[Team0" + csoport + "] - Webfejlesztő";
    }
}

//2.feladat
function SzovegesErtekeles(jegy: number): [string, string] {
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
function HarommalOszthatokSzama(szamok: Array<number>): number {
    var darab: number = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 3 == 0) {
            darab++;
        }
    }
    return darab;
}

//4.feladat
function NyeroSzamok(mennyiseg: number, alsoHatar: number, felsoHatar: number): Array<number> {
    let szamok: Array<number> = [];
    let i = 0;
    while (i < mennyiseg) {
        let generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        let szerepelE: Boolean = false;
        for (let j = 0; j < szamok.length; j++) {
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

//Tudom ennél a függvénynél ha két ugyan olyan szám van akkor egyel kevesebb számot generál, gondoltam próbálkozok mással is :D
function NyeroSzamok2(mennyiseg: number, alsoHatar: number, felsoHatar: number): Array<number> {
    let generaltTomb: Array<number> = [];
    let kivalogatottSzamok: Array<number> = [];
    for (let i = 0; i < mennyiseg; i++) {
        generaltTomb.push(Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
        let szerpelE: boolean = false;
        for (let j = 0; j < kivalogatottSzamok.length; j++) {
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
