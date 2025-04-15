
function suma(){
    let a = Number(prompt("SUMA ---- ingresa el primer numero"));
    let b = Number(prompt("ingresa el segundo numero"));
    let c = a+b;
    return c;
}

function multi(){
    let a = Number(prompt("MULTIPLICAR ---- ingresa el primer numero"));
    let b = Number(prompt("ingresa el segundo numero"));
    let c = a*b;
    return c;
}

function mayorEdad(){
    let c = 0;
    let a = Number(prompt("MAYOR DE EDAD ---- ingresa la edad para determinar si eres mayor o menor"));
    if(a>0 && a<=100){
        if(a >= 18){
            c = "eres mayor de edad"
        }else{
            c = "eres menor de edad"
        }
    }else{
        c = "edad invalida";
    }
    return c;
}

function funcionFor(){
    let a = Number(prompt("ingresa el numero inicial del rango"));
    let b = Number(prompt("ingresa el numero final del rango"));
    if(a<b){
        for (let i = a; i <= b; i++) {
            let c = i % 2;
            if (c === 0) {
    
                console.log(i + " Es par");
            }else{
                console.log(i + " Es inPar");
            }
        }
    }else{
        console.log("rango invalido"); 
    }
    
    
}


function mostrarPrompt(){
    let seleccionUsuario = Number(prompt("Ingresa el numero de lafuncion que quieres realizar"))
    console.log(seleccionUsuario);
    let resultado = 0;

    switch (seleccionUsuario) {    

        case 1:
            console.log("Suma");
            resultado = suma();
            console.log(resultado);
            break;
    
        case 2:
            console.log("Multiplicar");
            resultado = multi();
            console.log(resultado);
            break;

        case 3:
            console.log("Mayor de edad");
            resultado = mayorEdad();
            console.log(resultado);
            break;

        case 4:
            console.log("ciclo for");
            funcionFor();
            break;

        case 5:
            console.log("arrays");
            break;
    }
}






