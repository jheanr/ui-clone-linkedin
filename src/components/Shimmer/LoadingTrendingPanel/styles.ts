import styled from 'styled-components';

export const Container = styled.div`
  .row + .row {
    margin-top: 23px;
  }

  .row {
    display: flex;
    align-items: center;

    .square-skeleton {
      border-radius: 2px;
      height: 48px;
      width: 48px;
    }

    .column {
      padding-left: 10px;
      width: 100%;

      display: flex;
      flex-direction: column;

      .row-skeleton {
        height: 12px;

        &:nth-child(1) {
          width: 50%;
        }

        &:nth-child(2) {
          margin-top: 10px;
          width: 100%;
        }
      }
    }
  }
`;
