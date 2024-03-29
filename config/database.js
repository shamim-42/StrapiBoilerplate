module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi_boilerplate'),
        username: env('DATABASE_USERNAME', 'my_database_username'),
        password: env('DATABASE_PASSWORD', 'my_database_password'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {
 	debug: true,
        pool: {
          min: 0,
          max: 10,
          idleTimeoutMillis: 30000,
          createTimeoutMillis: 30000,
          acquireTimeoutMillis: 30000,
        },
      }
    },
  },
});
