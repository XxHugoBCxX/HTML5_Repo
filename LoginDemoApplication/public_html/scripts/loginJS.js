$(document).ready(function () {
   $("#login").click(function () {
       var user = $("#user").val();
       var clave = $("#clave").val();
       //Verifixcando campos vacios
       if (user == '' || clave == '') {

           alert("Por Favor Complete los campos...!!!!");
       }

       if (clave.length > 5)
       {
           alert("tamaño maximo permitir es 5 caracteres")
           return false;
       }
   });
});