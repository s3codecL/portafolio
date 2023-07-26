// función que aplica el estilo a la opción seleccionada en el menu
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones [0] .className = "";
    opciones [1] .className = "";
    opciones [2] .className = "";
    opciones [3] .className = "";
    opciones [4] .className = "";
    link.className = "seleccionado";

    // hacemos desaparecer el menu al seleccionar
    var x = document.getElementById('nav')
    x.className ="";
}

// función que muestra el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

//  detecto el scroll para aplicar la animación de las skills
window.onscroll = function(){
    efectoSkills()
};

// función que aplica la animación de la barra de skills
function efectoSkills(){
    var skills  = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("py").classList.add("barra-progreso3");
        document.getElementById("db").classList.add("barra-progreso4");
        document.getElementById("xls").classList.add("barra-progreso5");
        document.getElementById("pbi").classList.add("barra-progreso6");
    }
}


//  titulos multiples

let titleText = ["Portafolio", "s3codecL", "Desarrollo Web"];
let counter = 0;

setInterval(function () {
    document.title = titleText[counter % titleText.length];
    counter++;
}, 1300);


