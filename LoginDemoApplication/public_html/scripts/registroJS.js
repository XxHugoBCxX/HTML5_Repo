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
$(document).ready(function(){
   $("#enviar").click(function(){
       
   var clave = $("#contrseña").val();
   var mes = $("#mes").val();
   var genero = $("#genero").val();
   var telefono = $("#telefono").val();
   if(clave.length < 6)
   {
       alert("La clave deberia tener minimo 6 caracteres");
       return false;
   }
   
   if(mes =='')
   {
       alert("Selecciones mes valido.");
       return false;
   }
   
   if(genero =='')
   {
       alert("Seleccione genero");
       return false;
   }
   
   if(telefono.length < 8)
   {
       alert("Ingrese de celular numero valido");
       return false;
   }
   alert("validaciones OK");
   });
});  