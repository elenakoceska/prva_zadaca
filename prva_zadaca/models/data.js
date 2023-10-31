const fs = require("fs");

const DATA_SOURCE = '${__dirname}/../index.js';

const readFile = async () => {
    return new Promise ((success, fail) => {
        fs.readFile(DATA_SOURCE, 'utf-8', (err, data) => {
            if(err) {
                return fail(err);
            } else {
                return success(data);
            }
        });
    });
};

const writeFile = async (data) => {
    return new Promise ((success, fail) => {
        fs.writeFile(DATA_SOURCE, data, (err) => {
            if(err) {
                return fail(err);
            } else {
                return success();
            }
        });
    });
};


const add = async (data) => {
    let file = await readFile();
    let fileData = JSON.parse(file);
    fileData.push(data);
    await writeFile(JSON.stringify(fileData));
};

const remove = async (index) => {
    index = Number(index);
    let file = await readFile();
    let fileData = JSON.parse(file);
    let newFileData = fileData.filter((_, i) => index !== i);
    await writeFile(JSON.stringify(fileData));
};

const list = async () => {
    let file = await readFile();
    let fileData = JSON.parse(file);
    return fileData;
};

module.export = {
    add,
    remove,
    list
};