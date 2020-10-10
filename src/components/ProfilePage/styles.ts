import styled, {css} from 'styled-components';

import { LocationOn, Cake} from '../../styles/Icons';

export const Container = styled.div`
    display:flex;/**display flex para ocupar todo o espaço */
    flex-direction:column;/**direção coluna */

    max-height:100%;/**altura maxima 100%  */
    overflow-y:auto;/**firefox quando estorar no eixo y scroll auto */
    ::-webkit-scrollbar{
        display:none;
    }
`;

export const Banner = styled.div`
    flex-shrink:0;/**não vai deixar o tamanho encolher */
    width:100%;/** */
    height: min(33vw, 199px);/** altura vai ter 33vw da tela ou 199px */

    background:var(--twitter);

    position:relative;
`;
export const Avatar = styled.div`
    /** o width e height do avatar vai ser de no minimo 45px relativo 
    a 22 porcento do vw do dispositivo e no maximo 135px  */
    width:max(45px, min(135px, 22vw));
    height:max(45px, min(135px, 22vw));

    border:3.75px solid var(--primary);
    background:var(--gray);
    border-radius:50%;

    position: absolute;
    bottom: max(-60px, -10vw);/** bottom de -60px ate 10% DO  vw */
    left:15px;
`;
export const ProfileData = styled.div`
    /** aqui e a distancia do espaçamento  mas a largura da borda do avatar */
    padding: min(calc(10vw + 7px), 67px) 16px 0;
`;

const IconsCss = css`
    width:20px;
    height:20px;

    color:var(--gray);
`;

export const LocationIcon = styled(LocationOn)`${IconsCss}`;
export const CakeIcon = styled(Cake)`${IconsCss}`;
export const Followage = styled.div``;