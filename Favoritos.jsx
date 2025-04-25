import { usePeliculas } from '../context/PeliculasContext';

const Favoritos = () => {
  const { peliculas } = usePeliculas();
  const favoritas = peliculas.filter(p => p.favorita);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Lista de las Películas Favoritas</h2>
      {favoritas.length === 0 && <p>No hay favoritas.</p>}
      {favoritas.map(p => (
        <div key={p.id} className="border p-2 mb-2 bg-yellow-100">
          <h3 className="font-bold">{p.titulo}</h3>
          <p>{p.descripcion} | <span className="italic">{p.genero}</span></p>
        </div>
      ))}
    </div>
  );
};

export default Favoritos;