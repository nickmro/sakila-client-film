import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { getHomePageUrl } from '../config/env';

const Container = styled.div`
  margin: 0 auto;
  min-width: 320px;
  max-width: 1440px;
`;

export const Layout: React.FC = props => {
  const { children } = props;

  return (
    <Container>
      <Navbar homePageUrl={getHomePageUrl()}/>
      {children}
    </Container>
  );
}