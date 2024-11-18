const { parseUnits } = require("ethers");
const { deadline, pipAddress, usdtAddress } = require("../utils/config");
const { logSuccess, logError } = require("../utils/utils");

async function swapPipToUsdt(contract,wallet) {
  const path = [pipAddress, usdtAddress];
  try {
    const tx = await contract.swapExactETHForTokens(
      0,
      path,
      wallet.address,
      deadline,
      { value: parseUnits("0.01", 18) } // Jumlah PIP yang dikirim
    );
    await logSuccess(tx);
  } catch (error) {
    logError(error);
  }
}
module.exports = { swapPipToUsdt }
