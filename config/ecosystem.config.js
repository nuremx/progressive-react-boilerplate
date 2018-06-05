module.exports = {
  apps: [
    {
      name: 'connus',
      script: './server.js',
      watch: ['config', 'router', 'server'],
      ignore_watch: ['src', 'node_modules'],
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
