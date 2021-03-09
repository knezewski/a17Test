cube(`AircraftsData`, {
  sql: `SELECT * FROM bookings.aircrafts_data`,

  joins: {

  },

  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },

  dimensions: {
    aircraftCode: {
      sql: `aircraft_code`,
      type: `string`
    },

    model: {
      sql: `model`,
      type: `string`
    }
  },

  dataSource: `default`
});
