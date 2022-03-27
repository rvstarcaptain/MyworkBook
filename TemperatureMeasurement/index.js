let cel = document.getElementById('celcius');
        let far = document.getElementById('farhen');
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