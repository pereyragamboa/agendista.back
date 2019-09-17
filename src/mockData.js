let __serviceId = 0x10001;
let __clientId = 0x20001;
let __profileId = 0x30001;
let __openingTimesId = 0x40001;

let MILLISECONDS_PER_HOUR = 60 * 60 * 1000;
let SATURDAY = 'SATURDAY';
let SUNDAY = 'SUNDAY';
let WEEKDAYS = 'WEEKDAYS';

const getProfileId = () => __profileId++;
const getServiceId = () => __serviceId++;
const getOpeningTimesId = () => __openingTimesId++;

const profiles = [
  {
    businessName: "Goldberg Gezelshaft",
    url: "https://www.goldberg.test/",
    email: "info@goldberg.test",
    telephone: "3311224488",
    openingTimes: [
      {
        dayOfWeek: WEEKDAYS,
        startTime: 9 * MILLISECONDS_PER_HOUR,
        endTime: 18 * MILLISECONDS_PER_HOUR
      },{
        dayOfWeek: SATURDAY,
        startTime: 9 * MILLISECONDS_PER_HOUR,
        endTime: 13 * MILLISECONDS_PER_HOUR
      }
    ]
  },
  {
    businessName: "Licenciado Valeriano",
    email: "lv@example.test",
    telephone: "5543214321",
    openingTimes: [
      {
        dayOfWeek: WEEKDAYS,
        startTime: 8 * MILLISECONDS_PER_HOUR,
        endTime: 17 * MILLISECONDS_PER_HOUR
      },
    ]
  },
  {
    businessName: "Estética Froufrou",
    telephone: "8172635445"
  },
];

const services = [
  {
    name: "Servicio básico",
    description: "Servicio primario",
    duration: 30,
    price: 100
  },
  {
    name: "Servicio medio",
    description: "Servicio primario y ajustes",
    duration: 60,
    price: 200
  },
  {
    name: "Servicio completo",
    description: "Todos los servicios",
    duration: 90,
    price: 300
  },
  {
    profileId: 0x30001,
    name: "Consulta fiscal",
    description: "Asesoría en materia fiscal",
    duration: 60,
    price: 500
  },
  {
    profileId: 0x30001,
    name: "Consulta contable",
    description: "Asesoría en materia contable",
    duration: 60,
    price: 400
  },
  {
    profileId: 0x30001,
    name: "Consulta legal",
    description: "Asesoría en derecho mercantil",
    duration: 60,
    price: 600
  },
];

module.exports = {
  // Adds IDs to profiles
  profiles: profiles.map(profile => {
    profile.id = getProfileId();
    if (profile.openingTimes) {
      profile.openingTimes.map(times => {
        times.id = getOpeningTimesId();
        return times;
      });
    }
    return profile; }),
  // Adds IDs to services
  services: services.map(service => { service.id = getServiceId(); return service; }),
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
  getOpeningTimesId,
  getServiceId
};