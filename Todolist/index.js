let ourform=document.getElementById('ourform');
let submit = document.getElementsByClassName('submit')[0];
let screen= document.getElementById('screen');
submit.addEventListener('click',(e)=>{
    console.log(e.screen.value ); 
})

