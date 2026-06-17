import './style.css'

export default function CadastrarPage () {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [estaEnviando, setEstaEnviando] = useState(false);

    function limparCamposDoFormulario () {
        setNome('');
        setEmail('');
        setSenha('');
    }

    try {
        const resposta = await api.post('/', dadosDoFormulario);
        toast.sucess(resposta.data);
        limparCamposDoFormulario();

    }
    catch (erro) {
        toast.error('Erro ao enviar o formulário.');


    }
    finally {
        setEstaEnviando(false);
    }
}