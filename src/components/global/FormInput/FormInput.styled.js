import styled from 'styled-components';

export const Input = styled.input`
  height: 40px;
  width: 100%;
  padding: 11px 14px;
  background-color: ${p => p.theme.colors.bg};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: ${p => p.theme.radii.inputRadius};
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: ${p => p.mb}px;
`;

export const ErrorMsg = styled.p`
  color: ${p => p.theme.colors.da};
  margin-top: 6px;
  padding-left: 11px;
  font-size: ${p => p.theme.fontSizes.min};
  font-weight: ${p => p.theme.fontWeights.normal};
`;
