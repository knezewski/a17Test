cube(`AirportsData`, {
  sql: `SELECT * FROM bookings.airports_data`,

  joins: {

  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [airportName, city]
    }
  },

  dimensions: {
    airportName: {
      sql: `airport_name`,
      type: `string`
    },

    timezone: {
      sql: `timezone`,
      type: `string`
    },

    airportCode: {
      sql: `airport_code`,
      type: `string`
    },

    city: {
      sql: `city`,
      type: `string`
    }
  },

  dataSource: `default`
});
