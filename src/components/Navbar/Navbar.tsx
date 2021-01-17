import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  height: 60px;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 16px;
`;

const Logo = styled.a`
  margin-top: 16px;
  font-size: 20px;
  text-decoration: none;
  color: #000;
`;

export interface NavbarProps {
  homePageUrl: string;
}

export const Navbar: React.FC<NavbarProps> = props => {
  const { homePageUrl } = props;

  return (
    <div>
      <Header>
        <Logo href={homePageUrl}>SAKILA</Logo>
      </Header>
    </div>
  );
}

export default Navbar;
