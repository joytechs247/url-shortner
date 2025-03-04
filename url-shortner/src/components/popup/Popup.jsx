import React, { useState } from "react";
import axios from "axios";

const Popup = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const shortenUrl = async () => {
    try {
      const response = await axios.get(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`
      );
      setShortUrl(response.data);
    } catch (error) {
      alert("Failed to shorten URL");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied to clipboard!");
  };

  return (
    <div className="p-4 w-64 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-lg font-bold mb-2">URL Shortener</h2>
      <input
        type="text"
        placeholder="Enter URL..."
        className="border p-2 w-full rounded"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        onClick={shortenUrl}
        className="mt-2 bg-blue-500 text-white py-1 px-3 rounded"
      >
        Shorten
      </button>
      {shortUrl && (
        <div className="mt-2">
          <p className="break-words">{shortUrl}</p>
          <button
            onClick={copyToClipboard}
            className="mt-1 bg-green-500 text-white py-1 px-3 rounded"
          >
            Copy
          </button>
        </div>
      )}
    </div>
  );
};

export default Popup;