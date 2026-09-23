import './App.scss';

import {Routes, Route} from "react-router-dom";

import Header from '../layout/header/index.jsx';
import Footer from '../layout/footer/index.jsx';
import Container from '../layout/container/index.jsx';

import {Guest} from '../pages/guest/Guest.jsx';
import {Login} from '../pages/auth/Login.jsx';
import {Register} from "../pages/auth/Register.jsx";
import CandidateDashboard from "../pages/candidate/dashboard/CandidateDashboard.jsx";
import {RecruiterDashboard} from "../pages/recruiter/dashboard/RecruiterDashboard.jsx";

import {ProtectedRoute} from "../routes/ProtectedRoute.jsx";

function App() {
    return (
        <>
            <Header />
            <div className="app">
                <Container>
                    <Routes>
                        <Route path="/" element={<Guest />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="/candidate"
                            element={
                                <ProtectedRoute role="candidate">
                                    <CandidateDashboard />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/recruiter"
                            element={
                                 <ProtectedRoute role="recruiter">
                                    <RecruiterDashboard />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </Container>
            </div>
            <Footer />
        </>
    );
}

export default App;
