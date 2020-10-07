import styled from 'styled-components';


export const Container = styled.div`
    display:flex;
    flex-direction:column;
    
    /** Aqui iremos querer que este ontainer ocupe 600px ou 100 da tela */
    width: min(601px, 100%);

    @media(min-width:500px){
        border-left:1px solid var(--outline);
        border-right:1px solid var(--outline);
    }
`;


export const Header = styled.div`
    /** utilizando o position stick para fixar o reader ao topo na rolagem */
    position:sticky;
    top:0;
    background:var( --primary);

    display:flex;
    align-items:center;

    text-align:left;

    padding:8px 0 9px 13px;
    border-bottom:1px solid var( --outline);

    >button{
        padding:8px;
        border-radius:50%;

        outline:0;/*serando o contorno do button*/
        cursor:pointer;

        &:hover{
            background:var(--twitter-dark-hover);
        }
    }
`;
export const BackIcon = styled(MdKeyboardBackspace)``;
export const ProfileInfo = styled.div``;
export const BottomMenu = styled.div``;
export const HomeIcon = styled(AiOutlineHome)`

`;
export const SearchIcon = styled(AiOutlineSearch)`

`;
export const BellIcon = styled(AiOutlineBell)`

`;
// export const EmailIcon = styled``;
export const EmailIcon = styled(AiOutlineMail)`

`;