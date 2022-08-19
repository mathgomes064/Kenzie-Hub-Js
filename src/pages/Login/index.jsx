import { Container, ContainerForm } from './style';
import { useContext, useState } from 'react'
import { AiFillEyeInvisible } from 'react-icons/ai';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthContext } from '../../Providers/UserContext'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AiFillEye } from 'react-icons/ai';
import logo from '../../img/logo.svg'
import * as yup from 'yup';

function Login(){

    const [mostarSenha, setMostarSenha] = useState(false)

    const {Logar} = useContext(AuthContext);

    const history = useHistory()

    const formSchema = yup.object().shape({
        email: yup.string().required("Email obrigatório"),
        password: yup.string().required("Senha obrigatório")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    console.log(errors)
    return(
        <Container>
                <img src={logo} alt="logo" />
                <ContainerForm>
                    <h2>Login</h2>

                <form action="" onSubmit={handleSubmit(Logar)}>
                    <label htmlFor="">Email</label>
                    <input placeholder='Email' type="text" {...register("email")}/>
                    <span>{errors.email?.message}</span>

                    <label htmlFor="">Senha</label>
                    <div className='divDaSenha'>
                            <input className='inputSenha' placeholder='Senha' type={mostarSenha? ("text"):("password")} {...register("password")}/>
                            {mostarSenha?
                             (<AiFillEye onClick={() => setMostarSenha(!mostarSenha)} className='olhoAberto'/>):
                             (<AiFillEyeInvisible onClick={() => setMostarSenha(!mostarSenha)} className='olhoAberto'/>)}
                            
                    </div>
                    <span>{errors.password?.message}</span>

                    <button type='submit' className='loginButtonEntrar'>Entrar</button>
                </form>
                    <p>Ainda não possui uma conta?</p>

                    <button onClick={() => history.push("/cadastro")} className='loginButtonCadastrar'>Cadastre-se</button>
                </ContainerForm>
        </Container>
    )
}

export default Login;