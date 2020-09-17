const ruleta = document.querySelector("#ruleta");

ruleta.addEventListener("click",girar);

dinero = 50;

function girar(){
    if (dinero >= 20) {
    	let rand = Math.random()*7200; 
    	sumarPuntos(0);
        calcular(rand);
    }  
    else {
    	alert("no te queda suficiente dinero");
    }
}
function sumarPuntos(p){
	dinero += p;
    document.querySelector("#dinero").innerHTML = "Dinero: $" + dinero + "USD";
}


function calcular(rand){
    valor = rand / 360;
    valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
    ruleta.style.transform = "rotate("+rand+"deg)";
    setTimeout(()=>{
    switch(true){
    	case valor > 0 && valor <= 36:
    	    alert("Has ganado una pelota de Volley");
    	    break;
    	case valor > 36 && valor <= 72:
    	    alert("Has ganado una pelota de Volley");
    	    sumarPuntos(20);
    	    break;
        case valor > 72 && valor <= 108:
            alert("Has ganado una pelota de Volley");
            sumarPuntos(5);
            break; 
        case valor > 108 && valor <= 142:
            alert("has ganado una T Shirt");
            sumarPuntos(50);
            break;
        case valor > 144 && valor <= 180:
            alert("has ganado una T Shirt");
            sumarPuntos(100);
            break;
        case valor > 180 && valor <= 216:
            alert("No has sumado puntos");
            break;
        case valor > 216 && valor <= 252:
            alert("has sumado 70 puntos");
            sumarPuntos(70);
            break;
        case valor > 252 && valor <= 288:
            alert("Has ganado una Toalla");
            sumarPuntos(10);
            break;
            case valor > 288 && valor <= 324:
            alert("Has sumado 2 puntos");
            sumarPuntos(10);
            break;
            case valor > 324 && valor <= 360:
            alert("Has ganado una Toalla");
            sumarPuntos(10);
            break;
    }},5000);
}