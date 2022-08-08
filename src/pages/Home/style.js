import styled from "styled-components";

export const Header = styled.header`
 width: 100vw;
 height: 72px;
 background-color: #121214;
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
 background-color: #121214;
 border-bottom: 1px solid #212529;
 display: flex;
 justify-content: center;
 align-items: center;

    div{
        width: 80%;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
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
background-color: #121214;

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

    li{
        width: 98%;
        height: 49px;
        margin: 10px 0;
        border-radius: 4px;
        background-color: #121214;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    li:hover{
        background-color: #343B41;
        transition: 144ms;
    }

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

    li > div > p{
        color: #868E96;
        font-size: 12px;
    }
`;

