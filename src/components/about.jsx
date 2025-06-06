  import "../App.css";
  import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
  import { TypingAnimation } from "@/components/magicui/typing-animation";

  function About() {
    return (
      <section id="about" className="bg-black text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 underline-offset-4">
            About Us
          </h1>
          <div className="mt-3 flex justify-center">
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-md shadow-pink-500/30"></div>
          </div>

          <p className="mt-8 text-base sm:text-lg md:text-xl text-gray-300 font-serif leading-relaxed">
            Welcome to my dream world!
            <TypingAnimation className="text-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent font-bold">
              I'm Prakhar, passionate editor and 3D visual artist from Madhya Pradesh.
            </TypingAnimation>
            <br /><br />
            We bring your dream projects to life with our skilled team. Our agency has over 15 editors, ready for projects ranging from low to high budget.
          </p>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 font-serif leading-relaxed">
            <span className="text-white font-semibold underline decoration-pink-500 underline-offset-4">Our services include:</span>
          </p>

          <ul className="list-disc list-inside text-left mt-4 text-gray-200 max-w-xl mx-auto text-base sm:text-lg font-serif space-y-2">
            <li><span className="text-pink-400">✔</span> High-quality scriptwriting at affordable prices</li>
            <li><span className="text-pink-400">✔</span> Professional graphic designing</li>
            <li><span className="text-pink-400">✔</span> Expert full-stack web development</li>
          </ul>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 font-serif leading-relaxed">
            We deliver on time with <span className="text-purple-400 font-semibold">quality</span> and <span className="text-purple-400 font-semibold">clarity</span>.
            <br /><br />
            <span className="font-bold text-pink-500">Thanks for choosing Dream Agency!</span>
          </p>

          {/* Video Section */}
          <div className="mt-16">
            <h2 className="inline-block text-2xl sm:text-3xl font-semibold px-4 py-2 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-transparent bg-clip-text border border-pink-500 rounded-full shadow-md">
              Watch Our Work
            </h2>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-8 mb-10">
              {["IMG-20250602-WA0005.jpg", "IMG-20250602-WA0006.jpg", "IMG-20250602-WA0007.jpg", "IMG-20250602-WA0008.jpg"].map((img, i) => (
                <img
                  key={i}
                  src={`./${img}`}
                  alt={`Work ${i + 1}`}
                  className="w-full h-60 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              ))}
            </div>

            {/* Video */}
            <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl ring-1 ring-pink-500/50">
              <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/SNobrPOVo0Y?si=SyhP7XBY51FeLYaU"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                thumbnailAlt="Hero Video"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  export default About;
