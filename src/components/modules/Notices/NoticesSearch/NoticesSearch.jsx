import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
import { search } from 'redux/notices/notices-slice';
import { Title, SearchForm, SearchBar, SearchButton } from './NoticesSearch.styled';

export const NoticesSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const onInputChange = e => {
    setSearchValue(e.target.value);
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
          value={searchValue}
          onChange={onInputChange}
        />
        <SearchButton type="submit">
          <AiOutlineSearch size={20} />
        </SearchButton>
      </SearchForm>
    </>
  );
};
