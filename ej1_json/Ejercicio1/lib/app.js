function loadXMLDoc() {

    var xmlhttp = new XMLHttpRequest();
    var valor = document.getElementById('paises').value;
    var respuesta = document.getElementById('respuesta');
    xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                var resultado = JSON.parse(xmlhttp.responseText);
                let paises = '';
                for (let i of resultado) {
                    paises += i.nombre + '<br>';
                }
                respuesta.innerHTML = paises;
            }
        }
        //en el servidor si no está habilitat CORS falla
        //per defecte bloquejades peticions entre dominis
        //http://www.formandome.es/javascript/cors-vs-jsonp-solicitudes-ajax-entre-dominios/
    xmlhttp.open("POST", "http://192.168.56.101/DWEC_P13_01.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("l=" + valor);
    console.log(xmlhttp.responseText);

}