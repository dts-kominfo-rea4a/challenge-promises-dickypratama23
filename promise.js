const {promiseTheaterIXX, promiseTheaterVGC} = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
    const IXX = await promiseTheaterIXX();
    const VGC = await promiseTheaterVGC();

    let count = 0;
    return new Promise((resolve) => {
        try {
            count += IXX.filter((item) => item.hasil === emosi).length;
            count += VGC.filter((item) => item.hasil === emosi).length;
            resolve(count);
        } catch (err) {
            console.log(err);
        }
    })
};

module.exports = {
    promiseOutput,
};
