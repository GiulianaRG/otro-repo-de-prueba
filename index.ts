class Departamento {
    nombreDepartamento: string
    constructor (departamento: string){
        this.nombreDepartamento=departamento
    };

    getName(){
        return this.nombreDepartamento
    }
 };

class Piso {
    nombrePiso: string;
    departamentos: Departamento[];
    constructor (nombrePiso: string){
        this.nombrePiso=nombrePiso;
        this.departamentos= []
    };
  
    pushDepartamento (dpto: Departamento){
        this.departamentos.push(dpto)
    };
  
    getDepartamentos(): Departamento []{
        return this.departamentos
           }
  }
  
   
   class Edificio {
    pisos: Piso [];
    constructor (pisos: Piso []){
        this.pisos=pisos
    };
    addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento) {
        const pisoEncontrado = this.pisos.find(p=>p.nombrePiso == nombreDePiso)
         if (this.pisos.includes(pisoEncontrado)) {
            return pisoEncontrado.pushDepartamento(departamento)
        } else {console.log("Err")}
    };

    getDepartamentosByPiso(nombreDePiso:string) : Departamento []{
        const pisoEncontrado= this.pisos.find(p=>p.nombrePiso==nombreDePiso);
        return pisoEncontrado.getDepartamentos()
    };
};


 function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
  
    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
  
    if (
      Array.isArray(deptosEmpty) &&
      deptosEmpty.length == 0 &&
      deptos.length == 3 &&
      deptos[2].getName() == "depto tres"
    ) {
      console.log("testClaseBandaApartment passed");
    } else {
      throw "testClaseBandaApartment not passed";
    }
  }
  
  function main() {
    testClaseEdificio();
      console.log("estoy haciendo un cambio")
  }
  main()
