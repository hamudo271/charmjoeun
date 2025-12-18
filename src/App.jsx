import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DoctorsPage from './pages/DoctorsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import GeneralTreatmentPage from './pages/GeneralTreatmentPage';
import ImplantPage from './pages/ImplantPage';
import LocationPage from './pages/LocationPage';
import OrthodonticsPage from './pages/OrthodonticsPage';
import IntroPage from './pages/IntroPage';

const App = () => {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col">
                <Navigation />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/intro" element={<IntroPage />} />
                        <Route path="/orthodontics" element={<OrthodonticsPage />} />
                        <Route path="/doctors" element={<DoctorsPage />} />
                        <Route path="/facilities" element={<FacilitiesPage />} />
                        <Route path="/general" element={<GeneralTreatmentPage />} />
                        <Route path="/implants" element={<ImplantPage />} />
                        <Route path="/location" element={<LocationPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
