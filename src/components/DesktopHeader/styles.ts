import styled, { css } from 'styled-components';
import { GrLinkedin } from 'react-icons/gr';
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from 'react-icons/ai';

export const Container = styled.header`
  background: var(--color-header);
  padding: 0 30px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  display: none;

  @media (min-width: 1180px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  height: 52px;
  margin: 0 auto;
  max-width: 1128px;

  display: flex;
  flex: 1;
  justify-content: space-between;

  .left, .right nav {
    display: flex;
    align-items: center;
  }

  .right nav {
    height: 100%;

    button {
      background: none;
      border: 0;
      color: var(--color-icons);
      cursor: pointer;
      min-height: 100%;
      min-width: 90px;
      outline: 0;

      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      &:hover {
        color: var(--color-white);
      }

      &.active {
        border-bottom: 2px solid var(--color-white);
      }
    }
  }
`;

export const LinkedInIcon = styled(GrLinkedin)`
  background: var(--color-white);
  border-radius: 4px;
  color: var(--color-linkedin);
  height: 34px;
  width: 34px;

  flex-shrink: 0;
`;

export const SearchInput = styled.input`
  background: var(--color-input);
  border: 0;
  border-radius: 2px;
  color: var(--color-black);
  font-size: 14px;
  margin-left: 12px;
  outline: 0;
  padding: 7.5px 8px;

  &:focus {
    background: var(--color-white);
  }
`;

const generalIconCSS = css`
  height: 24px;
  width: 24px;
`;

export const HomeIcon = styled(AiFillHome)`
  ${generalIconCSS}
`;

export const NotificationsIcon = styled(AiOutlineBell)`
  ${generalIconCSS}
`;

export const ProfileCircle = styled.img`
  border: 1px solid var(--color-icons);
  border-radius: 50%;
  height: 24px;
  width: 24px;
`;

export const CaretDownIcon = styled(AiFillCaretDown)`
  height: 16px;
  width: 16px;
`;
