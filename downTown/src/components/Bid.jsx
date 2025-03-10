import  { useState } from 'react';
function Bid(props){
    const [isSaved, setIsSaved] = useState(false); 
    const handleSaveClick = () => {
        const event = {
          name: props.name,
          date: props.date,
          img: props.img,
        };
        if (props.onSave) { 
          props.onSave(event);
          setIsSaved(true); 
      } else {
        console.error("onSave function is missing in Bid component!");
      }
      };
      
      

    return(
        <div className="border-2 border-[#2c1919] rounded-lg shadow-md shadow-black p-2.5 text-center m-3.5 inline-block max-w-xs">
            <div id="Event-dispaly">
                <img className="w-64 h-40 object-cover" src={props.img}></img>
            </div>

            <div className="flex flex-col items-center">
                <h1 id='event-name'>{props.name}</h1><br/>
                <p id='event-date'>{props.date}</p>
            </div>

            <div >
            <button
          type="button"
          id="submit-button"
          onClick={handleSaveClick}
          className={`p-2 text-white transition-all ${
            isSaved ? "bg-red-500" : "bg-green-500"
          }`}
        >
         {isSaved ? " Saved" : " Save"}
        </button>
            </div>
        </div>
    );
};
export default Bid