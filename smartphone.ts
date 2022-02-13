interface Smartphone {
    //Propietà
    carica: number;
    numeroChiamate: number;
    //Metodi
    ricarica(credito: number): void;
    chiamata(minuti: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}


//Prima classe
class FirstUser implements Smartphone {
    //Modificatori di accesso sulle proprietà
    carica: number;
    numeroChiamate: number;
    constructor(_carica: number, _numeroChiamate: number){
        this.carica = _carica,
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(credito: number): void {
        this.carica = this.carica + credito;
    }

    chiamata(minuti: number): void {
        let costoChiamata = minuti * 0.20;
        this.carica = this.carica - costoChiamata;
        this.numeroChiamate++
    }
    numero404(): number {
        return this.carica;
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }

}
// Seconda classe
class SecondUser implements Smartphone {
    //Modificatori di accesso sulle proprietà
    carica: number;
    numeroChiamate: number;
    constructor(_carica: number, _numeroChiamate: number){
        this.carica = _carica,
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(credito: number): void {
        this.carica = this.carica + credito;
    }

    chiamata(minuti: number): void {
        let costoChiamata = minuti * 0.20;
        this.carica = this.carica - costoChiamata;
        this.numeroChiamate++
    }
    numero404(): number {
        return this.carica;
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }

}
// Terza classe
class ThirdUser implements Smartphone {
    //Modificatori di accesso sulle proprietà
    carica: number;
    numeroChiamate: number;
    constructor(_carica:number, _numeroChiamate:number){
        this.carica = _carica,
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(credito: number): void {
        this.carica = this.carica + credito;
    }

    chiamata(minuti: number): void {
        let costoChiamata = minuti * 0.20;
        this.carica = this.carica - costoChiamata;
        this.numeroChiamate++
    }
    numero404(): number {
        return this.carica;
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    azzeraChiamate(): void {
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