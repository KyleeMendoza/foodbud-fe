import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AvailableDatesCalendar = ({ availableDates, onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(0);

  useEffect(() =>{
    console.log(selectedDate)
  }, [selectedDate])

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = formatDate(date);
    onDateChange(formattedDate);
  };

  const tileContent = ({ date, view }) => {
    const matchingDate = availableDates.find(
      (availableDate) => availableDate.date === date.toISOString().split('T')[0]
    );

    return (
      <div className="tile-content-wrapper">
        {matchingDate && (
          <div className="availability-indicator">
            {matchingDate.count}
          </div>
        )}
      </div>
    );
  };

  const tileClassName = ({ date }) => {
    const isAvailable = availableDates.some(
      (availableDate) => availableDate.date === date.toISOString().split('T')[0]
    );

    return isAvailable ? 'available-date' : 'unavailable-date';
  };

  return (
    <div>
      <Calendar
        tileContent={tileContent}
        tileClassName={tileClassName}
        onChange={handleDateChange}
        value={selectedDate}
      />
    </div>
  );
};

export default AvailableDatesCalendar;
