import { useDispatch } from 'react-redux';
import { removeOwn } from 'redux/notices';
import { removeNotice } from 'api';

export const useOwnCardsManagement = () => {
  const dispatch = useDispatch();

  const handleRemoveFromOwn = async itemId => {
    await removeNotice(itemId);
    dispatch(removeOwn(itemId));
  };

  return handleRemoveFromOwn;
};
