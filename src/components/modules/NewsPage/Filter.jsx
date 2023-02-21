import { Input } from "./NewsPage.styled"

export const Filter = ({changeFilter, filter}) => {
    return(
        <label htmlFor="filter">
            <Input type="text" placeholder="Search" onChange={changeFilter} value={filter}></Input>
      </label>
    )
}