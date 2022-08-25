var $ = function (id) {
    return document.getElementById(id);
}

var validate = function (investment, rate, years){
    if (isNaN(investment)) {
        alert("investment must be numeric");
    }
    
    else if( isNaN(rate) ){
        alert("rate must be numeric");

    }
    else if( isNaN(years) ){
        alert("years must be numeric");

    }
    else if(investment <=0){
        alert("investment must be greater than zero")

    }

    else if(rate <=0){
        alert("rate must be greater than zero")
        
    }
    else if(years <=0){
        alert("years must be greater than zero")
        
    }
    else{
        return true;
    }
}

var calculateClick = function(){
    var investment = parseFloat($("investment").value);
	var rate = parseFloat($("rate").value);
    var years = parseFloat($("years").value);
    if(validate(investment,rate,years)){
        var futureValue = investment;
		for ( let i = 1; i <= years; i++ ) {
			futureValue += futureValue * rate / 100;
		}
		$("future_value").value = futureValue.toFixed();
	} 
}
    
    



window.onload = function (){
    $("calculate").onclick = calculateClick;
}