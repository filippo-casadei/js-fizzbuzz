// CONSEGNA: 
// Creare un programma che stampi i numeri da 1 a 100.
// Per i numeri multipli di 3 stampi "Fizz"
// Per i multipli numeri di 5 stampi "Buzz"
// Per i numeri multipli di 3 e 5 stampi "FizzBuzz"

// ====================================================================================

// Ragionamento: 
// - Sicuramente devo utilizzare il ciclo FOR per fare in modo che il programma mi stampi i 
// numeri da 1 a 100.

// - Dovremmo utilizzare % 3 e % 5 e se il risultato sarà 0 vorrà dire che sarà un multiplo.

// - Nelle condizioni il programma dovrà analizzare prima 3 && 5 insieme altrimenti arrivati
// a 15 lo vedrebbe solo come multiplo di 3 o di 5.

// - Con console.log chiediamo, all'interno di un IF(multiplo di 3e5) + ELSE IF(multiplo
// di 3) + ELSE IF(multiplo di 5) + ELSE(tutti gli altri numeri) di stampare il risultato
// inserendo Fizz, Buzz o FizzBuzz.
