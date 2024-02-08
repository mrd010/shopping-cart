import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  grid-column: 1 / -1;
  display: grid;
  grid-template-rows: auto 1fr;
  height: 250px;
  margin: 1rem;
  border-radius: 20px;
  overflow: hidden;
  align-items: start;

  box-shadow: 0 0 10px ${(props) => props.theme.shadow};
  @media screen and (max-width: 768px) {
    align-items: end;
    grid-template-rows: 1fr auto;
  }
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
  text-transform: capitalize;
  text-shadow: 0 0 5px ${(props) => props.theme.shadow};
  padding-right: 1rem;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
const SecondaryTitle = styled.p`
  font-size: 1.5rem;
  text-shadow: 0 0 5px ${(props) => props.theme.shadow};
  margin: 0 2rem;
  grid-row: 2 / 3;
  grid-column: 1 / -1;
  font-weight: 600;
  user-select: none;
  padding-right: 1rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
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
