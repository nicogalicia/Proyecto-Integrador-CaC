const formulario = document.getElementById("formu");
const cantidad = document.getElementById("validationServer04");
const categoria = document.getElementById("disabledSelect");
const aPagar = document.getElementById("totalPaga");

// FUNCION DEL EVENTO SUBMIT CON JS
formulario.addEventListener("submit", (e) => {
    
    // SIEMPRE QUE EJECUTAMOS UN EVENTO DESDE JS CON HTML
    // DEBEMOS INICIALIZAR EL EVENTO
    e.preventDefault();


    if (cantidad.value == 0) { // si la cantidad es cero      
        cantidad.classList.add("is-invalid");
        // agrego objeto con push el tipo y mensaje al array de errores
        errores.push({
            tipo: alertEmail,
            msg: "Email Inválido",
        });
    } else {
        let descuento = 0;
        switch (categoria.value) {
            case "Estudiante": 
            descuento = 0.2
            
                break;

            case "Trainee": 
            descuento = 0.5

                break;

            case "Junior": 
            descuento = 0.85
 
                break;
        }
        aPagar.placeholder = "Total a pagar: $"+(200*descuento)*cantidad.value+",00"; 

       /* userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none"); */
    }
    
/*
    alertSuccess.classList.add("d-none");

    // GENERAMOS UN ARRAY CON LOS MENSAJES DE ERROR
    const errores = [];

    
    // validar email
    if (userEmail.value != email) {
        userEmail.classList.add("is-invalid");

        errores.push({
            tipo: alertEmail,
            msg: "Email Inválido",
        });
    } else {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }

    if (parseInt(userPass.value) != pass) {
        errores.push({
            tipo: alertPass,
            msg: "Contraseña Inválida",
        });
    } else {
        alertPass.classList.add("d-none");
    }

    if (errores.length !== 0) {
        pintarMensajeError(errores);
        return;
    }

    console.log("Formulario enviado con éxito");
    pintarMensajeExito();
});


    //valido mail y contraseña

    
    if (userEmail.value != mailsto) {
        // si no coinciden agrego la etiqueta invalid a la class
        userEmail.classList.add("is-invalid");
        // agrego objeto con push el tipo y mensaje al array de errores
        errores.push({
            tipo: alertEmail,
            msg: "Email Inválido",
        });
    } else {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }
    // if (parseInt(userPass.value) != contrasto) {
    if ((userPass.value) != contrasto) {
        errores.push({
            tipo: alertPass,
            msg: "Contraseña Inválida",
        });
    } else {
        alertPass.classList.add("d-none");
    }

    // si el array de errores tiene datos dentro se ejecuta y lo muestra
    if (errores.length !== 0) {
        pintarMensajeError(errores);
        return;
    }

    console.log("Formulario enviado con éxito");
    pintarMensajeExito();
    */
   
});
