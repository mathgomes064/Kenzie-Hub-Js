import styled from 'styled-components'

export const Container = styled.section`
min-width: 100vw;
max-width: calc(100%);
min-height: 100vh;
box-sizing: border-box;
position: absolute;
top: 0px;
left: 0px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 5vh 0 5vh 0;
overflow-x: hidden;
z-index: 1000;
background-color: rgba(0, 0, 0, 0.5);

    .imgButton{
        width: 370px;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center
    }

    img{
        width: 122px;
        height: 22px; 
    }

    .voltar{
        width: 67px;
        height: 40px;
        background-color: #212529;
        color: white;
        font-size: 12px;
        font-weight: bold;
        border: none;
        border-radius: 4px;
    }

    .voltar:hover{
        background-color: #868E96;
        transition: 144ms;
    }
`;

export const ContainerForm = styled.div`

width: 370px;
background-color: #212529;
border-radius: 4px;
display: flex;
flex-direction: column;
align-items: center; 
padding: 0 0 3vh 0;
    
    div{
        width: 90%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h2{
        width: 100%;
        font-size: 18px;
        color: white;
        background-color: #212529;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .voltar{
        width: 67px;
        height: 40px;
        background-color: #343B41;
        color: white;
        font-size: 12px;
        font-weight: bold;
        border: none;
        border-radius: 4px;
    }

    button:hover{
        background-color: #868E96;
        transition: 144ms;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    label{
        width: 97%;
        font-size: 13px;
        color: white;
        background-color: #212529;

    }

    input{
        width: 330px;
        height: 48px;
        border: none;
        border-radius: 4px;
        background-color: #343B41;
        padding-left: 10px;
        color: white;
    }

    .divDaSenha{
        background-color: red;
        width: 340px;
        height: 50px;
        border-radius: 4px;
        background-color: #343B41;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }


    .olhoAberto{
        width: 20px;
        height: 20px;
        margin: 0 10px 0 0;
        color: white;
        cursor: pointer;
    }

    .inputSenha{
        width: 85%;
        height: 50px;
        outline: 0;
        padding: 0 0 0 10px;
    }

    span{
        width: 100%;
        font-size: 12px;
        color: red;
        display: flex;
        justify-content: flex-start;
    }

    select{
        width: 340px;
        height: 48px;
        border: none;
        border-radius: 4px;
        background-color: #343B41;
        padding: 0 10px;
        color: white;
    }

    button{
        width: 340px;
        height: 48px;
        border-radius: 4px;
        border: none;
        font-size: 16px;
        color: white;
        cursor: pointer;
    }

    .buttonCadastrar{
        background-color:#FF577F;
    }

    .buttonCadastrar:hover{
        background-color: #59323F;
        transition: 144ms;
    }

`;