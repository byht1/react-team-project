import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  width: 100%;
`;
export const Input = styled.textarea`
  width: 100%;
  height: 200px;

  font-size: ${p => p.theme.fontSizes.m};
  padding: 19px 32px 19px 32px;
  border: 2px solid ${p => p.theme.colors.trsp};
  outline: none;
  box-shadow: ${p => p.theme.shadows.s};
  border-radius: ${p => p.theme.radii.normal};

  transition: var(----transition-border-color);

  &:focus {
    border: 2px solid ${p => p.theme.colors.a};
  }
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;
export const ImgComment = styled.img`
  flex-grow: 0;
  width: 80px;
  height: 80px;
  border-radius: ${p => p.theme.radii.round};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`;

export const Content = styled.form`
  display: flex;
  gap: 35px;
`;
export const ButtonBlock = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: flex-end;
`;
export const Button = styled.button`
  position: absolute;
  right: 50px;
  bottom: 30px;
  display: block;
  display: flex;
  align-items: center;
  font-size: 18px;
  gap: 5px;
  padding: 5px 15px;
  border-radius: ${p => p.theme.radii.buttonRadius};

  color: ${p => p.theme.colors.a};
  background-color: ${p => p.theme.colors.w};

  font-weight: ${p => p.theme.fontWeights.semiBold};
  border: 2px solid ${p => p.theme.colors.a};

  transition: var(----transition-border-color);
  &:hover {
    color: ${p => p.theme.colors.w};
    background-color: ${p => p.theme.colors.a};
  }
  @media (min-width: 768px) {
    padding: 10px 40px;
  }
`;

export const ErrorInput = styled.div`
  position: absolute;
  color: red;
  font-size: 10px;
  top: -20px;

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
