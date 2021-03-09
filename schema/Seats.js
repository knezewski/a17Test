cube(`Seats`, {
  sql: `SELECT * FROM bookings.seats`,

  joins: {

  },

  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },

  dimensions: {
    seatNo: {
      sql: `seat_no`,
      type: `string`
    },

    fareConditions: {
      sql: `fare_conditions`,
      type: `string`
    },

    aircraftCode: {
      sql: `aircraft_code`,
      type: `string`
    }
  },

  dataSource: `default`
});
