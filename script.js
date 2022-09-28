

function encriptar(){
    var text = document.getElementById("encriptar").value.toLowerCase();
    //i -> Para que afecte mayus y minus
    //g -> para toda la linea u oracion
    //m -> para que afecte a multiples lineas o parrafos
    var txtCifrando = text.replace(/e/img,"enter");
    var txtCifrando = txtCifrando.replace(/i/img,"imes");
    var txtCifrando = txtCifrando.replace(/a/img,"ai");
    var txtCifrando = txtCifrando.replace(/o/img,"ober");
    var txtCifrando = txtCifrando.replace(/u/img,"ufat");

    document.getElementById("imgLeft").style.display = "none";   
    document.getElementById("text1").style.display = "none";
    document.getElementById("textRight2").innerHTML = txtCifrando;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";

}

function desencriptar(){
    var text = document.getElementById("encriptar").value.toLowerCase();
    //i -> Para que afecte mayus y minus
    //g -> para toda la linea u oracion
    //m -> para que afecte a multiples lineas o parrafos
    var txtCifrando = text.replace(/enter/img,"e");
    var txtCifrando = txtCifrando.replace(/imes/img,"i");
    var txtCifrando = txtCifrando.replace(/ai/img,"a");
    var txtCifrando = txtCifrando.replace(/ober/img,"o");
    var txtCifrando = txtCifrando.replace(/ufat/img,"u");

    document.getElementById("imgLeft").style.display = "none";    
    document.getElementById("text1").style.display = "none";
    document.getElementById("textRight2").innerHTML = txtCifrando;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";

}
function copy(){
    var contenido = document.querySelector("#textRight2");
    contenido.select();
    document.execCommand("copy");
    alert("Se copio");
}