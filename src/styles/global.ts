import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: ${props => props.theme.background.primary};
        color: ${props => props.theme.colors.text.primary};

        div{
            display: flex;

            @midia (max-width: 720px){
                flex-direction: column;
            }

        }
    }
`
