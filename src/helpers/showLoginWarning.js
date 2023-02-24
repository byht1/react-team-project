import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showLoginWarning = () => {
  console.log('warning: showLoginWarning');
  toast.warn('You must login first', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};
