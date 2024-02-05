import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 250px;
  margin: 1rem;
  border-radius: 20px;
  overflow: hidden;
  align-items: start;
  margin-bottom: 2rem;
  box-shadow: 0 0 10px ${(props) => props.theme.shadow};
`;

const BgImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right;
`;

const PrimaryTitle = styled.h1`
  font-size: 2.5rem;
  margin-left: 2rem;
  margin-top: 2rem;
  user-select: none;
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 300;
`;
const SecondaryTitle = styled.p`
  font-size: 1.5rem;
  margin: 0 2rem;
  grid-row: 2 / 3;
  grid-column: 1 / -1;
  font-weight: 600;
  user-select: none;
`;

const PageHeader = ({ primaryTitle, secondaryTitle, bgPath }) => {
  return (
    <StyledHeader>
      {bgPath && <BgImage src={bgPath}></BgImage>}
      <PrimaryTitle>{primaryTitle}</PrimaryTitle>
      <SecondaryTitle>{secondaryTitle}</SecondaryTitle>
    </StyledHeader>
  );
};

// PropTypes ############################
PageHeader.propTypes = {
  primaryTitle: PropTypes.string,
  secondaryTitle: PropTypes.string,
  bgPath: PropTypes.string,
};
export default PageHeader;
