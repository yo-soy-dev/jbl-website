import { useState } from "react";

const historyData = [
  {
    year: "2024",
    title: "IN TUNE WITH THE ENVIRONMENT",
    desc: "Introducing The JBL Clip 4 And Go 3 In An Eco-Friendly Material Made From 90% Post-Consumer Recycled Plastic. It's Part Of Our Ongoing Plan To Redesign Our Products And Packaging As We Move Towards Becoming Carbon Neutral.",
    imgs: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&q=80",
    ],
  },
  {
    year: "2020",
    title: "SOUND FOR EVERYONE",
    desc: "JBL expanded its lineup with groundbreaking noise-cancelling technology and true wireless earbuds, making premium audio accessible to all listeners worldwide.",
    imgs: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80",
    ],
  },
  {
    year: "1946",
    title: "THE BEGINNING",
    desc: "James Bullough Lansing founded JBL in Los Angeles, California. The brand started with a mission to produce the finest loudspeakers in the world — a mission it continues to this day.",
    imgs: [
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=300&q=80",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=300&q=80",
    ],
  },
];

const offerTabs = ["Bluetooth", "Headphones", "Gaming", "Home", "Specialty", "Car", "Toyota"];

export default function AboutSection() {
  const [historyIdx, setHistoryIdx] = useState(0);
  const [activeTab, setActiveTab] = useState("Bluetooth");
  const current = historyData[historyIdx];

  const prevHistory = () => setHistoryIdx((i) => (i - 1 + historyData.length) % historyData.length);
  const nextHistory = () => setHistoryIdx((i) => (i + 1) % historyData.length);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── SECTION 1: ABOUT US BANNER ── */}
      <section
        style={{
          position: "relative",
          minHeight: "280px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          overflow: "hidden",
          background: "#0d0d0d",
          paddingTop: "80px",
        }}
      >
        {/* Wave background */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.3 }}
          viewBox="0 0 1200 300"
          preserveAspectRatio="xMidYMid slice"
        >
          {[
            "M-100,150 C200,80 400,220 700,150 S1000,80 1300,150",
            "M-100,130 C200,60 400,200 700,130 S1000,60 1300,130",
            "M-100,170 C200,100 400,240 700,170 S1000,100 1300,170",
            "M-100,110 C200,40 400,180 700,110 S1000,40 1300,110",
            "M-100,190 C200,120 400,260 700,190 S1000,120 1300,190",
            "M-100,90 C200,20 400,160 700,90 S1000,20 1300,90",
            "M-100,210 C200,140 400,280 700,210 S1000,140 1300,210",
          ].map((d, i) => (
            <path key={i} d={d} fill="none" stroke="#FF4500" strokeWidth={i % 2 === 0 ? "1.5" : "0.8"} opacity={0.5} />
          ))}
        </svg>

        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 8vw, 5rem)",
              color: "white",
              letterSpacing: "6px",
            }}
          >
            ABOUT US
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "8px", fontSize: "14px" }}>
            Lorem Ipsum Dolor Sit Amet
          </p>
          <p style={{ marginTop: "8px", fontSize: "13px" }}>
            <span style={{ color: "#FF4500" }}>Home Page</span>
            <span style={{ color: "rgba(255,255,255,0.5)" }}> {">"} About Us</span>
          </p>
        </div>
      </section>

      {/* ── SECTION 2: FIND YOUR TRUE SOUND ── */}
      <section
        style={{
          background: "#111111",
          padding: "80px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "60px",
            flexWrap: "wrap",
          }}
        >
          {/* Box with text */}
          <div
            style={{
              border: "2px solid rgba(255,255,255,0.3)",
              padding: "32px 28px",
              minWidth: "200px",
              textAlign: "center",
              flexShrink: 0,
            }}
          >
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "3rem",
                color: "white",
                lineHeight: "1.1",
                letterSpacing: "3px",
              }}
            >
              FIND
              <br />
              YOUR
              <br />
              <span style={{ color: "#FF4500" }}>TRUE</span>
              <br />
              SOUND
            </p>
          </div>

          {/* Paragraph */}
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "15px",
              lineHeight: "1.9",
              maxWidth: "500px",
              fontWeight: "500",
            }}
          >
            JBL Has Always Believed That Sound Should Be An Open Stage. A Place Of Free
            Expression Where Voices Are Heard. Without Restrictions. Without Limitations.
            That's Why We Surface And Celebrate The Unfiltered Self-Expression Of Courageous
            Artists, Creators, And Performers. JBL Is Here To Help You Express Your True
            Self, So You Can Experience The Joy And Excitement Of Being You.
          </p>
        </div>
      </section>

      {/* ── SECTION 3: OUR HISTORY ── */}
      <section
        style={{
          background: "#FF4500",
          padding: "70px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Scratchy texture overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
            opacity: 0.3,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "white",
              letterSpacing: "4px",
            }}
          >
            OUR HISTORY
          </h2>
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "white",
              letterSpacing: "3px",
              marginTop: "4px",
            }}
          >
            75 YEARS OF JBL SOUND
          </p>

          {/* Images */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              marginTop: "32px",
              flexWrap: "wrap",
            }}
          >
            {current.imgs.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="JBL History"
                style={{
                  width: "clamp(160px, 28vw, 280px)",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "4px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              />
            ))}
          </div>

          {/* Slider controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "32px",
              marginTop: "28px",
            }}
          >
            <button
              onClick={prevHistory}
              style={{
                background: "rgba(0,0,0,0.2)",
                border: "2px solid rgba(255,255,255,0.4)",
                color: "white",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                fontSize: "20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ‹
            </button>

            <div>
              <p
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2rem",
                  color: "white",
                  letterSpacing: "4px",
                }}
              >
                {current.year}
              </p>
              <p
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.1rem",
                  color: "white",
                  letterSpacing: "2px",
                  marginTop: "4px",
                }}
              >
                {current.title}
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "13px",
                  maxWidth: "480px",
                  margin: "12px auto 0",
                  lineHeight: "1.7",
                  textAlign: "center",
                }}
              >
                {current.desc}
              </p>
            </div>

            <button
              onClick={nextHistory}
              style={{
                background: "rgba(0,0,0,0.2)",
                border: "2px solid rgba(255,255,255,0.4)",
                color: "white",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                fontSize: "20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHAT WE OFFER ── */}
      <section style={{ background: "#111111", padding: "70px 40px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "white",
              letterSpacing: "4px",
              textAlign: "center",
            }}
          >
            WHAT WE OFFER
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", textAlign: "center", marginTop: "8px", fontSize: "14px" }}>
            Any Way You Want To Listen, We Got You.
          </p>

          {/* Tabs */}
          <div
            style={{
              display: "flex",
              gap: "0",
              marginTop: "32px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              flexWrap: "wrap",
            }}
          >
            {offerTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "10px 20px",
                  background: activeTab === tab ? "#FF4500" : "transparent",
                  color: activeTab === tab ? "white" : "rgba(255,255,255,0.6)",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: "500",
                  letterSpacing: "0.5px",
                  transition: "all 0.2s",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              alignItems: "center",
              gap: "48px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: "240px" }}>
              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.8rem",
                  color: "white",
                  letterSpacing: "2px",
                }}
              >
                {activeTab.toUpperCase()} SPEAKER
              </h3>
              <p style={{ color: "rgba(255,255,255,0.6)", marginTop: "12px", fontSize: "14px", lineHeight: "1.7" }}>
                Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
              </p>
              <button
                style={{
                  marginTop: "20px",
                  background: "linear-gradient(135deg, #ff6b6b, #FF4500)",
                  color: "white",
                  border: "none",
                  padding: "12px 28px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                  letterSpacing: "1.5px",
                  cursor: "pointer",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                LEARN MORE
              </button>
            </div>
            <div style={{ flex: 1, minWidth: "240px", display: "flex", justifyContent: "center" }}>
              <img
                src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&q=80"
                alt={activeTab}
                style={{
                  width: "100%",
                  maxWidth: "320px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}