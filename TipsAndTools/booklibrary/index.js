let title = document.getElementById('titleScreen');
let author = document.getElementById('authorScreen')
let price = document.getElementById('priceScreen')
let booklist = document.getElementById('book-list');

document.getElementById('submit').addEventListener('click',addBooks)

function addBooks(){
    let newtitle = document.createElement('li');
    let newauthor = document.createElement('li');
    let newprice = document.createElement('li');
    let deletbook = document.createElement('button')
    deletbook.innerHTML = "X"
    newtitle.innerHTML = ` Title: ${title.value}`
    newauthor.innerHTML = ` Author: ${author.value}`
    newprice.innerHTML = ` Price: ${price.value}`
    booklist.appendChild(newtitle);
    booklist.appendChild(newauthor);
    booklist.appendChild(newprice);
    booklist.appendChild(deletbook);

    deletbook.addEventListener('click',()=>{
        booklist.removeChild(newtitle);
        booklist.removeChild(newauthor);
        booklist.removeChild(newprice);
        booklist.removeChild(deletbook);
    })
    
        
        
    
    title.value=""
    author.value=""
    price.value=""

  console.log('clicked')

}