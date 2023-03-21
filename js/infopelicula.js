

function traedatos(){
    trailer();
    return new Promise((response) =>{
        const key2 = "&apikey=375fbfd7";
        const url2 = "http://www.omdbapi.com/?i="
        let nombre = localStorage.codigo
        let urlfech = `${url2}${nombre}${key2}`;
        fetch(urlfech)
            .then ((response) => response.json())
            .then ((data) => {
                let poster = data.Poster;
                let titulo = data.Title;
                let año  = data.Year;
                let actores = data.Actors;
                let resumen = data.Plot;
                let tipo = data.Type;
                console.log(data);
                document.getElementById("pelicula").innerHTML = 
                `<div class="pelicula">
                <div class="cartelera">
                        <a href="">
                            <img src="${poster}" alt="#">
                        </a>
                    </div>
                <div class="descripcion-pelicula">
                    <div class="nombre-pelicula" id="nombre-pelicula">
                        <h1>${titulo}</h1>
                    </div>
                    <div class="descripcion">
                        <p>${resumen}</p>
                    </div>
                    <div class="info" id="precio">
                        <p> Año: ${año}</p>
                        <p>Actores: ${actores}</p>
                        <p>Tipo: ${tipo}</p>
                    </div>
                    </div>
                </div>
                `;
            });
    });
}



function trailer() {
    const keyyoutube = "+trailer&key=AIzaSyCc5BjVIg88I10gLnE0rK7MsgyDNxcf15Y";
    const urlyoutube = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=";
    const urlvideo = "https://www.youtube.com/embed/";

    let codigo = localStorage.codigo;
    let urlFet = `${urlyoutube}"${codigo}"${keyyoutube}`;
    console.log(urlFet);
    fetch(urlFet)
    .then ((response) => response.json())
    .then ((data) => {
        console.log(data);
        let codigovideo = data.items[1].id.videoId;
        console.log(video);
        let urlvideoy = `${urlvideo}${codigovideo}`;
        console.log(urlvideoy);
        document.getElementById("video").src = urlvideoy;
    });

}
