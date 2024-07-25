module.exports = {
    // ... other configurations
    devServer: {
      // Use setupMiddlewares instead
      setupMiddlewares: (middlewares, devServer) => {
        // Example middleware for before setup
        middlewares.unshift((req, res, next) => {
          // Your before setup middleware logic here
          console.log('Before setup middleware');
          next();
        });
  
        // Example middleware for after setup
        middlewares.push((req, res, next) => {
          // Your after setup middleware logic here
          console.log('After setup middleware');
          next();
        });
  
        return middlewares;
      },
    },
  };