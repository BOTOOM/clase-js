const persona = {
    nombre: "Edwar Diaz",
    edad: 27,
    saldo: 1000000,
    cansado: false,
    idiomas: ["ingles", "español", "frances"],
    veiculo: {
      marca: "BMW",
      color: "plateado",
      kilometraje: 1567,
      averiado: false,
      tecnomecanica: {
        expedicion: "10/10/2023",
        expiracion: "10/10/2024",
      },
    },
  };
  
  const myJsonString = JSON.stringify(persona);
  console.log(myJsonString);