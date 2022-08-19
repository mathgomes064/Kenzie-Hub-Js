import { AuthContext } from '../../Providers/UserContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { ModalBoxEdit } from './style';
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion'
import * as yup from 'yup';

function ModalEdit({setModalEdit}){

    const {editarTecnologia, id, title} = useContext(AuthContext);
    
    const formSchema = yup.object().shape({
        status: yup.string().required("Status obrigatório")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    function middleware(data){
        editarTecnologia(data, setModalEdit, id)
    }
    
    return(
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:1}}>
            <ModalBoxEdit>

                <div className='modal'>
                    <div>
                        <div>
                            <h2>Editar Tecnologia</h2>
                            <button onClick={() => setModalEdit(true)}>X</button>
                        </div>
                    </div>

                    <form action="" onSubmit={handleSubmit(middleware)}>
                        <label htmlFor="">Nome</label>
                        <p>{title}</p>

                        <label htmlFor="">Selecionar status</label>
                        <select {...register("status")}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <span>{errors.status?.message}</span>

                        <button type='submit'>Cadastrar Tecnologia</button>
                    </form>

                </div>
            
            </ModalBoxEdit>
        </motion.div>
    )
}

export default ModalEdit;