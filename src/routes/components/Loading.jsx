import styled from 'styled-components';
import { loadingLoader } from '../../Styles';

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 45;
  width: 100vw;
  height: 100vh;
  display: grid;
  background-color: ${(props) => props.theme.loadingBG};
  place-items: center;
  ${loadingLoader}
`;

const Loading = () => {
  return (
    <Loader>
      <div className="loader"></div>
    </Loader>
  );
};
export default Loading;
