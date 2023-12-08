import { useState } from 'react';
import './Editor.css';

export default function Editor() {
  const [hero, setHero] = useState('menino');
  const heroes = ['menino', 'menina', 'homem', 'mulher',
  'idoso', 'idosa', 'animal', 'objeto', 'lugar'
  ];

  const [conflict, setConflict] = useState('homem versus homem');
  const conflicts = [ 
    'indivíduo contra indivíduo', 'indivíduo contra natureza', 
    'indivíduo contra si mesmo', 'indivíduo contradestino/sorte', 
    'indivíduo contra máquina', 'indivíduo contra sistema', 'indivíduo contra passado'
  ];

  const [genre, setGenre] = useState('terror');
  const genres = [ 
    'terror', 'suspense', 'drama', 'comédia', 'romance',
    'aventura', 'policial', 'fantasia' 
  ];

  const [ambient, setAmbient] = useState('escola');
  const ambients = [ 
    'escola', 'empresa', 'cidade pequena', 'cidade grande',
    'comunidade rural', 'presídio', 'hospital', 'floresta' 
  ];

  const [time, setTime] = useState('contemporâneo');
  const times = [ 
    'pré-histórico', 'medieval', 'contemporâneo',
    'futurístico', 'pós-apocalíptico' 
  ];
  const [audience, setAudience] = useState('jovem');
  
  const audiences = [ 'infantil', 'jovem', 'adulto' ];
  
  const [additional, setAdditional] = useState('');

  return (
    <div className="editor">
      Escreva uma história com um(a) protagonista
      <select value={hero} onChange={(e) => setHero(e.target.value)}>
        {heroes.map((value) => (
          <option key={value} value={value}>{value}</option>
      ))}
      </select>
      com um conflito do tipo
      <select value={conflict} onChange={(e) =>setConflict(e.target.value)}>
      {conflicts.map((value) => (
        <option key={value} value={value}>{value}</option>
      ))}        
      </select>

      do gênero
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>{genres.map((value) => (
        <option key={value} value={value}>{value}</option>
      ))}
      </select> 

      ambientada em um(a)
      <select value={ambient} onChange={(e) => setAmbient(e.target.value)}>{ambients.map((value) => (
        <option key={value} value={value}>{value}</option>
      ))}
      </select>
      no tempo
      <select value={time} onChange={(e) => setTime(e.target.value)}>{times.map((value) => (
        <option key={value} value={value}>{value}</option>
      ))}
      </select> 

      para o público
      <select value={audience} onChange={(e) => setAudience(e.target.value)}>{audiences.map((value) => (
        <option key={value} value={value}>{value}</option>
      ))}
      </select>

      .<br /> Informações adicionais:
      <input type="text" value={additional} onChange={(e) =>setAdditional(e.target.value)} />

      <p>{`Escreva uma história com um(a) protagonista "${hero}" com um conflito do tipo "${conflict}" 
      do gênero "${genre}" ambientada em um(a) "${ambient}" no tempo "${time}" para o público "${audience}".
      ${additional}. `}
      </p>
    </div> 
    );
}