const logSuccess = async (tx)=>{
    console.log('Transaksi sedang diproses...'.brightYellow, tx.hash.brightYellow);
    const receipt = await tx.wait();// Tunggu transaksi konfirmasi
    console.log('Transaksi selesai!'.brightMagenta, `https://odyssey-testnet-explorer.storyscan.xyz/tx/${receipt.hash}`.underline.brightMagenta);
}

const logError = (error) => {
  console.log(`transaction failed: ${error}`);
  console.log("run: npm run approve \nmaybe can solve, approve amount should be 1+".bold.brightRed)
}

const delay = () => {
    let countdown = Math.floor(Math.random() * (60 - 30 + 1)) + 30; // Random angka antara 30-60
    return new Promise((resolve) => {
    const timer = setInterval(() => {
      process.stdout.write(`\rtunggu: ${countdown}s`.cyan);

      if (countdown === 0) {
        console.log("\nlanjut...".green);
        clearInterval(timer); // Menghentikan timer
        resolve(); // Memastikan Promise selesai
      }

      countdown--;
    }, 1000);
  });
};



module.exports = {logSuccess, logError, delay}