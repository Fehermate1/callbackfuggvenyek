function osszead(a, b) { return a + b; }

function kivonas(a, b) { return a - b; }

function szorzas(a, b) { return a * b; }

function osztas(a, b) {
    if (b !== 0) { return a / b; } 
    else { return "Hiba: nullával való osztás!"; }
}

function szamol(alapmuvelet, szam1, szam2) { return alapmuvelet(szam1, szam2); }

let eredmeny = szamol(osszead, 5, 3);
console.log('AZ ÖSSZEADÁS FELTÉTELEZETT EREDMÉNYE: 8, VALÓBAN SZÁMOLT EREDMÉNY: ' + eredmeny);

result = szamol(kivonas, 8, 2);
console.log('A KIVONÁS FELTÉTEEZETT EREDMÉNYE: 6, VALÓBAN SZÁMOLT EREDMÉNY: ' + eredmeny);

result =  szamol(szorzas, 4, 6);
console.log('A SZORZÁS FELTÉTELEZETT EREDMÉNYE: 24, VALÓBAN SZÁMOLT EREDMÉNY: ' + eredmeny);

result =  szamol(osztas, 9, 3);
console.log('AZ OSZTÁS FELTÉTELEZETT EREDMÉNYE: 3, A VALÓBAN SZÁMOLT EREDMÉNY: ' + eredmeny);