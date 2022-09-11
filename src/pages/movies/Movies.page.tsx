import React from 'react';

interface Props {
  category: string;
}

const MoviesPage = ({ category }: Props) => {
  return <div>The category: {category}</div>;
};

export default MoviesPage;
