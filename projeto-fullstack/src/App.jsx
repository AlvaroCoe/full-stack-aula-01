import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <main>
      <Routes>

        <Route path="/" element= {<HomePage/>} />
        <Route path="/cadastro" element= {<CadastrarPage/>} />
        <Route path="/usuarios" element= {<ListaUsuariosPage/>} />

      </Routes>
     </main>
    </>
  )
}

export default App
