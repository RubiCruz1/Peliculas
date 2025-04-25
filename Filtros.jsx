import { useState } from 'react';
import { usePeliculas } from '../context/PeliculasContext';

const Filtros = () => {
  const { setPeliculas } = usePeliculas();
  const [busqueda, setBusqueda] = useState('');

  const filtrar = (e) => setBusqueda(e.target.value);

  const aplicarFiltro = () => {
    const originales = JSON.parse(localStorage.getItem('peliculas')) || [];
    const filtradas = originales.filter(p =>
      p.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.genero.toLowerCase().includes(busqueda.toLowerCase())
    );
    setPeliculas(filtradas);
  };

  return (
    <div className="my-4">
      <input type="text" placeholder="Buscar por título o género" value={busqueda} onChange={filtrar} className="border p-2 mr-2" />
      <button onClick={aplicarFiltro} className="bg-green-500 text-white px-4 py-2">Buscar pelicula </button>
    </div>
  );
};

export default Filtros;