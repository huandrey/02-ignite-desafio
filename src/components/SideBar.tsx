import { Button } from './Button';
import { useGenre } from '../hooks/useGenre';

export function SideBar() {
  // Complete aqui
  const { selectedGenreId, handleClickButton, genres } = useGenre();

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}