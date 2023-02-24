import { useDispatch } from 'react-redux';
import { removeOwn } from 'redux/notices';
import { removeNotice } from 'api';

export const useOwnCardsManagement = () => {
  const dispatch = useDispatch();

  const handleRemoveFromOwn = itemId => {
    dispatch(removeOwn(itemId));
    removeNotice(itemId);
  };

  return handleRemoveFromOwn;
};
