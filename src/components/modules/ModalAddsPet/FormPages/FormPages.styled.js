import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelInput = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.45;

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xxl};
    line-height: ${p => p.theme.lineHeights.min};
  }
`;

export const Input = styled.input`
  padding: 11px 14px 12px;
  background-color: ${p => p.theme.colors.bg};
  border: 1px solid ${p => p.theme.colors.inputBdr};
  /* border: 1px solid rgba(245, 146, 86, 0.5); */
  border-radius: ${p => p.theme.radii.inputRadius};
  margin-bottom: ${p => p.theme.space[5]}px;
  margin-top: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
  outline: none;
  transition: var(--transition-border-color);

  &:hover,
  &:focus {
    border: 1px solid ${p => p.theme.colors.a};
  }

  &::placeholder {
    color: ${p => p.theme.colors.phc};
    font-size: ${p => p.theme.fontSizes.s};
    font-family: ${p => p.theme.fonts.manrope};

    @media (min-width: 768px) {
      font-size: ${p => p.theme.fontSizes.s};
    }
  }

  @media (min-width: 768px) {
    padding: 11px 16px 10px;
    margin-bottom: ${p => p.theme.space[8]}px;
    margin-top: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.66;
  }
`;

export const LastInput = styled.input`
  padding: 11px 14px 12px;
  background-color: ${p => p.theme.colors.bg};
  border: 1px solid ${p => p.theme.colors.inputBdr};
  /* border: 1px solid rgba(245, 146, 86, 0.5); */
  border-radius: ${p => p.theme.radii.inputRadius};
  margin-bottom: ${p => p.theme.space[11]}px;
  margin-top: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
  outline: none;
  transition: var(--transition-border-color);

  &:hover,
  &:focus {
    border: 1px solid ${p => p.theme.colors.a};
  }

  &::placeholder {
    color: ${p => p.theme.colors.phc};
    font-size: ${p => p.theme.fontSizes.s};
    font-family: ${p => p.theme.fonts.manrope};

    @media (min-width: 768px) {
      font-size: ${p => p.theme.fontSizes.s};
    }
  }

  @media (min-width: 768px) {
    padding: 11px 16px 10px;
    margin-top: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.66;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: ${p => p.theme.size.max}; */
  gap: 12px;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    gap: 24px;
  }
`;

export const ButtonDark = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 28px;
  outline: none;
  border: 2px solid ${p => p.theme.colors.a};
  border-radius: ${p => p.theme.radii.buttonRadius};
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.average};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  width: 100%;
  height: 40px;
  background-color: ${p => p.theme.colors.a};
  color: ${p => p.theme.colors.wt};
  transition: var(--transition-bg), var(--transition-color), var(--transition-border-color);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.w};
    color: ${p => p.theme.colors.bt};
  }

  @media (min-width: 768px) {
    width: 180px;
    height: 44px;
  }
`;

export const ButtonLight = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 28px;
  outline: none;
  border: 2px solid ${p => p.theme.colors.a};
  border-radius: ${p => p.theme.radii.buttonRadius};
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.average};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  width: 100%;
  height: 40px;
  background-color: ${p => p.theme.colors.w};
  color: ${p => p.theme.colors.bt};
  transition: var(--transition-bg), var(--transition-color);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.a};
    color: ${p => p.theme.colors.wt};
  }

  @media (min-width: 768px) {
    width: 180px;
    height: 44px;
  }
`;

// export const InputDate = styled(DesktopDatePicker)`
//   padding: 11px 16px 10px;
//   /* background-color: #fdf7f2;
//   border: 1px solid rgba(245, 146, 86, 0.5);
//   border-radius: 40px; */
//   margin-bottom: 28px;
//   font-size: 16px;
//   line-height: 1.66;

//   & div {
//     background-color: #fdf7f2;
//     border: 1px solid rgba(245, 146, 86, 0.5);
//     border-radius: 40px;
//   }

//   & fieldset {
//     outline: none;
//     border: 1px solid rgba(245, 146, 86, 0.5);
//     border-radius: 40px;
//     border-color: rgba(245, 146, 86, 0.5);
//     padding: 11px 16px 10px;

//     background-color: #fdf7f2;
//     font-size: 16px;
//     line-height: 1.66;
//   }

//   &:last-child {
//     margin-bottom: 0px;
//   }

//   &:hover,
//   &:focus {
//     outline: 1px solid #f59256;
//   }
// `;

// export const LocalizationProv = styled(LocalizationProvider)`
//   border: none;
// `;

//SecondPage styled

export const Subtitle = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  text-align: center;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.bt};
  margin-bottom: ${p => p.theme.space[6]}px;

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const LabelFile = styled.label`
  position: relative;
  cursor: pointer;
  width: 208px;
  height: 208px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[6]}px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.bg};
  border: 1px solid ${p => p.theme.colors.inputBdr};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition-bg), var(--transition-color), var(--transition-border-color);

  &:hover,
  &:focus {
    border: 1px solid ${p => p.theme.colors.buttonBg};
  }

  @media (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: ${p => p.theme.radii.inputRadius};
    margin-bottom: ${p => p.theme.space[11]}px;
  }
`;

export const PreviewPhoto = styled.img`
  width: 208px;
  height: 208px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[6]}px;
  margin-top: ${p => p.theme.space[6]}px;
  border-radius: ${p => p.theme.radii.normal};

  @media (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: ${p => p.theme.radii.inputRadius};
    margin-bottom: ${p => p.theme.space[11]}px;
    margin-top: ${p => p.theme.space[11]}px;
  }
`;

export const InputFile = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const Textarea = styled.textarea`
  padding: 12px 14px;
  background-color: ${p => p.theme.colors.bg};
  border: 1px solid ${p => p.theme.colors.inputBdr};
  border-radius: ${p => p.theme.radii.normal};
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[11]}px;
  resize: none;
  height: 100px;
  outline: none;
  transition: var(--transition-border-color);

  @media (min-width: 768px) {
    padding: 11px 16px 10px;
    margin-top: ${p => p.theme.space[4]}px;
    height: 116px;
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.big};
  }

  &:hover,
  &:focus {
    border: 1px solid ${p => p.theme.colors.a};
  }

  &::placeholder {
    color: ${p => p.theme.colors.phc};
    font-size: ${p => p.theme.fontSizes.s};
    font-family: ${p => p.theme.fonts.manrope};

    @media (min-width: 768px) {
      font-size: ${p => p.theme.fontSizes.s};
    }
  }
`;

export const ErrorInput = styled.div`
  position: absolute;
  color: red;
  font-size: 10px;
  top: 80px;

  @media (min-width: 768px) {
    top: 90px;
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

export const ErrorTextarea = styled.div`
  position: absolute;
  font-size: 10px;
  top: 140px;
  color: red;

  @media (min-width: 768px) {
    top: 156px;
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

export const ErrorInputFile = styled.div`
  position: absolute;
  color: red;
  font-size: 30px;
`;
