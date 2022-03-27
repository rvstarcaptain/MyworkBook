let cel = document.getElementById('celsius');
        let far = document.getElementById('farhenheit');
        cel.addEventListener('input',function(){
            
            let c= (cel.value * 9/5) + 32
            far.value = c;
        })
        far.addEventListener('input',function(){
            
            if(far.value == false){
               return cel.value= Number(0);
            }else{
                let f = ((far.value - 32) * 5/9 )
                cel.value= f.toFixed(4);
            }
        })