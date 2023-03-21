const key = "&apikey=375fbfd7";
const urlApi = "http://www.omdbapi.com/?s=";

// funcionalida del buscador con tecla Enter
document.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    buscar();
  }
});

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
      data.Search.forEach((element) => {
        let titulo = element.Title;
        let año = element.Year;
        let tipo = element.Type;
        let poster = element.Poster;
        let resumen = element.Plot;
        let codigo = element.imdbID;
        console.log(codigo);
        listasPeliculas += `
                <div class="pelicula">
                    <div class="cartelera">
                            <a onclick="nombrepelicula('${codigo}')" href="descripcion-pelicula.html">
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
                                    <div class="button">
                                    <a onclick="favoritos('${codigo}')" >
                                    <img style="height: 20px; width: 20px;" src="/img/icons8-me-gusta-48.png" alt="">
                                    </a>
                                    </div>
                            </div>
                        </div>
                </div>
                `;
      });
      document.getElementById("listaPeliculas").innerHTML = listasPeliculas;
      document.getElementById("resultados").innerHTML = "";
    });
}

function nombrepelicula(codigo) {
  localStorage.setItem("codigo", codigo);
}

function autocompletado() {
  let titulos = "";
  let busqueda = document.getElementById("txtBuscar").value;
  document.getElementById("txtBuscar").innerHTML = busqueda;
  if (busqueda.length >= 3) {
    fetch(`${urlApi}${busqueda}${key}`)
      .then((response) => response.json())
      .then((data) => {
        data.Search.forEach((element) => {
          let titulo = element.Title;
          let codigo = element.imdbID;
          let poster = element.Poster;
          titulos += `
                    <div style="display: flex; flex-direction: row; align-items: center; margin-top: 6px;>
                        <a onclick="nombrepelicula('${codigo}') href="/html/descripcion-pelicula.html">
                        <img style="height: 80px; width: 80px;" src="${poster}" alt="">
                        ${titulo}
                        </a>
                    </div>
                    `;
        });
        document.getElementById("resultados").innerHTML = titulos;
      });
  } else {
    document.getElementById("resultados").innerHTML = "";
  }
}

// off-canvas
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "red";
}
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "";
}

// lista-favoritos

fav = [];
function favoritos(id) {
  fav.push(id);
  console.log(fav)
}

//imprimir datos
function imprimir() {
  favos = "";
  let favo = fav;
  favo.forEach((element) => {
    let url = `http://www.omdbapi.com/?i=${element}&apikey=a0f6ccb`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        favos += `
          <div class="card mx-3  my-3" style="width: 18rem;">
            <a onclick="local('${data.imdbID}')" href="otro.html">
            <img src="${data.Poster}" class="card-img-top" alt="...">
          </a>
            <div class="card-body">
              <h5 class="card-title">${data.Title}</h5>
              <p class="card-text">año: ${data.Year}</p>

            </div>
            <a onclick="eliminar('${data.imdbID}')" class="btn btn-primary">eliminar</a>
          </div>`;
          console.log(favos)
        document.getElementById("favoritos").innerHTML = favos;
      });
  });
}

function eliminar(id) {
  console.log(id);
  if (fav.includes(id)) {
    let salir = fav.indexOf(`${id}`);
    fav.splice(salir, 1);
    imprimir();
  }
}
