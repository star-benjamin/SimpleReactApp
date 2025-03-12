import { Link } from 'react-router-dom';

function Sidebar(){
    return(
        <div className="flex flex-row  top-0 left-0  p-3 m-4 h-screen bg-gray-700  shadow rounded-lg">
            <nav >
                <ul className="flex flex-col gap-y-4 mt-4">
                    <li className="m-2"><a href='/' className="  font-semibold rounded-lg  overflow-hidden p-4 bg-green-700 text-white shadow-lg hover:text-black">Home</a></li>
                    {/*<li className="m-2"><a href='/SavedEvents' className=" font-semibold rounded-lg  overflow-hidden p-4 bg-green-700 text-white shadow-lg hover:text-black">Saved Events</a></li>
                    <li className="m-2"><a href='/events' className=" font-semibold rounded-lg  overflow-hidden p-4 bg-green-700 text-white shadow-lg hover:text-black">Events</a></li>
                    <li className="m-2"><a href='/yiliba' className=" font-semibold rounded-lg  overflow-hidden p-4 bg-green-700 text-white shadow-lg hover:text-black">Yiliba</a></li>*/}
            
                </ul>
            </nav>
        </div>

    );
}
export default Sidebar