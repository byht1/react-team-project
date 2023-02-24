import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
// import { search } from 'redux/notices/notices-slice';
import { SearchForm, SearchBar, SearchButton } from './BlogSearch.styled';

export const BlogSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  // const dispatch = useDispatch();

  const onInputChange = e => {
    setSearchValue(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    // dispatch(search(e.target.elements.search.value));
    console.log('onFormSubmit search Blog', e);
  };

  return (
    <>
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
