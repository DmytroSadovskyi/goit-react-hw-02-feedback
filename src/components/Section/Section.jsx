import PropTypes from 'prop-types';
import { FeedbackSection, Title } from './Section.styled';
const Section = ({ title, children }) => {
  return (
    <FeedbackSection>
      {title && <Title>{title}</Title>}
      {children}
    </FeedbackSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;
