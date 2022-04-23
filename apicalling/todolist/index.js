let screen = document.getElementById('screen');
let list = document.getElementById("list");
document.getElementById('addbuddy').addEventListener('click',add);
function add(){
    let newlist =document.createElement('li');
    newlist.textContent = screen.value;
    let deletbutton = document.createElement('button');
    deletbutton.innerHTML = "remove"
    list.appendChild(newlist);
    list.appendChild(deletbutton);
    screen.value=""
    deletbutton.addEventListener('click',()=>{
        list.removeChild(newlist)
        list.removeChild(deletbutton)
    })
}

let a = [1,2,3,3,3,4,5,5]

let newarray = Array.from(new Set(a));
console.log(newarray)

let b = [1,2,3,3,3,4,5,5];

let filterarray = b.filter((item,index)=> b.indexOf(item)=== index)
console.log(filterarray)