import React from 'react';

interface UserCardProps {
  fullName: string;
  email: string;
}

const UserCard: React.FC<UserCardProps> = ({ fullName, email }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center mt-4 mb-10">
      <img
        src="/src/assets/images/profile-img.jpeg"
        className="block w-2/5 md:w-2/6 lg:w-1/4 xl:w-1/5 2xl:w-1/6 mx-auto"
        alt="Profile Image"
      />
      <h2 className="text-[22px] font-bold mt-5 mb-2">{fullName}</h2>
      <p className="text-sm">{email}</p>
    </div>
  );
};

export default UserCard;