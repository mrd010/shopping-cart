import styled from 'styled-components';
import headerBg from '../assets/images/pexels-gustavo-fring-4173108.jpg';
import onlineShopImg from '../assets/images/pexels-katrin-bolovtsova-4049870.jpg';
import supportImg from '../assets/images/pexels-yan-krukau-8867213.jpg';

const StyledHeader = styled.header`
  background-image: url(${headerBg});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 1rem;
`;

const Home = () => {
  return (
    <div>
      <StyledHeader>
        <h1>Welcome to Belethor&apos;s General Goods</h1>
        <h3>your one-stop destination for all your everyday needs.</h3>
      </StyledHeader>
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
          <a href="#">Shop Now</a>
        </section>
        <section>
          <img src={supportImg} alt="support" />
          <p>
            we value your satisfaction and convenience. That’s why we offer easy payment options,
            free returns, and 24/7 customer support. You can also join our loyalty program and earn
            rewards for every purchase you make.
          </p>
          <a href="#">Contact Us</a>
        </section>
        <section>
          <p>Shop with us today and discover the difference of Belethor&apos;s General Goods!</p>
          <a href="#">About us</a>
        </section>
      </main>
    </div>
  );
};
export default Home;
