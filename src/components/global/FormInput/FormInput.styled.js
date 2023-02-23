import styled from 'styled-components';

export const Input = styled.input`
  /* height: 40px; */
  width: 100%;
  padding: 11px 14px;
  background-color: ${p => p.theme.colors.bg};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: ${p => p.theme.radii.inputRadius};
  font-size: ${p => p.theme.fontSizes.s};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l};
    padding: 14px 32px;
  } ;
`;

export const Label = styled.label`
  position: relative;
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

export const IconBox = styled.div`
  display: flex;
  position: absolute;
  right: 14px;
  top: 13px;
  /* transform: translate(0%, -50%); */
  @media (min-width: 768px) {
    right: 32px;
    top: 19px;
  } ;
`;
