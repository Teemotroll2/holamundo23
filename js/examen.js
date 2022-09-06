

let productos = [

        { nombre: "Batimovil a escala"
        , precio: 400000,
         foto: ["../assets/carrobatman.webp"],
          descripcion: "Batimovil a escala de la ultima pelicula" },

        { nombre: "Camiseta Batman",
         precio: 80000, 
         foto: ["../assets/camisabatman.webp"],
          descripcion: "Camiseta original DC" },
        { nombre: "Gorra Batman",
        precio: 50000,
         foto: ["../assets/baticachucha.jpg"], 
        descripcion: "Gorra original DC" },
        { nombre: "Bati termo DC",
         precio: 35000,
          foto: ["../assets/batitermo.jpg"],
           descripcion: "Termo para bati chocolate" },
        { nombre: "Batmav v Superman",
         precio: 300000,
         foto: ["../assets/batmanysupermanlchera.jpg"],
         descripcion: "Imagen a escala de la pelicula Batman v Superman" },
        
        { nombre: "Bati morral Totto",
         precio: 80000,
         foto: ["../assets/batimochila.jpg"],
         descripcion: "Bolso original DC" },
        
        { nombre: "Silla Gaming Batman",
         precio: 2000000,
         foto: ["../assets/sillabatman.webp"],
         descripcion: "Silla comoda y original DC" },
        
        { nombre: "caja de comics Batman",
         precio: 300000,
         foto: ["../assets/baticajadecomics.jpg"],
         descripcion: "comics Batman originales" },
        
        { nombre: "Bati caja sorpresa",
         precio: 250000,
         foto: ["../assets/cajasorpresabatman.jpg"],
         descripcion: "Caja sorpresa con productos de batman" },
        
        { nombre: "Bati lonchera totto",
         precio: 80000,
         foto: ["../assets/batilonchera.jpg"],
         descripcion: 'Lonchera para llevar tus bati alimentos' }

    ]

    //Rutina para recorrer el arreglo y crear las tarjetas de cada producto

    //1. crear una referencia a un elemento "PADRE" o "BASE" donde anclaremos los demas
    let fila = document.getElementById("fila")

    //2. Necesito recorrer un arreglo
    productos.forEach(function (producto){

        //3. CREAMOS LOS ELEMENTOS NECESARIOS PARA PINTAR LOS PRODUCTOS
        let columna = document.createElement("div") // se cambio un col a un div
        columna.classList.add("col")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card", "shadow", "text-center", "h-100", "p-5")

        let imagen = document.createElement("img")
        imagen.classList.add("card-img-top", "p-3", "h-100", "w-100")
        imagen.src = producto.foto

        let separador = document.createElement("hr") 
        separador.classList.add("w-50", "mx-auto", "d-block")

        let nombre = document.createElement("h1")
        nombre.classList.add("fw-bold", "h5", "mx-3", "text-center")
        nombre.textContent = producto.nombre

        let precio = document.createElement("h6")
        precio.classList.add("text-center", "text-muted")
        precio.textContent = producto.precio

        let descripcion = document.createElement("p")
        descripcion.classList.add("text-danger", )
        descripcion.textContent = producto.descripcion

        let botonAmpliarInfo = document.createElement("button")
        botonAmpliarInfo.setAttribute("type", "button")
        botonAmpliarInfo.classList.add("btn", "btn-outline-dark", "mx-3", "mb-3")
        botonAmpliarInfo.textContent = "Ver producto"


        //VAMOS A ANCLAR (PONER)(DISPONER) LAS ETIQUETAS
        //QUE ACABAMOS DE CREAR EN NUESTRA BASE
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(botonAmpliarInfo)
        columna.appendChild(tarjeta)
        tarjeta.appendChild(separador)
        fila.appendChild(columna)




    })


  



