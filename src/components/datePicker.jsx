import React from "react";
import DatePicker from "react-datepicker";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";
import { months } from "../data/data"
import "react-datepicker/dist/react-datepicker.css";
import { FaCaretLeft, FaCaretRight, FaHome} from "react-icons/fa";
// Docs lib react-datepicker --> https://reactdatepicker.com/

function CustomDatePicker({ value, setDate }) {
  const years = range(1920, getYear(new Date()) + 1, 1);

  return (
    <div className="date-picker-container">
      <DatePicker className="date-picker-container"
        todayButton={<FaHome/>}
        useWeekdaysShort={true}
        selected={value}
        onChange={(date) => setDate(date)}
        required
        closeOnScroll={true}
        placeholderText="Click to select a date"
        renderCustomHeader={({
          date,
          changeMonth,
          changeYear,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="date-picker-header">
            <FaCaretLeft onClick={decreaseMonth} disabled={prevMonthButtonDisabled} />
            <select
              className="date-picker-select"
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select
              className="date-picker-select"
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <FaCaretRight onClick={increaseMonth} disabled={nextMonthButtonDisabled} />
          </div>
        )} 
      />
    </div>
  );
}

export default CustomDatePicker;