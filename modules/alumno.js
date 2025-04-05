class Alumno{
    constructor(username, dni){
        this.Username=username;
        this.DNI=dni; 
    } 
}

const crearAlumno=(nombre, dni)=>new Alumno(nombre, dni);

export default crearAlumno;