import { ModalBox } from './style';

function Modal({setModal}){

    return(
        <>
            <ModalBox>
                <div className='modal'>
                    <div>
                        <div>
                            <h2>Cadastrar Tecnologia</h2>
                            <button onClick={() => setModal(true)}>X</button>
                        </div>
                    </div>

                    <form action="">
                        <label htmlFor="">Nome</label>
                        <input type="text" />

                        <label htmlFor="">Selecionar status</label>
                        <select name="" id="">
                            <option value="">-</option>
                            <option value="">Iniciante</option>
                            <option value="">Intermediário</option>
                            <option value="">Avançado</option>
                        </select>
                        <button>Cadastrar Tecnologia</button>
                    </form>

                </div>
            
            </ModalBox>
        </>
    )
}

export default Modal;