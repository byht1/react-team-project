import React from 'react';
import { useState } from 'react';
import {
  CardBox,
  CardTitle,
  FriendLogo,
  InfoList,
  InfoItem,
  Wrapper,
  InfoTimeItem,
  InfoTimeItemNotActive,
} from './FriendsCard.styled';
import TimeSchedule from './TimeSchedule';
const FriendsCard = ({ data }) => {
  const [openDrop, setOpenDrop] = useState(false);

  const notShown = () => {
    setOpenDrop(prev => !prev);
  };
  return (
    <CardBox>
      <CardTitle href={`${data.url}`} target="_blank" rel="noreferrer">
        {data.title}
      </CardTitle>
      <Wrapper>
        <FriendLogo src={`${data.imageUrl}`} />
        <InfoList>
          {data.workDays !== null && data.workDays.length !== 0 ? (
            <>
              {data.workDays[0].isOpen && (
                <InfoTimeItem onClick={notShown}>
                  <span>Time:</span>
                  {data.workDays[0].from}-{data.workDays[0].to}
                </InfoTimeItem>
              )}
              {!data.workDays[0].isOpen && (
                <InfoTimeItem onClick={notShown} data={data.workDays}>
                  <span>Time:</span>
                  -----------------------------------
                </InfoTimeItem>
              )}
              {openDrop && <TimeSchedule notShown={notShown} data={data.workDays} />}
            </>
          ) : (
            <>
              <InfoTimeItemNotActive onClick={notShown} data={data.workDays} disabled={true}>
                <span>Time:</span>
                -----------------------------------
              </InfoTimeItemNotActive>
            </>
          )}
          {data.address ? (
            <InfoItem>
              <span>Address:</span>
              <a href={`${data.addressUrl}`} target="_blank" rel="noreferrer">
                {data.address}
              </a>
            </InfoItem>
          ) : (
            <InfoItem>
              <span>Address:</span>
              -----------------------------------
            </InfoItem>
          )}
          {data.email ? (
            <InfoItem>
              <span>Email:</span>
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </InfoItem>
          ) : (
            <InfoItem>
              <span>Email:</span>
              -----------------------------------
            </InfoItem>
          )}
          {data.phone ? (
            <InfoItem>
              <span>Phone:</span>
              <a href={`tel:${data.phone}`}>{data.phone}</a>
            </InfoItem>
          ) : (
            <InfoItem>
              <span>Phone:</span>
              -----------------------------------
            </InfoItem>
          )}
        </InfoList>
      </Wrapper>
    </CardBox>
  );
};

export default FriendsCard;
