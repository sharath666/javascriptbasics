function findMissingLetter(array)
{
    alphabetArray = ["a", "b", "c", "d","e", "f", "g", "h" ,"i", "j" ,"k", "l", "m", "n", "o", "p","q", "r","s", "t", "u", "v", "w", "x","y", "z"];

for(let i=0; i<array.length;i++){
    
        if (array[i] == array[i].toLocaleUpperCase()){

        
    if((alphabetArray.indexOf(array[i+1].toLocaleLowerCase()) - alphabetArray.indexOf(array[i].toLocaleLowerCase())) > 1){
        ind =  alphabetArray.indexOf(array[i])+1
    return alphabetArray[ind].toLocaleUpperCase()
    }
          }
    
    else{
            
    if((alphabetArray.indexOf(array[i+1]) - alphabetArray.indexOf(array[i])) > 1){

    return alphabetArray[i+1]
        }
        }
    }

                
}
                  

//console.log(findMissingLetter(['a','b','c','d','f']))

console.log(findMissingLetter(['O','Q','R','S']))