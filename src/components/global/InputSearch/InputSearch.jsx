import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Block, Button, IconSearch, IconClose, Input, IconSearchHover} from './InputSearch.styled';

export const InputSearch = ({onChange, value ='', onClick}) =>{
  const [svgColor, setsvgColor] = useState(true);
  const onFocus = () => {
    setsvgColor(false)
  };
  const onBlur = () => {
    setsvgColor(true)
  }
    return(
        <Block>
          <label>
            <Input type="text" 
                  placeholder="Search" 
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  value = {value}/>
          </label>
        {value ? (
          <Button type="button" onClick={onClick}>
            <IconClose />
          </Button>
        ) : (
          <Button>
            {svgColor ? (<IconSearch />):(<IconSearchHover/>)}
            
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
