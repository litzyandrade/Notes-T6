
export interface User {
  nombre: String,
  apellido: string,
  telefono: string,
  email: string,
  password: string,
  nota: [{
    titulo: String,
    descripcion: String,
    tipo: String,
    fechaA: Date,
    fechaT: Date
  }]
}
