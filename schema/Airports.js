cube(`Airports`, {
  sql: `SELECT * FROM bookings.airports`,

  joins: {

  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [city, airportName]
    }
  },

  dimensions: {
    airportCode: {
      sql: `airport_code`,
      type: `string`
    },

    city: {
      sql: `city`,
      type: `string`
    },

    airportName: {
      sql: `airport_name`,
      type: `string`
    },

    timezone: {
      sql: `timezone`,
      type: `string`
    }
  },

  dataSource: `default`
});
