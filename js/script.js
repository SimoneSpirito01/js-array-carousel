

// Consegna: Dati tre array contenenti:
// una lista ordinata di 5 immagini,
// una lista ordinata dei relativi 5 luoghi e
// una lista di 5 news, creare un carosello come nella foto allegata.
// MILESTONE 1 Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// MILESTONE 2 Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3 Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
// titolo e
// testo. Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre.
// BONUS: Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
// Prima di partire a scrivere codice: Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
// Consigli del giorno:
// costruiamo del carosello una versione statica contenente un'immagine grande con del testo ben posizionato e una miniatura. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
// scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
// Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"


const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
    'img/06.jpg',
    'img/07.jpg',
    'img/08.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
    'Italy',
    'Scotland',
    'Colombia'

]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let content = '';
let mignaturs = '';
let dots = '';

for (let i = 0; i < items.length; i++) {
    content += `
                <div class="item">
                    <img src="${items[i]}" alt="${title[i]}">
                    <div class="item-text">
                            <h3>${title[i]}</h3>
                            <p>${text[i]}</p>
                    </div>
                </div>
                `;
    
    mignaturs += `
                <div class="mignatur">
                     <img class="min-img" src="${items[i]}" alt="${title[i]}">
                </div>
                 `;

    dots += `
            <div class="dot"></div>
    
            `;
}

const itemContainer = document.querySelector('.item-container');
itemContainer.innerHTML = content;

const sliderMin = document.querySelector('.sl-min');
sliderMin.innerHTML += mignaturs;

const dotsCont = document.querySelector('.dots');
dotsCont.innerHTML += dots;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let item = document.getElementsByClassName('item');
let mignatur = document.getElementsByClassName('min-img');
let dot = document.getElementsByClassName('dot');
let activeItem = 0;
item[activeItem].classList.add('active');
mignatur[activeItem].classList.add('active-min');
dot[activeItem].classList.add('active-dot');
const minContainer = document.getElementsByClassName('mignatur');
let visMin = activeItem;

for (let y = 0; y < 5; y++){
    minContainer[visMin].classList.add('d-block')
    visMin += 1;
}

next.addEventListener('click', function(){
    console.log(activeItem)
    item[activeItem].classList.remove('active');
    mignatur[activeItem].classList.remove('active-min');
    dot[activeItem].classList.remove('active-dot');
    
    if (activeItem == items.length - 1){
        for (let x = 0; x < 5; x++){
            const acMinVis = document.getElementsByClassName('d-block');
            console.log(acMinVis)
            acMinVis[x].classList.remove('d-block');
            minContainer[x].classList.add('d-block');
        }
        activeItem = 0;
    } else {
        activeItem += 1;
    }

    item[activeItem].classList.add('active');
    mignatur[activeItem].classList.add('active-min');
    dot[activeItem].classList.add('active-dot');
    if (activeItem > 4){
        minContainer[activeItem - 5].classList.remove('d-block');
        minContainer[activeItem].classList.add('d-block');
    }
})

prev.addEventListener('click', function(){
    let firstVisMin = document.querySelector('.d-block > img')
    console.log(firstVisMin);
    if (firstVisMin.classList.contains('active-min') && activeItem != 0){
        console.log(activeItem);
        minContainer[activeItem + 4].classList.remove('d-block');
        minContainer[activeItem - 1].classList.add('d-block');
    }

    item[activeItem].classList.remove('active');
    mignatur[activeItem].classList.remove('active-min');
    dot[activeItem].classList.remove('active-dot');
    
    if (activeItem <= 0){
        let hiMinVis = minContainer.length - 1;
        console.log(minContainer)
        for (let x = 0; x < 5; x++){
            minContainer[x].classList.remove('d-block');
        }
        for (let z = 0; z < 5; z++){
            console.log(hiMinVis)
            minContainer[hiMinVis].classList.add('d-block');
            hiMinVis -= 1;
        }
        activeItem = items.length - 1;
    } else {
        activeItem -= 1;
    }

    item[activeItem].classList.add('active');
    mignatur[activeItem].classList.add('active-min');
    dot[activeItem].classList.add('active-dot');
  
})

for (let j = 0; j < items.length; j++){
    mignatur[j].addEventListener('click', function(){
        item[activeItem].classList.remove('active');
        mignatur[activeItem].classList.remove('active-min');
        dot[activeItem].classList.remove('active-dot');
        activeItem = j;
        item[activeItem].classList.add('active');
        mignatur[activeItem].classList.add('active-min');
        dot[activeItem].classList.add('active-dot');
    })

    dot[j].addEventListener('click', function(){
        if (!(minContainer[j].classList.contains('d-block'))){
            let hiMinVis = j
            console.log(hiMinVis);
            for (let k = 0; k < 5; k++){
                const acTimVis = document.getElementsByClassName('d-block');
                acTimVis[0].classList.remove('d-block')
            }
            for (let z = 0; z < 5; z++){
                console.log(hiMinVis);
                minContainer[hiMinVis].classList.add('d-block');
                
                // controllo 3 perchè è il numero di mignature nascoste
                if (j >= 3){
                    hiMinVis -= 1;
                } else {
                    hiMinVis += 1;
                }
            }
        }
        item[activeItem].classList.remove('active');
        mignatur[activeItem].classList.remove('active-min');
        dot[activeItem].classList.remove('active-dot');
        activeItem = j;
        item[activeItem].classList.add('active');
        mignatur[activeItem].classList.add('active-min');
        dot[activeItem].classList.add('active-dot');
    })
}

