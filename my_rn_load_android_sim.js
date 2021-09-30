const {exec} = require('child_process')

const loadsim = 'emulator @Nexus_5X_API_28';

//启动模拟器
exec(loadsim,(err,stdout,stderr) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(stdout);
    console.log(stderr);
})
