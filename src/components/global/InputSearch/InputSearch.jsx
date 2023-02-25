import React from 'react';
import { Block, Button, IconSearch, IconClose} from './InputSearch.styled';

export const InputSearch = () =>{
    return(
        <Block>
        <Filter value={filter} onChange={changeFilter} />
        {filter ? (
          <Button type="button" onClick={handleClear}>
            <IconClose />
          </Button>
        ) : (
          <Button>
            <IconSearch />
          </Button>
        )}
      </Block>
    )
}