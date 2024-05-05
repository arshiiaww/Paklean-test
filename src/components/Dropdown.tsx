import React from 'react';
import { useTranslation } from 'react-i18next';

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

      // i18n
      const { t, i18n } = useTranslation();


  return (
    <div>
      <select value={formData.value} onChange={handleDropdownChange} className='block w-full rounded-md bg-gray outline-none border border-[#EEEEEE] p-4 text-sm mb-5'>
        <option value="">{t("editProfile.gender")}</option>
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