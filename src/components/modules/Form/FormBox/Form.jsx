import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { RadioTwo, RadioMale, RadioFemale, LabelText, Label } from '../FormSell/FormSell.styled';
import { LabelMale, LabelFemale } from '../FormSell/FormSell.styled';
// import { useState } from 'react';
// // const createAd = title => {
//   axios
//     .post('/api/posts', {
//       title: 'My post title',
//       content: 'This is the content of my post',
//       author: 'John Doe',
//     })
//     .then(response => {
//       console.log('Server response:', response.data);
//     })
//     .catch(error => {
//       console.error('Error sending POST request:', error);
//     });
// };

export const Form = ({ methods }) => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('option-1');
  const [male, setMale] = useState(true);
  const [female, setFemale] = useState(false);
  // const { mutate } = useMutation({ mutationFn: createAd });
  console.log(selectedValue);
  const onSubmit = data => {
    console.log(data);
    navigate('/');
  };

  const handleRadioInputChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div>
        <label>
          <input
            type="radio"
            name="radio-input"
            value="option-1"
            onChange={handleRadioInputChange}
            checked={selectedValue === 'option-1'}
          />
          <p>Option 1</p>
        </label>
        <label>
          <input
            type="radio"
            name="radio-input"
            value="option-2"
            onChange={handleRadioInputChange}
            checked={selectedValue === 'option-2'}
          />
          <p>Option 2</p>
        </label>
        <label>
          <input
            type="radio"
            name="radio-input"
            value="option-3"
            onChange={handleRadioInputChange}
            checked={selectedValue === 'option-3'}
          />
          <p>Option3</p>
        </label>
      </div>
      {/* <form>
        <LabelMale
          htmlFor="Male"
          onClick={() => {
            setMale(!male);
            setFemale(!female);
            console.log(male);
          }}
          male={male}
        >
          Male
          <RadioMale />
        </LabelMale>

        <RadioTwo
          type="radio"
          value="Male"
          id="Male"
          checked={male}
          onChange={() => setFemale(female)}
        />
        <LabelFemale
          htmlFor="Female"
          onClick={() => {
            setMale(false);
            setFemale(true);
            console.log(female);
          }}
          female={female}
        >
          Female
          <RadioFemale />
        </LabelFemale>
        <RadioTwo
          type="radio"
          value="Female"
          id="Female"
          checked={female}
          onChange={() => {
            setMale(male);
          }}
        /> */}

      {/* </form> */}
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Outlet />
      </form>
    </>
  );
};
