import React, { Fragment, useState } from 'react';

const Formulario = () => {
  //CREAR STATE DE CITAS

  const [cita, setCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });
  const [error, setError] = useState(false);

  const actualizarState = (event) => {
    setCita({
      ...cita,
      [event.target.name]: event.target.value,
    });
  };
  const submitCita = (event) => {
    event.preventDefault();
    //VALIDAR
    if (
      mascota.trim() === '' ||
      propietario.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      console.log('Hay un error');
      setError(true);
      return;
    }
    console.log('enviando form');
  };
  const { mascota, propietario, fecha, hora, sintomas } = cita;
  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error && (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      )}
      <form action="" onSubmit={submitCita}>
        <label htmlFor="">Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label htmlFor="">Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          onChange={actualizarState}
          value={propietario}
        />
        <label htmlFor="">Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label htmlFor="">Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label htmlFor="">Hora</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        />
        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
