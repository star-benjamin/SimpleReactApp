import { useState } from 'react';
import SaveButton from './SaveButton';

function Bid({ name, date, img, onSave }) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    const event = { name, date, img };
    if (onSave) {
      onSave(event);
      setIsSaved(true);
    }
  };

  return (
    <div className="border-2 border-[#2c1919] rounded-lg shadow-md p-2.5 text-center m-3.5 max-w-xs">
      <img className="w-64 h-40 object-cover" src={img} alt={name} />
      <h1>{name}</h1>
      <p>{date}</p>
      <SaveButton isSaved={isSaved} handleClick={handleSaveClick} />
    </div>
  );
}

export default Bid;