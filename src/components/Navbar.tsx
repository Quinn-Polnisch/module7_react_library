import { useState } from "react"
import { Link } from "react-router-dom"
import { signInWithPopup, signOut } from "firebase/auth"
import { auth, Providers } from '../config/firebase'

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ) {
            location.reload();
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(!isVisible)
    }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link to='/' className="font-semibold text-xl tracking-light">Library</Link>
        </div>
        <div className="block">
            <button
                onClick={dropDown} 
                className="flex items-center px-3 py-2 text-white border rounded border-slate-800
                bg-slate-600 hover:border-slate-200"
            >
                <i className="fas fa-bars"></i>
            </button>
        </div>
        { isVisible ? (
            <div className="w-full block flex-grow items-center">
                <button onClick={clicked} className="p-3 m-5 bg-slate-700 rounded justify-center">
                    <div>
                        <Link to='/' className="flex place-items-center lg:inline-block text-white">Home</Link>
                    </div>
                </button>
                <button onClick={clicked} className="p-3 m-5 bg-slate-700 rounded justify-center">
                    <div>
                        <Link to='/about' className="flex place-items-center lg:inline-block text-white">About</Link>
                    </div>
                </button>
                <button onClick={clicked} className="p-3 m-5 bg-slate-700 rounded justify-center">
                    <div>
                        <Link to='/dashboard' className="flex place-items-center lg:inline-block text-white">Dashboard</Link>
                    </div>
                </button>
                {
                    !auth.currentUser ? 
                    <button className="p-3 m-5 bg-slate-700 rounded justify-center">
                        <div>
                            <Link to='/' onClick={ () => { signInOnClick() }} 
                                className="flex place-item-center lg:inline-block text-white">
                                    Login
                            </Link>
                        </div>
                    </button>
                    :
                    <button className="p-3 m-5 bg-slate-700 rounded justify-center">
                        <Link to='/' onClick={ () => { signOutOnClick() }}
                            className="flex place-items-center lg:inline-block text-white">
                                Logout
                            </Link>
                    </button>
                }
            </div>
        ) : (
            <></>
        )}
    </nav>
  )
}

export default Navbar