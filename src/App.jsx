import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { X, Menu } from 'lucide-react'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Hero from './Hero';
import Tadbirlar from './Tabdir';
import Gallery from './Rasmlar';

function App() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <div className="app-shell">
        <Navbar 
          expanded={expanded} 
          onToggle={(val) => setExpanded(val)}
          expand="lg" 
          sticky="top" 
          className="main-navbar py-3 shadow-sm bg-white"
        >
          <Container>
            <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)} className="d-flex align-items-center">
              <span className="brand-box me-2">13</span>
              <div className="brand-text">
                <span className="fs-5 fw-bold d-block">13-MAKTAB</span>
                <span className="text-muted small-text">Boshlang'ich ta'lim</span>
              </div>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler border-0 shadow-none">
              {expanded ? <X size={30} color="#333" /> : <Menu size={30} color="#333" />}
            </Navbar.Toggle>

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto align-items-center">
                <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)} className="nav-item-professional">
                  Bosh sahifa
                </Nav.Link>
                <Nav.Link as={Link} to="/tadbirlar" onClick={() => setExpanded(false)} className="nav-item-professional">
                  Tadbirlar
                </Nav.Link>
                <Nav.Link as={Link} to="/galereya" onClick={() => setExpanded(false)} className="nav-item-professional">
                  Ma'naviyat va Galereya
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/tadbirlar" element={<Tadbirlar />} />
            <Route path="/galereya" element={<Gallery />} />
          </Routes>
        </main>

        <footer className="bg-white text-white py-3 mt-3">
           {/* Footer qismi o'zgarishsiz qoladi... */}
           <Container>
             <div className="row g-4 text-center text-md-start">
               <div className="col-md-6">
                 <h4 className="fw-bold mb-3 text-dark">13-sonli maktab</h4>
                 <p className="text-secondary small">Namangan viloyati, Mingbuloq tumani.</p>
               </div>
               <div className="col-md-6 text-md-end">
                 <p className="small text-secondary">&copy; 2026 Barcha huquqlar himoyalangan.</p>
               </div>
             </div>
           </Container>
        </footer>
      </div>

      <style>{`
        /* Logotip qismi */
        .brand-box {
          background: #0d6efd;
          color: white;
          padding: 8px 12px;
          border-radius: 10px;
          font-weight: 800;
        }
        .small-text { font-size: 11px; letter-spacing: 1px; text-transform: uppercase; }

        /* Kattalar saytidek professional linklar */
        .nav-item-professional {
          color: #333 !important;
          font-size: 16px;
          font-weight: 500;
          padding: 10px 20px !important;
          margin: 0 5px;
          border-radius: 8px;
          transition: all 0.2s ease;
          position: relative;
        }

        .nav-item-professional:hover {
          background-color: #f8f9fa;
          color: #0d6efd !important;
        }

        /* Mobil qurilmalarda "Kattalar" menyusi dizayni */
        @media (max-width: 991.98px) {
          .navbar-collapse {
            position: fixed;
            top: 75px; /* Navbar balandligi bilan bir xil */
            left: 0;
            width: 100%;
            height: calc(100vh - 75px);
            background: #ffffff;
            padding: 20px;
            z-index: 999;
            display: flex;
            flex-direction: column;
            border-top: 1px solid #eee;
          }

          .nav-item-professional {
            width: 100%;
            text-align: left;
            font-size: 20px !important;
            padding: 20px !important;
            margin: 10px 0;
            background: #fdfdfd;
            border: 1px solid #f0f0f0;
            font-weight: 600;
          }

          .nav-item-professional:active {
            background-color: #0d6efd;
            color: white !important;
          }

          /* X tugmasining joylashuvi */
          .custom-toggler {
            padding: 0;
          }
        }

        /* Desktop uchun chiziq effekti */
        @media (min-width: 992px) {
          .nav-item-professional::after {
            content: '';
            position: absolute;
            bottom: 5px;
            left: 50%;
            width: 0;
            height: 2px;
            background: #0d6efd;
            transition: 0.3s;
            transform: translateX(-50%);
          }
          .nav-item-professional:hover::after {
            width: 60%;
          }
        }
      `}</style>
    </Router>
  );
}

export default App;