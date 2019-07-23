let __serviceId = 0x10001;

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

  getServiceId: () => __serviceId++,
};