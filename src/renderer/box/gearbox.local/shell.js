const { exec } = require('child_process')
const cli = 'sh setup.sh'

exec(cli, (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return
  }

  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`)
  console.log(`stderr: ${stderr}`)
})
