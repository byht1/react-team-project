// /* eslint-disable @typescript-eslint/no-use-before-define */
// import * as React from 'react';
// import { createPortal } from 'react-dom';
// import { useForm } from 'react-hook-form';
// import { FormWrap } from './FormSell.styled';
// import { Text } from 'components/global/text';
// // import './styles.css';

// export default function FormSell() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = data => console.info('Submit RootForm', data);

//   return (
//     <FormWrap>
//       <Text>Add pet</Text>
//       <Text>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </Text>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* <label for="petName">Tittle of ad</label> */}
//         <input {...register('adTittle')} placeholder="Type name" />
//         <input {...register('petName')} placeholder="Type name pet" />
//         <input {...register('petBirth')} placeholder="Type date of birth" />
//         <input {...register('petBreed')} placeholder="Type breed" />

//         <ModalInput
//           onChange={data => {
//             console.info('ModalInput Change', data);
//           }}
//         />
//         {/* <input type="submit" /> */}
//       </form>
//     </FormWrap>
//   );
// }

// const ModalInput = ({ onChange }) => {
//   const [isModalVisible, setModalVisible] = React.useState(false);

//   const showModal = () => setModalVisible(true);
//   const hideModal = () => setModalVisible(false);

//   const forwardChange = data => {
//     hideModal();
//     onChange(data);
//     console.log(data);
//   };

//   return (
//     <>
//       {/* <button className="button" onClick={showModal}>
//         Open Nested Form (Error)
//       </button> */}
//       <button type="button" className="button" onClick={showModal}>
//         Next
//       </button>
//       {isModalVisible && <ModalForm onSave={forwardChange} onClose={hideModal} />}
//     </>
//   );
// };

// const ModalForm = props => {
//   const { register, handleSubmit } = useForm();

//   const forwardSave = data => {
//     console.info('Submit ModalForm', data);
//     props.onSave(data);
//   };

//   const handleSubmitWithoutPropagation = e => {
//     e.preventDefault();
//     e.stopPropagation();
//     handleSubmit(forwardSave)(e);
//   };

//   return (
//     <ModalPortal>
//       <FormWrap>
//         <Text>Add pet</Text>
//         <form onSubmit={handleSubmitWithoutPropagation}>
//           <input {...register('modalInputValue')} placeholder="Modal Input Value" />
//           <input type="submit" />
//           <button type="button" className="button" onClick={props.onClose}>
//             Close modal
//           </button>
//         </form>
//       </FormWrap>
//     </ModalPortal>
//   );
// };

// const modalDiv = document.getElementById('nested-modals');

// const ModalPortal = props => {
//   /**
//    * Issue #2: Cannot nest forms directly in DOM
//    * https://html.spec.whatwg.org/multipage/forms.html#the-form-element
//    * This is a basic html spec, the fix is using portals to unest Modals
//    * https://reactjs.org/docs/portals.html
//    */
//   return createPortal(props.children, modalDiv);
// };

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormSellStepTwo } from './FormSellStepTwo';
import { useNavigate } from 'react-router-dom';
import { Text } from 'components/global/text';
import { InputWrap, ButtonWrap, TextTittle } from './FormSell.styled';
export const FormSellStepOne = () => {
  const [open, setOpen] = useState(false);
  const { register, setValue, getValues, reset } = useFormContext();

  const navigate = useNavigate();
  return (
    <>
      {/* <label for="petName">Tittle of ad</label> */}
      <TextTittle>Add pet</TextTittle>
      <Text>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </Text>
      <InputWrap>
        <label htmlFor="tittle">Tittle of ad</label>
        <input {...register('tittle')} placeholder="Type name" id="tittle" />
        <label htmlFor="petName">Name pet</label>
        <input {...register('petName')} placeholder="Type name pet" id="petName" />
        <label htmlFor="petBirth">Date of birth</label>
        <input {...register('petBirth')} placeholder="Type date of birth" id="petBirth" />
        <label htmlFor="petBreed">Breed</label>
        <input {...register('petBreed')} placeholder="Type breed" id="petBreed" />
      </InputWrap>
      <ButtonWrap>
        <button
          type="button"
          onClick={() => {
            // setOpen(!open);
            // console.log('first');
            navigate('/addpet/step2');
          }}
        >
          Next
        </button>
        <button type="button" onClick={() => navigate('/')}>
          Back
        </button>
      </ButtonWrap>
    </>
  );
};
