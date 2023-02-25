import { Input } from "./NewsPage.styled"
export const Filter = ({value, onChange}) => {
    return(
        <label>
        <Input type="text" 
              placeholder="Search" 
              onChange={onChange}
              value = {value}>
                
        </Input>
      </label>
    )
}