import { createGlobalStyle } from 'styled-components';

export default  createGlobalStyle`
:root{
    --primary: #000;
    --secondary: #15181C;
    --search:#D9D9D9;
    --gray:#7A7A7A;
    --outline:#2F3336;
    --white:#fff;
    --retweet:#00C06B;
    --like:#E8265E;
    --twitter:#33A1F2;
    --twitter-dark-hover:#011017;
    --twitter-light-hover:#2C8ED6;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,
body,
#root{
    max-height:100vh;
    max-width:100vw;
}

*,
button,
input{
    border:0;
    background: none;
    font-family: -apple-system, system-ui, sans-serif;
    color:var( --white);
}
html{
    background:var( --primary);
}
`;
