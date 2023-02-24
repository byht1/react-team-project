import React from 'react';
import { useEffect } from 'react';
import { Backdrop, DayItem, DayList, TimeList, TimeItem } from './FriendsCard.styled';
const TimeSchedule = ({ notShown, data }) => {
  const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  //   const outsideClick = evt => {
  //     if (evt.currentTarget === evt.target) {
  //       notShown();
  //     }
  //   };
  useEffect(() => {
    const clickKeyDown = elem => {
      if (elem.code === 'Escape') {
        notShown();
      }
    };

    window.addEventListener('keydown', clickKeyDown);
    // window.addEventListener('click', outsideClick);
    return () => {
      window.removeEventListener('keydown', clickKeyDown);
      //   window.addEventListener('click', outsideClick);
    };
  }, [notShown]);

  return (
    <Backdrop>
      <DayList>
        {days.map(day => {
          return <DayItem>{day}</DayItem>;
        })}{' '}
      </DayList>
      <TimeList>
        {data.map(time => {
          return (
            <TimeItem>
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
