import UserCard from '../components/UserCard';

const ProfilePage: React.FC = () => {
    return ( 
        <div className='container mx-auto px-5 py-7'>
            <p className='font-semibold text-[17px] lg:text-lg mb-4'>Profile</p>
            {/* <p>En</p> */}
            <UserCard />
        </div>
     );
}
 
export default ProfilePage;