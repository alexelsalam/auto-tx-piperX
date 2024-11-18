require('dotenv').config();
const {JsonRpcProvider} = require("ethers")

const RPC_URL = "https://odyssey.storyrpc.io"
const PRIVATE_KEY = process.env.PRIVATE_KEY
const provider = new JsonRpcProvider(RPC_URL)
const routerAddress = '0x8812d810EA7CC4e1c3FB45cef19D6a7ECBf2D85D';
const pipAddress = '0xe8CabF9d1FFB6CE23cF0a86641849543ec7BD7d5';
const usdtAddress = '0x02F75bdBb4732cc6419aC15EeBeE6BCee66e826f';
const usdcAddress = "0x40fCa9cB1AB15eD9B5bDA19A52ac00A78AE08e1D"
const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 menit dari sekarang


module.exports = {RPC_URL,PRIVATE_KEY,provider,routerAddress,pipAddress,usdtAddress,usdcAddress,deadline}