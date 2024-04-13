import React, { useState } from "react";

function Google() {
  // State for the search query
  const [query, setQuery] = useState("");

  // State for the URL of the iframe
  const [url, setUrl] = useState("");

  // Handle form submission
  const handleSearch = (event) => {
    event.preventDefault();
    // Construct the Google search URL with the query
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;
    setUrl(googleUrl);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Google Search App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search query"
        />
        <button type="submit">Search</button>
      </form>
      <div style={{ marginTop: "20px" }}>
        {/* Render the iframe with the Google search results */}
        <iframe
          src={url}
          width="100%"
          height="600px"
          title="Google Search Results"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}

export default Google;
