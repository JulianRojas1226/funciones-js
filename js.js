

function circulo(){
    const figura = document.getElementById('figura');
    figura.classList.add('circulo');

}
function rombo(){
    const figura = document.getElementById('figura');
    figura.classList.add('rombo');
    return figura;
}
function img(){
    const figura = document.getElementById('figura');
    figura.classList.add('img');
    return figura;
}

function move_top(){
    const figura = document.getElementById('figura');
    figura.classList.add('top');
}
function move_left(){
    const figura = document.getElementById('figura');
    figura.classList.add('left');
}
function move_bottom(){
    const figura = document.getElementById('figura');
    figura.classList.add('bottom');
}
function move_right(){
    const figura = document.getElementById('figura');
    figura.classList.add('right');
}
function move_diagonal(){
    const figura = document.getElementById('figura');
    figura.classList.add('diagonal');
}
function color(){
    const figura = document.getElementById('figura');
    figura.style.background = "#000B58";    
}
function btnEstrella(){
    const estrella = document.getElementById('figura');
    estrella.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    
}
function btndegradado(){
    const degradado = document.getElementById('figura');
    degradado.classList.add('deg');
}
function btnanimacion(){
    const animacion = document.getElementById('figura');
    animacion.classList.add('animacion');
}

function panelLateral(){
    const panel = document.getElementById('panel-lateral');
    panel.classList.toggle('active')
}
function panelsuperior(){
    const panels = document.getElementById('panel-superior');
    panels.classList.toggle('active')
}

