import React from 'react';

import { Text } from 'components/global/text';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Text>Home Component</Text>
      <button type="button" onClick={() => navigate('/addpet/step1')}>
        Button
      </button>
    </div>
  );
};

export default Home;
