const { exec } = require('child_process');
const path = require('path');

const prettier = path.resolve(__dirname, '../node_modules/.bin/prettier');

function run(filename) {
    return new Promise((resolve, reject) => {
        exec(`${prettier} --write ${filename}`, (error, stdout, stderr) => {
            console.warn('===========================');
            console.warn('error : ', error);
            console.warn('stdout: ', stdout);
            console.warn('stderr: ', stderr);
            console.warn('===========================');

            resolve();
        });
    });
}

module.exports = {
    run,
};
