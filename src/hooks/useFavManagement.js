import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from 'redux/notices';
import { getIsLogin } from 'redux/auth';
import { addNoticeToFav, removeNoticeFromFav } from 'api';
import { showLoginWarning } from 'helpers/showLoginWarning';

export const useFavManagement = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLogin);

  const handleAddToFav = async itemId => {
    if (!isLoggedIn) {
      showLoginWarning();
      return;
    }

    await addNoticeToFav(itemId);
    dispatch(addFavorite(itemId));
  };

  const handleRemoveFromFav = async itemId => {
    await removeNoticeFromFav(itemId);
    dispatch(removeFavorite(itemId));
  };

  return [handleAddToFav, handleRemoveFromFav];
};
