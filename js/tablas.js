var i;
var j;
var resultado="";
var codigo="";

        function Tablas(){
            
            for (j = 1; j < 11; j++)        
            
            
            
            {
for (i = 1; i < 11; i++) 
codigo += '<div class="container">'+'<div class="row">';
codigo+='<div class=col-md=1>'+(i*j)+'</div>';
codigo+='</div>'+'</div>';

                } 
 
document.getElementById("palabra").innerHTML = codigo;             
                
                }    


               