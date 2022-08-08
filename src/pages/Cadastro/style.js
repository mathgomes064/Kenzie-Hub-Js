import styled from 'styled-components'

export const Container = styled.section`
max-width: 100vw;
min-height: 100vh;
background-color: #121214;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0 0 5vh 0;
overflow-x: hidden;

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
    

    h2{
        width: 100%;
        margin-top: 30px;
        font-size: 18px;
        color: white;
        background-color: #212529;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p{
        margin: 30px 0;   
        color: #868E96;
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