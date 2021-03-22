import { useEffect, useState } from 'react';

import { MovieCard } from './components/MovieCard';
import { GenreProvider } from './hooks/useGenre';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

// import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {
  // FEITO
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <GenreProvider>
        <SideBar />
        <Content />
      </GenreProvider>
    </div>
  )
}