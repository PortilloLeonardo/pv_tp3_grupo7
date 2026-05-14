


/*================
Elementos del main
==================*/

main {
  display: grid;
  grid-template-rows: auto auto 1fr;
  width: 100%;
  border-top: 1px solid var(--colorTextoSuave);
  min-height: 0;
}

/*Elementos de introduccion*/
#introduccion {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
  border-bottom: 1px solid var(--colorTextoSuave);
}

h2 {
  font-size: 2.2rem;
  color: var(--colorSubtitulo);
}

#introduccion p {
  font-size: 2.2rem;
  line-height: 1.6;
}

.btn-crear {
  background-color: var(--colorTitulo);
  color: var(--colorFondoGeneral);
  font-family: var(--fuentePrincipal);
  font-weight: bold;
  font-size: 1.8rem;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 0.5rem;
  width: 20rem;
  cursor: pointer;
  align-self: center;
}

.btn-crear:hover,
.btn-crear:focus {
  background-color: var(--colorSubtitulo);
  color: var(--colorFondoGeneral);
}

.btn-crear:active {
  background-color: var(--colorActivacionBrillo);
  transform: translateY(0.5rem);
  color: var(--colorFondoGeneral);
}

/*Elementos de estadisticas*/
#estadisticas {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 3rem;
  border-bottom: 1px solid var(--colorTextoSuave);
}

.contenedor-card {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 3rem;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  width: 22rem;
  height: 17rem;
  min-width: 22rem;
  border: 1px solid var(--colorTextoSuave);
  border-radius: 10px;
}

.card:hover,
.card:focus {
  transform: scale(1.05);
  border-color: var(--colorSubtitulo);
  box-shadow: 0 0.5rem 1.5rem #000000;
}

.card:active {
  transform: scale(0.98);
  border-color: var(--colorActivacionBrillo);
}

.card .etiqueta {
  font-size: 1.8rem;
  color: var(--colorTextoSuave);
  text-align: center;
}
.card .valor {
  font-size: 5rem;
  color: var(--colorTitulo);
  font-weight: bold;
}

/*Elementos de novedades*/
#novedades {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
}

.articulos {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.articulos h3 {
  font-size: 2.5rem;
}

.noticia {
  display: grid;
  grid-template-rows: 20rem 1fr;
  grid-template-rows: auto 1fr;
  border: 1px solid var(--colorTextoSuave);
  border-radius: 1rem;
  overflow: hidden;
}

.noticia h3 {
  background-color: var(--colorFondoMain);
  color: var(--colorTitulo);
  text-align: center;
  padding: 1rem;
  font-size: 2rem;
}

.noticia .miniatura {
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 1.5rem;
  align-items: start;
}

.noticia .miniatura .foto {
  height: 18rem;
  width: 15rem;
  object-fit: contain;
  background-color: white;
  border-radius: 0.5rem;
}

.noticia .resumen {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  font-size: 2rem;
  padding: 1.5rem;
}

.noticia .resumen .publicacion {
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  color: var(--colorTextoSuave);
}