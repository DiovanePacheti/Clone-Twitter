import React, { useState } from 'react';
import ProfilePage from '../ProfilePage';

import {
    Container, 
    Header, 
    ProfileInfo,
    BackIcon, 
    BottomMenu,
    HomeIcon,
    SearchIcon,
    BellIcon,
    EmailIcon
} from './styles';

const Main:React.FC = () =>{

    const [acti, setActi ] = useState<boolean>(false)
    return(
        <Container>
            <Header>
                <button>
                    <BackIcon />
                </button>
                <ProfileInfo>
                    <strong>Diovane Luis Pacheti Nunes</strong>  
                    <span>612 Tweets</span>
                </ProfileInfo>
            </Header>
            <ProfilePage /> 
            <BottomMenu>
                <HomeIcon className="acti" onClick={() =>{setActi(true)}}/>
                <SearchIcon className="acti" onClick={() =>{setActi(true)}} />
                <BellIcon className="acti" onClick={() =>{setActi(true)}}/>
                <EmailIcon className="acti" onClick={() =>{setActi(true)}}/>
            </BottomMenu>
        </Container>
    )
}
export default Main;