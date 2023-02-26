import React from 'react';
import { useEffect, useState } from 'react';
import { Backdrop, NoTimeDayList, NoTimeLi, NoDayItem, NoTimeItem } from './FriendsCard.styled';
const shortid = require('shortid');
const NoTimeSchedule = ({ notShown }) => {
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
  const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  return (
    <Backdrop>
      <NoTimeDayList>
        {days.map(day => {
          return (
            <NoTimeLi key={shortid.generate()}>
              <NoDayItem>{day}</NoDayItem>
              <NoTimeItem>
                <>--------------------</>
              </NoTimeItem>
            </NoTimeLi>
          );
        })}
      </NoTimeDayList>
    </Backdrop>
  );
};

export default NoTimeSchedule;
