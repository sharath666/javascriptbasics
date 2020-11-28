// if the variables has to reassign there is no problem in using let or var 
// but if u want to reassign the variable again then those variables has to be gloabally declared using var 

var j=0

for(let  i=0; i<10; i++){

    if(i==9){
        j = i
    }
    
}


for(let i=0; i<10;i++){
   if(i==5)
   {
       j = j+i
   }
  
}

console.log(j)


function a (b){
    return `"something ${b}"`
}
console.log(a("helo"))