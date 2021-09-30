
const {exec} = require('child_process')

const runios = 'react-native run-ios --simulator "iPhone 11 Pro Max"';

exec(runios,(err,stdout,stderr) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(stdout);
    console.log(stderr);
})



