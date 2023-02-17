import { FormContext } from 'components/global/FormContext';
import { Outlet } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FormWrap } from './FormBox/FormBox.styled';

export const BackDrop = () => {
  const methods = useForm({ defaultValues: { tittle: 'test default value' } });
  const { handleSubmit, reset, trigger } = methods;
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <div>
      <FormWrap>
        <FormContext methods={methods} submit={handleSubmit(onSubmit)}>
          <Outlet />
        </FormContext>
      </FormWrap>
    </div>
  );
};
