import { marginProps, paddingProps, widthTypeOf } from 'helpers';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 28px;
  border: none;
  outline: none;

  ${p => marginProps(p)};
  ${p => paddingProps(p)};
  ${p => p.width && `${widthTypeOf(p.width)}; text-align: center;`};

  border: 2px solid ${p => p.theme.colors.a};
  border-radius: ${p => p.theme.radii.buttonRadius};

  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.average};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.heading};

  transition: var(--transition-bg), var(--transition-color), var(--transition-border-color);
`;

export const LightBtn = styled(Button)`
  background-color: ${p => p.theme.colors.w};
  color: ${p => p.theme.colors.bt};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.a};
    color: ${p => p.theme.colors.wt};
  }
`;

export const DarkBtn = styled(Button)`
  background-color: ${p => p.theme.colors.a};
  color: ${p => p.theme.colors.wt};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.w};
    color: ${p => p.theme.colors.bt};
  }
`;

export const WhiteButtonBox = styled(Button)`
  padding: 8px 28px;
  line-height: ${p => p.theme.lineHeights.heading};

  background-color: ${p => p.theme.colors.w};
  color: ${p => p.theme.colors.a};
  border: 2px solid ${p => p.theme.colors.a};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.da};
    border: 2px solid ${p => p.theme.colors.da};
  }
`;
