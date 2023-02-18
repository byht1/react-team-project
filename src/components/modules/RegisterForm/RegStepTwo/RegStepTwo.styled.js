import styled from 'styled-components';

export const Input = styled.input`
  height: 40px;
  padding: 11px 14px;
  background-color: ${p => p.theme.colors.bg};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: ${p => p.theme.radii.inputRadius};
  margin-bottom: ${p => p.mb}px;
`;
