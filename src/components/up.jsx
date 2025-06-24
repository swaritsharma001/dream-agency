 import React, { useState } from "react";

function VideoUpload() {
  const [videoFile, setVideoFile] = useState(null);
  const [videoName, setVideoName] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!videoFile || !videoName) {
      alert("Please provide both video and name.");
      return;
    }

    const formData = new FormData();
    formData.append("video", videoFile);
    formData.append("name", videoName);

    try {
      const response = await fetch("https://the-gangsta.tech/api/learn/uploadVid", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Video uploaded successfully!");
      } else {
        console.log(response)
        alert(response);
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert(error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="font-bold text-3xl mb-6">Upload Your Video</h1>
      <form onSubmit={handleUpload} className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter video name"
          className="p-2 bg-gray-800 border border-gray-600 rounded"
          value={videoName}
          onChange={(e) => setVideoName(e.target.value)}
        />

        <input
          type="file"
          accept="video/*"
          className="p-2 bg-gray-800 border border-gray-600 rounded"
          onChange={(e) => setVideoFile(e.target.files[0])}
        />

        <button
          type="submit"
          className="p-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold"
        >
          Upload
        </button>
      </form>
    </main>
  );
}

export default VideoUpload;