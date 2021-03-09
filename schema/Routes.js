cube(`Routes`, {
  sql: `SELECT * FROM bookings.routes`,

  joins: {

  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [departureCity, departureAirportName, arrivalAirportName, arrivalCity]
    },

    duration: {
      sql: `duration`,
      type: `sum`
    }
  },

  dimensions: {
    flightNo: {
      sql: `flight_no`,
      type: `string`
    },

    departureCity: {
      sql: `departure_city`,
      type: `string`
    },

    departureAirportName: {
      sql: `departure_airport_name`,
      type: `string`
    },

    departureAirport: {
      sql: `departure_airport`,
      type: `string`
    },

    arrivalAirport: {
      sql: `arrival_airport`,
      type: `string`
    },

    aircraftCode: {
      sql: `aircraft_code`,
      type: `string`
    },

    arrivalAirportName: {
      sql: `arrival_airport_name`,
      type: `string`
    },

    arrivalCity: {
      sql: `arrival_city`,
      type: `string`
    },

    daysOfWeek: {
      sql: `days_of_week`,
      type: `string`
    }
  },

  dataSource: `default`
});
