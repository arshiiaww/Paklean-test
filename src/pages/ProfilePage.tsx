import React, { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';
import BottomSheet from '../components/BottomSheet';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineSafety } from "react-icons/ai";
import { CgCreditCard } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';



interface FormData {
    fullName: string;
    firstName: string;
    email: string;
    birthDate: string;
    phoneNumber: string;
    gender: string;
  }

const ProfilePage: React.FC = () => {
    const fields = {
        fullName: '',
        firstName: '',
        email: '',
        birthDate: '',
        phoneNumber: '',
        gender: '',
      }
    const [formData, setFormData] = useState<FormData>(fields);
    
    const [isOpen , setIsOpen] = useState(false)
    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }


    const handleLogout = () => {
      // Remove form data from local storage
      localStorage.removeItem('formData');
      handleIsOpen();
      setFormData(fields)
    };

    
    useEffect(() => {
        const storedFormData = localStorage.getItem('formData');
        if (storedFormData) {
            setFormData(JSON.parse(storedFormData));
        }
    }, []);
    

    // i18n
    const { t, i18n } = useTranslation();
    
    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
      };

    return (
        <>
        <div className='container mx-auto px-5 py-7 z-[-1]'>
            <p className='font-semibold text-[17px] lg:text-lg'>{t('profile.title')}</p>
            <select className='text-[#9CA3AF] rounded-md bg-gray outline-none border border-[#EEEEEE] text-sm' value={i18n.language} onChange={handleLanguageChange}>
                <option value="en">En</option>
                <option value="es">Es</option>
            </select>
            <UserCard fullName={formData.fullName} email={formData.email} />
            <nav className='w-full min-[440px]:w-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4 min-[440px]:mx-auto'>
                <ul>
                    <li className='py-3 hover:bg-[#262626] rounded-md'>
                        <Link to="/edit-profile">
                            <div className='flex items-center text-blue-500 gap-6'>
                                <FaRegUser className='scale-125 ml-3'/>
                                <span className=''>{t('profile.editProfile')}</span>
                            </div>
                        </Link>
                    </li>
                    <li className='py-3 hover:bg-[#262626] rounded-md'>
                        <Link to="/" >
                            <div className='flex items-center text-blue-500 gap-6'>
                                <CgCreditCard className=' scale-125 ml-3' />
                                <span className=''>{t('profile.payment')}</span>
                            </div>
                        </Link>
                    </li>
                    <li className='py-3 hover:bg-[#262626] rounded-md'>
                        <Link to="/">
                            <div className='flex items-center text-blue-500 gap-6'>
                                <AiOutlineSafety className='scale-150 ml-3' />
                                <span className=''>{t("profile.security")}</span>
                            </div>
                        </Link>
                    </li>
                    <li className='py-3 text-red hover:bg-[#7f1d1d] hover:bg-opacity-35 rounded-md cursor-pointer' onClick={handleIsOpen}>
                        <div className='flex items-center text-blue-500 gap-6'>
                            <IoLogOutOutline className='scale-[1.7] ml-3' />
                            <span className=''>{t("profile.logout")}</span>
                        </div>
                        {isOpen && 
                                <>
                                <div className='fixed bottom-0 left-0 right-0 bg-gray h-1/3 p-4 transition-transform duration-300 text-white z-[2] rounded-t-[35px]'>
                                    <h4 className='text-red text-[23px] text-center font-semibold pt-4'>{t("profile.log-out")}</h4>
                                    <p className='text-md text-left min-[440px]:text-center mt-5'>{t("profile.question")}</p>
                                    <div className="flex justify-between mt-4">
                                      <button className="bg-white text-blue font-semibold rounded-md p-3 w-[125px]" onClick={handleIsOpen}>
                                      {t("profile.cancel")}
                                      </button>
                                      <button className='bg-blue text-gray font-semibold rounded-md p-3 w-[125px]' onClick={handleLogout}>{t("profile.yes")}</button>
                                    </div>
                                </div>
                                <div className='flex fixed top-0 left-0 z-[1] w-full h-full bg-white opacity-50'></div>
                                </>
                        }
                    </li>
                </ul>
            </nav>
        </div>
            <BottomSheet />
        </>
     );
}
 
export default ProfilePage;