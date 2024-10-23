//contar consoantes

function contarConsoantes(frase: string): number {
    let consoantes: number = 0;
    //let alfabetoConsoantes: string = "bcdfghjklmnpqrstvwxyz";
    
    for(let i=0; i<frase.length; i++) {
        if (frase[i] !== 'a' || frase[i] !== 'e' || frase[i] !== 'i' || frase[i] !== 'o' || frase[i] !== 'u'){
            consoantes ++;
        }
    }
    return consoantes;
}

function codificadorCRC (palavra: string){
    let vogais: number = 0;

    for(let i=0; i<palavra.length; i++){
        if (palavra[i] === 'a' || palavra[i] === 'e' || palavra[i] === "i" || palavra[i] === "o" || palavra[i] === "u"){
            vogais ++;
        }
    }
}
codificadorCRC("Marlon")