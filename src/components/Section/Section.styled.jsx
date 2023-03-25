import styled from '@emotion/styled';

export const FeedbackSection = styled.section`
  width: 400px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
  text-align: center;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  :nth-of-type(1) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;
