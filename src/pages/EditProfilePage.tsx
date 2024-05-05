import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from "react-icons/hi";
import Calendar from "../components/Calendar";
import Dropdown from "../components/Dropdown";
import { useNavigate } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

interface FormData {
    fullName: string;
    firstName: string;
    email: string;
    birthDate: string;
    phoneNumber: string;
    gender: string;
  }
  
const EditProfilePage: React.FC = () => {
    const fields = {
        fullName: 'Fatemehosseini',
        firstName: '',
        email: 'fatemepaklean@gmail.com',
        birthDate: '',
        phoneNumber: '',
        gender: '',
    }

    const [formData, setFormData] = useState<FormData>(fields);

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Save the edited data into local storage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Navigate back to the profile page
        navigate('/');
    };

    // i18n
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <div className='container mx-auto px-5 py-7'>
            <div className="flex items-center">
                <Link to="/" className='mr-6'>
                    <HiOutlineArrowLeft className="scale-150" />
                </Link>
                <p className='font-semibold text-[17px] lg:text-lg'>{t("editProfile.title")}</p>
                <select className='text-[#9CA3AF] rounded-md bg-gray outline-none border border-[#EEEEEE] text-sm' value={i18n.language} onChange={handleLanguageChange}>
                    <option value="en">En</option>
                    <option value="es">Es</option>
                </select>
            </div>

            <form onSubmit={handleSubmit} className='mt-8 text-[#9CA3AF]'>
                <input
                    className='block w-full rounded-md bg-gray outline-none border border-[#EEEEEE] p-4 text-sm mb-5'
                    type="text"
                    placeholder="Fateme Hosseini"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                />
                <input
                    className='block w-full rounded-md bg-gray outline-none border border-[#EEEEEE] p-4 text-sm mb-5'
                    type="text"
                    placeholder="Fateme"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <Calendar
                    formData={{ value: formData.birthDate }}
                    onChange={(newDate) => setFormData({ ...formData, birthDate: newDate })}
                />
                <div className='flex'>
                    <input
                        className='block w-full rounded-md bg-gray outline-none border border-[#EEEEEE] p-4 text-sm mb-5'
                        type="email"
                        placeholder="fatemepaklean@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                    <IoMailOutline className='absolute scale-150 top-[44.5%] right-[13%] text-[white]' />
                </div>
                <input
                    className='block w-full rounded-md bg-gray outline-none border border-[#EEEEEE] p-4 text-sm mb-5'
                    type="tel"
                    placeholder="+98 902***2663"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                />
                <Dropdown 
                    formData={{ value: formData.gender }}
                    onChange={(newGender) => setFormData({ ...formData, gender: newGender })}
                    options={['Male', 'Female', 'Other']}
                />
                <button className='w-full mx-auto bg-blue text-gray rounded-md p-3 mt-8 text-sm font-black transition ease-in-out duration-150 hover:text-blue hover:bg-white'>{t("editProfile.update")}</button>
            </form>
        </div>
    );
}
 
export default EditProfilePage;