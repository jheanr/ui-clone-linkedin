import styled from 'styled-components';

export const Container = styled.div`
  > div {
    .bg-skeleton {
      height: 70px;
      width: 100%;

      filter: brightness(96%);
    }

    span {
      padding-bottom: 175px;

      display: flex;
      align-items: center;
      flex-direction: column;

      .avatar-skeleton {
        border-radius: 50%;
        height: 72px;
        margin: -36px 0 10px;
        width: 72px;

        z-index: 1;
      }

      .row-skeleton {
        height: 12px;

        &:nth-child(2) {
          width: 60%;
        }

        &:nth-child(3) {
          margin-top: 10px;
          width: 50%;
        }
      }
    }
  }
`;
