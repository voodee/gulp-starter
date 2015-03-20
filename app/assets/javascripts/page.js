import _ from 'lodash'

// Contrived example to demonstrate a dependecy shared between bundles
const message = _.compact(['lodash', '', '', 'is NOT bundled with', '', '','page.js']).join(' ')
module.exports = message

let button = document.createElement('button');
button.id = "button"
button.innerText = 'hi'
document.body.appendChild(button)

document.getElementById('button').addEventListener('click', function() {
  require.ensure([], function() {
    var a = require("./module-a");
    console.log(a)
  })
})
