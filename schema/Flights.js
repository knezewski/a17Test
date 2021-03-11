cube(`Flights`, {
  sql: `SELECT * FROM bookings.flights`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [],
    },
  },

  dimensions: {
    id: {
      sql: `flight_id`,
      type: `number`,
      primaryKey: true
    },
    status: {
      sql: `status`,
      type: `string`,
    },

    aircraftCode: {
      sql: `aircraft_code`,
      type: `string`,
    },

    arrivalAirport: {
      sql: `arrival_airport`,
      type: `string`,
    },

    departureAirport: {
      sql: `departure_airport`,
      type: `string`,
    },

    flightNo: {
      sql: `flight_no`,
      type: `string`,
    },

    actualArrival: {
      sql: `actual_arrival`,
      type: `time`,
    },

    scheduledArrival: {
      sql: `scheduled_arrival`,
      type: `time`,
    },

    actualDeparture: {
      sql: `actual_departure`,
      type: `time`,
    },

    scheduledDeparture: {
      sql: `scheduled_departure`,
      type: `time`,
    },
  },

  dataSource: `default`,
});
