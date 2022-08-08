import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import logo from '../../img/logo.svg'
import axios from "axios"
import { toast } from 'react-toastify'

import { Container, ContainerForm } from './style';
import { useHistory } from 'react-router-dom';

function Cadastro(){

    const history = useHistory()

    const formSchema = yup.object().shape({
        name: yup.string()
        .required("Nome obrigatório")
        .matches("[A-Z][a-z].* [A-Z][a-z].*", "Apenas letras são permitidas"),
        email: yup.string()
        .required("Email obrigatório")
        .email("Email inválido"),
        password:yup.string()
        .required("Senha Obrigatória")
        .min(8)
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
          "Pelo menos uma letra maiúscula, um número e caractere especial, 8 caracteres mínimos."
        ),
        confirmPassword: yup.string()
        .required("Confirmação de senha obrigatória")
        .oneOf([yup.ref("password"), null], "As senhas devem ser identicas"),
        contact: yup.string()
        .required("Contato obrigatório"),
        bio: yup.string()
        .required("Escreva um pouco sobre você"),
        course_module: yup.string()
        .required("Módulo obrigatório")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmitFunction = (data) => {
        console.log(data)
        toast.promise(
        axios.post("https://kenziehub.herokuapp.com/users", data)
        .then((response) => setTimeout(history.push("/"), 5000))
        .catch((err) => console.log(err)), {pending: "Cadastrando...", success: "Usuário cadastrado!", error: "Algo deu errado!"})
        
    }
    
    console.log(errors)

    return(
        <Container>
                <div className='imgButton'>
                    <img src={logo} alt="logo" />

                    <button onClick={() => history.push("/")} className='voltar'>Voltar</button>
                </div>
                <ContainerForm>
                    <h2>Crie sua conta</h2>

                    <p>Rapido e grátis, vamos nessa</p>

                <form onSubmit={handleSubmit(onSubmitFunction)}>

                    <label htmlFor="">Nome</label>
                    <input placeholder='Digite aqui seu nome' type="text" {...register("name")}/>
                    <span>{errors.name?.message}</span>

                    <label htmlFor="">Email</label>
                    <input placeholder='Digite aqui seu email' type="text" {...register("email")}/>
                    <span>{errors.email?.message}</span>

                    <label htmlFor="">Senha</label>
                    <input placeholder='Digite aqui sua senha' type="password" {...register("password")}/>
                    <span>{errors.password?.message}</span>

                    <label htmlFor="">Confirmar Senha</label>
                    <input placeholder='Digite novamente sua senha' type="password" {...register("confirmPassword")}/>
                    <span>{errors.confirmPassword?.message}</span>

                    <label htmlFor="">Bio</label>
                    <input placeholder='Fale sobre você' type="text" {...register("bio")}/>
                    <span>{errors.bio?.message}</span>

                    <label htmlFor="">Contato</label>
                    <input placeholder='Opção de contato' type="text" {...register("contact")}/>
                    <span>{errors.contact?.message}</span>

                    <label htmlFor="">Selecionar Modulo</label>
                    <select {...register("course_module")}>
                        <option value=" - "> - </option>
                        <option value="1º Módulo">1º Módulo</option>
                        <option value="2º Módulo">2º Módulo</option>
                        <option value="3º Módulo">3º Módulo</option>
                    </select>
                    <span>{errors.module?.message}</span>

                    <button type='submit' className='buttonCadastrar'>Cadastrar</button>
                </form>
                  
                </ContainerForm>
        </Container>
    )
}

export default Cadastro;