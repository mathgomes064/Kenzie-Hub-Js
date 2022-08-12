import { ModalBox } from './style';
import { AuthContext } from '../../Providers/UserContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion'
import { useForm } from "react-hook-form";
import { useContext} from 'react';
import * as yup from 'yup';

function Modal({setModal}){

    const {cadastrarTecnologia} = useContext(AuthContext);

    const formSchema = yup.object().shape({
        title: yup.string().required("Nome da tecnologia obrigatório"),
        status: yup.string().required("Status obrigatório")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })


    return(
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:1}}>
            <ModalBox>

                <div className='modal'>
                    <div>
                        <div>
                            <h2>Cadastrar Tecnologia</h2>
                            <button onClick={() => setModal(true)}>X</button>
                        </div>
                    </div>

                    <form action="" onSubmit={handleSubmit(cadastrarTecnologia)}>
                        <label htmlFor="">Nome</label>
                        <input type="text" {...register("title")}/>
                        <span>{errors.title?.message}</span>

                        <label htmlFor="">Selecionar status</label>
                        <select {...register("status")}>
                            <option value="-">-</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <span>{errors.status?.message}</span>

                        <button type='submit'>Cadastrar Tecnologia</button>
                    </form>

                </div>
            
            </ModalBox>
        </motion.div>
    )
}

export default Modal;