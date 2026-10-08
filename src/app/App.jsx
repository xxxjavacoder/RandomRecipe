import './App.scss';

import {Routes, Route} from "react-router-dom";

import Header from '../layout/header/index.jsx';
import Footer from '../layout/footer/index.jsx';
import Container from '../layout/container/index.jsx';

import MainPage from "../pages/main-page/index.jsx";

function App() {
    return (
        <>
            <Header />
            <div className="app">
                <Container>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                    </Routes>
                </Container>
            </div>
            <Footer />
        </>
    );
}

export default App;
