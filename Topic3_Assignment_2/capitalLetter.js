capital_letter("the quick brown fox");

function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
	var finalStr = str.join(" ");
	document.getElementById("demo").innerHTML = "Updated String: "+finalStr;
    return finalStr;
}

console.log(capital_letter("the quick brown fox"));