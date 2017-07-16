function startGame(){
	$('#button-start').find('button').addClass('desaparecer');
	$('#game').addClass('aparecer');
}
function finishGame(){
	$('#contenido').css("display","none");
	$('#finish').css("display","block");
}