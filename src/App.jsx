import './css/style.css'
import './css/proyectos.css'

import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ListaProyectos from './components/ListaProyectos'

function App() {
  return (
    <>
      <Header />
      <Nav />
      
      <main>
        <ListaProyectos />
      </main>

      <Footer />
    </>
  )
}

export default App
