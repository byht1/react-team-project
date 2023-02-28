import { FormInput } from 'components/global/FormInput';

export const RegStepOne = () => {
  return (
    <>
      <FormInput name="email" type="email" placeholder="Email" mb={20} />

      <FormInput name="password" type={'password'} placeholder="Password" mb={20} showhide={true} />

      <FormInput
        name="confirmpassword"
        type={'password'}
        placeholder="Confirm Password"
        mb={40}
        showhide={true}
      />
    </>
  );
};
