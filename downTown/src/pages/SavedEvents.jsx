
function Events({ savedEvents }) {
    console.log("Events received in Events component:", savedEvents);

      return (
        <div className="flex flex-col items-center justify-start min-h-screen p-4 m-1">
            <h1 className="text-3xl font-bold mb-4 text-center w-full">My Saved Events</h1>

        {/*Check whether there are any saved events */}

        {savedEvents.length === 0 ? (
            <p className="text-center">No events saved yet.</p>) 
            : (
           <div className="flex flex-wrap justify-center w-full">
             {savedEvents.map((event, index) => (
           <div key={index} className="border-2 border-[#2c1919] rounded-lg shadow-md shadow-black p-2.5 text-center m-3.5 max-w-xs">
            <img className="product-image max-w-full h-auto" src={event.img} alt="Event" />
            <h2 className="text-xl">{event.name}</h2>
            <p>{event.date}</p>
            </div>
           ))}
        </div>
        )}
  </div>
  
      );
    }
    
    export default Events;
    