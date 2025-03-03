"use client";
import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    impress: any;
  }
}

export default function Home() {
  useEffect(() => {
    const handleLoad = () => {
      if (typeof window !== "undefined" && window.impress) {
        window.impress().init();
      }
    };

    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/impress.js/0.5.3/impress.min.js";
    script.onload = handleLoad;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <>
      <div id="impress">
        <div
          id="slide1"
          className="step"
          data-x="-1000"
          data-y="-1500"
          data-scale="1"
          data-rotate-z="5"
          style={{ width: "1400px", height: "800px" }}
        >
          <img
            src="/slide01.png"
            alt="Slide 1"
            style={{ width: "100%", height: "100%", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
          />
        </div>
        <div
          id="slide2"
          className="step"
          data-x="1500"
          data-y="-800"
          data-z="-1000"
          data-scale="0.8"
          data-rotate-x="-45"
          style={{ width: "1000px", height: "600px" }}
        >
          <img
            src="/slide02.png"
            alt="Slide 2"
            style={{ width: "100%", height: "100%", borderRadius: "8px" }}
          />
        </div>
        <div
          id="slide3"
          className="step"
          data-x="-500"
          data-y="500"
          data-z="1000"
          data-scale="1.5"
          data-rotate-y="45"
          style={{ width: "1600px", height: "900px" }}
        >
          <img
            src="/slide03.png"
            alt="Slide 3"
            style={{ width: "100%", height: "100%", borderRadius: "15px", transform: "perspective(1000px)" }}
          />
        </div>
        <div
          id="slide4"
          className="step"
          data-x="800"
          data-y="1200"
          data-z="-500"
          data-scale="0.6"
          data-rotate="180"
          style={{ width: "1200px", height: "700px" }}
        >
          <img
            src="/slide04.png"
            alt="Slide 4"
            style={{ width: "100%", height: "100%", borderRadius: "25px", boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
          />
        </div>
        <div
          id="slide5"
          className="step"
          data-x="-1500"
          data-y="0"
          data-z="500"
          data-scale="1.2"
          data-rotate-z="-15"
          data-rotate-x="15"
          style={{ width: "1300px", height: "750px" }}
        >
          <img
            src="/slide05.png"
            alt="Slide 5"
            style={{ width: "100%", height: "100%", borderRadius: "12px" }}
          />
        </div>
        <div
          id="slide6"
          className="step"
          data-x="0"
          data-y="-500"
          data-z="-1500"
          data-scale="2"
          data-rotate-y="-30"
          style={{ width: "1100px", height: "650px" }}
        >
          <img
            src="/slide06.png"
            alt="Slide 6"
            style={{ width: "100%", height: "100%", borderRadius: "30px", transform: "perspective(2000px)" }}
          />
        </div>
        <Script
          src="https:/s/cdnjs.cloudflare.com/ajax/libs/impress.js/0.5.3/impress.min.js"
          onLoad={() => window.impress().init()}
        />
      </div>
    </>
  );
}