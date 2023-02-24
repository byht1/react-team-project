import React from 'react';
import { useEffect, useState } from 'react';
import { Backdrop, DayItem, DayList, TimeList, TimeItem } from './FriendsCard.styled';
const shortid = require('shortid');
const TimeSchedule = ({ notShown, data }) => {
  const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const [iterationNum, setIterationNum] = useState(1);
  useEffect(() => {
    const clickKeyDown = elem => {
      if (elem.code === 'Escape') {
        notShown();
      }
    };
    const clickOutside = () => {
      setIterationNum(prev => prev + 1);
      if (iterationNum === 1) {
        return;
      }
      notShown();
    };
    window.addEventListener('keydown', clickKeyDown);
    window.addEventListener('click', clickOutside);
    return () => {
      window.removeEventListener('keydown', clickKeyDown);
      window.removeEventListener('click', clickOutside);
    };
  }, [iterationNum, notShown]);

  return (
    <Backdrop>
      <DayList>
        {days.map(day => {
          return <DayItem key={shortid.generate()}>{day}</DayItem>;
        })}{' '}
      </DayList>
      <TimeList>
        {data.map(time => {
          return (
            <TimeItem key={shortid.generate()}>
              {time.isOpen && (
                <>
                  {time.from}-{time.to}
                </>
              )}
              {!time.isOpen && <>--------------------</>}
            </TimeItem>
          );
        })}{' '}
      </TimeList>
    </Backdrop>
  );
};

export default TimeSchedule;
