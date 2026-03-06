import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Barcha rasmlarni import qilish
import img1 from './assets/soglom.png';
import img2 from './assets/yulduz.png';
import img3 from './assets/jaholat.png';
import img4 from './assets/img1.jpg';
import img5 from './assets/img2.jpg';
import img6 from './assets/img3.jpg';
import img8 from './assets/img5.jpg';
import img9 from './assets/img6.jpg';
import img10 from './assets/img7.jpg';
import img11 from './assets/img8.jpg';
import img12 from './assets/img9.jpg';
import img13 from './assets/img10.jpg';
import img14 from './assets/img11.jpg';
import img15 from './assets/img12.jpg';
import img16 from './assets/img13.jpg';
import img17 from './assets/img14.jpg';
import img19 from './assets/img16.jpg';
import img21 from './assets/img18.jpg';
import img22 from './assets/img19.jpg';
import img23 from './assets/img20.jpg';
import img24 from './assets/img21.jpg';
import img25 from './assets/img22.jpg';
import img26 from './assets/img23.jpg';
import img27 from './assets/img24.jpg';
import img28 from './assets/img25.jpg';
import img29 from './assets/img26.jpg';
import img30 from './assets/img27.jpg';

const Gallery = () => {
  const images = [
    // 1. Oldingi rasmlar (O'zgarishsiz)
    { 
      title: "Mening bag'rikeng dunyom", 
      student: "O'quvchilar", 
      class: "O'quvchilar",
      description: "2025-yil 7-yanvar kuni 1-“A” sinf o‘quvchilari “Besh tashabbus – besh imkoniyat” shiori asosida “Kelajak yulduzlari” nomli tadbir o‘tkazdilar.",
      imgSrcs: [img2],
      bgColor: "#FFF4E6"
    },
    { 
      title: "Sog'lom hayot tarafdorimiz", 
      student: "4-A sinf Bolajonlari", 
      class: "4-A sinf", 
      description: "Fevral oyida “Giyohvandlikka qarshi kurashish” oyligi doirasida o'tkazilgan rasmlar va diktantlar tanlovidan lavha.",
      imgSrcs: [img1],
      bgColor: "#E6F7FF"
    },
    { 
      title: "Jaholatga qarshi ma’rifat", 
      student: "4-A sinf jamoasi", 
      class: "4-A sinf",
      description: "4-“A” sinf o‘quvchilari o'rtasida bilimning ahamiyati va kitobxonlik targ'ibotiga bag'ishlangan davra suhbati.",
      imgSrcs: [img3],
      bgColor: "#F6FFED"
    },

    // 2. Yangi qo'shilgan rasmlar (Siz aytgan guruhlar bo'yicha)
    { 
      title: "9-may Xotira va qadrlash kuni", 
      student: "Eraliyeva Feruzaxon", 
      class: "2-E sinf oʻquvchilari",
      description: "Mingbuloq tumani 13-sonli umumtaʼlim maktabi 2-E sinf oʻquvchilari 9-may Xotira va qadrlash kuni munosabati bilan motamsaro ona haykali siymosiga gulchambarlar qoʻyishdi.",
      imgSrcs: [img4], // img4 alohida
      bgColor: "#FFF9F0"
    },
    { 
      title: "Buyuk ajdodlarimiz tadbiri", 
      student: "2-E sinf oʻquvchilari", 
      class: "2-E sinf",
      description: "Sinf soatida 'Buyuk ajdodlarimiz' mavzusida 2-E sinf oʻquvchilari sheʼr, ruboiy va gʻazallardan aytib, raqslar ijro qildilar. Alisher va bulbul sahna koʻrinishi ham ijro etildi.",
      imgSrcs: [img5, img6], // 5 va 6 birga
      bgColor: "#F0F5FF"
    },
    { 
      title: "Doʻstlik-bebaho neʼmat", 
      student: "3-E sinf oʻquvchilari", 
      class: "3-E sinf",
      description: `2-E sinf oʻquvchilari sinf soati darsida 'Doʻstlik-bebaho neʼmat' mavzusida qiziqarli mashgʻulot oʻtkazdilar.
      Oʻzaro hurmat, mehr va muhabbat, gʻamxoʻrlik, chin doʻstlik, tuygʻularini rivojlantirish maqsadida olib borildi`,
      imgSrcs: [img8, img9], // 8 va 9 birga (7 olib tashlandi)
      bgColor: "#EFFFFD"
    },
    { 
      title: "Quvnoq startlar", 
      student: "Eraliyeva Feruza", 
      class: "2-E sinf",
      description: `Namangan viloyati Mingbuloq tumanidagi 13-umumiy oʻrta taʼlim maktabining 2-"E" sinf oʻquvchilari oʻrtasida "Quvnoq startlar" boʻlib oʻtdi. "Epchillar" va "Chaqqonlar" guruhlari oʻzaro bellashdilar. "Epchillar" jamoasi 3:1 hisobda gʻoliblikni qoʻlga kiritdilar.`,
      imgSrcs: [img10, img11], // 10 va 11 birga
      bgColor: "#FFF0F0"
    },
    { 
      title: `Oʻquvchilarining yashash sharoiti va holatini`, 
      student: "Eraliyeva Feruza ", 
      class: "2-E sinf",
      description: `2-E sinf rahbari Eraliyeva Feruza 
      sinf oʻquvchilarining yashash sharoiti va holatini oʻrganish jarayonlaridan fotolavhalar`,
      imgSrcs: [img12, img13], // 12 va 13 birga
      bgColor: "#F5F5F5"
    },
    { 
      title: "Qiziqarli matematika", 
      student: "2-E sinf", 
      class: "2-E sinf",
      description: `2-"E" sinf oʻquvchilari "Qiziqarli matematika" toʻgaragida`,
      imgSrcs: [img14, img15], // 14 va 15 birga
      bgColor: "#FEF9E7"
    },
    { 
      title: "Yangi yilim-yaxshi yilim", 
      student: "O'quvchilar", 
      class: "O'quvchilar",
      description: `Mingbuloq tumani 13-umumiy o'rta maktabi 13-umumiy o'rta ta'lim maktabi boshlanĝich sinf oʻqituvchisi Yuldasheva Matlubaning oʻquvchilar bilan o'tkazgan "Yangi yilim-yaxshi yilim" nomli tadbiridan lavhalar`,
      imgSrcs: [img16, img17], // 16 va 17 birga
      bgColor: "#EBF5FB"
    },
    { 
      title: "Vatanimiz tarixini oʻrganamiz", 
      student: "O'quvchilar", 
      class: "O'quvchilar",
      description: `Mingbuloq tumani 13-umumiy oʻrta taʼlim maktabi boshlangʻich sinf oʻqituvchisi M.Yuldashevaning "Vatanimiz tarixini oʻrganamiz"mavzusida Axsikentga oʻquvchilar bilan qilgan sayohatidan lavhalar`,
      imgSrcs: [img19], // 19 alohida
      bgColor: "#F4ECF7"
    },
    { 
      title: "Iqtidorli oʻquvchilar", 
      student: "boshlangʻich sinf ", 
      class: "boshlangʻich sinf ",
      description: `Mingbuloq tumani 13-umumiy oʻrta taʼlim maktabi boshlangʻich sinf oʻqituvchisi Yuldasheva Matlubaning iqtidorli oʻquvchilar bilan ishlash,kreativlikka yoʻnaltirish boʻyicha tashkil etgan ish jarayonidan lavhalar`,
      imgSrcs: [img21, img22], // 21 va 22 birga
      bgColor: "#E8F8F5"
    },
    { 
      title: "Dolzarb 90 kun", 
      student: "O'quvchiar", 
      class: "O'quvchiar",
      description: `"Dolzarb 90 kun" 50-kun Mingbuloq tuman maktabgacha va maktab ta'limi bo'limiga qarashli 13-sonli umumiy o'rta ta'lim maktabda "Dolzab 90 kun" tashabbusi doirasida 50-kun munosabati bilan o'quvchilar ishtirokida "Ovoz bolalar" musiqa tadbirini o'tkazish bo'yicha navbatdagi  tadbirlar o'tkazildi.  Barcha kelgan  o'quvchilar faol ishtirok etdilar.`,
      imgSrcs: [img23, img24], // 23 va 24 birga
      bgColor: "#FEF5E7"
    },
    { 
      title: "Siyosiy- ma'rifat soati", 
      student: "13-sonli umumiy o'rta ta'lim maktabi", 
      class: "MMTB",
      description: `Mingbuloq tumani MMTBga qarashli 13-sonli umumiy o'rta ta'lim maktabida pedagog xodimlarga "Siyosiy- ma'rifat soati"tashkil etildi .`,
      imgSrcs: [img25, img26], // 25 va 26 birga
      bgColor: "#FDEDEC"
    },
    { 
      title: "Birinchi qo'ng'iroq", 
      student: "13-sonli umumiy o'rta ta'lim maktabi", 
      class: "O'quvchilar",
      description: `Mingbuloq tumani MMTBga qarashli 13-sonli umumiy o'rta ta'lim maktabida 2025-2026 o'quv yili boshlanishi munosabati bilan "Vatan uchun, millat uchun, xalq uchun!" shiori ostida  "Birinchi qo'ng'iroq" tadbiri tashkil etildi. Tadbirni maktab direktori M.Ashurova ochib berdi. Tadbirda Tuman UNES rahbari S.Soliyev, Qo'riqobod MFY raisi I.Bustonov, mahalla yoshlar yetakchisi F.Habibjonov, faxriy ustozlarimizdan M.Xudoyberdiyevalar ishtirok etib, o'quvchilarni yangi o'quv yili bilan samimiy tabriklashdi. Tadbirda maktabning  "Shukrona " raqs dastasining chiqishlari tadbirga zavq bag'ishladi. 
Menmonlar tomonidan 1-sinf o'quvchilariga prezident sovg'alari topshirildi. Tadbir barchaga manzur bo'ldi.`,
      imgSrcs: [img27, img28], // 27 va 28 birga
      bgColor: "#E0F2F1"
    },
    { 
      title: "Dolzarb 90 kun", 
      student: "Maktab jamoasi", 
      class: "Boshlang'ich sinflar",
      description: `Dolzarb 90 kunlikning 53-kun mavzusi "Eng kuchli sportchi" mavzusi bo'lib mavzu doirasida harakatli sport o‘yinlari,to'p bilan o'yinlar, turnikka tortilish, anjumaniya va musobaqalar o'tkazildi.`,
      imgSrcs: [img29, img30], // 29 va 30 birga
      bgColor: "#F8F9F9"
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
            data-aos="fade-up"
          >
            {/* Rasm qismi (Tepada) */}
            <div className="p-3">
              <Row className="g-3 justify-content-center">
                {img.imgSrcs.map((src, idx) => (
                  <Col key={idx} md={img.imgSrcs.length === 1 ? 12 : 6}>
                    <div className="img-frame-new">
                      <img src={src} className="img-fluid rounded-4 shadow-sm" alt={img.title} />
                      <div className="class-tag">{img.class}</div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>

            {/* Ma'lumot qismi (Rasmning pastida) */}
            <div className="content-box-new p-4 text-center">
              <h2 className="fw-black text-dark mb-2 h2">{img.title}</h2>
              <div className="mb-3">
                <span className="badge bg-primary rounded-pill px-4 py-2 fs-6">
                  Muallif: {img.student}
                </span>
              </div>
              <p className="description-text-new mx-auto" style={{maxWidth: '850px'}}>
                {img.description}
              </p>
              <div className="interaction-btns mt-4 d-flex justify-content-center gap-3">
                <button className="btn btn-warning rounded-pill px-4 fw-bold">❤️ Yoqdi</button>
                <button className="btn btn-outline-dark rounded-pill px-4">🔍 Kattaroq ko'rish</button>
              </div>
            </div>
          </div>
        ))}
      </Container>

      <style>{`
        .fw-black { font-weight: 900; font-family: 'Fredoka One', sans-serif; }
        .rainbow-text {
          background: linear-gradient(45deg, #ff4757, #1e90ff, #2ed573, #ffa502);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .big-story-row {
          border-radius: 40px;
          border: 8px solid white;
          overflow: hidden;
          transition: 0.3s ease;
        }
        .big-story-row:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
        }
        .img-frame-new {
          position: relative;
          height: 450px;
          border-radius: 25px;
          overflow: hidden;
        }
        .img-frame-new img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.6s;
        }
        .img-frame-new:hover img {
          transform: scale(1.05);
        }
        .class-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: white;
          padding: 6px 15px;
          border-radius: 50px;
          font-weight: bold;
          color: #0d6efd;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .description-text-new {
          font-size: 1.15rem;
          line-height: 1.7;
          color: #444;
        }
        @media (max-width: 768px) {
          .img-frame-new { height: 280px; }
          .big-story-row { border-radius: 25px; }
          .description-text-new { font-size: 1rem; }
        }
      `}</style>
    </section>
  );
};

export default Gallery;