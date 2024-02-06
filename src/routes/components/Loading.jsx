import styled from 'styled-components';
import { loadingLoader } from '../../Styles';

const Loader = styled.div`
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
