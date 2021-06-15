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
console.log('Check contenuto oggetto',student)

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

var classroom = {
     students: [
           {name: 'Al', surname: 'Pacino', age: '23'},
           {name: 'Bo', surname: 'Derek', age: '21'},
           {name: 'Ed', surname: 'Wood', age: '22'},
      ]

}
console.log('Check contenuto array', classroom.students)

var outputStudent2 = document.getElementById('student2');
var htmlPropStud2 = '';


for (var i = 0; i < classroom.students.length; i++){
      for (var key in classroom.students[i] )
      htmlPropStud2 += "<li>" + key + ":" + classroom.students[i][key] + "</li>"

}
outputStudent2.innerHTML = htmlPropStud2;


      


/*PARTE 3
Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà -
 di aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.
*/

var studName = prompt('Inserisci nome studente');
var studSurn = prompt('Inserisci cognome studente');
var studAge = prompt('Inserisci età studente');


//definire array vuoto è corretto?
students =[];


students.push({
      name : studName,
      surname : studSurn,
      age : studAge


})

console.log('Check push proprietà oggetti studenti', students);














