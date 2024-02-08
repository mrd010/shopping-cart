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
  grid-template-rows: repeat(3, minmax(300px, 20vw));
  gap: 2vw;
  padding: 2rem 15vw;
  @media screen and (max-width: 1280px) {
    padding: 2rem 5vw;
    gap: 1rem;
  }
  @media screen and (max-width: 768px) {
    padding: 2rem 0;
    gap: 1rem;
  }
`;

const StyledHomeSection = styled.section`
  display: grid;
  grid-template-columns: ${(props) => (props.$align === 'right' ? '1fr auto' : 'auto 1fr')};
  margin: 1rem;
  gap: calc(2rem + 2vw);
  align-items: center;
  justify-items: ${(props) => (props.$align === 'right' ? 'end' : 'start')};
  @media screen and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
`;

const StyledSideImage = styled.div`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 5px ${(props) => props.theme.shadow};
  height: 100%;
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
  padding: 1rem 0;
  gap: 1rem;
  overflow: hidden;
  p {
    text-align: ${(props) => props.$align};
    font-size: 1.4rem;
    ${(props) =>
      props.$align === 'right'
        ? css`
            border-right: 5px solid ${(props) => props.theme.main};
            padding-right: 1rem;
          `
        : css`
            border-left: 5px solid ${(props) => props.theme.main};
            padding-left: 1rem;
          `}
  }
  @media screen and (max-width: 1280px) {
    gap: 0.5rem;
    p {
      font-size: calc(1.2rem + 0.5vw);
    }
  }
  @media screen and (max-width: 768px) {
    p {
      font-size: calc(0.9rem + 0.5vw);
    }
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
        <StyledHomeSection $align="left">
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
        <StyledHomeSection $align="right">
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
        <StyledHomeSection $align="left">
          <StyledSideImage>
            <img src={supportImg} alt="support" />
          </StyledSideImage>
          <SideDetails $align="left">
            <p>
              we value your satisfaction and convenience. That’s why we offer easy payment options,
              free returns, and 24/7 customer support. You can also join our loyalty program and
              earn rewards for every purchase you make.
            </p>
            <CustomLink to="#">Get Support</CustomLink>
          </SideDetails>
        </StyledHomeSection>
      </StyledMain>
    </StyledHome>
  );
};
export default Home;
