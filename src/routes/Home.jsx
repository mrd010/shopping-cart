import styled, { css } from 'styled-components';
import headerImg from '../assets/images/pexels-gustavo-fring-4173108.jpg';
import productTypesImg from '../assets/images/2712c38d93de72795331d955b2116874.jpg';

import onlineShopImg from '../assets/images/pexels-katrin-bolovtsova-4049870.jpg';
import supportImg from '../assets/images/pexels-yan-krukau-8867213.jpg';
import PageHeader from './components/PageHeader';
import CustomLink from './components/CustomLink';

const StyledHome = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const StyledMain = styled.main`
  display: grid;
  grid-auto-rows: 400px;
  gap: 2rem;
  padding: 2rem 0;
`;

const StyledHomeSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1rem;
  gap: 4rem;
`;

const StyledSideImage = styled.div`
  height: 100%;
  overflow: hidden;
  box-shadow: 0 0 5px ${(props) => props.theme.shadow};
  border-radius: 10px;
  img {
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
  }
`;

const SideDetails = styled.div`
  display: grid;
  align-content: center;
  justify-items: ${(props) => props.$align};
  padding: 1rem 3rem;
  gap: 1rem;
  p {
    text-align: ${(props) => props.$align};
    font-size: 1.4rem;
    padding: 0 1rem;
    ${(props) =>
      props.$align === 'right'
        ? css`
            border-right: 5px solid ${(props) => props.theme.main};
          `
        : css`
            border-left: 5px solid ${(props) => props.theme.main};
          `}
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <PageHeader
        primaryTitle="Welcome to Belethor's General Goods"
        secondaryTitle="your one-stop destination for all your everyday needs."
        bgPath={headerImg}
      ></PageHeader>
      <StyledMain>
        <StyledHomeSection>
          <StyledSideImage>
            <img src={productTypesImg} />
          </StyledSideImage>
          <SideDetails $align="left">
            <p>
              Whether you are looking for groceries, household items, electronics, fashion, or
              anything else, we have it all at the best prices and with fast delivery.
            </p>
          </SideDetails>
        </StyledHomeSection>
        <StyledHomeSection>
          <SideDetails $align="right">
            <p>
              Browse our wide range of products across different categories and find what you are
              looking for in just a few clicks.
            </p>
            <CustomLink to="../shop">Shop Now</CustomLink>
          </SideDetails>
          <StyledSideImage>
            <img src={onlineShopImg} alt="online shopping" />
          </StyledSideImage>
        </StyledHomeSection>
        <StyledHomeSection>
          <StyledSideImage>
            <img src={supportImg} alt="support" />
          </StyledSideImage>
          <SideDetails $align="left">
            <p>
              we value your satisfaction and convenience. That’s why we offer easy payment options,
              free returns, and 24/7 customer support. You can also join our loyalty program and
              earn rewards for every purchase you make.
            </p>
            <CustomLink to="../support">Get Support</CustomLink>
          </SideDetails>
        </StyledHomeSection>
      </StyledMain>
    </StyledHome>
  );
};
export default Home;
