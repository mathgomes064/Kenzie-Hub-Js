import { Container, ContainerForm } from './style';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../../Providers/UserContext'
import { useForm } from "react-hook-form";
import logo from '../../img/logo.svg'
import * as yup from 'yup';

function Login(){
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
                    <input placeholder='Senha' type="password" {...register("password")}/>
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