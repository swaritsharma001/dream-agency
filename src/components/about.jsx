import "../App.css";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { useState, useEffect } from "react";

function About() {
  const [videos, setVideos] = useState({});
  const [selectedGroup, setSelectedGroup] = useState("All");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://the-gangsta.tech/api/learn/video");
      const data = await res.json();

      // Group videos by name
      const grouped = {};
      data.forEach((vid) => {
        if (!grouped[vid.name]) grouped[vid.name] = [];
        grouped[vid.name].push(vid);
      });

      setVideos(grouped);
    }
    fetchData();
  }, []);

  const groupNames = ["All", ...Object.keys(videos)];

  return (
    <section id="about" className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
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

        {/* Filter Dropdown */}
        <div className="mb-8">
          <select
            className="bg-gray-900 text-white px-4 py-2 rounded border border-pink-500 focus:outline-none"
            onChange={(e) => setSelectedGroup(e.target.value)}
          >
            {groupNames.map((name, i) => (
              <option key={i} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* Filtered Videos */}
        <div className="mt-12 space-y-12">
          {(selectedGroup === "All"
            ? Object.entries(videos)
            : [[selectedGroup, videos[selectedGroup]]]
          ).map(([groupName, vids], groupIndex) => (
            <div key={groupIndex}>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-transparent bg-clip-text mb-6 capitalize">
                {groupName}
              </h3>
              <div className="grid grid-cols-1 gap-10">
                {vids.map((vid, index) => (
                  <div
                    key={index}
                    className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl ring-1 ring-pink-500/50"
                  >
                    <HeroVideoDialog
                      className="block dark:hidden"
                      animationStyle="from-center"
                      videoSrc={vid.video}
                      thumbnailSrc="https://res.cloudinary.com/dfmpb2aii/image/upload/v1750755691/uploads/poEmfuMG1O-20250624_143101.jpg.jpg"
                      thumbnailAlt={`Video ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;