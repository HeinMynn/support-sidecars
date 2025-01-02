import { useState } from "react";
import images from "./assets/images.jpg";
import "./App.css";

function App() {
  const [lu, setLu] = useState(true);
  const [ohn, setOhn] = useState(true);
  const [mu, setMu] = useState(false);

  const handlelu = (e) => {
    setLu(e.target.checked);
    if (ohn && mu) {
      setMu(false);
    }
  };

  const handleohn = (e) => {
    setOhn(e.target.checked);
    if (lu && mu) {
      setLu(false);
    }
  };

  const handleMu = (e) => {
    setMu(e.target.checked);
    if (lu && ohn) {
      setOhn(false);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col items-start justify-center min-h-screen bg-gray-100 space-y-4">
        <img src={images} className="block w-full" />
        <div className="flex items-center space-x-4">
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={lu}
                onChange={handlelu}
              />
              <div
                className={`block w-14 h-8 rounded-full ${
                  lu ? "bg-green-500" : "bg-gray-600"
                }`}
              ></div>
              <div
                className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform"
                style={{
                  transform: lu ? "translateX(100%)" : "translateX(0)",
                }}
              ></div>
            </div>
            <div className="ml-3 text-gray-700 font-medium">လူသားဖြစ်တယ်</div>
          </label>
        </div>

        <div className="flex items-center space-x-4">
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={ohn}
                onChange={handleohn}
              />
              <div
                className={`block w-14 h-8 rounded-full ${
                  ohn ? "bg-blue-500" : "bg-gray-600"
                }`}
              ></div>
              <div
                className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform"
                style={{
                  transform: ohn ? "translateX(100%)" : "translateX(0)",
                }}
              ></div>
            </div>
            <div className="ml-3 text-gray-700 font-medium">ဦးနှောက်ရှိတယ်</div>
          </label>
        </div>

        <div className="flex items-center space-x-4">
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={mu}
                onChange={handleMu}
                className="sr-only"
              />
              <div
                className={`block w-14 h-8 rounded-full ${
                  mu ? "bg-red-500" : "bg-gray-600"
                }`}
              ></div>
              <div
                className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform"
                style={{
                  transform: mu ? "translateX(100%)" : "translateX(0)",
                }}
              ></div>
            </div>
            <div className="ml-3 text-gray-700 font-medium">မန်ယူအားပေးတယ်</div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
