import { FormContext } from 'components/global/FormContext';
import { Outlet } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FormWrap } from './FormBox/FormBox.styled';
import { FormProvider } from 'react-hook-form';
// export const BackDrop = () => {
//   const methods = useForm({ defaultValues: { tittle: 'test default' } });
//   const { handleSubmit, reset, trigger } = methods;
//   const onSubmit = data => {
//     console.log(data);
//     console.log('first');
//   };
//   return (
//     <div>
//       <FormWrap>
//         <FormContext methods={methods} submit={handleSubmit(onSubmit)}>
//           <Outlet />
//         </FormContext>
//       </FormWrap>
//     </div>
//   );
// };

export const BackDrop = () => {
  const methods = useForm({ defaultValues: { tittle: 'test default' } });
  const { handleSubmit, reset, trigger } = methods;
  const onSubmit = data => {
    console.log(data);
    console.log('first');
  };
  return (
    <div>
      <FormWrap>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Outlet />
          </form>
        </FormProvider>
      </FormWrap>
    </div>
  );
};
