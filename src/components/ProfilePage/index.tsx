import React from 'react';

import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage
} from './styles';
const ProfilePage: React.FC = () =>{
    return(
        <Container>
           <Banner>
                <Avatar />
            </Banner>
            <ProfileData>
                {/* <EditButton outlined>
                    Editar perfil
                </EditButton> */}

                <h1>Diovane Luis Pacheti Nunes </h1>    
                <h2>@Diovane_luis</h2>

                <p>
                    Developr at <a href="#">@L2Code</a>
                </p>
                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 21 de junho de 2001
                    </li>
                </ul>
                <Followage>
                    <span>
                        seguindo <strong>94</strong>
                    </span>
                    <span>
                        <strong>53</strong> seguidores
                    </span>
                </Followage>
            </ProfileData> 
        </Container>
    )
}
export default ProfilePage;