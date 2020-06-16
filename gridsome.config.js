// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  runtimeCompiler: true,
  plugins: [
    {
      use: '@meeg/gridsome-source-kentico-kontent',
      options: {
        deliveryClientConfig: {
          projectId: "b682f71a-37bf-002d-cb18-f57761358126"
        }
      }
    }
  ]
}
