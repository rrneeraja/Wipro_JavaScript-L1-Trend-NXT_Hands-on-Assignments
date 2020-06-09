combination("dog");

function combination(str){
	var strCombination;
	var strCom = [];
	var zTrip = 0;
	
	for(var i = 0;i<str.length;i++)
	{
		var x = "";
		x= str[i];
		strCom[zTrip++] = x;
		for(j = i+1; j <str.length;j++)
		{
			x += str[j];
			strCom[zTrip++] = x;
		}
	}
	var finalCombination = strCom.join(',');
	document.getElementById('demo').innerHTML = finalCombination;
}
