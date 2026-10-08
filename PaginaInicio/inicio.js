// Diccionario con cinco publicidades simuladas.
const publicidades = {
	publicidad1: {
		categoria: "Gaming",
		titulo: "Descubre tu próximo juego",
		descripcion: "Explora aventuras nuevas y encuentra tu siguiente mundo favorito.",
		boton: "Explorar juegos",
	},
	publicidad2: {
		categoria: "Accesorios",
		titulo: "Mejora tu estación gamer",
		descripcion: "Conoce teclados, mouse y accesorios para llevar tus partidas al siguiente nivel.",
		boton: "Ver accesorios",
	},
	publicidad3: {
		categoria: "Tecnología",
		titulo: "Audio para cada partida",
		descripcion: "Disfruta un sonido envolvente y comunícate con tu equipo con claridad.",
		boton: "Conocer más",
	},
	publicidad4: {
		categoria: "Comunidad",
		titulo: "Juega en equipo",
		descripcion: "Encuentra jugadores con tus mismos intereses y comparte estrategias.",
		boton: "Unirme",
	},
	publicidad5: {
		categoria: "Ofertas",
		titulo: "Ofertas para gamers",
		descripcion: "Revisa promociones especiales en juegos y productos seleccionados.",
		boton: "Ver ofertas",
	},
};

// Inserta las cards en un contenedor con id="publicidad".
// Si no existe, se crea al final del documento. Requiere Bootstrap 5.
function renderizarPublicidades() {
	let contenedor = document.getElementsByClassName("publicidad")[0];

	if (!contenedor) {
		contenedor = document.createElement("section");
		contenedor.id = "publicidad";
		document.body.appendChild(contenedor);
	}

	contenedor.className = "container my-5";
	contenedor.innerHTML = `
		<h2 class="mb-4">Publicidad</h2>
		<div class="row">
			${Object.values(publicidades).map((anuncio) => `
				<div class="col">
					<div class="card h-100 shadow-sm">
						<div class="card-body d-flex flex-column">
							<span class="badge text-bg-primary align-self-start mb-2">${anuncio.categoria}</span>
							<h3 class="card-title h5">${anuncio.titulo}</h3>
							<p class="card-text">${anuncio.descripcion}</p>
							<a href="#" class="btn btn-outline-primary mt-auto">${anuncio.boton}</a>
						</div>
						<div class="card-footer text-body-secondary small">Anuncio simulado</div>
					</div>
				</div>
			`).join("")}
		</div>
	`;
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", renderizarPublicidades);
} else {
	renderizarPublicidades();
}
