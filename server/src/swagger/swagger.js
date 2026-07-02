export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Learn By Hariom API',
      version: '1.0.0',
      description: 'Documentation for the Learn By Hariom platform API.'
    }
  },
  apis: ['./src/routes/*.js']
};
