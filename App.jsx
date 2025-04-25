import React from 'react';
import { PeliculasProvider } from './context/PeliculasContext';
import Formulario from './components/Formulario';
import ListaPeliculas from './components/ListaPeliculas';
import Favoritos from './components/Favoritos';
import Filtros from './components/Filtros';

const App = () => {
  return (
    <PeliculasProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Gestión de Películas</h1>
        <Formulario />
        <Filtros />
        <ListaPeliculas />
        <Favoritos />
      </div>
    </PeliculasProvider>
  );
};

export default App;
