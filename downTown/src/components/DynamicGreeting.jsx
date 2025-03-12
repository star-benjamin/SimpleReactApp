
function DynamicGreeting(props) {
    function Message(){
    const hours = new Date().getHours();
    if (hours < 12) {
      return 'Good morning';
    } else if (hours < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
   }
   return(
    <p className="text-center text-white p-4">{Message()}, {props.name}.</p>
   );
  }
  export default DynamicGreeting