module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/' // change to /chordictionary-website/ if deployed at root/chordictionary-website/ instead of root
    : '/'
}