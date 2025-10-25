import './styles/Activities.scss';

const Activities = () => {
  const activities = [
    {
      nombre: "taekwondo",
      descripcion: "Arte marcial coreana",
      horarios: [
        { dia: 2, "hora-inicio": "18:30", "hora-fin": "20:00" },
        { dia: 4, "hora-inicio": "18:30", "hora-fin": "20:00" }
      ]
    },
    {
      nombre: "zumba",
      descripcion: "Ritmos latinos",
      horarios: [
        { dia: 1, "hora-inicio": "19:30", "hora-fin": "20:30" },
        { dia: 3, "hora-inicio": "19:30", "hora-fin": "20:30" }
      ]
    },
    {
      nombre: "yoga",
      descripcion: "Ejercicios de respiración y flexibilidad",
      horarios: [
        { dia: 1, "hora-inicio": "19:30", "hora-fin": "20:30" },
        { dia: 3, "hora-inicio": "19:30", "hora-fin": "20:30" }
      ]
    },
    {
      nombre: "funcional",
      descripcion: "Entrenamiento integral",
      horarios: [
        { dia: 1, "hora-inicio": "19:30", "hora-fin": "20:30" },
        { dia: 3, "hora-inicio": "19:30", "hora-fin": "20:30" }
      ]
    }
  ];

  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleInscribir = (nombreActividad) => {
    alert(`Inscripto en ${nombreActividad}`);
  };

  return (
    <div className="activities-container">
      {activities.map((actividad, i) => (
        <div key={i} className="activity-card">
          <h3>{actividad.nombre}</h3>
          <p>{actividad.descripcion}</p>
          <ul>
            {actividad.horarios.map((h, j) => (
              <li key={j}>
                {diasSemana[h.dia]}: {h["hora-inicio"]} - {h["hora-fin"]}
              </li>
            ))}
          </ul>
          {isLoggedIn && (
            <button onClick={() => handleInscribir(actividad.nombre)}>
              Inscribirse
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Activities;