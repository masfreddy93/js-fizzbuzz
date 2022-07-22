// creo un ciclo che mi stampi i numeri da 1 a 100
    // creo un ciclo con indice inizializzato a 0, condizione i<100, ed incremento i++
    // creo variabile number dove assegno i + 1
    //genero risposta in console

// sostituisco la stringa "Fizz" ai multipli di 3
    // divido number per 3 
        // creo nuova variabile multiple3
        // assegno a multiple3 l'operazione number % 3
        // creo variabile fizz 
        // assegno alla variabile Fizz la stringa "Fizz"
    // se non ho resto cambio il valore di number con la stringa "Fizz"
        // creo la condizione per cui SE multiple3 === 0 ALLORA number = fizz

// sostituisco la stringa "Buzz" ai multipli di 5
    // divido number per 5 
        // creo nuova variabile multiple5
        // assegno a multiple3 l'operazione number % 5
        // creo variabile buzz 
        // assegno alla variabile Fizz la stringa "Buzz"
    // se non ho resto cambio il valore di number con la stringa "Buzz"
        // creo la condizione per cui SE multiple5 === 0 ALLORA number = buzz    

// sostituisco la stringa "FizzBuzz" ai multipli di 3 e di 5
    // creo la condizione per cui SE un numero è multiplo sia di 3 che di 5 ALLORA unisco le variabili fizz e buzz


// genero risposta in console




for(let i=0; i<100; i++) {
    let number = i + 1;

    let multiple3 = number % 3;
    let fizz = 'Fizz';
    let multiple5 = number % 5;
    let buzz = 'Buzz';

    if(multiple3 === 0) {
        number = fizz;
    }

    if(multiple5 === 0){
        number = buzz;
    }

    if((multiple3 === 0) && (multiple5 === 0)){
        number = fizz + buzz;
    }


    console.log(number)


    // bonus
        // Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
            // creo variabile container 
            // assegno alla variabile container un document createElement('div')
            // aggiungo (con append) alla variabile container un elemento html che mostri il numero o la stringa
            // mostro risultato in console
            // aggiungo variabile griglia che selezioni la classe main
            // appendo alla griglia la variabile container 
            // ho la mia lista di numeri nell'html
    let container = document.createElement("div");
    container.append(number + ' ')
    console.log(container)

    let griglia = document.querySelector('.main')
    griglia.append(container)

    
}

