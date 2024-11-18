const {Wallet, Contract} = require("ethers")
const { ABI } = require("../ABI/abi")
const { ERC20_ABI } = require("../ABI/ERC20_ABI")




function createWallet(privateKey, provider) {
    return new Wallet(privateKey,provider)
}

function createContract(routerAddress,wallet){
    return new Contract(routerAddress,ABI,wallet)
}

function createContractToken(tokenAddres, wallet){
    return new Contract(tokenAddres, ERC20_ABI, wallet)
}

module.exports ={createWallet, createContract, createContractToken}