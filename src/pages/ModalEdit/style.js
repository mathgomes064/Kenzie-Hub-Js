import styled from "styled-components";

export const ModalBoxEdit = styled.div` 
width: 100vw;
height: 100vh;
position: absolute;
top: 0px;
left: 0px;
display: flex;
justify-content: center;
align-items: center;
z-index: 1000;
background-color: rgba(0, 0, 0, 0.5);

    .modal{
        width: 369px;
        height: 342px;
        background-color: #212529;
        border-radius: 4px;
    }

    .modal > div{
        width: 100%;
        height: 50px;
        background-color: #343B41;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px 4px 0 0;
    }

    .modal > div > div{
        width: 90%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .modal > div > div > h2{
        font-size: 14px;
        color: white;
    }

    .modal > div > div > button{
        width: 20px;
        height: 20px;
        font-size: 10px;
        background-color: #212529;
        color: white;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
    }

    .modal > div > div > button:hover{
        background-color: #868E96;
        transition: 144ms;
        cursor: pointer;
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
        
    }

    label{
        width: 90%;
        font-size: 12px;
        color: white;
        margin-top: 20px;
    }

    p{
        width: 90%;
        height: 48px;
        border: none;
        border-radius: 4px;
        background-color: #343B41;
        padding-left: 10px;
        color: white;
        display: flex;
        justify-content: flex-start;
        align-items: center
    }

    input{
        width: 90%;
        height: 48px;
        border: none;
        border-radius: 4px;
        background-color: #343B41;
        padding-left: 10px;
        color: white;
    }

    select{
        width: 93%;
        height: 48px;
        border: none;
        border-radius: 4px;
        background-color: #343B41;
        padding-left: 10px;
        color: white;
    }

    span{
        color: red;
        font-size: 14px;
        width: 92%;
        display: flex;
        align-items: center;
    }

    button{
        width: 93%;
        height: 48px;
        border-radius: 4px;
        border: none;
        font-size: 16px;
        color: white;
        cursor: pointer;
        background-color:#FF577F;
        margin: 10px 0;
    }

    button:hover{
        background-color: #59323F;
        transition: 144ms;
    }
`;
