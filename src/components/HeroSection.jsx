import { useState } from "react";

const slides = [
  {
    id: 0,
    headline: "JUST PUT THE HEADPHONES ON,",
    subline: "AND GO WITH THE FLOW!",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur. Ac Tempor Eu Mollis Nascetur Convallis Viverra Lorem.",
    productImg: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    bgFrom: "#8B1A00",
    bgMid: "#4A0E6B",
    bgTo: "#1a0030",
  },
  {
    id: 1,
    headline: "EXPERIENCE PURE",
    subline: "SOUND PERFECTION!",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur. Ac Tempor Eu Mollis Nascetur Convallis Viverra Lorem.",
    productImg: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    bgFrom: "#6B1A00",
    bgMid: "#2d0a4e",
    bgTo: "#0d0d0d",
  },
  {
    id: 2,
    headline: "FEEL THE BASS,",
    subline: "OWN THE MOMENT!",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur. Ac Tempor Eu Mollis Nascetur Convallis Viverra Lorem.",
    productImg: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    bgFrom: "#8B3A00",
    bgMid: "#3d0a5e",
    bgTo: "#0d0d0d",
  },
];

const thumbImgs = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80",
  "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=100&q=80",
  "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=100&q=80",
  "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=100&q=80",
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  return (
    <section
      style={{
        background: `radial-gradient(ellipse at 70% 50%, ${slide.bgFrom} 0%, ${slide.bgMid} 45%, ${slide.bgTo} 100%)`,
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.6s ease",
      }}
      className="flex items-center"
    >
      {/* Animated sound wave lines background */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.25,
        }}
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[
          "M-100,350 C200,200 400,500 700,350 S1000,200 1300,350",
          "M-100,320 C200,170 400,470 700,320 S1000,170 1300,320",
          "M-100,380 C200,230 400,530 700,380 S1000,230 1300,380",
          "M-100,290 C200,140 400,440 700,290 S1000,140 1300,290",
          "M-100,410 C200,260 400,560 700,410 S1000,260 1300,410",
          "M-100,260 C200,110 400,410 700,260 S1000,110 1300,260",
          "M-100,440 C200,290 400,590 700,440 S1000,290 1300,440",
          "M-100,230 C200,80 400,380 700,230 S1000,80 1300,230",
          "M-100,470 C200,320 400,620 700,470 S1000,320 1300,470",
          "M-100,200 C200,50 400,350 700,200 S1000,50 1300,200",
          "M-100,500 C200,350 400,650 700,500 S1000,350 1300,500",
          "M-100,170 C200,20 400,320 700,170 S1000,20 1300,170",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="#FF4500"
            strokeWidth={i % 3 === 0 ? "1.5" : "0.8"}
            opacity={0.6 - i * 0.03}
          />
        ))}
      </svg>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pt-20 flex items-center justify-between gap-8">
        {/* Left Text */}
        <div className="flex-1 max-w-xl">
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: "1.1",
              letterSpacing: "2px",
              color: "white",
            }}
          >
            {slide.headline}
            <br />
            {slide.subline}
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              color: "rgba(255,255,255,0.75)",
              marginTop: "1.25rem",
              lineHeight: "1.8",
              maxWidth: "380px",
            }}
          >
            {slide.desc}
          </p>
          <button
            style={{
              background: "#FF4500",
              fontFamily: "'Inter', sans-serif",
              fontWeight: "600",
              fontSize: "13px",
              letterSpacing: "2px",
              color: "white",
              border: "none",
              padding: "14px 36px",
              marginTop: "2rem",
              cursor: "pointer",
              borderRadius: "2px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#e03d00")}
            onMouseLeave={(e) => (e.target.style.background = "#FF4500")}
          >
            ORDER NOW
          </button>
        </div>

        {/* Center Product Image */}
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={slide.productImg}
            alt="JBL Product"
            style={{
              width: "clamp(280px, 35vw, 480px)",
              objectFit: "contain",
              filter: "drop-shadow(0 0 60px rgba(255,69,0,0.3))",
              transition: "all 0.5s ease",
            }}
          />
        </div>

        {/* Right Thumbnails */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {thumbImgs.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i % slides.length)}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "8px",
                overflow: "hidden",
                border: active === i % slides.length ? "2px solid #FF4500" : "2px solid rgba(255,255,255,0.2)",
                cursor: "pointer",
                transition: "border 0.2s",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </button>
          ))}
        </div>
      </div>

      {/* Slide Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: active === i ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background: active === i ? "#FF4500" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}