let __serviceId = 0x10001;
let __clientId = 0x20001;
let __profileId = 0x30001;
let __openingTimesId = 0x40001;
let __holidayId = 0x50001;
let __leaveId = 0x60001;
let __appointmentId = 0x70001;

let SATURDAY = 'SATURDAY';
let SUNDAY = 'SUNDAY';
let WEEKDAYS = 'WEEKDAYS';

const getProfileId = () => __profileId++;
const getServiceId = () => __serviceId++;
const getOpeningTimesId = () => __openingTimesId++;
const getHolidayId = () => __holidayId++;
const getLeaveId = () => __leaveId++;
const getAppointmentId = () => __appointmentId++;

const appointments = [
  {
    customerId: 0x20002,
    profileId: 0x30001,
    serviceIds: [ 0x10001, 0x10003 ],
    date: new Date(2019, 10, 11, 12, 0, 0)
  },
  {
    customerId: 0x20001,
    profileId: 0x30001,
    serviceIds: [ 0x10001, 0x10002 ],
    date: new Date(2019, 10, 1, 18, 30, 0)
  },
  {
    customerId: 0x20004,
    profileId: 0x30002,
    serviceIds: [ 0x10004 ],
    date: new Date(2020, 0, 15, 22, 30, 0)
  }
];

const profiles = [
  {
    businessName: "Goldberg Gesellschaft",
    url: "https://www.goldberg.test/",
    email: "info@goldberg.test",
    telephone: "3311224488",
    openingTimes: [
      {
        day: WEEKDAYS,
        startTime: "09:00",
        endTime: "18:00"
      },{
        day: SATURDAY,
        startTime: "09:00",
        endTime: "13:00"
      }
    ],
    holidays: [
      { month: 'JANUARY', day: 1 },
      { month: 'MAY', day: 1 },
      { month: 'SEPTEMBER', day: 16 },
      { month: 'JUNE', week: 2, dayOfWeek: 'MONDAY'}
    ],
    leaves: [
      { from: new Date("2020-03-10Z"), to: new Date("2020-03-20Z") },
      { from: new Date("2020-06-01Z"), to: new Date("2020-06-15Z") }
    ]
  },
  {
    businessName: "Licenciado Valeriano",
    email: "lv@example.test",
    telephone: "5543214321",
    openingTimes: [
      {
        day: WEEKDAYS,
        startTime: "08:00",
        endTime: "17:00"
      },
    ],
    holidays: [
      { month: 'FEBRUARY', week: 1, dayOfWeek: 'MONDAY' },
      { month: 'NOVEMBER', week: 3, dayOfWeek: 'MONDAY' },
      { month: 'DECEMBER', day: 25 }
    ],
    leaves: [
      { from: new Date(2020, 2, 21), to: new Date(2020, 3, 21) },
      { from: new Date(2020, 8, 14), to: new Date(2020, 8, 18) }
    ]
  },
  {
    businessName: "Estética Fifí",
    telephone: "8172635445"
  },
];

const services = [
  {
    profileId: 0x30001,
    name: "Servicio básico",
    description: "Servicio primario",
    duration: 30,
    price: 100
  },
  {
    profileId: 0x30001,
    name: "Servicio medio",
    description: "Servicio primario y ajustes",
    duration: 60,
    price: 200
  },
  {
    profileId: 0x30001,
    name: "Servicio completo",
    description: "Todos los servicios",
    duration: 90,
    price: 300
  },
  {
    profileId: 0x30002,
    name: "Consulta fiscal",
    description: "Asesoría en materia fiscal",
    duration: 60,
    price: 500
  },
  {
    profileId: 0x30002,
    name: "Consulta contable",
    description: "Asesoría en materia contable",
    duration: 60,
    price: 400
  },
  {
    profileId: 0x30002,
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
    // Adds IDs to business hours
    if (profile.openingTimes) {
      profile.openingTimes.map(times => {
        times.id = getOpeningTimesId();
        return times;
      });
    } else {
      profile.openingTimes = [];
    }
    // Adds IDs to holidays
    if (profile.holidays) {
      profile.holidays.map(holiday => {
        holiday.id = getHolidayId();
        return holiday;
      });
    } else {
      profile.holidays = [];
    }
    // Adds IDs to leaves
    if (profile.leaves) {
      profile.leaves.forEach(leave => {
        leave.id = getLeaveId();
      });
    } else {
      profile.leaves = [];
    }
    return profile; }),

  // Adds IDs to services
  services: services.map(service => { return { id: getServiceId(), ...service }}),

  // Adds IDs to appointments
  appointments: appointments.map(appointment => { appointment.id = getAppointmentId(); return appointment }),

  clients: [
    {
      id: __clientId++,
      firstName: "Alicia",
      lastName: "Bernal Cienfuegos",
      telephone: "5512481632",
      email: "abc@example.org"
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
      email: "xyz@example.io"
    },
  ],

  getAppointmentId,
  getClientId: () => __clientId++,
  getHolidayId,
  getOpeningTimesId,
  getServiceId,
  getLeaveId
};