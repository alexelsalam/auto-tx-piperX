const { parseEther, parseUnits } = require("ethers");
const { deadline, usdtAddress } = require("../utils/config");
const { logSuccess, logError } = require("../utils/utils");

const addLiquidityETH = async (contract, wallet) => {
    const amountPIPDesired = parseEther("0.01");
    const amountTokenDesired = parseUnits("1", 6);
    const amountTokenMin = parseUnits("1", 6);
    const amountPIPMin = parseEther("0.001") ;
    try {
        const tx = await contract.addLiquidityETH(
            usdtAddress,         // Alamat token kedua (dalam hal ini, USDT)
            amountTokenDesired,  // Jumlah token kedua yang ingin ditambahkan (USDT)
            amountTokenMin,      // Jumlah minimum token kedua untuk mencegah slippage
            amountPIPMin,        // Jumlah minimum PIP untuk mencegah slippage
            wallet.address,      // Alamat penerima liquidity token
            deadline,            // Batas waktu transaksi
            { value: amountPIPDesired } // Jumlah PIP yang ingin ditambahkan
        );
       await logSuccess(tx)
    } catch (error) {
        logError(error)
    }
}
module.exports = {addLiquidityETH}