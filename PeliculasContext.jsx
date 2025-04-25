import { createContext, useContext, useState, useEffect } from 'react';

const PeliculasContext = createContext();

export const usePeliculas = () => useContext(PeliculasContext);

export const PeliculasProvider = ({ children }) => {
  const [peliculas, setPeliculas] = useState(() => {
    const stored = localStorage.getItem('peliculas');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
  }, [peliculas]);

  return (
    <PeliculasContext.Provider value={{ peliculas, setPeliculas }}>
      {children}
    </PeliculasContext.Provider>
  );
};