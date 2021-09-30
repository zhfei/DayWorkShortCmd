const {exec} = require('child_process')

const gitcmd = 'ssh-add ~/.ssh/id_rsa_github';

//添加github公钥到环境
exec(gitcmd,(err,stdout,stderr) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(stdout);
    console.log(stderr);
})