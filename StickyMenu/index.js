window.addEventListener('scroll',function(){
    let menubar= document.getElementById('menu');
    if(window.pageYOffset>250){
       
       menubar.classList.add('sticky');
    }else{
        menubar.classList.remove('sticky');
    }
})