import React, { useState } from 'react';
import SubmitButton from './SubmitButton';

function InputForm({ setName, setIsSubmitted }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      alert("Please enter your name before submitting.");
      return;
    }
    setName(inputValue);
    setIsSubmitted(true);
  };

  return (
    <div className="h-[200px] shadow rounded-lg p-7 bg-gray-700 min-w-[250px]">
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input type="text" className=" bg-white w-[300px]  border justify-center p-2 mb-4" placeholder="Enter your name" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <SubmitButton />
    </form>
    </div>
  );
}

export default InputForm;