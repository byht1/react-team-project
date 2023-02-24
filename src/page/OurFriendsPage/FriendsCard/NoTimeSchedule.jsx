import React from 'react';
import { useEffect } from 'react';
import { Backdrop, NoTimeDayList, NoTimeLi, NoDayItem, NoTimeItem } from './FriendsCard.styled';
const NoTimeSchedule = ({ notShown }) => {
  useEffect(() => {
    const clickKeyDown = elem => {
      if (elem.code === 'Escape') {
        notShown();
      }
    };

    window.addEventListener('keydown', clickKeyDown);
    return () => {
      window.removeEventListener('keydown', clickKeyDown);
    };
  }, [notShown]);
  const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  return (
    <Backdrop>
      <NoTimeDayList>
        {days.map(day => {
          return (
            <NoTimeLi>
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
