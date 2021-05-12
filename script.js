
let input = document.querySelector(".input")
let stud = document.querySelector(".students");
input.style.color="red"
let arr=[];
let i=0;

function clicked(){

    if(input.value !=""){
    
    arr[i]=input.value;
  
           let li=document.createElement("li");
    stud.appendChild(li)
          li.innerText=`(${i+1}) ${arr[i]}`
           i++; 
    }
    console.log(arr)
     input.value="";
}

