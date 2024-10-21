import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
       --vh: 100%;
    }
    body {
        display: flex;
        justify-content: center;
        margin : 0;
        font-family : "Pretendard";
        
        @media all and (max-width: 780px) { 
            width: 100vw;
            height: calc(var(--vh, 1vh) * 100);
        }
    }
`;
