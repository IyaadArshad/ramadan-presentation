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
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/impress.js/0.5.3/impress.min.js";
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
        style={{
          backgroundImage: "url('/1-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      </div>
      <div
        className="step"
        data-x="0"
        data-y="-1000"
        data-scale="0.5"
        style={{ width: "100vw", height: "100vh" }}
      >
        <h1>Slide 2</h1>
        <p>Zoom out effect slide. Then you should try impress.js*</p>
    </div>
    <Script src="https:/s/cdnjs.cloudflare.com/ajax/libs/impress.js/0.5.3/impress.min.js" onLoad={() => window.impress().init()} />
    </div>
    </>
  );
}
