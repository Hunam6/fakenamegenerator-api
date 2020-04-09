const fetch = require('node-fetch')
const cheerio = require('cheerio')

const Random = require('./Random')

module.exports = genRdm = (gender, country, ageMin, ageMax, nameSound) =>

    new Promise(async (resolve) => {

        let url = 'https://www.fakenamegenerator.com/'

        if (['m', 'male', 'man', 'boy', 'guy'].includes(gender)) gender = 100
        else if (['f', 'female', 'woman', 'girl', 'lady'].includes(gender)) gender = 0
        url += '/advanced.php?gen=' + gender
            + '&c%5B%5D=' + country
            + '&age-min=' + ageMin
            + '&age-max=' + ageMax
            + '&t=country&n%5B%5D=' + nameSound

        const $ = cheerio.load(await (await fetch(url)).text())
        resolve(new Random($))
    })