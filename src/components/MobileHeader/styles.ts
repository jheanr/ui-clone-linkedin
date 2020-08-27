import styled from 'styled-components';
import { FiMessageSquare } from 'react-icons/fi';

export const Container = styled.div`
  background: var(--color-link);
  height: 48px;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  @media (min-width: 1180px) {
    display: none;
  }
`;

export const ProfileCircle = styled.img`
  border: 1px solid var(--color-icons);
  border-radius: 50%;
  height: 28px;
  width: 28px;

  flex-shrink: 0;
`;

export const SearchInput = styled.input`
  background: var(--color-input);
  border: 0;
  border-radius: 2px;
  color: var(--color-black);
  font-size: 14px;
  margin-left: 16px;
  outline: 0;
  padding: 7.5px 8px;
  width: 100%;

  &:focus {
    background: var(--color-white);
  }
`;

export const MessageIcon = styled(FiMessageSquare)`
  border-radius: 4px;
  color: var(--color-white);
  height: 24px;
  margin-left: 17px;
  width: 24px;

  flex-shrink: 0;
`;