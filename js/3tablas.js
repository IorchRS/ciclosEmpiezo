
$(window).load(function(){
alert('funciono');
//    $('ul.tabs li a:first').addClass('active');
//$('.secciones #id').hide();
//$('.secciones #id:first').show();

});
        function mifuncion(){
var i;                      
var texto =
'\
<div class="row">\
<div class="col-md-1">tabla del 1</div>\
'
;
for(i = 0 ; i < 10; i++)
{
texto+='<div class="col-md-1">';
texto+=i;
texto+='</div>';
}
texto+='</div>';
texto+='\
<div class="row">\
<div class="col-md-1">tabla del 2</div>\
'
;
for(i = 1 ; i < 11  ; i++){
texto+='<div class="col-md-1">';
texto+=i*2;
texto+='</div>';}
texto+='</div>';
texto+='\
<div class="row">\
<div class="col-md-1">tabla del 3</div>\
'
;
for(i = 1 ; i < 11  ; i++){
    texto+='<div class="col-md-1">';
    texto+=i*3;
    texto+='</div>';}
    texto+='</div>';
    texto+='\
    <div class="row">\
    <div class="col-md-1">tabla del 4</div>\
    '
    ;for(i = 1 ; i < 11  ; i++){
        texto+='<div class="col-md-1">';
        texto+=i*4;
        texto+='</div>';}
        texto+='</div>';
        texto+='\
        <div class="row">\
        <div class="col-md-1">tabla del 5</div>\
        '
        ;for(i = 1 ; i < 11  ; i++){
            texto+='<div class="col-md-1">';
            texto+=i*5;
            texto+='</div>';}
            texto+='</div>';
            texto+='\
            <div class="row">\
            <div class="col-md-1">tabla del 6</div>\
            '
            ;for(i = 1 ; i < 11  ; i++){
                texto+='<div class="col-md-1">';
                texto+=i*6;
                texto+='</div>';}
                texto+='</div>';
                texto+='\
                <div class="row">\
                <div class="col-md-1">tabla del 7</div>\
                '
                ;for(i = 1 ; i < 11  ; i++){
                    texto+='<div class="col-md-1">';
                    texto+=i*7;
                    texto+='</div>';}
                    texto+='</div>';
                    texto+='\
                    <div class="row">\
                    <div class="col-md-1">tabla del 8</div>\
                    '
                    ;for(i = 1 ; i < 11  ; i++){
                        texto+='<div class="col-md-1">';
                        texto+=i*8;
                        texto+='</div>';}
                        texto+='</div>';
                        texto+='\
                        <div class="row">\
                        <div class="col-md-1">tabla del 9</div>\
                        '
                        ;for(i = 1 ; i < 11  ; i++){
                            texto+='<div class="col-md-1">';
                            texto+=i*9;
                            texto+='</div>';}
                            texto+='</div>';
                            texto+='\
                            <div class="row">\
                            <div class="col-md-1">tabla del 10</div>\
                            '
                            ;
for(i = 1; i < 11; i++){
texto+='<div class="col-md-1">';
texto+=i*10;
texto+='</div>';
}
texto+='</div>\
'
;
    document.getElementById("palabra").innerHTML = texto;                
        }     

        function mifuncion2(){
            var i=0;;                      
            var texto="";
            for(j = 1; j < 11; j++)
            {
            texto+='\
            <div class="row">\
            <div class="col-md-1">tabla del '+j+' </div>\
            '
            ;
            for(i = 1; i < 11; i++){
            texto+='<div class="col-md-1">';
            texto+=i*j;
            texto+='</div>';
            }
            texto+='</div>\
            '
            ;
                            }
                document.getElementById("palabra").innerHTML = texto;                
                    }     
             
                    function mifuncion3(){
                        var i;                      
                        var base='\
                       <h1>Nombres</h1>\
                        <div class="row">\
                        <div class="col-md-1">Alumno</div>\
                        <div class="col-md-1">Nombre</div>\
                        <div class="col-md-1">Apellido</div>\
                        <div class="col-md-1">edad</div>\
                      </div>\
                      <div class="row">\
                      <div class="col-md-1">1</div>\
                      <div class="col-md-1">Ramses</div>\
                      <div class="col-md-1">Playa</div>\
                      <div class="col-md-1">30</div>\
                    </div>\
                    <div class="row">\
                    <div class="col-md-1">2</div>\
                    <div class="col-md-1">jhona</div>\
                    <div class="col-md-1">Serio</div>\
                    <div class="col-md-1">22</div>\
                  </div>\
                  <div class="row">\
                  <div class="col-md-1">3</div>\
                  <div class="col-md-1">Liz</div>\
                  <div class="col-md-1">facilito</div>\
                  <div class="col-md-1">36</div>\
                </div>\
                <div class="row">\
                <div class="col-md-1">4</div>\
                <div class="col-md-1">Jorge</div>\
                <div class="col-md-1">Albures</div>\
                <div class="col-md-1">32</div>\
              </div>\
                      '
                        ;
                        var titulo=["Alumno","Nombre","Apellido","edad"];
                        var nombres=["Ramses","Jhonatan","Liz","Jorge"];
                        var Apellido=['playa','serio','facilito','albures'];
                        var edad=['30','22','36','32'];
                        var tabla="";
                        var j;

                        
                    
                        
                        for (i = 0; i < 4; i++){ 
                            tabla += '<div class=row>';
                        tabla+='<div class="col-md-1">'+titulo[i];
                        tabla+='</div>';
                        tabla+='<div class="col-md-1">'+[i];
                        tabla+='</div>';
                        tabla+='<div class="col-md-1">'+nombres[i];
                        tabla+='</div>';
                        tabla+='<div class="col-md-1">'+Apellido[i];
                        tabla+='</div>';
                        tabla+='<div class="col-md-1">'+edad[i];
                        tabla+='</div>';
                        tabla+='</div>';
                    }
                       
                       /* tabla+='<div class="row">\
                        <div class="col-md-1">'+nombres[i]+    
                        '</div>';
                        tabla+='<div class="row">\
                        <div class="col-md-1">'+Apellido[i]+    
                        '</div>';
                        tabla+='<div class="row">\
                        <div class="col-md-1">'+edad[i]+    
                        '</div>';*/    
                            document.getElementById("palabra").innerHTML = tabla;                
                                }     
                         