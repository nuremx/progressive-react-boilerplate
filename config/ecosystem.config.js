module.exports = {
  apps: [
    {
      name: 'connus',
      script: './server.js',
      watch: true,
      ignore_watch: ['node_modules', 'src'],
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
