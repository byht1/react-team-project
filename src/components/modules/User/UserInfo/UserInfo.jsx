import React from 'react';
import { Form, Item, Input } from './UserInfo.styled';

export const UserInfo = () => {
  return (
    <Form>
      <Item>
        Name:
        <Input placeholder="Anna" />
      </Item>

      <Item>
        Email:
        <Input placeholder="anna00@gmail.com" />
      </Item>

      <Item>
        Birthday:
        <Input placeholder="00.00.0000" />
      </Item>

      <Item>
        Phone:
        <Input placeholder="00.00.0000" />
      </Item>

      <Item>
        City:
        <Input placeholder="Kiev" />
      </Item>
    </Form>
  );
};
