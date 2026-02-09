module.exports = {
  apps: [
    {
      name: "healthorio-labs",
      script: "./node_modules/vite/bin/vite.js", 
      args: "preview",
      cwd: "C:\\Users\\sraj2\\healthoriolabs\\frontend",
      env: {
        NODE_ENV: "production",
      }
    }
  ]
}