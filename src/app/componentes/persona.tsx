"use client"
import React, { useEffect, useState } from "react"
import TarjetaPersona from "./Tarjetapersona"

export default function Persona() {
  const [personas, setPersonas] = useState<
    {nombre: string; ocupacion: string; pais: string}[]
  >([])

  useEffect(() => {
    setPersonas([
      {nombre: "Nicole", ocupacion: "Ingeniera", pais: "Mexico"},
      {nombre: "Juan", ocupacion: "Diseñador", pais: "Chile"},
      {nombre: "Pablo", ocupacion: "Medico", pais: "Colombia"},
      {nombre: "Carlos", ocupacion: "Profesor", pais: "España"},
      {nombre: "Sofía", ocupacion: "Abogada", pais: "Chile"}
    ])
  }, [])

  return (
    <div>
      {personas.map((persona, datos) => (
        <TarjetaPersona
          key={datos}
          nombre={persona.nombre}
          ocupacion={persona.ocupacion}
          pais={persona.pais}
        />
      ))}
    </div>
  )
}