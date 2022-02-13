//Prima classe
class FirstUser {
    constructor(_carica, _numeroChiamate) {
        this.carica = _carica,
            this.numeroChiamate = _numeroChiamate;
    }
    ricarica(credito) {
        this.carica = this.carica + credito;
    }
    chiamata(minuti) {
        let costoChiamata = minuti * 0.20;
        this.carica = this.carica - costoChiamata;
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
// Seconda classe
class SecondUser {
    constructor(_carica, _numeroChiamate) {
        this.carica = _carica,
            this.numeroChiamate = _numeroChiamate;
    }
    ricarica(credito) {
        this.carica = this.carica + credito;
    }
    chiamata(minuti) {
        let costoChiamata = minuti * 0.20;
        this.carica = this.carica - costoChiamata;
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
// Terza classe
class ThirdUser {
    constructor(_carica, _numeroChiamate) {
        this.carica = _carica,
            this.numeroChiamate = _numeroChiamate;
    }
    ricarica(credito) {
        this.carica = this.carica + credito;
    }
    chiamata(minuti) {
        let costoChiamata = minuti * 0.20;
        this.carica = this.carica - costoChiamata;
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
// UTENTE 1
const primoUtente = new FirstUser(40, 5);
primoUtente.ricarica(42);
primoUtente.chiamata(7);
console.log('-----------First User');
console.log('Carica disponibile al momento: ' + primoUtente.numero404());
console.log('Numero Chiamate: ' + primoUtente.getNumeroChiamate());
console.log('Dopo aver azzerato le chiamate:');
primoUtente.azzeraChiamate();
console.log('Numero chiamate: ' + primoUtente.getNumeroChiamate());
// UTENTE 2
const secondoUtente = new SecondUser(35, 2);
secondoUtente.ricarica(100);
secondoUtente.chiamata(15);
console.log('--------Second User');
console.log('Carica disponibile al momento: ' + secondoUtente.numero404());
console.log('Numero Chiamate: ' + secondoUtente.getNumeroChiamate());
console.log('Dopo aver azzerato le chiamate:');
secondoUtente.azzeraChiamate();
console.log('Numero chiamate: ' + secondoUtente.getNumeroChiamate());
//UTENTE 3
const terzoUtente = new ThirdUser(25, 3);
terzoUtente.ricarica(10);
terzoUtente.chiamata(22);
console.log('---------Third User-');
console.log('Carica disponibile al momento: ' + terzoUtente.numero404());
console.log('Numero Chiamate: ' + secondoUtente.getNumeroChiamate());
console.log('Dopo aver azzerato le chiamate:');
secondoUtente.azzeraChiamate();
console.log('Numero chiamate: ' + secondoUtente.getNumeroChiamate());
