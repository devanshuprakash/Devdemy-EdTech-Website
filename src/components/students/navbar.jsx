import React, { useContext } from 'react';
import { assets } from '../../Assets/assets';
import { Link, useLocation,  } from 'react-router-dom';
import { useClerk,UserButton,useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';
import Educator from '../../pages/educator/Educator';

function Navbar() {
  const {navigate,isEducator} =useContext(AppContext)
  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');

  const {openSignIn} = useClerk();
  const {user}  = useUser();

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
      <img onClick={()=> navigate('/')} src={assets.logo} alt="logo" className="w-28 lg:w-32 object-contain" />

      <div className="hidden md:flex items-center gap-5 text-gray-500">

        <div className="flex items-center gap-5 text-m ">
          {user &&
          <>
           <button onClick={()=>{navigate('/educator')}} className='hover:underline'>{isEducator? 'Educator Dashboard':'Become Educator'} |</button> 
            <Link to="/my-enrollments" className="hover:underline">My Enrollments</Link>
            </>}
        </div>

       { user ? <UserButton/> :
        <button onClick={()=>openSignIn()} className="bg-blue-600 text-white px-5 py-2 rounded-full text-m">
          Create Account
        </button>}
      </div> 
{/* for mobile screen */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div>
        {user &&
          <>
            <button onClick={()=>{navigate('/educator')}} className='hover:underline'>{isEducator? 'Educator Dashboard':'Become Educator'} |</button> 
            <Link to="/my-enrollments" className="hover:underline">My Enrollments</Link>
            </>}
        </div>
        {user ? <UserButton/> :
          <button onClick={()=>openSignIn()}><img src={assets.user_icon} alt="" /></button>}



      </div>
    </div>
  );
}

export default Navbar;

