let btn =document.querySelectorAll('#btn');
let close = document.getElementById('close')
let lightBoxContainer =document.getElementById('lightBoxContainer')
console.log(btn);
for(let i=0; i<btn.length;i++){
    btn[i].addEventListener('click' , function(){
     console.log("ruyueifiu")
       lightBoxContainer.style.display="flex"
    })
}

close.addEventListener('click',function(){
    lightBoxContainer.style.display="none";
})