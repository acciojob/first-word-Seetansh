function firstWord(s) {
  if(str.trim() === "" || str.indexOf(" ") != 0){
         return str;
     }
     else{
         first = str.split(" ")
            return first[1];
     }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
