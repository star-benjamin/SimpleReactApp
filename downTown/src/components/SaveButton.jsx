function SaveButton({ isSaved, handleClick }) {
    return (
      <button type="button" onClick={handleClick} className={`p-2 text-white transition-all ${isSaved ? "bg-green-500" : "bg-red-500"}`}>
        {isSaved ? "Saved" : "Save"}
      </button>
    );
  }
  
  export default SaveButton;
  