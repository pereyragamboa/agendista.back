let __serviceId = 0x10001;
let __clientId = 0x20001;

module.exports = {
  services: [
    {
      id: __serviceId++,
      name: "Servicio básico",
      description: "Servicio primario",
      duration: 30,
      price: 100
    },
    {
      id: __serviceId++,
      name: "Servicio medio",
      description: "Servicio primario y ajustes",
      duration: 60,
      price: 200
    },
    {
      id: __serviceId++,
      name: "Servicio completo",
      description: "Todos los servicios",
      duration: 90,
      price: 300
    },
  ],
  clients: [
    {
      id: __clientId++,
      firstName: "Alicia",
      lastName: "Bernal Cienfuegos",
      telephone: "5512481632",
      email: "carrasco@example.com"
    },
    {
      id: __clientId++,
      firstName: "Sansón",
      lastName: "Carrasco",
      telephone: "3312345678",
      email: "carrasco@example.com"
    },
    {
      id: __clientId++,
      firstName: "Cristián",
      lastName: "de la Rosa Cruz",
      telephone: "8111235813",
      email: "crc@example.net"
    },
    {
      id: __clientId++,
      firstName: "Ximena",
      lastName: "Yépez Zapata",
      telephone: "5512481632",
      email: "carrasco@example.com"
    },
  ],

  getClientId: () => __clientId++,
  getServiceId: () => __serviceId++,
};