function drag(e) {
    e.dataTransfer.setData("Text", e.target.id); 
	e.target.style.opacity = '0.4'; 
}

function end(e){
	e.target.style.opacity = ''; 			
	e.dataTransfer.clearData("Data");			
}

function enter(e) {
	return true;
}
function over(e) {
	if ((e.target.className == "containerPiece") || (e.target.id == "puzzleContainer"))
		return false;
	else
	return true;
}

function drop(e){
	e.preventDefault(); 
	var dragElement = e.dataTransfer.getData("Text");
	e.target.appendChild(document.getElementById(dragElement));
	
	comprobarPuzzle();
}


function comprobarPuzzle(){
	if((document.getElementById('piece1').parentNode.id=='one') &&
	  (document.getElementById('piece2').parentNode.id=='two') &&
	  (document.getElementById('piece3').parentNode.id=='three') &&
	  (document.getElementById('piece4').parentNode.id=='four') &&
	  (document.getElementById('piece5').parentNode.id=='five') &&
	  (document.getElementById('piece6').parentNode.id=='six') &&
	  (document.getElementById('piece7').parentNode.id=='seven') &&
	  (document.getElementById('piece8').parentNode.id=='eight') &&
	  (document.getElementById('piece9').parentNode.id=='nine'))
	{
		document.getElementById('bugs').play();

		
	}
}