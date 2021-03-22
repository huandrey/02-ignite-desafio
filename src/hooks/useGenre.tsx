import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { api } from '../services/api';

interface GenreProviderProps {
  children: ReactNode;
}


interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface GenreContextData {
  selectedGenreId: number,
  handleClickButton: (id: number) => void,
  genres: GenreResponseProps[],
  selectedGenre: GenreResponseProps,
}

const GenreContext = createContext<GenreContextData>({} as GenreContextData);


export function GenreProvider({ children }: GenreProviderProps): JSX.Element {
 
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);


  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  
  return (
    <GenreContext.Provider
      value={{ selectedGenreId,  handleClickButton, genres, selectedGenre }}
    >
      { children }
    </GenreContext.Provider>
  )
}

export function useGenre(): GenreContextData {
  const context = useContext(GenreContext)

  return context
}