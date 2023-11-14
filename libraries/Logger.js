// Exercise 6: 

class Logger {
    log(id, message) {
      const loggedMessage = `[${id}]: ${message}`;
      console.log(loggedMessage);
      return loggedMessage;
    }
  }

  module.exports = Logger;