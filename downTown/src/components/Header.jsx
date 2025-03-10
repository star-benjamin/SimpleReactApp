import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className="fixed top-0 left-0 w-2 p-3 m-2">
            <nav>
                <ul>
                    <li><a href='/' className="font-semibold border-2 bg-blue-400 text-white shadow-lg hover:text-blue-600">Home</a></li>
                    {/*<li><a href='/events' className="text-black font-semibold hover:text-blue-600">My Events</a></li>*/}
                </ul>
            </nav>
        </div>

    );
}
export default Header