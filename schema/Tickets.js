cube(`Tickets`, {
  sql: `SELECT * FROM bookings.tickets`,

  joins: {
    Flights: {
      sql: `${CUBE}.flight_id = ${Flights}.flight_id`,
      relationship: `belongsTo`
    }
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [passengerId, passengerName]
    }
  },

  dimensions: {
    bookRef: {
      sql: `book_ref`,
      type: `string`
    },

    contactData: {
      sql: `contact_data`,
      type: `string`
    },

    passengerId: {
      sql: `passenger_id`,
      type: `string`
    },

    passengerName: {
      sql: `passenger_name`,
      type: `string`
    },

    ticketNo: {
      sql: `ticket_no`,
      type: `string`,
      primaryKey: true,
      shown: true
    }
  },

  dataSource: `default`
});
