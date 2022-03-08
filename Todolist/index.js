let screen=document.getElementById('screen');
let addbuddy = document.getElementById('submit');
let addlist = document.getElementById('ourlist');
addbuddy.addEventListener('click', () => {
    document.getElementById('emptyid').innerText = ""
    
    if (screen.value == "") {

        document.getElementById('emptyid').innerText = "please enter value";

    } else {
        
        let list = document.createElement('li');
        let deletlist = document.createElement('button');
        deletlist.textContent = "Remove";

        list.textContent = screen.value;
        addlist.appendChild(list);
        addlist.appendChild(deletlist);
        deletlist.addEventListener('click', () => {
            addlist.removeChild(list);
            addlist.removeChild(deletlist);
        })

        screen.value=""
    
    }
})

