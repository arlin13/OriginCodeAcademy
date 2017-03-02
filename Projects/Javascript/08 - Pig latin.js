function convertToPigLatin(text) {
	var wordsArray = text.split(" ");
	var ayWords = ""; 

	for (var i=0; i<wordsArray.length; i++)
	{
		var word = wordsArray[i];
		ayWords += addAy(word) + " ";
	}
	return ayWords.substring(0, ayWords.length-1);
}

function addAy(text){
	var tempText = text;
  if (isVowal(tempText))
  {
    tempText += "w"; 
  }
  else
  { 
    //remove cons
    var cons = "";
    var c= 0;
    while (!isVowal(tempText[c]))
    {
    	cons+= tempText[c];
    	tempText = tempText.substring(1, tempText.length);
    }
    tempText += cons;
  }
  //add ay
  tempText += "ay";
    
  return tempText;
}

function isVowal(text){
  var c = text.charAt(0);
  if (c == 'A' || c == 'a' || c == 'E' || c == 'e' || c == 'I' || c == 'i' || c == 'O' || c == 'o' || c == 'U' || c == 'u')
    return true;
  else
    return false;
}

/* Do not change anything below this line */
/* The following lines call the function you need to complete */
convertToPigLatin('All work and no play makes Jack a dull boy');
//Allway orkway andway onay ayplay akesmay Ackjay away ullday oybay

// convertToPigLatin('Jack');
//ackJay

// convertToPigLatin('Shakespare');
//akespareShay
