import React from 'react';
import { 
    Container, 
    Header,
    BackIcon,
    ProfileInfo,
    BottomMenu,
    HomeIcon,
    SearchIcon,
    BellIcon,
    EmailIcon,
} from './styles';

const Main:React.FC = () =>{
    return(
        <>
        <Container>
            <Header>
                <button>
                    <BackIcon />
                </button>
                <ProfileInfo>
                    <strong>Diovane Luis Pacheti Nunes </strong>
                    <span>612 Tweets</span>
                </ProfileInfo>
            </Header>

            {/* <ProfilePage /> */}

            <BottomMenu>
                <HomeIcon />
                <SearchIcon />
                <BellIcon />
                <EmailIcon />
            </BottomMenu>
        </Container>
        </>
    );
}
export default Main;