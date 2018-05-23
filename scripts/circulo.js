

   var inter,t;
   t = 1;
function cambiarTexto(){
   var cantidad = document.getElementById("cantidad");
   var descripcion = document.getElementById("descripcion");
   var cant = ['80','150','39'];
   var desc = ['Reportes y fugas atendidas','Obras realizadas durante el 2017','Colonias con servicio de agua potable'];
   inter=setInterval(function(){
      cantidad.innerHTML=cant[t];
      descripcion.innerHTML=desc[t];
      t+=1;
      if(t===3){
         t=0;
      }
   },3000,"JavaScript");
}

window.addEventListener('load', function (e) {
   cambiarTexto();
})
