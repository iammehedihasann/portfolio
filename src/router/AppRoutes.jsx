
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';     
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import MainLayout from '../layout/MainLayout';


function AppRoutes() {
    return(
        <BrowserRouter>
           <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
             </MainLayout>
        </BrowserRouter>
          
        
    )
}
export default AppRoutes;