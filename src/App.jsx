import { useState } from 'react';
import './FortunaGenerador.css';


const FortunaGenerador = () => {
  const [fortuna, setFortuna] = useState('');
  const [fondo, setFondo] = useState(0);

  const fondos = ["/images/fondo1.jpg", "/images/fondo2.jpg", "/images/fondo3.jpg"];


  const generarFortuna = () => {
    

    const fortunas = [
      {
        phrase: "Lo que sospechabas es verdad, procura ser amable con ellos, pues esta bondad ayudará a que todo mejore.",
        author: "proverbia.net"
      },
      {
        phrase: "Se te cumplirá un hermoso sueño y verás como otros sueños se hacen realidad.",
        author: "Proverbio Japonés"
      },
      {
        phrase: "La realidad del ser humano es su pensamiento, no su cuerpo material.",
        author: "proverbia.net"
      },
      {
        phrase: "Te casarás con un atleta profesional. Si las competencias de comer pueden ser consideradas un deporte.",
        author: "proverbia.net"
      },
      {
        phrase: "Valiente es aquel que ama.",
        author: "proverbia.net"
      },
      {
        phrase: "No tienes que ser más rápido que el oso, solo tienes que ser más rápido que el chico más lento que corre de él.",
        author: "proverbia.net"
      },
      {
        phrase: "No te tomes la vida demasiado en serio. No saldrás de ella con vida.",
        author: "proverbia.net"
      },
      {
        phrase: "Mañana puede ser muy tarde para disfrutar lo que tienes hoy.",
        author: "ajescudero"
      },
      {
        phrase: "Cuando busques lo que más deseas, recuerda hacer tu mejor esfuerzo.",
        author: "ajescudero"
      },
      {
        phrase: "No olvides que un amigo es un regalo que te das a ti mismo.",
        author: "ajescudero"
      },
      {
        phrase: "Alégrate, un camino de hermosas pasiones te espera y debes transitarlo.",
        author: "ajescudero"
      },
      {
        phrase: "Una reputación de mil años puede depender de la conducta de una hora.",
        author: "Proverbio Japonés"
      },
      {
        phrase: "Siente la felicidad que espera por ti y no olvides atraparla para mantenerla contigo.",
        author: "ajescudero"
      },
      {
        phrase: "Alégrate, un camino de hermosas pasiones te espera y debes transitarlo.",
        author: "ajescudero"
      },
      {
        phrase: "No todo el mundo puede recibir las mismas cosas. Sé práctico.",
        author: "ajescudero"
      }
    ];

    const fortunaAleatoria = fortunas[Math.floor(Math.random() * fortunas.length)];
    setFortuna(`${fortunaAleatoria.phrase} - ${fortunaAleatoria.author}`);
  };

  const handleVerOtrosClick = () => {
    const next = (fondos.indexOf(fondo) + 1) % fondos.length;
    setFondo(next);
    generarFortuna();
  };

  return (
    <div className= "container" >
      <h1>Galletas de la Fortuna </h1>
      <div className="fortuna-container">
      <div className="fortuna-content">
      <p className="fortuna">{fortuna}</p>
      </div>
      </div>
      <button onClick={handleVerOtrosClick}>Ver otro</button>
    </div>
  );
};

export default FortunaGenerador;