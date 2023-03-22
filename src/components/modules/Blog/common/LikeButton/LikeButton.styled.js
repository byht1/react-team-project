import styled from 'styled-components';
import { AiOutlineLike } from 'react-icons/ai';

export const StyledMetaButton = styled.button`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  align-items: flex-end;
  justify-content: space-between;
  padding: 8px;
  font-size: 14px;
  color: #999;
  background: transparent;
  outline: none;
  cursor: pointer;
  transition: scale 0.3 ease-in-out;

  color: ${p => p.checked && p.theme.colors.da};

  &:hover {
    color: ${p => p.theme.colors.a};
    transform: scale(1.05);
  }
`;

export const LikeIcon = styled(AiOutlineLike)`
  width: 24px;
  height: 24px;
`;
