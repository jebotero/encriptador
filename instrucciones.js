
    function encriptar(){
            var cadena = document.getElementById("textoProcesar").value;
            //a-z: Valida que solo hayan caracteres en minuscula
		    //\s validate que hayan espacios
		    const nonLowercaseLetters = /[^a-z\s]/g;
		    //valida la cadena
		    var esValido = !nonLowercaseLetters.test(cadena);
            //Si no es valido
                if(!esValido){
                    alert("Texto no valido, debe contener solamente letras minusculas o espacios, pero no otro tipo de caracteres ni letras con acento");
                }	
                else {//si es valido
                var cadenae = cadena.replaceAll("e","enter");
                var cadenai = cadenae.replaceAll("i","imes");
                var cadenaa = cadenai.replaceAll("a" , "ai");
                var cadenao = cadenaa.replaceAll("o","ober");
                var cadenau = cadenao.replaceAll("u","ufat");
                document.getElementById("resultado").value=cadenau;
                formulario_encriptar.reset();
                }
        }       
    

    function desencriptar(){
        var cadena = document.getElementById("resultado").value;
        var cadenau = cadena.replaceAll("ufat" , "u");
        var cadenao = cadenau.replaceAll("ober" , "o");
        var cadenaa = cadenao.replaceAll("ai" , "a" );
        var cadenai = cadenaa.replaceAll("imes" , "i");
        var cadenae = cadenai.replaceAll("enter" , "e");
        document.getElementById("textoProcesar").value=cadenae;
        formulario_desencriptar.reset();
    }

    function copiarPapelera(){
        var copyText = document.getElementById("resultado");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value)
        alert("copiado el text: " + copyText.value);
    }
	
	