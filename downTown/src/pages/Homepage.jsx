import Hackathon from '../assets/AI.jpg';
import Intellectual from '../assets/Inte.jpg';
import Climate from '../assets/climate hackathon.jpg'
import IP from '../assets/IP rights.jpg'
import Bid from '../components/Bid.jsx';

function Homepage({ name, handleSaveEvent }) {
  return (
    <div className=" items-center justify-center min-h-screen  min-w-[400px]">
      <p className="text-center text-lg font-semibold text-white">Upcoming events in CoCIS</p>
      <div className='grid sm:grid-cols-3 items-center justify-center'>
        <Bid img={Hackathon} name="AI Hackathon" date="15th March 2025" onSave={handleSaveEvent} />
        <Bid img={IP} name="Intellectual Property Talk" date="26th April 2025" onSave={handleSaveEvent} />
        <Bid img={Climate} name="Climate Hackathon" date="15th - 16th March 2025" onSave={handleSaveEvent}/>
      </div>
    </div>
  );
}

export default Homepage;