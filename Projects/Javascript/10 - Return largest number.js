function getMaxNumber(numbers) {
  var maxNumber =0;
  for(var i=0; i<numbers.length; i++){
  	if(numbers[i] > maxNumber)
  	{
  		maxNumber = numbers[i];
  	}
  }	
  return maxNumber;
}

getMaxNumber([10,20,30,40,50,120,60,70,80,90]);
getMaxNumber([1,4,3,2,6,19,38,11,35,355,12,24])
