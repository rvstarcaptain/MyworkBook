let screen = document.getElementById('screen');
let addbuddy = document.getElementById('submit');
let addlist = document.getElementById('ourlist');
addbuddy.addEventListener('click',()=>{
    let list = document.createElement('li');
    list.innerHTML = screen.value;
    addlist.appendChild(list);
    
})