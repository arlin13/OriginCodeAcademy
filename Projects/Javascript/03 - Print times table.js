function printTimesTable(x) {
	// Write your code here!
	var result="";
	
	for(var i=1; i<=12; i++){
	  result += (x*i) + ",";
	}
	return result.substring(0, result.length-1);
}

printTimesTable(9);
