function countVowels(text) {
  // Write your code here!
  var numberOfVowels = 0;
  for(var i= 0; i< text.length; i++){
    
    if (isVowal(text.charAt(i)))
      numberOfVowels++;
  }
  return numberOfVowels;
}

function isVowal(c){
  if (c == 'A' || c == 'a' ||
      c == 'E' || c == 'e' ||
      c == 'I' || c == 'i' ||
      c == 'O' || c == 'o' ||
      c == 'U' || c == 'u')
    return true;
  else
    return false;
}

countVowels('Orange');
countVowels('Rhythm');
