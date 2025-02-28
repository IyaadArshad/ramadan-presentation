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
          id="bored"
          className="step slide"
          data-x="-1000"
          data-y="-1500"
          style={{ width: "1200px" }}
        >
          <img
            src="/1-background.png"
            alt="Slide 1"
            style={{ width: "100%", height: "100%", borderRadius: "12px" }}
          />
        </div>
        <div
          className="step slide"
          style={{ width: "1200px" }}
          id="slide-2"
          data-x="500"
          data-y="-1500"
        >
        <img
          src="/2-background.png"
          alt="Slide 2"
          style={{ width: "100%", height: "100%", borderRadius: "12px" }}
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