import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search } from 'redux/notices/notices-slice';
import { selectSearchQuery } from 'redux/notices';
import {
  IconSearch,
  IconSearchHover,
  IconClose,
  IconCloseHover,
} from 'components/global/InputSearch/InputSearch.styled';
import { Title, SearchForm, SearchBar, SearchButton } from './NoticesSearch.styled';

export const NoticesSearch = () => {
  const [inFocus, setInFocus] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);

  const onInputChange = e => {
    dispatch(search(e.target.value));
  };

  const clearInput = () => {
    if (inputRef.current) {
      dispatch(search(''));
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(search(e.target.elements.search.value));
  };

  return (
    <>
      <Title>Find your favorite pet</Title>
      <SearchForm onSubmit={onFormSubmit}>
        <SearchBar
          type="text"
          placeholder="Search"
          name="search"
          value={searchQuery}
          onChange={onInputChange}
          onFocus={() => setInFocus(true)}
          onBlur={() => setInFocus(false)}
          ref={inputRef}
        />
        {searchQuery ? (
          <SearchButton type="button" onClick={clearInput}>
            {inFocus ? <IconCloseHover /> : <IconClose />}
          </SearchButton>
        ) : (
          <SearchButton type="submit">
            {inFocus ? <IconSearchHover /> : <IconSearch />}
          </SearchButton>
        )}
      </SearchForm>
    </>
  );
};
