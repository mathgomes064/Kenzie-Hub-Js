import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import logo from '../../img/logo.svg'

import { Container, ContainerForm } from './style';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Login(){

    const history = useHistory()

    const formSchema = yup.object().shape({
        email: yup.string().required("Email obrigatório"),
        password: yup.string().required("Senha obrigatório")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmitFunction = (data) => {
        console.log(data)
        toast.promise(
            axios.post("https://kenziehub.herokuapp.com/sessions", data)
            .then((response) => localStorage.setItem("@user-data:user", JSON.stringify(response.data)))
            .then(() => history.push("/home")), {pending: "Logando...", success: "Logado com sucesso", error: "Email ou senha inválido"}
        )
    }

    console.log(errors)
    return(
        <Container>
                <img src={logo} alt="logo" />
                <ContainerForm>
                    <h2>Login</h2>

                <form action="" on onSubmit={handleSubmit(onSubmitFunction)}>
                    <label htmlFor="">Email</label>
                    <input placeholder='Email' type="text" {...register("email")}/>
                    <span>{errors.email?.message}</span>

                    <label htmlFor="">Senha</label>
                    <input placeholder='Senha' type="password" {...register("password")}/>
                    <span>{errors.password?.message}</span>


                    <button type='submit' className='loginButtonEntrar'>Entrar</button>
                    {/* onClick={() => history.push("/home")}  */}
                </form>
                    <p>Ainda não possui uma conta?</p>

                    <button onClick={() => history.push("/cadastro")} className='loginButtonCadastrar'>Cadastre-se</button>
                </ContainerForm>
        </Container>
    )
}

export default Login;