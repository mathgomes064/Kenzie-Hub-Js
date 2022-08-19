import styled from "styled-components";

export const Header = styled.header`
 width: 100vw;
 height: 72px;
 border-bottom: 1px solid #212529;
 display: flex;
 justify-content: center;
 align-items: center;
    
    div{
        width: 80%;
        height: 72px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    img{
        width: 106px;
        height: 14px;
    }

    button{
        width: 67px;
        height: 40px;
        background-color: #212529;
        color: white;
        font-size: 12px;
        font-weight: bold;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover{
        background-color: #868E96;
        transition: 144ms;
    }
`;

export const DivInfo = styled.div`
 width: 100vw;
 height: 100px;
 border-bottom: 1px solid #212529;
 display: flex;
 justify-content: center;
 align-items: center;

    div{
        width: 80%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .userInfo{
        width: 40%;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .editButton{
        width: 40%;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }

    .editButton > button{
        width: 32px;
        height: 32px;
        background-color: #212529;
        color: white;
        font-size: 12px;
        font-weight: bold;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .editButton > button:hover{
        background-color: #868E96;
        transition: 144ms;
    }

    h1{
        font-size: 18px;
        color: white;
        margin: 10px 0;
    }

    p{
        font-size: 12px;
        color: #868E96;
        margin: 10px 0;
    }
`;

export const EmDesenvolviemnto = styled.div`
 width: 100vw;
 height: 100px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

    h1{
        font-size: 18px;
        color: white;
        margin: 10px 0;
    }

    p{
        font-size: 12px;
        color: #868E96;
        margin: 10px 0;
    }
`;

export const Tecnologias = styled.section`
width: 100vw;
height: 75vh;
display: flex;
flex-direction: column;
align-items: center;

    .divDoHead{
        width: 80%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }

    .divDoHead > button{
        width: 32px;
        height: 32px;
        background-color: #212529;
        color: white;
        font-size: 16px;
        border: none;
        border-radius: 4px;
    }

    .divDoHead > button:hover{
        background-color: #868E96;
        transition: 144ms;
        cursor: pointer;
    }

    .box{
        width: 80vw;
        height: 60vh;
        border-radius: 4px;
        background-color: #212529;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul{
        width: 98%;
        height: 95%;
        display: flex;
        flex-direction: column;
        overflow: auto;

        ::-webkit-scrollbar{
        background-color: #1d1d1d;
        width: 5px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        }
        ::-webkit-scrollbar-thumb{
        background-color: #5B5B5B;
        border-radius: 5px;
        }
    }

    .box > ul > div{
        font-size: 20px;
        color: white;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .box > ul > div > .gear{
        width: 25px;
        height: 25px;
        -webkit-animation:spin 4s linear infinite;
        -moz-animation:spin 4s linear infinite;
        animation:spin 4s linear infinite;
    }

    @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
    @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

    li{
        width: 98%;
        height: 49px;
        margin: 10px 0;
        border-radius: 4px;
        background-color: #121214;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* li:hover{
        background-color: #343B41;
        transition: 144ms;
    } */

    li > div{
        width: 95%;
        height: 49px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    li > div > h2{
        color: white;
        font-size: 14px;
    }


    .box > ul > li > div > div{
        height: 45px;
        width: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .box > ul > li > div > div > p{
        color: #868E96;
        font-size: 12px;
    }

    .box > ul > li > div > div > div{
        width: 45%;
        display: flex;
        justify-content: space-between;
    }

    .box > ul > li > div > div > div> button{
        width: 32px;
        height: 32px;
        background-color: #121214;
        color: white;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .box > ul > li > div > div > div> button:hover{
        background-color: #212529;
        transition: 144ms;
        cursor: pointer;
    }



`;

