import { useState } from 'react';
import { usePeliculas } from '../context/PeliculasContext';

const Formulario = () => {
  const { peliculas, setPeliculas } = usePeliculas();
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [genero, setGenero] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !descripcion || !genero) return;

    const nuevaPelicula = {
      id: Date.now(),
      titulo,
      descripcion,
      genero,
      favorita: false
    };

    setPeliculas([...peliculas, nuevaPelicula]);
    setTitulo('');
    setDescripcion('');
    setGenero('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} className="border p-2 mr-2" />
      <input type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="border p-2 mr-2" />
      <input type="text" placeholder="Género" value={genero} onChange={(e) => setGenero(e.target.value)} className="border p-2 mr-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Agregar</button>
    </form>
  );
};

export default Formulario;