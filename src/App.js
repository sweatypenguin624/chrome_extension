// App.jsx
import React, { useState, useEffect } from "react";

const App = () => {
  const quotes = [
    { content: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { content: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { content: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { content: "If you are working on something exciting, it will keep you motivated.", author: "Unknown" },
    { content: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { content: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
    { content: "Dream bigger. Do bigger.", author: "Unknown" },
    { content: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { content: "Great things never come from comfort zones.", author: "Unknown" },
    { content: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
    { content: "Success doesn't just find you. You have to go out and get it.", author: "Unknown" },
    { content: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
    { content: "Dream it. Wish it. Do it.", author: "Unknown" },
    { content: "Sometimes later becomes never. Do it now.", author: "Unknown" },
    { content: "Little things make big days.", author: "Unknown" },
    { content: "It's going to be hard, but hard does not mean impossible.", author: "Unknown" },
    { content: "Don't wait for opportunity. Create it.", author: "Unknown" },
    { content: "Sometimes we're tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" },
    { content: "The harder the battle, the sweeter the victory.", author: "Les Brown" },
    { content: "Don't limit your challenges. Challenge your limits.", author: "Unknown" },
    { content: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { content: "Do something today that your future self will thank you for.", author: "Unknown" },
    { content: "Little progress each day adds up to big results.", author: "Satya Nani" },
    { content: "Don't stop when you're tired. Stop when you're done.", author: "Marilyn Monroe" },
    { content: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
    { content: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { content: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { content: "Work hard in silence, let success make the noise.", author: "Frank Ocean" },
    { content: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { content: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { content: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { content: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { content: "The future depends on what you do today.", author: "Mahatma Gandhi" },
    { content: "Do what you can with all you have, wherever you are.", author: "Theodore Roosevelt" },
    { content: "Don't count the days, make the days count.", author: "Muhammad Ali" },
    { content: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { content: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
    { content: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { content: "Try not to become a man of success, but rather try to become a man of value.", author: "Albert Einstein" },
    { content: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" },
    { content: "The best revenge is massive success.", author: "Frank Sinatra" },
    { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { content: "Act as if what you do makes a difference. It does.", author: "William James" },
    { content: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { content: "What seems to us as bitter trials are often blessings in disguise.", author: "Oscar Wilde" },
    { content: "Don't be pushed around by the fearconst"  }]
 const [currentQuote, setCurrentQuote] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
// Initialize with a random quote
useEffect(() => {
  getRandomQuote();
}, []);

const getRandomQuote = () => {
  setIsAnimating(true);
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
    setIsAnimating(false);
  }, 500);
};

const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);
};

// Improved gradient backgrounds
const lightGradient = "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)";
const darkGradient = "linear-gradient(135deg, #0c0c0c 0%, #2d3436 100%)";

const containerStyle = {
  minHeight: "100vh",
  background: isDarkMode ? darkGradient : lightGradient,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  transition: "all 0.5s ease-in-out",
  fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
  position: "relative"
};

// Floating toggle button in top right
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
  background: isDarkMode ? "rgba(18, 18, 24, 0.85)" : "rgba(255, 255, 255, 0.85)",
  backdropFilter: "blur(20px)",
  borderRadius: "20px",
  padding: "3.5rem 2.5rem",
  maxWidth: "680px",
  width: "90%",
  boxShadow: isDarkMode 
    ? "0 25px 50px rgba(0, 0, 0, 0.25), 0 1px 0 rgba(255, 255, 255, 0.05)" 
    : "0 25px 50px rgba(0, 0, 0, 0.1), 0 1px 0 rgba(255, 255, 255, 0.8)",
  textAlign: "center",
  transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  opacity: isAnimating ? 0 : 1,
  transform: isAnimating ? "scale(0.95) translateY(10px)" : "scale(1) translateY(0)",
  border: isDarkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.3)"
};

const titleStyle = {
  color: isDarkMode ? "#ffffff" : "#2d3436",
  fontSize: "2.8rem",
  fontWeight: "700",
  marginBottom: "3rem",
  background: isDarkMode 
    ? "linear-gradient(135deg, #74b9ff, #a29bfe)" 
    : "linear-gradient(135deg, #0984e3, #6c5ce7)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
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
      onMouseOver={(e) => {
        e.target.style.transform = "scale(1.1) rotate(12deg)";
        e.target.style.background = isDarkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)";
      }}
      onMouseOut={(e) => {
        e.target.style.transform = "scale(1) rotate(0deg)";
        e.target.style.background = isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
      }}
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>

    <div style={cardStyle}>
      <h1 style={titleStyle}>Daily Inspiration</h1>
      
      {currentQuote && (
        <>
          <p style={quoteStyle}>"{currentQuote.content}"</p>
          <p style={authorStyle}>— {currentQuote.author}</p>
        </>
      )}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button 
          style={newQuoteButtonStyle} 
          onClick={getRandomQuote}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow = isDarkMode 
              ? "0 12px 35px rgba(116, 185, 255, 0.4)" 
              : "0 12px 35px rgba(9, 132, 227, 0.4)";
            const icon = e.target.querySelector('span');
            if (icon) icon.style.transform = "rotate(90deg)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = isDarkMode 
              ? "0 8px 25px rgba(116, 185, 255, 0.3)" 
              : "0 8px 25px rgba(9, 132, 227, 0.3)";
            const icon = e.target.querySelector('span');
            if (icon) icon.style.transform = "rotate(0deg)";
          }}
        >
          <span style={iconStyle}>🔄</span>
          New Quote
        </button>
      </div>
    </div>
  </div>
);
}
 

export default App;  // ✅ This is required
