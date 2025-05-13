function firstWord(s) {
  if(s.trim() === "" || s.indexOf(" ") != 0){
         return s;
     }
     else{
         let first = s.split(" ")
            return first[1];
     }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
