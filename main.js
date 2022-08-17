

function isCheck(){
    var number = document.getElementById('no').value;
    var data = document.getElementById('data1');

    if(number>=0){
       const arr = [];
        if(number%2==0){
            var even = parseInt(number);
            for(let i=0;i<3;i++){
                even = even+2;
                arr.push(even);

             }
            data.innerHTML=arr;
         }
        else{
            var odd = parseInt(number);
            for(let i=0;i<3;i++){
                odd = odd + 2;
                arr.push(odd);
              

            }
            data.innerHTML= arr;

        }

    }
    else{
        data.innerHTML="Pls enter positive Number";
    }

}

