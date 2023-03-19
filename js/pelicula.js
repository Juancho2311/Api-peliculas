
    const pelicula = []
    
     function recupeLocal() {
        return new Promise((resolve) => {
            let tituloPel = document.getElementById("txtBuscar").value
            fetch(`http://www.omdbapi.com/?t=${tituloPel}&apikey=354d8e71`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    pelicula.push(data)
                    resolve("Carga Peli")

                })
        })
    }

    function mostrarPelicula() {
        let listaPeliculas = ""
        recupeLocal()
            .then(response => {
                pelicula.forEach(element => {
                    console.log(element)
                    listaPeliculas +=
                        `<div class="pelicula">
            <div class="cartelera">
                <img src="${element.Poster}" alt="#">
            </div>
            <div class="descripcion-pelicula">
                <div class="nombre-pelicula" id="nombre-pelicula">
                    <h1>${element.Title}</h1>
                </div>
                <div class="descripcion">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dolorem culpa. Iure a vitae
                        quod ut enim, officia dolore tenetur distinctio rem ipsum inventore cum nesciunt repellendus
                        provident blanditiis odio.
                        Iusto deserunt suscipit, eligendi sequi fugit temporibus magnam qui non deleniti tempore nulla
                        provident cupiditate quos distinctio natus earum tenetur error reprehenderit nihil debitis
                        laboriosam? Ut eaque dicta nisi repudiandae.</p>
                </div>
                <div class="precio-pelicula" id="precio">
                    <p>Total</p>
                    <p>${element.Title}</p>
                    <button>
                        comprar
                    </button>
                </div>
            </div>
        </div> `
                })
                document.getElementById("listaPeliculas").innerHTML = listaPeliculas
            })
    }


    function detallePeli(pelicula) {
        fetch(pelicula.pelicula.url)
            .then(response => response.json())
            .then(data => {
                let poster = data.Poster
                let titulo = data.Title
                let año = data.Year
                let director = data.Director
                document.getElementById(`poster${pelicula.pelicula.Title}`).src = poster
                document.getElementById(`titulo${pelicula.pelicula.Title}`).innerHTML = `titulo: ${Title} `
                document.getElementById(`año${pelicula.pelicula.Title}`).innerHTML = `año: ${Year} `
                document.getElementById(`director${pelicula.pelicula.Title}`).innerHTML = `director: ${Director} `

            })
    }

    function llamarPelicula(pelicula) {
        localStorage.url = pelicula
    }
