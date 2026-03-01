import { useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";
import { ArrowDownIcon } from "@heroicons/react/16/solid";

const GIF_BASE = "/couple-gif";

const coupleGifs = [
  { file: "huggy.gif",              alt: "Couple hugging" },
  { file: "shy.gif",               alt: "Couple being shy" },
  { file: "bubu-dudu-sseeyall.gif", alt: "Bubu Dudu see ya" },
  { file: "carryyou.gif",          alt: "Carrying you" },
  { file: "bleh.gif",              alt: "Being silly" },
  { file: "miss-you.gif",          alt: "Missing you" },
  { file: "kisses.gif",            alt: "Kisses" },
  { file: "sleep.gif",             alt: "Sleeping together" },
  { file: "eats.gif",              alt: "Eating together" },
  { file: "wallkiss.gif",          alt: "Wall kiss" },
  { file: "selfie.gif",            alt: "Taking a selfie" },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [istriggered, setIsTriggered] = useState(false);
  const [isSurpriseVisible, setIsSurpriseVisible] = useState(false);
  const [buttonScale, setButtonScale] = useState(1);
  const [clickCount, setClickCount] = useState(0);
  const [openCakeDialog, setOpenCakeDialog] = useState(false);
  const [blowCount, setBlowCount] = useState(0);
  const [candleBlown, setCandleBlown] = useState(false);
  const [litCandles, setLitCandles] = useState(Array(23).fill(true));

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 h-screen">
        <div className="text-center pb-8 mb-4">
          <p className="font-bold text-3xl text-gray-800">
            Hello to my adorable, beautiful, and amazing girlfriend!
          </p>
        </div>

        <p className="hint">Click the envelope ✉️</p>

        {/* ---- envelope container ---- */}
        <div
          className={`envelope${isOpen ? " open" : ""}`}
          onClick={() => {
            setIsOpen(!isOpen);
            setIsTriggered(true);
          }}
        >
          {/* ---- note that slides out ---- */}
          <div className="note">
            <p className="note-text">
              Happy Birthday Arianne! You deserve all the happiness in the world
              🎂🎉 I'm sorry about the thing that happened, but I hope this
              little surprise can make up for it. I love you so much ❤️
            </p>
          </div>

          {/* ---- envelope body ---- */}
          <div className="envelope-body" />

          {/* ---- triangular flap ---- */}
          <div className="flap" />
        </div>

        <div className="text-center pb-8 pt-8">
          <p className="text-lg font-semibold text-gray-700">
            Made with ❤️ for Arianne
          </p>
        </div>

        {/* -- only when is triggered, show the hint to scroll -- */}
        {istriggered && (
          <div className="flex flex-col items-center gap-2">
            <p className="pb-6 text-lg text-gray-500">
              Continue scrolling for a surprise! 🎁
            </p>
            <ArrowDownIcon className="w-8 h-8 text-gray-700 animate-bounce" />
          </div>
        )}
      </div>

      {/* Spacer content to create scroll distance */}
      {istriggered && (
        <div className="spacer-content">
          <div className="h-screen flex items-center justify-center">
            <div className="text-center space-y-4">
              <p className="text-xl text-gray-600">Keep going...</p>
              <div className="animate-pulse text-4xl">✨</div>
            </div>
          </div>

          <div className="h-screen flex items-center justify-center">
            <div className="text-center space-y-4">
              <p className="text-xl text-gray-600">Almost there...</p>
              <div className="animate-bounce text-4xl">🎈</div>
            </div>
          </div>

          <div className="h-screen flex items-center justify-center">
            <div className="text-center space-y-4">
              <p className="text-xl text-gray-600">Just a little more...</p>
              <div className="animate-spin text-4xl">🌟</div>
            </div>
          </div>
          <div className="flex items-center justify-center pb-20">
            <div
              onClick={() => {
                setIsSurpriseVisible(true);
              }}
              className="cursor-pointer bg-blue-500 px-4 py-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              <p className="text-white text-lg font-semibold">
                Click for Surprise! 🎁
              </p>
              {isSurpriseVisible && (
                <p className="text-white text-sm mt-2">
                  Scroll down to see the surprise! 🎉
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {isSurpriseVisible && (
        <div className="scroll-surprise item-center justify-center flex-col">
          {/* couple-gif */}
          <div className="flex flex-col items-center gap-6">
            <p className="text-center text-lg font-semibold text-gray-800">
              When you're down, or sad, I'm here for you ❤️
            </p>
            <img
              src={`${GIF_BASE}/${coupleGifs[0].file}`}
              alt={coupleGifs[0].alt}
              className="w-96 h-96 object-cover rounded-lg"
            />
            <p className="text-center text-lg font-semibold text-gray-800">
              Enjoy a collage of cute couple GIFs that remind you of us! 🥰
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pb-8">
              {coupleGifs.slice(1).map((gif) => (
                <img
                  key={gif.file}
                  src={`${GIF_BASE}/${gif.file}`}
                  alt={gif.alt}
                  className="w-96 h-96 object-cover rounded-lg"
                />
              ))}
            </div>
          <div>
        <p className="text-center text-lg font-semibold text-gray-800 py-8">
          I hope these cute GIFs bring a smile to your face and remind you of
          how much I care about you! 😊
        </p>
        <p className="text-center text-lg font-semibold text-gray-800 py-8">
          {clickCount >= 1 ? "Do you love me? (Keep clicking) 😘 " : "Do you love me? 😘 "}
        </p>

        <div className="flex flex-col items-center justify-center py-8">
          <div
            onClick={() => {
              if (clickCount < 7) {
                setClickCount(clickCount + 1);
                setButtonScale(buttonScale + 0.2);
              }
            }}
            style={{
              transform: `scale(${buttonScale})`,
              transition: "transform 0.3s ease",
            }}
            className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg"
          >
            {clickCount >= 7 ? "Yes! I love you too! 💕" : "Yes! 💖"}
          </div>
        </div>
      </div>


      {clickCount >= 7 && (
        <div className="flex flex-col items-center text-center py-8">
          <p className="text-2xl font-bold text-gray-800">
            I'm so glad to hear that! I love you more than words can express! ❤️
          </p>


          <p className="text-lg font-semibold text-gray-600 mt-4">
            One last thing 🎉 (click on cake)
          </p>

          <ArrowDownIcon className="w-8 h-8 text-gray-700 animate-bounce mt-4" />

          <div className="cursor-pointer flex justify-center mt-6" onClick={() => {
            setOpenCakeDialog(true);
            setLitCandles(Array(23).fill(true));
            setBlowCount(0);
            setCandleBlown(false);
          }}>
            <p className="text-6xl font-bold text-gray-800">🎂</p>
          </div>
        </div>
      )}

      {/* Cake Dialog */}
      {openCakeDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl relative">
            {/* Close button */}
            <button
              onClick={() => setOpenCakeDialog(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              {candleBlown ? "🎉 Happy 23rd Birthday 🎉" : "Make a wish and blow! 🎂"}
            </h2>

            {/* Cake with candles */}
            <div className="cake-sprite-scene">
              <div className="dialog-candle-row">
                {litCandles.map((isLit, i) => (
                  <div key={i} className={`dialog-candle${!isLit ? ' out' : ''}`}>
                    <div className="dialog-flame" />
                    <div
                      className="dialog-candle-body"
                      style={{ background: ['#ff8fab','#c77dff','#ffe66d','#74c0fc'][i % 4] }}
                    />
                    <div className="dialog-candle-base" />
                  </div>
                ))}
              </div>
              <div className="dialog-cake-wrap">
                <div className="css-cake">
                  <div className="cake-top-layer" />
                  <div className="cake-frosting cake-frosting-1" />
                  <div className="cake-mid-layer" />
                  <div className="cake-frosting cake-frosting-2" />
                  <div className="cake-bottom-layer" />
                  <div className="cake-plate" />
                </div>
              </div>
            </div>

            {/* Blow counter */}
            {!candleBlown && (
              <p className="text-center text-gray-600 mb-4">
                Candles remaining: {litCandles.filter(c => c).length} / 23
              </p>
            )}

            {/* Blow button or success message */}
            {!candleBlown ? (
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    const litIndices = litCandles
                      .map((isLit, idx) => (isLit ? idx : -1))
                      .filter(idx => idx !== -1);
                    if (litIndices.length === 0) return;
                    const pick = litIndices[Math.floor(Math.random() * litIndices.length)];
                    const next = [...litCandles];
                    next[pick] = false;
                    setLitCandles(next);
                    setBlowCount(blowCount + 1);
                    if (next.every(c => !c)) {
                      setCandleBlown(true);
                      const duration = 4000;
                      const end = Date.now() + duration;
                      const frame = () => {
                        confetti({ particleCount: 6, angle: 60, spread: 70, origin: { x: 0 }, colors: ['#ff6b6b','#4ecdc4','#ffe66d','#ff8b94','#95e1d3'] });
                        confetti({ particleCount: 6, angle: 120, spread: 70, origin: { x: 1 }, colors: ['#ff6b6b','#4ecdc4','#ffe66d','#ff8b94','#95e1d3'] });
                        if (Date.now() < end) requestAnimationFrame(frame);
                      };
                      frame();
                    }
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  💨 Blow!
                </button>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-4">
                  Happy Birthday, Arianne! May all your wishes come true! 🌟💕
                </p>
              </div>
            )}
          </div>
        </div>
      )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
