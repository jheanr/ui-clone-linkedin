import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8px;

  @media (min-width: 1180px) {
    margin-top: 16px;
  }

  > div {
    padding: 15px 40px 50px 12px;

    header {
      display: flex;

      .avatar-skeleton {
        border-radius: 50%;
        height: 48px;
        width: 48px;

        flex-shrink: 0;
      }

      .column {
        padding-left: 15px;

        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;

        .row-skeleton {
          height: 12px;

          &:nth-child(1) {
            width: 30%;
          }

          &:nth-child(2) {
            margin-top: 10px;
            width: 55%;
          }
        }
      }
    }

    span {
      margin-top: 30px;

      display: flex;
      flex-direction: column;

      .row-skeleton {
        height: 12px;

        &:nth-child(1) {
          width: 100%;
        }

        &:nth-child(2) {
          margin-top: 10px;
          width: 90%;
        }
      }
    }
  }
`;
