cube(`Aircrafts`, {
  sql: `SELECT * FROM bookings.aircrafts`,

  joins: {

  },

  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },

  dimensions: {
    model: {
      sql: `model`,
      type: `string`
    },

    aircraftCode: {
      sql: `aircraft_code`,
      type: `string`
    }
  },

  dataSource: `default`
});
