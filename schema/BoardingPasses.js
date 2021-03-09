cube(`BoardingPasses`, {
  sql: `SELECT * FROM bookings.boarding_passes`,

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
    }
  },

  dimensions: {
    seatNo: {
      sql: `seat_no`,
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
