import { Header, DivInfo, Tecnologias} from './style';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../Providers/UserContext';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import {FaRegTrashAlt} from 'react-icons/fa';
import Modal from '../Modal';
import logo from '../../img/logo.svg';
import axios from 'axios';
import { toast } from 'react-toastify';

function Home(){
    const history = useHistory()

    const {user, atualizarUsuario, token} = useContext(AuthContext);

    const [modal, setModal] = useState(true)
    
    async function deletarTech(id){
            await axios.delete(`https://kenziehub.herokuapp.com/users/techs/${id}`,{
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                .then((response) => {toast.success("Tecnologia deletada"); atualizarUsuario()})
                .catch((err) => toast.error("Algo deu errado"))   
    }

    useEffect(atualizarUsuario, []);
        
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
                    <h1>Olá, {user.name}</h1>
                    <p>{user.course_module} ({user.bio})</p>
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
                                <h1>Adicione uma tecnologia</h1>
                            </div>
                         ):
                         (
                            user?.techs?.map((tech) => (
                                <li key={tech.id}>
                                    <div>
                                        <h2>{tech.title}</h2>
                                        <div>
                                            <p>{tech.status}</p>
                                            <button onClick={() => deletarTech(tech.id)}><FaRegTrashAlt/></button>
                                        </div>
                                    </div>
                                </li>
                            ))
                         )}
                    </ul>
                </div>

            </Tecnologias>

            {
                modal?

                 ("") : 

                 (<Modal setModal={setModal}/>)
            }
        </>
    )
}

export default Home;