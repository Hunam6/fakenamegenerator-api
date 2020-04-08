const fetch = require('node-fetch')
const cheerio = require('cheerio')

const Random = require('./Random')
const defaultURL = 'https://www.fakenamegenerator.com/'

module.exports = genRdm = () => {

    return new Promise(async (resolve, reject) => {
        const url = `${defaultURL}`
        const res = await fetch(url)
        const content = await res.text()
        const $ = cheerio.load(content)
        const error = $("#cse-search-box").get(0)
        if(!error) resolve(new Random($))
        else reject("Invalid parameters.")
    });

}