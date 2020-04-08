module.exports = class Random {

    constructor($){

        const d = $('dd');

        this.name = $('.address').get(0).children[1].children[0].data
        this.address1 = $('.adr').get(0).children[0].data.trim()
        this.address2 = $('.adr').get(0).children[2].data.trim()
        this.motherMaidenName = d.get(0).children[0].data
        this.SSN = d.get(1).children[0].data.trim()
        this.coordinates = $('#geo').get(0).children[0].data
        this.phone = d.get(3).children[0].data
        this.countryCode = parseInt(d.get(4).children[0].data)
        this.birthday = d.get(5).children[0].data
        this.age = parseInt(d.get(6).children[0].data.substring(0,2))
        this.tropicalZodiac = d.get(7).children[0].data
        this.email = d.get(8).children[0].data.trim()
        this.username = d.get(9).children[0].data
        this.password = d.get(10).children[0].data
        this.website = d.get(11).children[0].data
        this.browserUserAgent = d.get(12).children[0].data
        this.MFS = $('dt').get(13).children[0].data
        this.visa = parseInt(d.get(13).children[0].data.replace(/ /g,''))
        this.expires = d.get(14).children[0].data
        this.CSC = parseInt(d.get(15).children[0].data)
        this.company = d.get(16).children[0].data.trim()
        this.occupation = d.get(17).children[0].data
        this.height = parseInt(d.get(18).children[0].data.slice(-16,-13))/100
        this.weight = parseFloat(d.get(19).children[0].data.slice(-15,-11))
        this.bloodType = d.get(20).children[0].data
        this.UPSTrackNum = d.get(21).children[0].data
        this.westernUnion = parseInt(d.get(22).children[0].data)
        this.moneyGram = parseInt(d.get(23).children[0].data)
        this.favoriteColor = d.get(24).children[0].data
        this.vehicle = d.get(25).children[0].data
        this.GUID = d.get(26).children[0].data

    }

}