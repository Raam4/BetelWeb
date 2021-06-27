function todo(checkbox, val) {
    var checks = document.getElementsByName("filter");
    if (val) {
        for (var i = 0; i < checks.length; i++) {
            checkbox.checked = true;
            checks[i].checked = true;
            mostrar(checks[i].value);
        }
    } else {
        if (checkbox.checked) {
            for (var i = 0; i < checks.length; i++) {
                if (!(checks[i].checked)) {
                    checks[i].checked = true;
                    filtros(checks[i]);
                }
            }
        } else {
            for (var i = 0; i < checks.length; i++) {
                if (checks[i].checked) {
                    checks[i].checked = false;
                    filtros(checks[i]);
                }
            }
        }
    }
}

function filtros(checkbox, cond) {
    var val = checkbox.value;
    var todo = document.getElementById("todo");
    if(cond){
        todo.checked = false;
    }
    if (checkbox.checked) {
        mostrar(val);
    } else {
        ocultar(val);
    }
}

function mostrar(val) {
    var aMostrar = document.getElementsByName(val);
    for (var i = 0; i < aMostrar.length; i++) {
        aMostrar[i].style.display = "flex";
    }
}

function ocultar(val) {
    var aMostrar = document.getElementsByName(val);
    for (var i = 0; i < aMostrar.length; i++) {
        aMostrar[i].style.display = "none";
    }
}


//de otras pag a productos

function pasaParam(enl) {
    enl.href = window.location.href + "&" + enl.href.split("?")[1];
}

function recuperaParam(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function alCargar(prod){
    var checks = document.getElementsByName("filter");
    for (var i = 0; i < checks.length; i++){
        if(checks[i].value == prod){
            checks[i].checked = true;
            mostrar(prod);
        }else if(prod == "todo"){
            todo(document.getElementById(prod), true);
        }else{
            checks[i].checked = false;
        }
    }
}