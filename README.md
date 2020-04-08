# fakenamegenerator-api
**Easily scrape data from fakenamegenerator.com**

Usage example:

```javascript
const fng = require('fakenamegenerator')

fng().then(result => {
    console.log(result) //Get a random person
})
```