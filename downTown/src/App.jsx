import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header.jsx';
import Bid from './components/Bid.jsx';
import Events from './components/Events.jsx'
import Hackathon from './assets/AI.jpg';
import Intellectual from './assets/Inte.jpg';


function App() {
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [savedEvents, setSavedEvents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  function dynamicGreeting() {
    const hours = new Date().getHours();
    if (hours < 12) {
      return 'Good morning';
    } else if (hours < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  }
   
  // Function to save events
  const handleSaveEvent = (event) => {
    console.log("Received event in App:", event);
    setSavedEvents((prevEvents) => {
      const updatedEvents=[...prevEvents, event];
      console.log("Updated saved events:", updatedEvents);
      return updatedEvents;
    });
  };

  return (
    <Router>
      <div className="App">
        <Header className="mb-6" />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              !isSubmitted ? (
                <div className="flex flex-col items-center justify-center min-h-screen">
                  <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border p-2 mb-4"
                    />
                    <button type="submit" className="p-2 bg-blue-500 text-white">
                      Submit
                    </button>
                  </form>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center min-h-screen">
                  <p className="text-center p-4">{dynamicGreeting()}, {name}.</p>
                  <p className="text-center text-lg font-semibold text-gray-700">
                      Upcoming events in CoCIS
                  </p>

                  <div className='flex flex-row items-center justify-center'>
                  <Bid img={Hackathon} name="AI Hackathon" date="15th March 2025" onSave={handleSaveEvent}/>
                  <Bid img={Intellectual} name="Intellectual Property Talk" date="26th April 2025" onSave={handleSaveEvent}/>
                  </div>

                  <Link to="/events">
                  <button className="mt-4 p-2 bg-green-500 text-white">View Saved Events</button>
                </Link>
                </div>
              )
            }
          />

          {/* Events Route */}
          <Route path="/events" element={<Events savedEvents={savedEvents} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
