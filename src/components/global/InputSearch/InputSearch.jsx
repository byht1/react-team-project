import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Block, Button, IconSearch, IconClose, Input, IconSearchHover } from './InputSearch.styled';
import debounce from 'lodash.debounce';

export const InputSearch = ({ change, value = '', debounceDelay = 300 }) => {
  const inputRef = useRef(null);

  const [svgColor, setSvgColor] = useState(true);
  const onFocus = () => {
    setSvgColor(false);
  };
  const onBlur = () => {
    setSvgColor(true);
  };

  const handleInputChange = debounce(e => {
    change(e.target.value);
  }, debounceDelay);

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      change('');
    }
  };

  return (
    <Block>
      <label>
        <Input
          type="text"
          placeholder="Search"
          onChange={handleInputChange}
          onFocus={onFocus}
          onBlur={onBlur}
          defaultValue={value}
          ref={inputRef}
        />
      </label>
      {value ? (
        <Button type="button" onClick={handleClear}>
          <IconClose />
        </Button>
      ) : (
        <Button>{svgColor ? <IconSearch /> : <IconSearchHover />}</Button>
      )}
    </Block>
  );
};
InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  debounceDelay: PropTypes.number,
};
