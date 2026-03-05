import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Sparkles, MapPin, Rocket, Palette, Book } from 'lucide-react';

const Tadbirlar = () => {
  const events = [
    {
      date: "20-Mart",
      title: "Varraklar Sayli",
      desc: "Sultonmurod va uning do'stlari osmonni rangli kapalaklar bilan to'ldirishdi! Eng baland uchgan varrak kimniki?",
      color: "linear-gradient(135deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",
      icon: <Rocket size={40} className="text-white" />,
      bubble: "🪁",
      badge: "Eng quvnoq kun"
    },
    {
      date: "21-Oktabr",
      title: "Til - Bilim Chirog'i",
      desc: "4-A sinfining aqlli bolajonlari 'Bilimlar Ringida' o'zbek tilining naqadar go'zalligini ko'rsatib berishdi!",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: <Book size={40} className="text-white" />,
      bubble: "📜",
      badge: "Zukkolar ringi"
    },
    {
      date: "7-Yanvar",
      title: "Kelajak Yulduzlari",
      desc: "Jajji yulduzchalarimiz ilk marta sahnada raqsga tushib, she'rlar aytishdi. Hamma lol qoldi!",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: <Palette size={40} className="text-white" />,
      bubble: "🌟",
      badge: "Kichik yulduzlar"
    }
  ];

  return (
    <section className="magic-events-section py-5 overflow-hidden">
      {/* Orqa fondagi suzuvchi bulutlar */}
      <div className="cloud-bg item-1">☁️</div>
      <div className="cloud-bg item-2">☁️</div>

      <Container>
        <div className="text-center mb-5" data-aos="zoom-in">
          <div className="kids-title-box mb-4">
             <h2 className="kids-main-title">Bizning <span className="rainbow-text">Mo'jizalar</span></h2>
          </div>
          <p className="fs-4 fw-bold text-secondary">Har bir tadbir - bu yangi sarguzasht! 🎈</p>
        </div>

        <Row className="g-5 justify-content-center">
          {events.map((ev, i) => (
            <Col lg={4} md={6} key={i} data-aos="fade-up" data-aos-delay={i * 200}>
              <div className="kids-adventure-card h-100 shadow-lg">
                <div className="card-top-wave" style={{ background: ev.color }}>
                  <div className="floating-bubble">{ev.bubble}</div>
                  <div className="icon-circle">{ev.icon}</div>
                </div>
                
                <div className="card-body-kids p-4 text-center">
                  <div className="kids-badge mb-3" style={{ color: ev.color.split(' ')[2] }}>
                    {ev.badge}
                  </div>
                  <h3 className="fw-black mb-3" style={{ color: '#333' }}>{ev.title}</h3>
                  <p className="text-muted mb-4 fs-6">{ev.desc}</p>
                  
                  <div className="card-footer-kids d-flex justify-content-between align-items-center">
                    <div className="date-tag">
                      <Sparkles size={14} className="me-1" /> {ev.date}
                    </div>
                    <div className="location-tag">
                      <MapPin size={14} /> Maktab hovlisi
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .magic-events-section {
          background-color: #f0f9ff;
          position: relative;
        }

        .kids-main-title {
          font-family: 'Fredoka One', cursive;
          font-size: 3.5rem;
          color: #2d3436;
        }

        .rainbow-text {
          background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow 5s linear infinite;
        }

        .kids-adventure-card {
          background: white;
          border-radius: 40px;
          border: none;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
          position: relative;
        }

        .kids-adventure-card:hover {
          transform: translateY(-20px) scale(1.03);
          box-shadow: 0 30px 60px rgba(0,0,0,0.15) !important;
        }

        .card-top-wave {
          height: 160px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0 0 50% 50% / 20%;
        }

        .icon-circle {
          background: rgba(255, 255, 255, 0.2);
          padding: 20px;
          border-radius: 50%;
          backdrop-filter: blur(5px);
          border: 2px solid white;
        }

        .floating-bubble {
          position: absolute;
          top: 10px;
          right: 20px;
          font-size: 2.5rem;
          animation: floatBubble 3s infinite ease-in-out;
        }

        .kids-badge {
          font-size: 0.8rem;
          font-weight: 900;
          text-uppercase: uppercase;
          background: #f1f2f6;
          padding: 5px 15px;
          border-radius: 20px;
          display: inline-block;
        }

        .date-tag, .location-tag {
          font-size: 0.85rem;
          font-weight: bold;
          color: #747d8c;
          background: #f1f2f6;
          padding: 8px 12px;
          border-radius: 12px;
        }

        .cloud-bg {
          position: absolute;
          font-size: 5rem;
          opacity: 0.3;
          z-index: 0;
        }
        .item-1 { top: 10%; left: -50px; animation: moveClouds 20s infinite linear; }
        .item-2 { bottom: 10%; right: -50px; animation: moveClouds 25s infinite linear reverse; }

        @keyframes rainbow {
          to { background-position: 200% center; }
        }

        @keyframes floatBubble {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(10deg); }
        }

        @keyframes moveClouds {
          from { transform: translateX(0); }
          to { transform: translateX(100vw); }
        }

        .fw-black { font-weight: 900; }
      `}</style>
    </section>
  );
};

export default Tadbirlar;