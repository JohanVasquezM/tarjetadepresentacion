import React from "react"

interface Props {
  nombre: string
  ocupacion: string
  pais: string
}

const TarjetaPersona: React.FC<Props> = ({ nombre, ocupacion, pais }) => (
  <div style={{
    border: "1px solid #ccc",
    padding: "16px",
    margin: "12px",
  }}>
    <h2>{nombre}</h2>
    <p>Ocupación: {ocupacion}</p>
    <p>País: {pais}</p>
  </div>
)

export default TarjetaPersona