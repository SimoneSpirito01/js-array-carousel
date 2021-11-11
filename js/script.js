
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let content = '';
let mignaturs = '';

for (let i = 0; i < items.length; i++) {
    content += `<div class="item">
                    <img src="${items[i]}" alt="${title[i]}">
                    <div class="item-text">
                            <h3>${title[i]}</h3>
                            <p>${text[i]}</p>
                    </div>
                </div>`;
    
    mignaturs += `<div class="prev"><i class="fas fa-chevron-up"></i></div>
                  <div class="next"><i class="fas fa-chevron-down"></i></div>
                  
                  <div class="mignatur">
                     <img src="${items[i]}" alt="${title[i]}">
                  </div>`
}

const itemContainer = document.querySelector('.item-container');
itemContainer.innerHTML = content;

const sliderMin = document.querySelector('.sl-min');
sliderMin.innerHTML = mignaturs;

