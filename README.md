# fakenamegenerator-api
> **Easily scrape data from fakenamegenerator.com**

**Syntax:**

```javascript
fng(gender, country, ageMin, ageMax, nameSound) //All parameters are optionals
```


**Usage examples:**

```javascript
const fng = require('fakenamegenerator')

//Get a random person
fng().then(result => {
    console.log(result)
})

//Get a random female person
fng('f').then(result => {
    console.log(result)
})

//Get a random person who has a 20% chance of being a woman, who lives in France, 
//who is between 23 and 45 years old, and who has a name that sounds French
fng(20, 'fr', 23, 45, 'fr').then(result => {
    console.log(result) })
```

**Usage details:**

* **gender:**
    * Use `m`, `male`, `man`, `boy`, or `guy` to get at 100% chances a man
    * Use `f`, `female`, `woman`, `girl`, or `lady` to get at 100% chances a woman
    * `20` will generate a woman at 20% chance
* **country:**
    * Use the country code (ex: `fr` to get a french address)
* **age:**
    * `ageMin` corresponds to the minimum age of the generated person
    * `ageMax` corresponds to the maximum age of the generated person
* **name sound:**
    * Use the country code (ex: `fr` to get a name that sound french)
