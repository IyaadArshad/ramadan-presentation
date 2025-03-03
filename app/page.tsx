"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    impress: any;
  }
}

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/impress.js/0.5.3/impress.min.js";
    script.onload = () => window.impress().init();
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="impress">
      {/* Slide 1 (Original Image Introduction) */}
      <div
        className="step"
        data-x="0"
        data-y="0"
        data-scale="1.2"
        style={{ width: "1300px", height: "700px" }}>
        <img
          src="/slide01.png"
          alt="Intro Slide"
          style={{
            width: "100%", height: "100%",
            borderRadius: "20px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.3)"
          }}
        />
      </div>

      {/* What is Ramadan Slide */}
      <div 
        className="step content-slide" 
        data-x="-1500" 
        data-y="400" 
        data-z="-500" 
        data-scale="1.5" 
        data-rotate="-25">
        <h2>What is Ramadan?</h2>
        <p>
          Ramadan is the ninth month of the Islamic lunar calendar and a holy period of fasting, prayer, and reflection for Muslims. During this month, Muslims fast from dawn to sunset, eating Suhoor before dawn and breaking the fast at Iftar. Ramadan fosters self-discipline, compassion, and spiritual devotion. The month concludes with Eid al-Fitr, a festive celebration of gratitude and renewal.
        </p>
      </div>

      {/* Why do we Celebrate Slide */}
      <div 
        className="step content-slide" 
        data-x="0" 
        data-y="-1200" 
        data-z="800" 
        data-scale="1.4" 
        data-rotate-y="45"
        data-rotate-z="12">
        <h2>Why Do We Celebrate Ramadan?</h2>
        <p>
          Muslims observe Ramadan to honor the month the Qur'an was revealed to Prophet Muhammad. It's a time for spiritual reflection, enhanced self-discipline, prayer, and charity. Fasting, or Sawm, is a key pillar of Islam, fostering empathy for the less fortunate. Ramadan culminates joyously with Eid al-Fitr, celebrating communal harmony.
        </p>
      </div>

      {/* Taraweeh and Witr Prayer Slide */}
      <div 
        className="step content-slide" 
        data-x="1600" 
        data-y="0"
        data-z="-1500"
        data-scale="1.6" 
        data-rotate-x="-30"
        data-rotate-z="-20">
        <h2>Taraweeh & Witr Prayer</h2>
        <p>
          Taraweeh consists of voluntary prayers performed each night after Isha prayer during Ramadan, often including 8 to 20 rak'ahs offered in congregation at mosques. Witr prayer, usually performed afterward, consists of odd-numbered rak'ahs (often three). Both prayers express deep spiritual devotion, enhancing worship during this sacred month.
        </p>
      </div>

      {/* How we Celebrate Ramadan Slide */}
      <div 
        className="step content-slide" 
        data-x="-1700"
        data-y="1200" 
        data-z="1300" 
        data-scale="1.3" 
        data-rotate-y="-40"
        >
        <h2>How We Celebrate Ramadan</h2>
        <ul className="celebration-list">
          <li><b>Niyyah (Intention)</b> – sincere intention before fasting.</li>
          <li><b>Suhoor</b> – pre-dawn meal providing daily energy.</li>
          <li><b>Fasting</b> – abstain from food, drink, smoking, marital relations from dawn till sunset.</li>
          <li><b>Worship & Reflection</b> – enhancing prayer, Qur'an reading and charitable acts.</li>
          <li><b>Iftar</b> – breaking fast at sunset with dates and water.</li>
          <li><b>Taraweeh</b> – nightly special prayers performed in congregations at the mosque.</li>
        </ul>
      </div>

      {/* Slide 6 Original Image Thank You Conclusion */}
      <div
        className="step"
        data-x="2000"
        data-y="-800"
        data-scale="1.2"
        data-rotate="10"
        style={{width: "1200px", height: "650px"}}>
        <img
          src="/slide06.png"
          alt="Thank You Slide"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "20px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.3)"
          }}
        />
      </div>
    </div>
  );
}