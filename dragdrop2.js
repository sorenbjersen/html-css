 function iniciar() {
	var imagenes = document.querySelectorAll('#cajaimagenes > img ');
	for(var i = 0; i < imagenes.length; i++){
		imagenes[i].addEventListener('dragstart', arrastrado, false);
	}

	//destino = document.getElementById('cajasoltar');

	soltar = document.getElementById('cajasoltar');

	soltar.addEventListener('dragenter', entrando, false);
	soltar.addEventListener('dragleave', saliendo, false);
	soltar.addEventListener('dragover', function(e){
		e.preventDefault();
	}, false);
	soltar.addEventListener('drop', soltado,false);


		/*
	destino.addEventListener('dragenter', function(e){
		e.preventDefault();
	}, false);	
	destino.addEventListener('dragover', function(e){
		e.preventDefault(); 
	}, false);
	destino.addEventListener('drop', soltado, false);
	*/
}

function entrando(e){
	e.preventDefault();
	soltar.style.background='rgba(0,150,0,2)'
	;
}

function saliendo(e){
	e.preventDefault();
	soltar.style.background='#FFFFff';
}

function finalizado(e){
	elemento = e.target;
	elemento.style.visibility='hidden';
}


function arrastrado(e){
	elemento = e.target;
	e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

function soltado(e){
	e.preventDefault();
	var id = e.dataTransfer.getData('Text');

	if(id != "imagen4"){
		var src = document.getElementById(id).src;
		soltar.innerHTML= '<img src="'+src+'">';
	}else{
		soltar.innerHTML='la imagen no es adminitida';
	}
}

window.addEventListener('load', iniciar, false);
