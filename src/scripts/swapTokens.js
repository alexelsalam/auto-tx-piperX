const {parseUnits } = require('ethers');
const {deadline} = require("../utils/config");
const { logSuccess, logError } = require('../utils/utils');

const swapToken = async (contract, wallet,path) =>{
    const amountIn = parseUnits("1", 6); //jumlah token swap
    try {
        const tx  = await contract.swapExactTokensForTokens(
            amountIn,        // Jumlah input token yang pasti (misalnya 100 USDT)
            0,               // Jumlah minimum token output yang diterima
            path,            // Rute token swap (misalnya [USDT, USDC])
            wallet.address,  // Alamat penerima
            deadline         // Waktu transaksi berakhir
        )
        await logSuccess(tx);
    }catch (error){
        logError(error)
    }
}


module.exports = {swapToken}