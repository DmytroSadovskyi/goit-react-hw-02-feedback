import styled from '@emotion/styled';

export const ButtonsList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const setBgColor = props => {
  switch (props.option) {
    case 'good':
      return `green`;
    case 'neutral':
      return `burlywood`;
    case 'bad':
      return `crimson`;

    default:
      return `#000000`;
  }
};

export const FeedbackButton = styled.button`
  padding: 10px 15px;
  background-color: ${setBgColor};
  color: white;
  border: none;
  border-radius: 7px;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  cursor: pointer;
  text-transform: capitalize;
`;
