var i = 0;

function startGame(){
	$('#button-start').find('button').addClass('desaparecer');
	$('#game').addClass('aparecer');
}

function finishGame(){
	$('#contenido').css("display","none");
	$('#finish').css("display","block");
	$('#button-start').css("display","none");
}

var rollTheDice = function() {
    var output = '',
    	faceValue = Math.floor(Math.random() * 6);
        output += "&#x268" + faceValue + "; ";
    document.getElementById('dice').innerHTML = output;
    $("#dice_turn").html((i + 1) + "/3 turns left");
    i++;
    if(i == 3){
    	$("#roll").prop( "disabled", true );
    	setTimeout(function () {
    		finishGame();
	    }, 3500);	
    }
}