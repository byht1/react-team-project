import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from 'redux/notices';
import { getIsLogin } from 'redux/auth';
import { addNoticeToFav, removeNoticeFromFav } from 'api';
import { showLoginWarning } from 'helpers/showLoginWarning';

export const useFavManagement = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLogin);

  const handleAddToFav = itemId => {
    if (!isLoggedIn) {
      showLoginWarning();
      return;
    }

    dispatch(addFavorite(itemId));
    addNoticeToFav(itemId);
  };

  const handleRemoveFromFav = itemId => {
    dispatch(removeFavorite(itemId));
    removeNoticeFromFav(itemId);
  };

  return [handleAddToFav, handleRemoveFromFav];
};
