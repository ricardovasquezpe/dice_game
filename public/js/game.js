﻿var i = 0;

function startGame(){
	$('#button-start').find('button').addClass('desaparecer');
	$('#game').addClass('aparecer');
}

function finishGame(){
	$('#contenido').css("display","none");
	$('#finish').css("display","block");
}

var rollTheDice = function() {
    var output = '',
    	faceValue = Math.floor(Math.random() * 6);
        output += "&#x268" + faceValue + "; ";
    document.getElementById('dice').innerHTML = output;
    i++;
    if(i == 3){
    	$("#roll").prop( "disabled", true );
    	setTimeout(function () {
    		finishGame();
	    }, 3500);	
    }
}