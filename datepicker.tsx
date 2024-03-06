import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';

const MyDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <View>
      <Text>Select a Date:</Text>
      <DatePicker
        style={{ width: 200 }}
        date={selectedDate}
        mode="date"
        placeholder="Select date"
        format="YYYY-MM-DD"
        minDate="2020-01-01"
        maxDate="2025-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
        }}
        onDateChange={handleDateChange}
      />
      <TouchableOpacity onPress={() => console.log(selectedDate)}>
        <Text>Log Selected Date</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyDatePicker;