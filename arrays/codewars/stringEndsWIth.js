function solution(str1, str2){
reverse_str = str1.split("").reverse().join("")

slicedString = reverse_str.slice(0,str2.length).split("").reverse().join("")
    if(slicedString == str2){
        return true
    }
    else{
        return false
    }
}

console.log(solution("sharath", "as"))


function solution(str, ending){
    return str.endsWith(ending);
  }