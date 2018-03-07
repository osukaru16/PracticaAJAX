function loadXMLDoc() {

    var xmlhttp = new XMLHttpRequest();
    var select = document.getElementById('paises');

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var resultado = JSON.parse(this.responseText);
            // console.log(resultado);
            for (let i of resultado) {
                select.innerHTML += "<option value='" + i.id + "'>" + i.nombre + "</option>";
                console.log(i);
                // console.log(i.getElementsByTagName('NOMBRE')[0]);
            }

        }
    }


    xmlhttp.open("POST", "http://192.168.56.101/DWEC_P13_03.php", true);
    // xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();

}

function miFuncion() {

    var valor = document.getElementById('paises').value;
    var xmlhttpResPuesta = new XMLHttpRequest();
    var regiones = document.getElementById('regiones');
    xmlhttpResPuesta.onreadystatechange = function() {
        if (xmlhttpResPuesta.readyState == 4 && xmlhttpResPuesta.status == 200) {

            var resultado = JSON.parse(xmlhttpResPuesta.responseText);
            // console.log(resultado);
            regiones.innerHTML = "";
            for (let j of resultado) {
                regiones.innerHTML += "<option value='" + j.id + "'>" + j.nombre + "</option>";
                console.log(j);

            }

        }
    }
    console.log(valor);

    xmlhttpResPuesta.open("POST", "http://192.168.56.101/DWEC_P13_03_2.php?", true);
    xmlhttpResPuesta.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttpResPuesta.send("l=" + valor);
    console.log(xmlhttpResPuesta);


}