
const {exec} = require('child_process')

const runandroid = 'react-native run-android emulator-5554';

//运行rn
exec(runandroid,(err,stdout,stderr) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(stdout);
    console.log(stderr);
})

