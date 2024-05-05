import React from 'react';

interface DropdownProps {
  formData: { value: string };
  onChange: (newValue: string) => void;
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ formData, onChange, options }) => {
  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <div>
      <select value={formData.value} onChange={handleDropdownChange} className='block w-full rounded-md bg-gray outline-none border border-[#EEEEEE] p-4 text-sm mb-5'>
        <option value="">Select Gender</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;