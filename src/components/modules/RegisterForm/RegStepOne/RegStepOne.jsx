import { FormInput } from 'components/global/FormInput';

export const RegStepOne = () => {
  return (
    <>
      <FormInput name="email" type="email" placeholder="Email" mb={16} />
      <FormInput name="password" type="password" placeholder="Password" mb={16} />
      <FormInput name="confirmpassword" type="password" placeholder="Confirm Password" mb={16} />
    </>
  );
};
