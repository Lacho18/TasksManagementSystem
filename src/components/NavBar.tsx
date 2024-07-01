import { Link } from 'react-router-dom';
import users from '../data/users';

export default function NavBar() {

    return (
        <div className="nav-div">
            <div className='head-nav'>
                <img src={users[0].image} />
                <p>{users[0].name.firstName} {users[0].name.lastName}</p>
            </div>
            <div className='main-nav'>
                <Link to="/">Manage tasks</Link>
                <Link to="/users">Manage users</Link>
                <Link to="/taskHistory">Tasks history</Link>
            </div>
        </div>
    )
}