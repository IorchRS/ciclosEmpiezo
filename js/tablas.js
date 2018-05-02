var i;
var j;
var resultado="";
var codigo="";

        function Tablas(){
            
            for (j = 1; j < 11; j++)        
           
            {
for (i = 1; i < 11; i++) 
                    resultado += (i*j);
                    codigo+='<div class="container">'+
                    '<div class="row">'+'<div class=col-md=1>'+resultado+'<div>'+'<div>'+'<div>';
                    resultado="";
                    
                } 
             
   
document.getElementById("palabra").innerHTML =codigo;             
                
                }    


               