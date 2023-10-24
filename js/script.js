// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// 1. MILESTONE:
// 
// 2. MILESTONE:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//  3. MILESTONE :
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// Trasformare la stringa foto in una immagine effettiva


// ### BONUS :
// - Organizzare i singoli membri in card/schede
// - Aggiungere un nuovo membro al team

// Creare l’array di oggetti con le informazioni fornite.

"use string";

/* <div class="col-4">
    <div class="box-card">
        <img src="" alt="">  <!-- picture-->
            <h4></h4>  <!-- nome -->
            <h5></h5>  <!--  role -->
    </div>
</div> */

// creo array contenente gli elementi del team
const ourTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        picture: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        picture: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        picture: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        picture: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        picture: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        picture: 'barbara-ramos-graphic-designer.jpg'
    }
];

const rowEl = document.querySelector('.row');


// ciclo per stampare gli elementi dell'array
// for (let i = 0; i < ourTeam.length; i++) {
    for(let value of ourTeam){ // cicla e prende solo il valore
    printBox(value);

};
console.log(ourTeam);

// creare nuova card

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
 const newEmployer = {
    name: document.getElementById('newName').value,
    role: document.getElementById('newRole').value,
    picture: document.getElementById('newPicture').value,
 }
 ourTeam.push(newEmployer);
printBox(newEmployer);
reset()

});
// creo funzione per mettere le box dentro a html
function printBox(team){
    const col = document.createElement("div");
    col.classList.add("col-4");
    const template = `     
        <div class="box-card ">
            <img src="/img/${team.picture}" alt=""> 
            <div class ="d-flex flex-column align-items-center" id="text-card">         
            <h3>${team.name}</h3>       
            <h4>${team.role}</h4>   
            </div> 
         </div> 
        `;
    col.innerHTML = template;
    rowEl.append(col);

};

// creo una funzione che mi cancella tutto 
function reset (){
  document.getElementById('newName').value ='';
  document.getElementById('newRole').value ='';
  document.getElementById('newPicture').value ='';

 }
