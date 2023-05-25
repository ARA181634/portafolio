function iniciar(){
        var boton=document.getElementById('guardar');
        boton.addEventListener('click', nuevoitem, false);
        mostrar();
    }
    function nuevoitem(){
        var usu=document.getElementById('usu').value;
        var valor=document.getElementById('texto').value;
        localStorage.setItem(usu,valor);
        mostrar();
        document.getElementById('usu').value='';
        document.getElementById('texto').value='';
    }
    function mostrar(){
        var cajadatos=document.getElementById('cajadatos');
        cajadatos.innerHTML='';
        for(var f=0;f<localStorage.length;f++){
            var usu=localStorage.key(f);
            var valor=localStorage.getItem(usu);
            cajadatos.innerHTML+='<div>'+usu+' - '+valor+'</div>';
        }
    }
    window.addEventListener('load', iniciar, false);
    function elimina()
    {
    
        if(confirm('Está Seguro?')){
            localStorage.clear();
            mostrar();
            }
    }