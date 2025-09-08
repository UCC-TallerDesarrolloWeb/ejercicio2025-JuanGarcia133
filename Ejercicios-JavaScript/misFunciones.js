/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function converrtirunudades(unidad,Valor)
{
    let metro, pie, pulgada, yarda;
    console.log(Valor);
    console.log(isNaN);

    if (isNaN){
        alert("el valor ingresado es incorrecto");
        metro="";
        pie="";
        pulgada="";
        yarda="";
    }

if(unidad=="unid_metro"){

    metro=Valor;
    pie=3.20*metro;
    pulgada=39.37* metro;
    yarda=1.0936 * metro;

 }else if(unidad=="unid_pie"){
    pie=Valor;
    metro=0.348*pie;
    pulgada=12*pie;
    yarda=0.3333*pie;
 }else if(unidad=="unid_pulgada"){}
   
  document.getElementById("metro").value = metro;
  document.getElementById("pie").value = pie;
  document.getElementById("pulgada").value =pulgada;
  document.getElementById("pie").value = pie;
  document.getElementById("yarda").value = yarda;
  
  

}