/*PARTE 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo 
attraverso un ciclo for-in tutte le proprietà dell’oggetto.
*/

var student = {
      stuName : 'Gianni',
      stuSurname : 'Benni',
      stuAge : 20,
}
//con console.log ho il contenuto del object
console.log(student)

var outputStudent = document.getElementById('student');
var htmlPropStud = '';

// con for in attraverso l oggetto student e stampo tutte le proprietà
for (var k in student) {
      htmlPropStud += "<li>" + k + ":" + student[k] + "</li>";
      console.log(k, student[k])
}

outputStudent.innerHTML = htmlPropStud;







/*PARTE 2
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.  
Ricordatevi, è un array, quindi? for.
*/












/*PARTE 3
Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà -
 di aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.
*/


