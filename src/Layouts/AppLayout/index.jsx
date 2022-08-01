import { Container } from '@mui/material';

import Header from '../Header';
import Footer from '../Footer';

const AppLayout = (props) => {
    return (
        <div>
            <Header />
            <div className='mt-container'>
                <Container>
                    { props.children }
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default AppLayout;