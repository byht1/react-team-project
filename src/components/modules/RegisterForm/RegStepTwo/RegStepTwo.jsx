import { FormInput } from 'components/global/FormInput';

export const RegStepTwo = () => {
  return (
    <>
      <FormInput name="name" type="text" placeholder="Name" mb={16} />
      <FormInput name="region" type="text" placeholder="City, region" mb={16} />
      <FormInput name="phone" type="tel" placeholder="Mobile phone" mb={16} />
    </>
  );
};
