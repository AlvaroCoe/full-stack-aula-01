import './style.css'

export default function Header() {
    return (
        <header className='header'>
            <h1>Gerenciamente de Usários</h1>
            <nav>
                <Link to="/"> Início</Link>
                <Link to="/cadastro">Cadastro</Link>
                <Link to="/usuarios"> Lista de Usuários</Link>
            </nav>
        </header>
    )
}