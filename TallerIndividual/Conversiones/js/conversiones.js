const litros = 3.7854118;
const gradosConst = 273.15;
const gradosConst2 = 32;

function galonesalitros(galones){
	var galonesalitros = galones * litros;
	var idGalones = document.getElementById("galones-span");
	idGalones.innerHTML = galones +" galones son: " + galonesalitros + " Litros"
}

function grados(grados){

	var temperatura =0;
	var gradosU;
	var gradosSelected = document.getElementById("select-grados");
	var idGrados = document.getElementById("grados-span");

	if(gradosSelected[gradosSelected.selectedIndex].value == "o1"){

		temperatura = ((9*grados)/5)+gradosConst2;
		gradosU = "ºC";

	}else if(gradosSelected[gradosSelected.selectedIndex].value == "o2"){

		temperatura = grados + gradosConst;
		gradosU = "ºK";

	}else if(gradosSelected[gradosSelected.selectedIndex].value == "o3"){

		temperatura = grados - gradosConst;
		gradosU = "ºC";

	}else if(gradosSelected[gradosSelected.selectedIndex].value == "o4"){

		temperatura= ((5*(grados - gradosConst2))/9)+gradosConst;
		gradosU = "ºF";

	}else if(gradosSelected[gradosSelected.selectedIndex].value == "o5"){

		temperatura = (5*(grados-gradosConst2))/9;
		gradosU = "ºC";

	}else if(gradosSelected[gradosSelected.selectedIndex].value == "o6"){

		temperatura = ((9*(grados - gradosConst))/5)+gradosConst2;
		gradosU = "ºK";

	}

	idGrados.innerHTML = temperatura + gradosU;
}

function gravedad(weight){

	var idGravedad = document.getElementById("gravedad-span");
	var gravedadMoon = .17 * 9.8;
	var weightMoon = weight * gravedadMoon;
	idGravedad.innerHTML = "Su peso en la Luna es: " + weightMoon + " N";
}
