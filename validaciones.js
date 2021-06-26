
function validador() {
    var msj = document.getElementById("msj");
    var prov = document.getElementById("prov");
    var ok = true;
    var formulario = document.contactoForm;
    for (var i = 0; i <= 4; i++) {
        if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)) {
            formulario[i].style.border = "solid 2px red";
            ok = false;
        } else {
            formulario[i].style.borderColor = "";
            ok = validarEmail();
        }
    }
    
    if(ok = validarFecha(document.getElementById("date"))){
        document.getElementById("date").style.border = "";
    }else{
        document.getElementById("date").style.border = "solid 2px red";
    }

    if (prov.value == "") {
        prov.style.border = "solid 2px red";
        ok = false;
    }else{
        msj.style.border = "";
    }
    if (msj.value == "") {
        msj.style.border = "solid 2px red";
        ok = false;
    }else{
        msj.style.border = "";
    }
    if (ok) {
        formulario.reset();
    }
}

function limpiar() {
    document.getElementById("cuit").style.display = "none";
    document.contactoForm.reset();
}

function validarEmail() {
    var texto = document.getElementById("correo").value;
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var ok = true;
    if (!regex.test(texto)) {
        document.getElementById("correo").style.borderColor = "red";
        ok = false;
    } else {
        document.getElementById("correo").style.borderColor = "";
        ok = true;
    }
    return ok;
}

function showInp() {
    condFiscal = document.getElementById("fiscal").value;
    if (condFiscal == "RI" || condFiscal == "Monotributo") {
        document.getElementById("cuit").style.display = "inline-block";
    }
}

function numeros(string, elem) {//Solo numeros
    var filtro = '1234567890';//Caracteres validos

    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i = 0; i < string.length; i++){
        if (!(filtro.indexOf(string.charAt(i)) != -1)){
            elem.style.borderColor = "red";
        }
        else{
            elem.style.borderColor = "";
        }
    }
}

function validarFecha(campo) {
    var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    if ((campo.value.match(RegExPattern)) && (campo!='')) {
        return true;
    } else {
        return false;
    }
}