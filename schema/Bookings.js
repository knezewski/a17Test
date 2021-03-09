cube(`Bookings`, {
  sql: `SELECT * FROM bookings.bookings`,

  joins: {

  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [bookDate]
    },

    totalAmount: {
      sql: `total_amount`,
      type: `sum`
    }
  },

  dimensions: {
    bookRef: {
      sql: `book_ref`,
      type: `string`
    },

    bookDate: {
      sql: `book_date`,
      type: `time`
    }
  },

  dataSource: `default`
});
