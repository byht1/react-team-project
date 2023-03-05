import styled from 'styled-components';
import { Button } from 'components/global/button';

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[11]}px;
`;

export const TabletFlexWrap = styled.div`
  margin-bottom: 16px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 20px;
    margin-bottom: 28px;
  }
`

export const ImageWrap = styled.div`
  position: relative;
`

export const PostInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[5]}px;
  @media (min-width: 768px) {
    flex: 1 0 auto;
    gap: ${p => p.theme.space[8]}px;
  }
`

export const LabelInput = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const LabelName = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.45;
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xxl};
    line-height: ${p => p.theme.lineHeights.min};
  }
`;

export const Input = styled.input`
  padding: 8px 14px;
  margin-top: ${p => p.theme.space[3]}px;
  height: 48px;
  
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};

  background-color: ${p => p.theme.colors.bg};
  border: 1px solid ${p => p.theme.colors.inputBdr};
  border-radius: ${p => p.theme.radii.inputRadius};
  outline: none;
  transition: var(--transition-border-color);
  &:hover,
  &:focus {
    border: 1px solid ${p => p.theme.colors.a};
  }
  &::placeholder {
    font-size: ${p => p.theme.fontSizes.s};
    font-family: ${p => p.theme.fonts.manrope};
    color: ${p => p.theme.colors.phc};
    @media (min-width: 768px) {
      font-size: ${p => p.theme.fontSizes.m};
    }
  }
  @media (min-width: 768px) {
    padding: 11px 16px 10px;
    margin-top: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.big};
  }
`;

export const ButtonsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    gap: 24px;
  }
`;

export const PostFormButton= styled(Button)`
  width: 100%;
  height: 40px;
  @media (min-width: 768px) {
    width: 180px;
    height: 44px;
  }
`

export const ErrorInput = styled.div`
  position: absolute;
  bottom: -15px;
  font-size: 11px;
  color: red;
  @media (min-width: 768px) {
    bottom: -20px;
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

export const ImageErrorText = styled(ErrorInput)`
  bottom: -20px;
  width: 100%;
  text-align: center;
`

export const Subtitle = styled.p`
  margin-bottom: ${p => p.theme.space[6]}px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.bt};
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const Textarea = styled.textarea`
  padding: 12px 14px;
  margin-top: ${p => p.theme.space[3]}px;
  height: 200px;

  background-color: ${p => p.theme.colors.bg};
  border: 1px solid ${p => p.theme.colors.inputBdr};
  border-radius: ${p => p.theme.radii.normal};
  resize: none;
  outline: none;
  transition: var(--transition-border-color);
  @media (min-width: 768px) {
    padding: 11px 16px 10px;
    margin-top: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.big};
  }
  &:hover,
  &:focus {
    border: 1px solid ${p => p.theme.colors.a};
  }
  &::placeholder {
    font-size: ${p => p.theme.fontSizes.s};
    font-family: ${p => p.theme.fonts.manrope};
    color: ${p => p.theme.colors.phc};
    @media (min-width: 768px) {
      font-size: ${p => p.theme.fontSizes.m};
    }
  }
`;

export const LabelFile = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 208px;
  height: 208px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[6]}px;
  
  cursor: pointer;
  background-color: ${p => p.theme.colors.bg};
  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid ${p => p.theme.colors.inputBdr};
  transition: var(--transition-bg), var(--transition-color), var(--transition-border-color);
  &:hover,
  &:focus {
    border: 1px solid ${p => p.theme.colors.buttonBg};
  }

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
    margin: 0;
    border-radius: ${p => p.theme.radii.inputRadius};
  }
`;

export const InputFileWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 208px;
  height: 208px;
  margin-left: auto;
  margin-right: auto;
  border-radius: ${p => p.theme.radii.normal};
  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
    margin: 0;
    border-radius: ${p => p.theme.radii.inputRadius};
  }
`;

export const PreviewPhoto = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
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
