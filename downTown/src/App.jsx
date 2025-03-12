import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Events from './components/Events.jsx';
import InputForm from './components/InputForm.jsx';
import Homepage from './pages/Homepage.jsx';
import Sidebar from './components/Sidebar.jsx';
import DynamicGreeting from './components/DynamicGreeting.jsx';
import SavedEvents from './pages/SavedEvents.jsx'
import Yiliba from './pages/Yiliba.jsx'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [savedEvents, setSavedEvents] = useState([]);
  const [name, setName] = useState(""); 

  const handleSaveEvent = (event) => {
    setSavedEvents((prevEvents) => [...prevEvents, event]);
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-400 overflow-hidden" >
        {/*Sidebar div always visible on everypage*/}
        <div className="w-1/4 min-w-[250px]">
        <Sidebar />
        </div>

        {/*Div to render the other pages*/}
        <div className="w-3/4 overflow-y-auto p-6 md:p-10">
        <Routes>
          <Route
            path="/"
            element={
              !isSubmitted ? (
                <div className="rounded-lg shadow m-h-[100px] items-center justify-center p-4 m-4">
                  <InputForm setName={setName} setIsSubmitted={setIsSubmitted} />
                </div>
              ) : (
                <>
                  <DynamicGreeting name={name} className="flex justify-center items-center"/>
                  <Homepage name={name} handleSaveEvent={handleSaveEvent} />
                </>
              )
            }
          />
          <Route path="/events" element={<Events savedEvents={savedEvents} />} />
          <Route path="/savedevents" elements={<SavedEvents/>}/>
          <Route path="/yiliba" elements={<Yiliba/>}/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;