
let btn =document.getElementById('btn')
let Expand = document.getElementById('Expand');
let element = document.getElementById('allcors');
let icon_up =document.getElementById('icon-up');
let icon_down = document.getElementById('icon-down');
let Expand_two = document.getElementById('Expand-two');
let element_two = document.getElementById('allcors-two');
let icon_up_two =document.getElementById('icon-up-two');
let icon_down_two = document.getElementById('icon-down-two');
let icon_up_btn =document.getElementById('icon-up-btn');
let icon_down_btn=document.getElementById('icon-down-btn');

console.log(Expand);
console.log(element);

function addandremove(event) {
    event.preventDefault();
  if (element.classList.contains('d-none')) {
    element.classList.remove('d-none');
    element.classList.add('d-block');
    icon_up.classList.remove('d-none');
    icon_down.classList.add('d-none');
    
  } else {
    element.classList.remove('d-block');
    element.classList.add('d-none');
    icon_up.classList.add('d-none');
    icon_down.classList.remove('d-none');
  }
}

function addandremovetwo(event) {
    event.preventDefault();
  if (element_two.classList.contains('d-none')) {
    element_two.classList.remove('d-none');
    element_two.classList.add('d-block');
    icon_up_two .classList.remove('d-none');
    icon_down_two.classList.add('d-none');
    
  } else {
    element_two.classList.remove('d-block');
    element_two.classList.add('d-none');
    icon_up_two.classList.add('d-none');
    icon_down_two.classList.remove('d-none');
  }
}
function alldipliy(){
  addandremove(event);
  addandremovetwo(event)
  if (element_two.classList.contains('d-none') && element.classList.contains('d-none')){
    icon_up_btn.classList.add('d-none');
    icon_down_btn.classList.remove('d-none');
  }else{
    icon_up_btn.classList.remove('d-none');
    icon_down_btn.classList.add('d-none');
  }
}
// Use 'addEventListener' with the function reference (without parentheses)
Expand.addEventListener('click', addandremove);
Expand_two.addEventListener('click', addandremovetwo)
btn.addEventListener('click',alldipliy)

/*
let btn = document.getElementById('btn');
let Expand = document.getElementById('Expand');
let element = document.getElementById('allcors');
let icon_up = document.getElementById('icon-up');
let icon_down = document.getElementById('icon-down');
let Expand_two = document.getElementById('Expand-two');
let element_two = document.getElementById('allcors-two');
let icon_up_two = document.getElementById('icon-up-two');
let icon_down_two = document.getElementById('icon-down-two');
let icon_up_btn = document.getElementById('icon-up-btn');
let icon_down_btn = document.getElementById('icon-down-btn');

function toggleElement(element, iconUp, iconDown) {
    element.classList.toggle('d-none');
    iconUp.classList.toggle('d-none');
    iconDown.classList.toggle('d-none');
}

function toggleAll() {
    toggleElement(element, icon_up, icon_down);
    toggleElement(element_two, icon_up_two, icon_down_two);

    const allCollapsed = element.classList.contains('d-none') && element_two.classList.contains('d-none');
    icon_up_btn.classList.toggle('d-none', !allCollapsed);
    icon_down_btn.classList.toggle('d-none', allCollapsed);
}

Expand.addEventListener('click', (event) => {
    event.preventDefault();
    toggleElement(element, icon_up, icon_down);
});

Expand_two.addEventListener('click', (event) => {
    event.preventDefault();
    toggleElement(element_two, icon_up_two, icon_down_two);
});

btn.addEventListener('click', (event) => {
    event.preventDefault();
    toggleAll();
});
*/