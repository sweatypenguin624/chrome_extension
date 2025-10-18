// App.jsx
import React, { useState, useEffect } from "react";

const App = () => {
  const [quotes, setQuotes] = useState([]); // Store quotes fetched from API
  const [currentQuote, setCurrentQuote] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Fetch quotes from API once on component mount
  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await fetch("https://quotes-api-self.vercel.app/quote");
      const data = await response.json();

      // API returns one quote at a time, so store it as an array
      setQuotes([data]);
      setCurrentQuote(data); // Show the first quote immediately
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  };

  // const getRandomQuote = () => {
  //   if (quotes.length === 0) return;

  //   setIsAnimating(true);
  //   setTimeout(() => {
  //     const randomIndex = Math.floor(Math.random() * quotes.length);
  //     setCurrentQuote(quotes[randomIndex]);
  //     setIsAnimating(false);
  //   }, 500);
  // };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Styles (same as your previous code)
  const lightGradient = "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)";
  const darkGradient = "linear-gradient(135deg, #0c0c0c 0%, #2d3436 100%)";

  const containerStyle = {
    minHeight: "100vh",
    // background: isDarkMode ? darkGradient : lightGradient,
    background:  "url('https://www.treehugger.com/thmb/FDT4RYkxU-lUwBAM9HvquJXeVAo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__07__shutterstock_113278297-247408febef145a5a6f04eeff17e85f4.jpg')",
    backgroundsize: "cover",
    display: "flex",
    backgroundPosition: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    transition: "all 0.5s ease-in-out",
    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
    position: "relative",
    overflow: "hidden"
  };

  const toggleButtonStyle = {
    position: "absolute",
    top: "20px",
    right: "20px",
    background: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    cursor: "pointer",
    fontSize: "1.2rem",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: isDarkMode
      ? "0 8px 32px rgba(0,0,0,0.3)"
      : "0 8px 32px rgba(0,0,0,0.1)"
  };

  const cardStyle = {
    // background: isDarkMode ? "rgba(18, 18, 24, 0.85)" : "rgba(255, 255, 255, 0.85)",
    background: "transparent",
    borderRadius: "20px",
    padding: "3.5rem 2.5rem",
    maxWidth: "680px",
    width: "90%",
    // boxShadow: isDarkMode
    //   ? "0 25px 50px rgba(0, 0, 0, 0.25), 0 1px 0 rgba(255, 255, 255, 0.05)"
    //   : "0 25px 50px rgba(0, 0, 0, 0.1), 0 1px 0 rgba(255, 255, 255, 0.8)",
    textAlign: "center",
    transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating ? "scale(0.95) translateY(10px)" : "scale(1) translateY(0)",
    // border: isDarkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.3)"
  };

  const titleStyle = {
    color: isDarkMode ? "#c43737ff" : "#c40f0fff",
    fontSize: "2.8rem",
    fontWeight: "700",
    marginBottom: "3rem",
    background: isDarkMode
      ? "linear-gradient(135deg, #74b9ff, #a29bfe)"
      : "linear-gradient(135deg, #0984e3, #6c5ce7)",
    WebkitBackgroundClip: "text",
    // WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    letterSpacing: "-0.5px"
  };

  const quoteStyle = {
    color: isDarkMode ? "#e0e0e0" : "#2d3436",
    fontSize: "1.6rem",
    lineHeight: "1.7",
    fontStyle: "italic",
    marginBottom: "2rem",
    transition: "all 0.3s ease",
    fontWeight: "400",
    fontFamily: "'Merriweather', 'Georgia', serif"
  };

  const authorStyle = {
    color: isDarkMode ? "#b2bec3" : "#636e72",
    fontSize: "1.3rem",
    fontWeight: "500",
    marginBottom: "3rem",
    fontStyle: "normal",
    letterSpacing: "0.5px"
  };

  const newQuoteButtonStyle = {
    background: isDarkMode
      ? "linear-gradient(135deg, #74b9ff, #a29bfe)"
      : "linear-gradient(135deg, #0984e3, #6c5ce7)",
    color: "white",
    border: "none",
    padding: "16px 40px",
    borderRadius: "12px",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    boxShadow: isDarkMode
      ? "0 8px 25px rgba(116, 185, 255, 0.3)"
      : "0 8px 25px rgba(9, 132, 227, 0.3)",
    letterSpacing: "0.5px"
  };

  const iconStyle = {
    marginRight: "10px",
    transition: "transform 0.3s ease"
  };

  return (
    <div style={containerStyle}>
      {/* Floating Dark Mode Toggle */}
      <button
        style={toggleButtonStyle}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>

      <div style={cardStyle}>
        <h1 style={titleStyle}>Daily Inspiration</h1>

        {currentQuote && (
          <>
            <p style={quoteStyle}>"{currentQuote.quote}"</p>
            <p style={authorStyle}>— {currentQuote.author}</p>
          </>
        )}

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
    style={newQuoteButtonStyle}
    onClick={() => window.location.reload()} // refresh page
  >
    <span style={iconStyle}>🔄</span> New Quote
  </button>
        </div>
      </div>
    </div>
  );
};

export default App;
