import { Container, ContainerForm } from './style';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AuthContext } from '../../Providers/UserContext';
import { useContext } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion'

function EditCadastro({setModalEditProfile}){

    const [mostrarSenha, setMostrarSenha] = useState(false)
    const [mostrarSenhaConf, setMostrarSenhaConf] = useState(false)

    const {editarUsuario} = useContext(AuthContext)


    const {register, handleSubmit} = useForm({
    })

    function middleware(data){
        editarUsuario(data, setModalEditProfile)
    }

    return(
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:1}}
            style={{overflow: "hidden"}}>
            <Container>
                    <ContainerForm>
                        <div>
                            <h2>Editar Dados</h2>

                            <button onClick={() => setModalEditProfile(true)} className='voltar'>Voltar</button>
                        </div>

                    <form onSubmit={handleSubmit(middleware)}>

                        <label htmlFor="">Nome</label>
                        <input placeholder='Digite aqui seu nome' type="text" {...register("name")}/>

                        <label htmlFor="">Senha antiga</label>
                        <div className='divDaSenha'>
                            <input className='inputSenha' placeholder='Digite aqui sua senha' type={mostrarSenha? ("text"):("password")} {...register("old_password")}/> 
                            {mostrarSenha?
                            (<AiFillEye onClick={() => setMostrarSenha(!mostrarSenha)} className='olhoAberto'/>):
                            (<AiFillEyeInvisible onClick={() => setMostrarSenha(!mostrarSenha)} className='olhoAberto'/>)}
                        </div>

                        <label htmlFor="">Nova senha</label>
                        <div className='divDaSenha'>
                            <input className='inputSenha' placeholder='Digite novamente sua senha' type={mostrarSenhaConf? ("text"):("password")} {...register("password")}/>
                            {mostrarSenhaConf?
                            (<AiFillEye onClick={() => setMostrarSenhaConf(!mostrarSenhaConf)} className='olhoAberto'/>):
                            (<AiFillEyeInvisible onClick={() => setMostrarSenhaConf(!mostrarSenhaConf)} className='olhoAberto'/>)}
                        </div>

                        <label htmlFor="">Bio</label>
                        <input placeholder='Fale sobre você' type="text" {...register("bio")}/>

                        <label htmlFor="">Contato</label>
                        <input placeholder='Opção de contato' type="text" {...register("contact")}/>

                        <label htmlFor="">Selecionar Modulo</label>
                        <select {...register("course_module")}>
                            <option value=""></option>
                            <option value="1º Módulo">1º Módulo</option>
                            <option value="2º Módulo">2º Módulo</option>
                            <option value="3º Módulo">3º Módulo</option>
                        </select>

                        <button type='submit' className='buttonCadastrar'>Editar</button>
                    </form>
                    
                    </ContainerForm>
            </Container>
        </motion.div>
    )
}

export default EditCadastro;