
export interface User {
  nombre: String,
  apellido: string,
  telefono: string,
  email: string,
  password: string,
  notes: [{
    titulo: String,
    descripcion: String,
    tipo: String,
    fechaA: Date,
    fechaT: Date
  }]
}
