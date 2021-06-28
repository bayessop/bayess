import * as http from 'http';

class Bootstrap {
  static addGracefulShutdown(server: http.Server) {
    const startGracefulShutdown = (): void => {
      console.log('Stopping and finishing active requests.');
      server.close(function () {
        console.log('All request have finished.');
      });
    };
    // Standard signal for process terminations
    process.on('SIGTERM', startGracefulShutdown);
    // Handle Ctrl + C terminations
    process.on('SIGINT', startGracefulShutdown);
  }
}

export { Bootstrap };
