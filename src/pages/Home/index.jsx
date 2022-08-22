import { Header, DivInfo, Tecnologias} from './style';
import { BsFillGearFill } from 'react-icons/bs'
import { FaRegTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../Providers/UserContext';
import { useHistory } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AiFillEdit } from  'react-icons/ai'
import { useState } from 'react';
import { toast } from 'react-toastify';
import Modal from '../Modal';
import ModalEdit from '../ModalEdit';
import EditCadastro from '../ModalEditProfile';  
import logo from '../../img/logo.svg';
import axios from 'axios';

function Home(){
    const history = useHistory()

    const {user, atualizarUsuario, token, setId, setStatus, setTitle} = useContext(AuthContext);

    const [modal, setModal] = useState(true)

    const [modalEdit, setModalEdit] = useState(true)

    const [modalEditProfile, setModalEditProfile] = useState(true)
    
    async function deletarTech(id){
            await axios.delete(`https://kenziehub.herokuapp.com/users/techs/${id}`,{
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                .then((response) => {toast.success("Tecnologia deletada"); atualizarUsuario()})
                .catch((err) => toast.error("Algo deu errado"))   
    }

    useEffect(() => {atualizarUsuario()}, [])
        
    return(
    
        <>
            <Header>
                <div>
                    <img src={logo} alt="logo" />
                    <button onClick={() => {history.push("/") 
                    localStorage.clear()}}>Sair</button>
                </div>
            </Header>

            <DivInfo>
                <div>
                    <div className='userInfo'>
                        <h1>Olá, {user.name}</h1>
                        <p>{user.course_module} ({user.bio})</p>
                    </div>

                    <div className='editButton'>
                        <button onClick={() => setModalEditProfile(false)}><AiFillEdit/></button>
                    </div>
                </div>
            </DivInfo>

            <Tecnologias>
                <div className='divDoHead'>
                    <h2>Tecnologias</h2>
                    <button onClick={() => setModal(false)}>+</button>
                </div>

                <div className='box'>
                    <ul>
                        {user?.techs?.length === 0?
                         (
                            <div>
                                <h1>Adicione uma tecnologia...</h1>
                                <BsFillGearFill className='gear'/>
                            </div>
                         ):
                         (
                            user?.techs?.map((tech) => (
                                <li key={tech.id}>
                                    <div>
                                        <h2>{tech.title}</h2>
                                        <div>
                                            <p>{tech.status}</p>
                                            <div>
                                                <button onClick={() => {setModalEdit(false); setId(tech.id); setStatus(tech.status); setTitle(tech.title)}}><AiFillEdit/></button>
                                                <button onClick={() => deletarTech(tech.id)}><FaRegTrashAlt/></button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                         )}
                    </ul>
                </div>

            </Tecnologias>

            {   
                modalEditProfile?
                (""):

                (<EditCadastro setModalEditProfile={setModalEditProfile}/>)
            
            }

            {
                modalEdit?
                (""):

                (<ModalEdit setModalEdit={setModalEdit}/>)
            }

            {
                modal?

                 ("") : 

                 (<Modal setModal={setModal}/>)
            }
        </>
    )
}

export default Home;