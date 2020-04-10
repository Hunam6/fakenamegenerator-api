const moment = require('moment')

module.exports = class Random {

    constructor($){

        const d = $('dd')

        this.name = $('.address')[0].children[1].children[0].data
        this.address = $('.adr')[0].children[0].data.trim() + ' ' + $('.adr')[0].children[2].data.trim()
        this.motherMaidenName = d[0].children[0].data
        this.coordinates = ($('#geo')[0].children[0].data).split(', ')
        this.phone = parseInt(d[3].children[0].data.replace(/\./g, ''));
        this.countryCode = parseInt(d[4].children[0].data)
        this.birthday = moment(d[5].children[0].data).format('DD/MM/YYYY')
        this.age = parseInt(d[6].children[0].data.substring(0,2))
        this.tropicalZodiac = d[7].children[0].data
        this.email = d[8].children[0].data.trim()
        this.username = d[9].children[0].data
        this.password = d[10].children[0].data
        this.website = d[11].children[0].data
        this.browserUserAgent = d[12].children[0].data
        this.MFS = $('dt')[13].children[0].data
        this.CCNum = parseInt(d[13].children[0].data.replace(/ /g,''))
        this.expires = d[14].children[0].data
        this.CSC = parseInt(d[15].children[0].data)
        this.company = d[16].children[0].data
        this.occupation = d[17].children[0].data.toLowerCase()
        this.height = parseInt(d[18].children[0].data.slice(-15,-13).replace('(',''))/100
        this.weight = parseFloat(d[19].children[0].data.slice(-16,-11).replace('(',''))
        this.bloodType = d[20].children[0].data
        this.UPSTrackNum = d[21].children[0].data
        this.westernUnion = parseInt(d[22].children[0].data)
        this.moneyGram = parseInt(d[23].children[0].data)
        this.favoriteColor = d[24].children[0].data.toLowerCase()
        this.vehicle = d[25].children[0].data
        this.GUID = d[26].children[0].data

    }

}