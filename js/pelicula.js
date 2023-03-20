    
    const key = "&apikey=375fbfd7";
    const urlApi = "http://www.omdbapi.com/?s=";

    // funcionalida del buscador con tecla Enter
    document.addEventListener("keyup", function(event){
        if(event.code === 'Enter'){
            buscar()
            }
        })
        
    // funcionalidad de buscar
    function buscar() {
        // validar el id del imput
        let busqueda = document.getElementById("txtBuscar").value;
        document.getElementById("txtBuscar").innerHTML = busqueda;

        // Apartado de cartelera en pantalla principal
        let listasPeliculas = "";
        fetch(`${urlApi}${busqueda}${key}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            data.Search.forEach(element => {
                console.log(element);
                let titulo = element.Title;
                let año = element.Year;
                let tipo = element.Type;
                let poster = element.Poster;
                let resumen = element.Plot
                listasPeliculas += 
                `
                <div class="pelicula">
                    <div class="cartelera">
                            <a href="">
                                <img src="${poster}" alt="imagen de la cartelera">
                            </a>       
                    </div>
                        <div class="descripcion-pelicula">
                            <div class="nombre-pelicula" id="nombre-pelicula">
                                <h1>${titulo}</h1>
                            </div>
                                <div class="info" id="precio">
                                    <p>${año}</p>
                                    <p>${tipo}</p>
                                    <a href="">
                                    <img src="/img/icons8-me-gusta-48.png" alt="">
                                    </a>
                            </div>
                        </div>
                </div>
                `;
            });
            document.getElementById("listaPeliculas").innerHTML = listasPeliculas;
            document.getElementById("resultados").innerHTML ="";
        });

    }

    function nombrepelicula(codigo){
        localStorage.setItem("nombre",codigo)
    }

    
    function autocompletado(){
        let titulos = "";
        let busqueda = document.getElementById("txtBuscar").value;
        document.getElementById("txtBuscar").innerHTML = busqueda;
        if(busqueda.length >=3){
            fetch(`${urlApi}${busqueda}${key}`)
            .then((response) => response.json())
            .then((data) => {
                data.Search.forEach((element)=> {
                    let titulo = element.Title;
                    let codigo = element.imdbID;
                    let poster = element.Poster;
                    titulos += 
                    `
                    <div style="display: flex; flex-direction: row; align-items: center; >
                        <a onclick="nombrepelicula('${codigo}')" href="descripcion-pelicula.html">
                        <img style="height: 80px; width: 80px;" src="${poster}" alt="">
                        ${titulo}
                        </a>
                    </div>
                    `
                });
                document.getElementById("resultados").innerHTML =titulos;
            });
        } else {
            document.getElementById("resultados").innerHTML = "";
        }
    }




















      
      
      
      
      
      
      
      
      
      
      
      
      // const pelicula = []
      
    //  function recupeLocal() {
    //     return new Promise((resolve) => {
    //         let tituloPel = document.getElementById("txtBuscar").value
    //         fetch(`http://www.omdbapi.com/?t=${tituloPel}&apikey=354d8e71`)
    //             .then(response => response.json())
    //             .then(data => {
    //                 console.log(data)
    //                 pelicula.push(data)
    //                 resolve("Carga Peli")

    //             })
    //     })
    // }



    // function mostrarPelicula() {
    //     let listaPeliculas = ""
    //     recupeLocal()
    //         .then(response => {
    //             pelicula.forEach(element => {
    //                 console.log(element)
    //                 listaPeliculas +=
    //                     `<div class="pelicula">
    //         <div class="cartelera">
    //             <img src="${element.Poster}" alt="#">
    //         </div>
    //         <div class="descripcion-pelicula">
    //             <div class="nombre-pelicula" id="nombre-pelicula">
    //                 <h1>${element.Title}</h1>
    //             </div>
    //             <div class="descripcion">
    //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dolorem culpa. Iure a vitae
    //                     quod ut enim, officia dolore tenetur distinctio rem ipsum inventore cum nesciunt repellendus
    //                     provident blanditiis odio.
    //                     Iusto deserunt suscipit, eligendi sequi fugit temporibus magnam qui non deleniti tempore nulla
    //                     provident cupiditate quos distinctio natus earum tenetur error reprehenderit nihil debitis
    //                     laboriosam? Ut eaque dicta nisi repudiandae.</p>
    //             </div>
    //             <div class="precio-pelicula" id="precio">
    //                 <p>Total</p>
    //                 <p>${element.Title}</p>
    //                 <button>
    //                     comprar
    //                 </button>
    //             </div>
    //         </div>
    //     </div> `
    //             })
    //             document.getElementById("listaPeliculas").innerHTML = listaPeliculas
    //         })
    // }


    // function detallePeli(pelicula) {
    //     fetch(pelicula.pelicula.url)
    //         .then(response => response.json())
    //         .then(data => {
    //             let poster = data.Poster
    //             let titulo = data.Title
    //             let año = data.Year
    //             let director = data.Director
    //             document.getElementById(`poster${pelicula.pelicula.Title}`).src = poster
    //             document.getElementById(`titulo${pelicula.pelicula.Title}`).innerHTML = `titulo: ${Title} `
    //             document.getElementById(`año${pelicula.pelicula.Title}`).innerHTML = `año: ${Year} `
    //             document.getElementById(`director${pelicula.pelicula.Title}`).innerHTML = `director: ${Director} `

    //         })
    // }

    // function llamarPelicula(pelicula) {
    //     localStorage.url = pelicula
    // }
