const colors = require('colors');
const readlineSync = require('readline-sync');
const { swapToken } = require('./src/scripts/swapTokens');
const { createWallet, createContract } = require('./src/utils/wallet');
const { PRIVATE_KEY, provider, routerAddress, usdtAddress, usdcAddress } = require('./src/utils/config');
const { delay } = require('./src/utils/utils');
const { swapPipToUsdt } = require('./src/scripts/swapIP');
const { addLiquidityETH } = require('./src/scripts/addLiquidityEth');
const { addLIquidity } = require('./src/scripts/addLiquidity');

(async function main (){
    while(true){
        const action = readlineSync.question("1.swap PIP/USDT \n2.swap Token \n3.addLIquidity PIP/USDT \n4.addLiquidity USDC/USDT \n0.exit \nenter number: ".green)
        if(action === "0"){
            console.log("exiting...".red)
           break; 
        }
        const doMany = readlineSync.question("how many you want tx: ".brightWhite)
        try {
            const wallet = createWallet(PRIVATE_KEY, provider)
            const contract = createContract(routerAddress,wallet)

            if(action === "1"){

                for(let i = 1; i <= doMany; i++){
                    await swapPipToUsdt(contract,wallet)
                    await delay()
                }
            }else if(action === "2"){
                const pathAction = readlineSync.question("1.usdt/usdc \n2.usdc/usdt \nenter number ".green)
                if(pathAction === "1"){
                    path = [usdtAddress, usdcAddress]
                }else if (pathAction === "2"){
                    path = [usdcAddress, usdtAddress]
                }else{
                    break
                }
                for(let i = 1; i <= doMany; i++){
                    await swapToken(contract,wallet,path)
                    await delay()
                }
            }else if(action === "3"){

                for(let i = 1; i <= doMany; i++){
                    await addLiquidityETH(contract, wallet)
                    await delay()
                }
            } else if(action === "4"){
        
                for(let i = 1; i <= doMany; i++){
                    await addLIquidity(contract, wallet);
                    await delay()
                }
            }else{
                console.log("input should number".bold.brightRed)
                break;
            }
        } catch (error) {
            console.log(error)
        }
    }
})();

