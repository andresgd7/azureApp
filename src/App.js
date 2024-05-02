import React, { useState } from 'react';

export default function App() {
  const [data, setData] = useState(null);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const obtenerData = async () => {
    try {
      const response = await fetch('/api/message');
      
      if (!response.ok) {
        throw new Error('No se pudo obtener la data de la API');
      }
      
      const responseData = await response.json();
      
      setData(responseData);
      setMostrarMensaje(true);
    } catch (error) {
      console.error('Error al obtener la data:', error);
      setData("Error al obtener la data");
      setMostrarMensaje(true);
    }
  };



  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <div style={{ fontSize: '24px', marginBottom: '20px' }}>
        WELCOME
      </div>
      <div>
        <button onClick={obtenerData} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Get Data
        </button>
      </div>
      {mostrarMensaje && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
          {data ? data : "API UNDER CONSTRUCTION OR DISSABLED"}
        </div>
      )}
    </div>
  );
}
