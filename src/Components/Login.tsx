import 'boxicons/css/boxicons.min.css';
import { LoginWrapper } from '../styled';


export default function Login() {
   

    return (
        <LoginWrapper>
            <div className="wrapper" role="main">
                <form action="" role="form">
                    <h1>Login</h1>
                    <div className="input-box" role="textbox">
                        <input type="text" placeholder="Nome" required />
                        <i className='bx bxs-user'></i> 
                    </div>
                    <div className="input-box" role="textbox">
                        <input type="password" placeholder="Senha" required />
                        <i className='bx bx-lock-alt'></i> 
                    </div>
                    <div className="lembrar-senha" role="group">
                        <label role="checkbox">
                            <input type="checkbox" />
                            Lembrar senha
                        </label>
                        <a href="#" role="link">Esqueceu sua senha?</a>
                    </div>
                    <button type="submit" className="btn" role="button">Login</button>
                    <div className="cadastrar-link" role="group">
                        <p>Não tem cadastro? <a href="#" role="link">Cadastrar</a></p>
                    </div>

                </form>
            </div>
        </LoginWrapper>
    );
}
