const { parseUnits } = require("ethers");
const { deadline, usdcAddress, usdtAddress } = require("../utils/config");
const { logSuccess, logError } = require("../utils/utils");

const addLIquidity = async (contract, wallet) => {
    const amountUsdcDesired = parseUnits("2", 6);
    const amountUsdtDesired = parseUnits("1.9", 6);
    const amountUsdcMin = parseUnits("1", 6);
    const amountUsdtMin = parseUnits("0.9", 6);
    try {
        const tx = await contract.addLiquidity(
            usdcAddress,           // Alamat PIP
            usdtAddress,           // Alamat USDT
            amountUsdcDesired,     // Jumlah PIP yang ingin ditambahkan
            amountUsdtDesired,     // Jumlah USDT yang ingin ditambahkan
            amountUsdcMin,         // Jumlah minimum PIP
            amountUsdtMin,         // Jumlah minimum USDT
            wallet.address,        // Alamat penerima liquidity token
            deadline               // Batas waktu
        );
        await logSuccess(tx);
    } catch (error) {
        logError(error)
    }
}
module.exports = { addLIquidity }