import styled, {css} from 'styled-components';
import { ArrowLeft ,Home, Search, Email, Notifications}from '../../styles/Icons';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    /**calculando largura acima de 601px o container vai 
    respeitar os 601px como maximo de largura abaixo de 601 exemplo
    500px o container oculpa 100% da largura 
    este e o conceito deste calc o valor minimo entre os dois
    e aplicado*/
    width: min(601px, 100%);    

    @media(min-width:500px){/* apartir de 500px ou ate no minimo 500px */
        border-left:1px solid var(--outline);
        border-right:1px solid var(--outline);
        
    }    
`;
export const Header = styled.div`
    z-index:2;
    position:sticky; /*vai fixar o heaader ao topo e rolar junto do scroll*/
    top:0;
    background:var(--primary);
    display:flex;
    align-items:center;
    text-align:left;
    padding:8px 0 9px 13px;
    border-bottom:1px solid var(--outline);

    > button{
        padding:8px;
        border-radius:50%;
        outline:0;
        cursor:pointer;

        &:hover{
            background:var(--twitter-dark-hover);
        }
    }
`;
export const BackIcon = styled(ArrowLeft)`
    width:24px;
    height:24px;

    fill:var(--twitter);
`;
export const ProfileInfo = styled.div`
    margin-left:17px;

    display:flex;
    flex-direction:column;

    > strong{
        font-size:19px;
    }
    >span{
        font-size:15px;
        color:var(--gray);
    }
`;

export const BottomMenu = styled.div`
    position:fixed;
    bottom:0;
    left:0;
    z-index:2;
    background:var(--primary);
    width:100%;
    border-top:1px solid var(--outline);
    display:flex;
    justify-content:space-between;
    padding:8px min(46px, max(10vw, 10px));
    @media(min-width:500px){
        display:none;
    }
`;

const IconsCss = css`
    width:34px;
    height:34px;
    cursor:pointer;
    fill:var(--gray);
    &:hover,
    &.active{
        fill:var(--twitter);
    }
`;
export const HomeIcon = styled(Home)`${IconsCss}`;

export const SearchIcon = styled(Search)`${IconsCss}`;
export const BellIcon = styled(Notifications)`${IconsCss}`;
export const EmailIcon = styled(Email)`${IconsCss}`;