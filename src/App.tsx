import { useRef, useState } from 'react';
// import { useScroll, useTransform } from 'framer-motion';
import Landing from './sections/Landing';
import About from './sections/About';
// import GeminiConstellation from './components/Gemini';

function App() {
  const scrollRef = useRef(null);

  const [skyReady, setSkyReady] = useState(false);
  const [hillsReady, setHillsReady] = useState(false);

  // const allReady = skyReady && hillsReady;

  const allReady = true; // For now, we assume everything is ready

  return (
    <div ref={scrollRef} className="bg-black text-white relative overflow-x-hidden h-screen snap-y snap-mandatory overflow-scroll">
      {!allReady && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#ADE8F4]">
          <img
            src="/anqiqu-favicon.png"
            alt="Loading"
            className="w-16 h-16 animate-[spinY_3s_linear_infinite]"
          />
        </div>
      )}

      {/* <div
        className={`snap-y snap-mandatory h-screen w-screen overflow-y-scroll scroll-smooth transition-opacity duration-700 
          ${allReady ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <Landing onReady={() => setSkyReady(true)} />
        <About onReady={() => setHillsReady(true)} />
      </div> */}
      <Landing />
      <About />
    </div>
  );
}

export default App;
