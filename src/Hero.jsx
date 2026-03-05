import React from 'react';
import './Hero.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Sparkles, Users, Star, Rocket } from 'lucide-react';
import img from '../src/assets/mainImg.png'

const Hero = () => {
  return (
    <div id="home" className="hero-creative">
      <div className="hero-overlay d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="text-start" data-aos="fade-right">
              <div className="badge rounded-pill bg-warning text-dark mb-3 px-3 py-2">
                <Sparkles size={16} className="me-2" />
                Mingbuloq tumanidagi eng quvnoq maktab
              </div>
              <h1 className="display-1 fw-black text-white mb-4">
                13-SONLI <span className="text-warning">BILIM</span> MASKANI
              </h1>
              <p className="lead fs-3 text-white-50 mb-5">
                "Farzand tarbiyasida ota-onaning mas'uliyati – kelajak poydevori!"
              </p>
              <div className="d-flex gap-3">
                <Button variant="warning" className="btn-lg rounded-pill px-5 shadow-lg fw-bold">
                  Sinfimizga kirish
                </Button>
                <Button variant="outline-light" className="btn-lg rounded-pill px-4">
                  Video sayohat
                </Button>
              </div>
            </Col>
            <Col lg={5} className="d-none d-lg-block position-relative" data-aos="zoom-in-left">
         <div className="magic-zone">
    <div className="main-character-wrapper">
      <img 
        src={img}
        alt="Education" 
        className="" 
      />
    </div>
    <div className="speech-bubble pulse-animation">
      Salom, bilimdon do'stlarim! 👋
    </div>
  </div>
</Col>
          </Row>
        </Container>
      </div>

      {/* Stats Cards */}
      <Container className="stats-wrapper mt-n5">
        <Row className="g-4 justify-content-center">
          <Col md={4} data-aos="fade-up" data-aos-delay="100">
            <div className="stat-card-modern p-4 text-center orange-glow">
              <Users size={40} className="mb-3 text-orange" />
              <h2 className="fw-black">692+</h2>
              <p className="text-muted fw-bold">Baxtli Ota-onalar</p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="200">
            <div className="stat-card-modern p-4 text-center blue-glow">
              <Star size={40} className="mb-3 text-blue" />
              <h2 className="fw-black">100%</h2>
              <p className="text-muted fw-bold">Iste'dodlar maskani</p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="300">
            <div className="stat-card-modern p-4 text-center green-glow">
              <Rocket size={40} className="mb-3 text-green" />
              <h2 className="fw-black">5</h2>
              <p className="text-muted fw-bold">Muhim Tashabbus</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;