import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
import { search } from 'redux/notices/notices-slice';
import { selectSearchQuery } from 'redux/notices';
import { Title, SearchForm, SearchBar, SearchButton } from './NoticesSearch.styled';

export const NoticesSearch = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);

  const onInputChange = e => {
    dispatch(search(e.target.value));
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
        />
        <SearchButton type="submit">
          <AiOutlineSearch size={20} />
        </SearchButton>
      </SearchForm>
    </>
  );
};
