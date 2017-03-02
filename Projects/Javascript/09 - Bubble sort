function bubbleSort(numbers) {
	for(var i=numbers.length-1; i>=0; i--)
	{
		for(var j=numbers.length-i; j>0; j--)
		{
			if (numbers[j] < numbers[j-1]){
				//swap
				var temp = numbers[j];
				numbers[j] = numbers[j-1];
				numbers[j-1] = temp;
			}
		}
	}
	return numbers;
}

bubbleSort([5,4,3,2,1]);
bubbleSort([1,4,3,2,5,1,3,19,30]);
