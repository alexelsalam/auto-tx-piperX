const { formatUnits } = require("ethers");
const { usdtAddress, PRIVATE_KEY, provider, routerAddress, usdcAddress } = require("../utils/config");
const { createContractToken, createWallet } = require("../utils/wallet");

const approve = async () =>{
    try {
        const wallet = createWallet(PRIVATE_KEY, provider)

        const usdtContract = createContractToken(usdtAddress,wallet); //conect to contaract usdt
        const usdcContract = createContractToken(usdcAddress,wallet); //conect to contaract usdc

        const balanceUsdt = await usdtContract.balanceOf(wallet.address); // check balance token in wallet
        console.log(`balance usdt: ${formatUnits(balanceUsdt.toString(), 6)}`)

        const balanceUsdc = await usdcContract.balanceOf(wallet.address); // check balance token in wallet
        console.log(`balance usdc: ${formatUnits(balanceUsdc.toString(), 6)}`)

        const allowanceUsdt = await usdtContract.allowance(wallet.address,routerAddress)
        console.log(`approve amount usdt: ${formatUnits(allowanceUsdt.toString(), 6)}`)
        const allowanceUsdc = await usdtContract.allowance(wallet.address,routerAddress)
        console.log(`approve amount usdc: ${formatUnits(allowanceUsdc.toString(), 6)}`)
        
        await usdtContract.approve(routerAddress, balanceUsdt );//approve amount to swap
        await usdcContract.approve(routerAddress, balanceUsdc );//approve amount to swap
    } catch (error) {
        console.log(error)
    }
    
    
}
approve()
