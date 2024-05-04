const UserCard = () => {
    return ( 
        <div className="flex flex-col w-full justify-center items-center">
            <img 
                src="/src/assets/images/profile-img.jpeg"
                className="block w-2/5 md:w-2/6 lg:w-1/4 xl:w-1/5 2xl:w-1/6 mx-auto"
                alt="Profile Image"
            />
            <h2 className="text-[22px] font-bold mt-5 mb-2">Fatemehosseini</h2>
            <p className="text-sm">fatemepaklean@gmail.com</p>
        </div>
     );
}
 
export default UserCard;