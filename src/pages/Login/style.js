import styled from 'styled-components'

export const Container = styled.section`
width: 100vw;
height: 100vh;
background-color: #121214;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

    img{
        width: 144px;
        height: 20px;
        margin-bottom: 30px;
    }
`;

export const ContainerForm = styled.div`

width: 369px;
height: 502px;
background-color: #212529;
border-radius: 4px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
gap: 35px;
    

    h2{
        font-size: 18px;
        color: white;
        background-color: #212529;
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

    .loginButtonEntrar{
        width: 340px;
        height: 48px;
        border-radius: 4px;
        border: none;
        font-size: 16px;
        color: white;
        cursor: pointer;
        background-color:#FF577F;
    }

    .loginButtonEntrar:hover{
        background-color: #59323F;
        transition: 144ms;
    }

    .loginButtonCadastrar{
        width: 340px;
        height: 48px;
        border-radius: 4px;
        border: none;
        font-size: 16px;
        color: white;
        cursor: pointer;
        background-color: #868E96;
    }

    .loginButtonCadastrar:hover{
        background-color: #343B41;
        transition: 144ms;
    }

    p{
        font-size: 12px;
        color: #868E96;
    }
`;