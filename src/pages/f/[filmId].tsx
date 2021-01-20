import React, { useMemo } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import { getFilm } from '../../apollo/film';
import HeroImage from '../../components/HeroImage';
import { filmDuration } from '../../helpers/film';
import { Film } from '../../types/film';

const DetailsContainer = styled.div`
  width: 100%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-top: 0;
  margin-bottom: 10px;
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const Tag = styled.span`
  display: flex;

  &:not(:first-child) {
    margin: 0 0 0 15px;
  }
`;

const Actors = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

export interface FilmPageProps {
  film?: Film;
}

export const FilmPage: NextPage<FilmPageProps> = (props) => {
  const { film } = props;

  const actors = useMemo<string | undefined>(() => film?.actors
    .map((actor) => `${actor.firstName} ${actor.lastName}`)
    .join(', '), [film]);

  return (
    <>
      { !film ? (
        <p>Not Found</p>
      ) : (
        <>
          <HeroImage />
          <DetailsContainer>
            <Details>
              <Title className="title">{film.title}</Title>
              <Tags>
                <Tag className="release-year">{film.releaseYear}</Tag>
                <Tag className="rating">{film.rating}</Tag>
                <Tag className="duration">{filmDuration(film.length)}</Tag>
              </Tags>
              <Actors>
                <span className="actors">{actors}</span>
              </Actors>
              <Description>
                <span className="description">{film.description}</span>
              </Description>
            </Details>
          </DetailsContainer>
        </>
      )}
    </>
  );
};

FilmPage.getInitialProps = async (ctx) => {
  const { filmId: filmIdParam } = ctx.query;

  try {
    const filmId = filmIdParam as string;

    const { data } = await getFilm(parseInt(filmId, 10));
    return { film: data?.film };
  } catch {
    return { film: undefined };
  }
};

export default FilmPage;
