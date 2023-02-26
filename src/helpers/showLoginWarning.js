import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showLoginWarning = (message = 'You must login first') => {
  toast.warn(message, {
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
