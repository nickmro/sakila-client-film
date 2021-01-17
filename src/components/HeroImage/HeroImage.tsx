import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  vertical-align: middle;
  background-color: #ccc;
`;

export const HeroImage: React.FC<{ src?: string; alt?: string; }> = props => {
  const { alt, src } = props;

  return (
    <Container>
      <picture>
        <Image src={src} alt={alt}/>
      </picture>
    </Container>
  );
}

export default HeroImage;
