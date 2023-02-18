import React from 'react';
import { Form, Item, Input, SpanLogout, Cover, FildName, Icon } from './UserInfo.styled';

export const UserInfo = () => {
  return (
    <Cover>
      <Form>
        <FildName>Name:</FildName>
        <Item>
          <Input placeholder="Anna" />
        </Item>
        <Icon>ic</Icon>
        <FildName>Email:</FildName>
        <Item>
          <Input placeholder="anna00@gmail.com" />
        </Item>
        <Icon>ic</Icon>
        <FildName>Birthday: </FildName>
        <Item>
          <Input placeholder="00.00.0000 " />
        </Item>
        <Icon>ic</Icon>
        <FildName>Phone:</FildName>
        <Item>
          <Input placeholder="+38000000000" />
        </Item>
        <Icon>ic</Icon>
        <FildName>City:</FildName>
        <Item>
          <Input placeholder="Kiev" />
        </Item>
        <Icon>ic</Icon>
      </Form>
      <SpanLogout>Logout</SpanLogout>
    </Cover>
  );
};
