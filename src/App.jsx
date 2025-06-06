import './App.css';
import Nav from "./components/nav.jsx";
import About from "./components/about.jsx";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { MarqueeDemo } from "@/components/marqu.jsx"

const App = () => {
  const texts = ["Motion Designer", "Web Developer", "Script Writer"]

  return (
    <section className="min-h-screen bg-black relative overflow-hidden pt-20">
      <Nav />

      {/* Glowing orb effect */}
      <span className="absolute -top-10 left-10 w-32 h-32 bg-orange-500/10 blur-2xl rounded-full animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Video Editor</span>
                <span className="text-white"> & </span><br />

                <TextAnimate animation="blurInUp" by="character" once className="text-white whitespace-nowrap">
                  Motion Designer
                </TextAnimate>
                <TextAnimate animation="blurInUp" by="character" once className="text-white">
                  Web Developer
                </TextAnimate>
                <TextAnimate animation="blurInUp" by="character" once className="text-white">
                  Script Writer
                </TextAnimate>
              </h1>

              <p className="text-gray-300 text-lg lg:text-xl max-w-lg">
                Crafting compelling visual stories through creative editing
              </p>
            </div>

            {/* Button */}
            <ShimmerButton className="flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 15l5.19-3L10 9v6zm10-3c0-5.52-4.48-10-10-10S0 6.48 0 12s4.48 10 10 10 10-4.48 10-10z" />
              </svg>
              VIEW SHOWREEL
            </ShimmerButton>

            {/* Skills */}
            <div className="flex flex-wrap gap-6 pt-8 text-gray-200">
              {["Cinematic Editing", "Visual Effects", "Color Grading", "Web development", "Script Writing"].map((skill, index) => (
                <div key={index} className="flex items-center space-x-3 hover:text-orange-400 transition">
                  <svg className="w-5 h-5 text-orange-500 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12a10 10 0 0 1 20 0" />
                  </svg>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="relative animate-slide-in-right">
            {/* Stats */}
            <div className="absolute top-4 left-4 bg-gradient-to-br from-gray-900 to-black/80 backdrop-blur-md border border-orange-500/40 shadow-lg rounded-lg p-4 z-10">
              <div className="text-orange-500 text-2xl font-bold">10+</div>
              <div className="text-gray-300 text-sm">Projects</div>
            </div>
            <div className="absolute top-20 right-4 bg-gradient-to-br from-gray-900 to-black/80 backdrop-blur-md border border-orange-500/40 shadow-lg rounded-lg p-4 z-10">
              <div className="flex items-center space-x-2">
                <span className="text-orange-500 text-xl">★</span>
                <span className="text-white text-xl font-bold">4.5</span>
              </div>
              <div className="text-gray-300 text-sm">Satisfaction</div>
            </div>

            {/* Main Visual */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M2 12a10 10 0 0 1 20 0" />
                    </svg>
                  </div>
                  <div className="text-white font-semibold">Video Editor</div>
                  <div className="text-gray-400 text-sm">1 Years Experience</div>
                </div>
              </div>

              {/* Software Icons */}
              <div className="flex justify-center space-x-4 mt-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center shadow-md hover:shadow-purple-500/50 transition">
                  <span className="text-white font-bold text-sm">Pr</span>
                </div>
                <div className="w-12 h-12 bg-purple-800 rounded-lg flex items-center justify-center shadow-md hover:shadow-purple-500/50 transition">
                  <span className="text-white font-bold text-sm">Ae</span>
                </div>
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center shadow-md hover:shadow-gray-500/50 transition">
                  <span className="text-white font-bold text-sm">○</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <About />
      <MarqueeDemo />
    </section>
  );
};

export default App;

