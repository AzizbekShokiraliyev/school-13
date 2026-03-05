import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from './assets/soglom.png';
import img2 from './assets/yulduz.png'
import img3 from './assets/jaholat.png'

const Gallery = () => {
  const images = [
    { 
      title: "Mening bag'rikeng dunyom", 
      student: "1-A sinf", 
      class: "1-A sinf",
      description: "2025-yil 7-yanvar kuni 1-“A” sinf o‘quvchilari “Besh tashabbus – besh imkoniyat” shiori asosida “Kelajak yulduzlari” nomli tadbir o‘tkazdilar. Tadbirda o‘quvchilar raqslar, she’rlar, sport o‘yinlari va sahna ko‘rinishlarini namoyish etdilar. Ustozlar hamda ota-onalar ishtirok etdi. Maktab direktori va ota-onalar o‘quvchilarga minnatdorchilik bildirdilar.",
      imgSrc: img2,
      bgColor: "#FFF4E6"
    },
    { 
      title: "Sog'lom hayot tarafdorimiz", 
      student: "4-A sinf Bolajonlari", 
      class: "4-A sinf", 
      description: "Fevral oyida “Giyohvandlikka qarshi kurashish” oyligi doirasida 14-fevral kuni 4-sinflar o‘rtasida diktant va rasm chizish tanlovi o‘tkazildi. O‘quvchilar giyohvandlikning zararini anglab, ijodiy rasmlar chizdilar va savodxonliklarini namoyish etdilar. Diktant tanlovida 4-“A” sinf faxrli o‘rinni egalladi. Rasm musobaqasida ham 4-“A” sinf o‘quvchilari faol ishtirok etdi.",
      imgSrc: img1,
      bgColor: "#E6F7FF"
    },
    { 
      title: "Jaholatga qarshi ma’rifat", 
      student: "4-A sinf jamoasi", 
      class: "4-A sinf",
      description: "4-“A” sinf o‘quvchilari “Jaholatga qarshi ma’rifat” haftaligi doirasida davra suhbati o‘tkazdilar. Unda bilimning ahamiyati, ma’rifatning jamiyatdagi o‘rni va jaholatning salbiy oqibatlari haqida fikr almashildi. O‘quvchilar o‘z mulohazalarini bildirdilar, kitob o‘qish va ilm olish muhimligi ta’kidlandi. Suhbat qiziqarli va mazmunli tarzda o‘tdi.",
      imgSrc: img3,
      bgColor: "#F6FFED"
    }
  ];

  return (
    <section className="gallery-section py-5">
      <Container>
        <div className="text-center mb-5" data-aos="fade-down">
          <h1 className="display-2 fw-black rainbow-text">Mo'jizalar Dunyosi</h1>
          <p className="fs-4 text-secondary">Bizning kichik qahramonlarimiz va ularning katta ijodlari 🎨✨</p>
        </div>

        {images.map((img, i) => (
          <div 
            key={i} 
            className="big-story-row mb-5 shadow-sm" 
            style={{ backgroundColor: img.bgColor }}
            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <Row className={`align-items-center ${i % 2 !== 0 ? 'flex-row-reverse' : ''} g-0`}>
              {/* Katta Rasm Ustuni */}
              <Col lg={7} className="p-0">
                <div className="big-img-frame">
                  <img 
                    src={img.imgSrc} 
                    className="img-fluid story-img" 
                    alt={img.title} 
                  />
                  <div className="image-badge">{img.class}</div>
                </div>
              </Col>

              {/* Ma'lumot (Card) Ustuni */}
              <Col lg={5} className="p-4 p-lg-5">
                <div className="story-content text-center text-lg-start">
                  <div className="art-number text-muted mb-2">Eksponat #{i + 1}</div>
                  <h2 className="fw-black text-dark mb-3 display-5">{img.title}</h2>
                  
                  <div className="author-card mb-4">
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                      <span className="author-emoji">👤</span>
                      <div className="ms-3 text-start">
                        <div className="fw-bold fs-5">Muallif:</div>
                        <div className="text-primary fw-bold">{img.student}</div>
                      </div>
                    </div>
                  </div>

                  <p className="story-text mb-4">
                    {img.description}
                  </p>

                  <div className="interaction-buttons d-flex gap-3 justify-content-center justify-content-lg-start">
                    <button className="btn btn-warning rounded-pill px-4 fw-bold shadow-sm">
                      Menga yoqdi ❤️
                    </button>
                    <button className="btn btn-outline-dark rounded-pill px-4">
                      Kattalashtirish 🔍
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Container>

      <style>{`
        .fw-black { font-weight: 900; font-family: 'Fredoka One', cursive; }
        
        .gallery-section {
          background: #ffffff;
        }

        .rainbow-text {
          background: linear-gradient(45deg, #ff4757, #2f3542, #2ed573, #1e90ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .big-story-row {
          border-radius: 50px;
          overflow: hidden;
          border: 4px solid white;
          transition: 0.3s;
        }

        .big-story-row:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
        }

        .big-img-frame {
          position: relative;
          height: 500px;
          overflow: hidden;
        }

        .story-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.5s;
        }

        .big-story-row:hover .story-img {
          transform: scale(1.05);
        }

        .image-badge {
          position: absolute;
          top: 30px;
          right: 30px;
          background: white;
          padding: 10px 25px;
          border-radius: 50px;
          font-weight: 900;
          color: #ff4757;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .author-card {
          background: rgba(255, 255, 255, 0.6);
          padding: 15px;
          border-radius: 20px;
          display: inline-block;
          min-width: 200px;
        }

        .author-emoji {
          font-size: 2.5rem;
          background: white;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .story-text {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #57606f;
        }

        .art-number {
          font-weight: bold;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        @media (max-width: 992px) {
          .big-img-frame { height: 350px; }
          .big-story-row { border-radius: 30px; }
        }
      `}</style>
    </section>
  );
};

export default Gallery;