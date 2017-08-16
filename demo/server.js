const Koop = require('koop')
const koop = new Koop()
const vectorTiles = require('../')
const craigslist = require('koop-provider-craigslist')
koop.register(vectorTiles)
koop.register(craigslist)
koop.server.listen(8085)