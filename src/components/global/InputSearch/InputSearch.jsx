import React from 'react';
import PropTypes from 'prop-types';
import { Block, Button, IconSearch, IconClose, Input} from './InputSearch.styled';

export const InputSearch = ({onChange, value ='', onClick}) =>{

    return(
        <Block>
          <label>
            <Input type="text" 
                  placeholder="Search" 
                  onChange={onChange}
                  value = {value}/>
          </label>
        {value ? (
          <Button type="button" onClick={onClick}>
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
InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
