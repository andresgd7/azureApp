import React, { useState } from 'react';

export default function App() {
  const [data, setData] = useState(null);

  const obtenerData = async () => {
    setData("Api en construcción");
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <div style={{ fontSize: '24px', marginBottom: '20px' }}>
        Bienvenido
      </div>
      <div>
        <button onClick={obtenerData} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Obtener data
        </button>
      </div>
      <div style={{ marginTop: '20px', fontSize: '18px' }}>
        {data ? data : "Api en construcción"}
      </div>
    </div>
  );
}
