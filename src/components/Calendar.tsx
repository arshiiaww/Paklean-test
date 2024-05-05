import React from 'react';

interface CalendarProps {
  formData: { value: string };
  onChange: (newValue: string) => void;
}

const Calendar: React.FC<CalendarProps> = ({ formData, onChange }) => {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    onChange(newDate);
  };

  return (
    <div>
      <input
        className='block w-full rounded-md bg-gray outline-none border border-[#EEEEEE] p-4 text-sm mb-5'
        type="date"
        placeholder='14/08/2003'
        value={formData.value}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default Calendar;