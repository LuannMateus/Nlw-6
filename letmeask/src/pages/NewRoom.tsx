import { Link } from 'react-router-dom'
// import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button/Button';


export const NewRoom = (): JSX.Element => {

    // const { user } = useAuth();

    return (
        <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>

            <main >
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask"></img>
                    <h2>Criar uma nova sala</h2>

                    <form>
                        <input type="text" placeholder="Digite o código da sala" />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>

                    <p>
                        Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
                    </p>

                </div>
            </main>
        </div>
    )
}