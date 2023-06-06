import { Link } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
    return (
        <div className='bg-purple-600 p-4 text-zinc-50  '>
            <nav className=' flex  max-w-7xl m-auto'>
                <Link to="/" className='ms-8 self-center'>
                    <h1 className='text-2xl font-semibold'>Kosher Cooking</h1>
                </Link>
                <Link to="/create" className='ms-auto me-8 border p-3 rounded'>
                    <h1 className=' '>Create Resipe</h1>

                </Link>
            </nav>
        </div>
    )
}
