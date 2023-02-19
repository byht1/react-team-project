import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Title, SearchForm, SearchBar, SearchButton } from './NoticesSearch.styled';

export const NoticesSearch = () => {
  const [searchValue, setSearchValue] = useState('');

  const onInputChange = e => {
    setSearchValue(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    console.log('i am clicked');
    // Call a function or pass the search searchValue to a parent component via props
  };

  return (
    <>
      <Title>Find your favorite pet</Title>
      <SearchForm onSubmit={onFormSubmit}>
        <SearchBar type="text" placeholder="Search" value={searchValue} onChange={onInputChange} />
        <SearchButton type="submit">
          <AiOutlineSearch size={20} />
        </SearchButton>
      </SearchForm>
    </>
  );
};
