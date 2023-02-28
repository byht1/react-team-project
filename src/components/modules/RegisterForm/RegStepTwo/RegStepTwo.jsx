import { FormInput } from 'components/global/FormInput';

export const RegStepTwo = () => {
  return (
    <>
      <FormInput name="name" type="text" placeholder="Name" mb={20} />
      <FormInput name="city" type="text" placeholder="City, region" mb={20} />
      <FormInput name="phone" type="tel" placeholder="Mobile phone" mb={40} />
    </>
  );
};
