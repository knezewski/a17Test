cube(`FlightsV`, {
  sql: `SELECT * FROM bookings.flights_v`,

  joins: {
    Flights: {
      sql: `${CUBE}.flight_id = ${Flights}.flight_id`,
      relationship: `belongsTo`
    }
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [departureCity, departureAirportName, arrivalAirportName, arrivalCity]
    },

    scheduledDuration: {
      sql: `scheduled_duration`,
      type: `sum`
    },

    actualDuration: {
      sql: `actual_duration`,
      type: `sum`
    }
  },

  dimensions: {
     id: {
      sql: `flight_id`,
      type: `number`,
      primaryKey: true
    },
    departureAirport: {
      sql: `departure_airport`,
      type: `string`
    },

    departureCity: {
      sql: `departure_city`,
      type: `string`
    },

    aircraftCode: {
      sql: `aircraft_code`,
      type: `string`
    },

    status: {
      sql: `status`,
      type: `string`
    },

    departureAirportName: {
      sql: `departure_airport_name`,
      type: `string`
    },

    arrivalAirport: {
      sql: `arrival_airport`,
      type: `string`
    },

    flightNo: {
      sql: `flight_no`,
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

    scheduledArrivalLocal: {
      sql: `scheduled_arrival_local`,
      type: `time`
    },

    actualDepartureLocal: {
      sql: `actual_departure_local`,
      type: `time`
    },

    scheduledDepartureLocal: {
      sql: `scheduled_departure_local`,
      type: `time`
    },

    actualDeparture: {
      sql: `actual_departure`,
      type: `time`
    },

    scheduledDeparture: {
      sql: `scheduled_departure`,
      type: `time`
    },

    actualArrival: {
      sql: `actual_arrival`,
      type: `time`
    },

    scheduledArrival: {
      sql: `scheduled_arrival`,
      type: `time`
    },

    actualArrivalLocal: {
      sql: `actual_arrival_local`,
      type: `time`
    }
  },

  dataSource: `default`
});
