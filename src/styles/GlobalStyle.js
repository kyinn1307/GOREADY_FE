import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        display: flex;
        justify-content: center;
        margin : 0;
        font-family : "Pretendard";
        height: 798px;
        width: 393px;
        
        @media all and (max-width: 780px) { 
            width: 100vw;
            height: 100dvh;
        }
    }
`;
