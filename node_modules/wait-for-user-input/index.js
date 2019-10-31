module.exports = function waitForUserInput (text) {
  return new Promise((resolve, reject) => {
    process.stdin.resume()
    process.stdout.write(text)
    process.stdin.once('data', data => resolve(data.toString().trim()))
    process.stdin.once('error', reject)
  })
}
