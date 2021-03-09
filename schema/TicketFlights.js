cube(`TicketFlights`, {
  sql: `SELECT * FROM bookings.ticket_flights`,

  joins: {
    Flights: {
      sql: `${CUBE}.flight_id = ${Flights}.flight_id`,
      relationship: `belongsTo`
    }
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: []
    },

    amount: {
      sql: `amount`,
      type: `sum`
    }
  },

  dimensions: {
    ticketNo: {
      sql: `ticket_no`,
      type: `string`,
      primaryKey: true,
      shown: true
    },

    fareConditions: {
      sql: `fare_conditions`,
      type: `string`
    }
  },

  dataSource: `default`
});
