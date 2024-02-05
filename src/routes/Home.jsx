import styled from 'styled-components';
import headerImg from '../assets/images/pexels-gustavo-fring-4173108.jpg';
import onlineShopImg from '../assets/images/pexels-katrin-bolovtsova-4049870.jpg';
import supportImg from '../assets/images/pexels-yan-krukau-8867213.jpg';
import { Link } from 'react-router-dom';
import PageHeader from './components/PageHeader';

const StyledHome = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Home = () => {
  return (
    <StyledHome>
      <PageHeader
        primaryTitle="Welcome to Belethor's General Goods"
        secondaryTitle="your one-stop destination for all your everyday needs."
        bgPath={headerImg}
      ></PageHeader>
      <main>
        <section>
          <p>
            Whether you are looking for groceries, household items, electronics, fashion, or
            anything else, we have it all at the best prices and with fast delivery.
          </p>
        </section>
        <section>
          <img src={onlineShopImg} alt="online shopping" />
          <p>
            Browse our wide range of products across different categories and find what you are
            looking for in just a few clicks.
          </p>
          <Link to="../shop">Shop Now</Link>
        </section>
        <section>
          <img src={supportImg} alt="support" />
          <p>
            we value your satisfaction and convenience. That’s why we offer easy payment options,
            free returns, and 24/7 customer support. You can also join our loyalty program and earn
            rewards for every purchase you make.
          </p>
          <Link to="../support">Get Support</Link>
        </section>
        <section>
          <p>Shop with us today and discover the difference of Belethor&apos;s General Goods!</p>
        </section>
      </main>
    </StyledHome>
  );
};
export default Home;
