import logo from '../../img/logo.svg'
import { Header, DivInfo, Tecnologias, EmDesenvolviemnto } from './style';

import { useHistory } from 'react-router-dom';
// import Modal from '../Modal';
// import { useState } from 'react';

function Home(){
    const history = useHistory()

    // const [modal, setModal] = useState(true)

    const data = JSON.parse(localStorage.getItem("@user-data:user"))
    console.log(data)

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
                    <h1>Olá, {data.user.name}</h1>
                    <p>{data.user.course_module} ({data.user.bio})</p>
                </div>
            </DivInfo>

            <EmDesenvolviemnto>
                <h1>Que pena! Estamos em desenvolvimento :(</h1>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </EmDesenvolviemnto>

            {/* <Tecnologias>
                <div className='divDoHead'>
                    <h2>Tecnologias</h2>
                    <button onClick={() => setModal(false)}>+</button>
                </div>

                <div className='box'>
                    <ul>
                        <li>
                            <div>
                                <h2>React JS</h2>
                                <p>Intermediário</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </Tecnologias>

            {
                modal?

                 ("") : 

                 (<Modal setModal={setModal}/>)
                 
            } */}
        </>
    )
}

export default Home;