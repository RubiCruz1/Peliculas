import { useState } from 'react';
import { usePeliculas } from '../context/PeliculasContext';

const ListaPeliculas = () => {
  const { peliculas, setPeliculas } = usePeliculas();
  const [editandoId, setEditandoId] = useState(null);
  const [peliculaEditada, setPeliculaEditada] = useState({});

  const toggleFavorita = (id) => {
    const nuevas = peliculas.map(p =>
      p.id === id ? { ...p, favorita: !p.favorita } : p
    );
    setPeliculas(nuevas);
  };

  const eliminarPelicula = (id) => {
    const nuevas = peliculas.filter(p => p.id !== id);
    setPeliculas(nuevas);
  };

  const empezarEdicion = (pelicula) => {
    setEditandoId(pelicula.id);
    setPeliculaEditada({ ...pelicula });
  };

  const cancelarEdicion = () => {
    setEditandoId(null);
    setPeliculaEditada({});
  };

  const guardarEdicion = () => {
    const nuevas = peliculas.map(p =>
      p.id === editandoId ? peliculaEditada : p
    );
    setPeliculas(nuevas);
    cancelarEdicion();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPeliculaEditada(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Todas las Películas</h2>
      {peliculas.length === 0 && <p>No hay películas registradas.</p>}
      {peliculas.map(p => (
        <div key={p.id} className="border p-2 mb-2 flex flex-col gap-2">
          {editandoId === p.id ? (
            <div className="flex flex-col gap-1">
              <input
                type="text"
                name="titulo"
                value={peliculaEditada.titulo}
                onChange={handleChange}
                className="border p-1"
              />
              <input
                type="text"
                name="descripcion"
                value={peliculaEditada.descripcion}
                onChange={handleChange}
                className="border p-1"
              />
              <input
                type="text"
                name="genero"
                value={peliculaEditada.genero}
                onChange={handleChange}
                className="border p-1"
              />
              <div className="flex gap-2">
                <button onClick={guardarEdicion} className="bg-green-500 text-white px-2 py-1">Guardar</button>
                <button onClick={cancelarEdicion} className="bg-gray-300 px-2 py-1">Cancelar</button>
              </div>
            </div>
          ) : (
            <>
              <div>
                <h3 className="font-bold">{p.titulo}</h3>
                <p>{p.descripcion} | <span className="italic">{p.genero}</span></p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => toggleFavorita(p.id)} className="bg-yellow-400 px-2 py-1">
                  {p.favorita ? 'Favorita' : 'No es favorita'}
                </button>
                <button onClick={() => empezarEdicion(p)} className="bg-blue-500 text-white px-2 py-1">Editar</button>
                <button onClick={() => eliminarPelicula(p.id)} className="bg-red-500 text-white px-2 py-1">Eliminar</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListaPeliculas;
