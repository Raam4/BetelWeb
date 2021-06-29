
function validador() {
    var fecha = document.getElementById("date");
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

    if (validarFecha(fecha.value)) {
        fecha.style.border = "";
    } else {
        fecha.style.border = "solid 2px red";
        ok = false;
    }

    if (prov.value == "") {
        prov.style.border = "solid 2px red";
        ok = false;
    } else {
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

function numeros(string, elem) {
    var filtro = '1234567890';
    for (var i = 0; i < string.length; i++) {
        if (!(filtro.indexOf(string.charAt(i)) != -1)) {
            elem.style.borderColor = "red";
        }
        else {
            elem.style.borderColor = "";
        }
    }
}

function validarFecha(elem) {
    try {
        var hoy = new Date();
        var fec = new Date(elem);
        if (fec <= hoy) {
            estado = false;
        } else {
            var fecha = elem.split("-");
            var ano = fecha[0];
            var mes = fecha[1];
            var dia = fecha[2];
            var estado = true;

            if ((dia.length == 2) && (mes.length == 2) && (ano.length == 4)) {
                switch (parseInt(mes)) {
                    case 1: dmax = 31; break;
                    case 2: if (ano % 4 == 0 && ano % 400 == 0) dmax = 29; else dmax = 28; break;
                    case 3: dmax = 31; break;
                    case 4: dmax = 30; break;
                    case 5: dmax = 31; break;
                    case 6: dmax = 30; break;
                    case 7: dmax = 31; break;
                    case 8: dmax = 31; break;
                    case 9: dmax = 30; break;
                    case 10: dmax = 31; break;
                    case 11: dmax = 30; break;
                    case 12: dmax = 31; break;
                }
                dmax != "" ? dmax : dmax = -1;
                if ((dia >= 1) && (dia <= dmax) && (mes >= 1) && (mes <= 12)) {
                    for (var i = 0; i < fecha[2].length; i++) {
                        diaC = fecha[2].charAt(i).charCodeAt(0);
                        (!((diaC > 47) && (diaC < 58))) ? estado = false : '';
                        mesC = fecha[1].charAt(i).charCodeAt(0);
                        (!((mesC > 47) && (mesC < 58))) ? estado = false : '';
                    }
                } for (var i = 0; i < fecha[0].length; i++) {
                    anoC = fecha[0].charAt(i).charCodeAt(0);
                    (!((anoC > 47) && (anoC < 58))) ? estado = false : '';
                }
            } else estado = false;
        }
    } catch (e) {
        estado = false;
    }
    return estado;
}