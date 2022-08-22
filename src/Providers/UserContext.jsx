import { createContext, useState } from "react"; 
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

export const AuthContext = createContext({});

const AuthProvider = ({children}) =>{

    const [tech, setTech] = useState([])

    const [user, setUser] = useState({})

    const [token, setToken] = useState(JSON.parse(localStorage.getItem("@user-data:token")))
    
    const history = useHistory()
    
    function Logar(data){
        toast.promise(
            axios.post("https://kenziehub.herokuapp.com/sessions", data)
            .then((response) => {localStorage.setItem("@user-data:token", JSON.stringify(response.data.token)); setToken(response.data.token)})
            .then(() => history.push("/home")), {pending: "Logando...", success: "Logado com sucesso", error: "Email ou senha inválido"}
        )
    }
    
    function cadastrarTecnologia(data, setModal){
        setTech([data, ...tech])
        
        axios.post("https://kenziehub.herokuapp.com/users/techs", data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {atualizarUsuario(); toast.success("Tecnologia Cadastrada")})
        .then((response) => setModal(true))
        .catch((err) => console.log(err))
    }

    const [id, setId] = useState("")

    const [status, setStatus] = useState("")

    const [title, setTitle] = useState("")

    function editarTecnologia(data, setModalEdit, id){

        axios.put(`https://kenziehub.herokuapp.com/users/techs/${id}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {atualizarUsuario(); toast.success("Tecnologia Modificada")})
        .then((response) => setModalEdit(true))
        .catch((err) => console.log(err))
    }

    function atualizarUsuario(){
        axios.get("https://kenziehub.herokuapp.com/profile", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {setUser(response.data); history.push("/home")})
        .catch((err) => { history.push("/"); localStorage.clear()})
    }

    const cadastrarUsuario = (data) => {
        console.log(data)
        toast.promise(
        axios.post("https://kenziehub.herokuapp.com/users", data)
        .then((response) => setTimeout(history.push("/"), 5000))
        .catch((err) => console.log(err)), {pending: "Cadastrando...", success: "Usuário cadastrado!", error: "Algo deu errado!"})
    }

    function editarUsuario(data, setModalEditProfile){
        axios.put("https://kenziehub.herokuapp.com/profile", data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {atualizarUsuario(); toast.success("Usuário Editado")})
        .then((response) => setModalEditProfile(true))
        .catch((err) => console.log(err))
    }
    
    return(
        <AuthContext.Provider value={{
         Logar,
         user,
         cadastrarTecnologia,
         atualizarUsuario,
         token,
         cadastrarUsuario,
         id,
         setId,
         status, 
         setStatus,
         title,
         setTitle,
         editarTecnologia,
         editarUsuario
         }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;