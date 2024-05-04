import UserCard from '../components/UserCard';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineSafety } from "react-icons/ai";
import { CgCreditCard } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";

const ProfilePage: React.FC = () => {
    return ( 
        <div className='container mx-auto px-5 py-7'>
            <p className='font-semibold text-[17px] lg:text-lg'>Profile</p>
            {/* <p>En</p> */}
            <UserCard />
            <nav className='w-full min-[440px]:w-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4 min-[440px]:mx-auto'>
                <ul>
                    <li className='py-3 hover:bg-[#262626] rounded-lg'>
                        <Link to="/edit-profile">
                            <div className='flex items-center text-blue-500 gap-6'>
                                <FaRegUser  className='scale-125 ml-3' />
                                <span className=''>Edit Profile</span>
                            </div>
                        </Link>
                    </li>
                    <li className='py-3 hover:bg-[#262626] rounded-lg'>
                        <Link to="/" >
                            <div className='flex items-center text-blue-500 gap-6'>
                                <CgCreditCard className=' scale-125 ml-3' />
                                <span className=''>Payment</span>
                            </div>
                        </Link>
                    </li>
                    <li className='py-3 hover:bg-[#262626] rounded-lg'>
                        <Link to="/">
                            <div className='flex items-center text-blue-500 gap-6'>
                                <AiOutlineSafety className='scale-150 ml-3' />
                                <span className=''>Security</span>
                            </div>
                        </Link>
                    </li>
                    <li className='py-3 text-red hover:bg-[#7f1d1d] hover:bg-opacity-35 rounded-lg'>
                        <Link to="/">
                            <div className='flex items-center text-blue-500 gap-6'>
                                <IoLogOutOutline className='scale-[1.7] ml-3' />
                                <span className=''>Logout</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default ProfilePage;