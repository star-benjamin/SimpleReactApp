import Greet from './Greet.jsx'
import { useState } from 'react';
import Header from './Header.jsx'


function Message(){
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
    function dynamicGreeting(){
        const hours=new Date().getHours();
        if(hours<12){
          return 'Good morning';
        }
        else if(hours<18){
          return 'Good afternoon';
        }
        else{
          return 'Good evening';
        }
      }; 

     
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmitted(true);
    onSubmit(); 
  };

  return(
     
  <div className='flex flex-col items-center justify-items-center'>
    {!submitted ? (
        
        <form onSubmit={handleSubmit} className="text-center p-4">
          <label htmlFor="name" className="block mb-2">
            Enter your name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2"
            placeholder="Enter your name"
            required
          />
          <button type="submit" className="mt-4 p-2 bg-blue-500 text-white">
            Submit
          </button>
        </form>
    ):(
         <div className='flex flex-col items-center justify-center min-h-screen'>
          <p className=''>{dynamicGreeting()},{name}.</p>
         </div>)}
  </div>
  );
     
}
export default Message