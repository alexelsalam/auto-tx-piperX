# Automation PiperX

## Description

automation bot transaction on piperx story oddesey tesnet

## Features

- SWAP PIP/USDT
- SWAP TOKEN "usdt/usdc, usdc/usdt"
- Add Liqudidity PIP/USDT
- Add Liquidity USDC/USDT
- APPROVE ERC20

## Requirements

- Node.js
- `npm` or `yarn` for package management

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/alexelsalam/auto-tx-piperX.git
    ```

2. Navigate into the project directory:

    ```bash
    cd auto-tx-piperX
    ```
    note: you can type "cd" and `TAB`
3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory of the project. Add your private key to this file with the following format:

    ```env
    PRIVATE_KEY="0x00000"
    ```
## Usage

### Running Project

1. Run Approve balance before start
   
   ```bash
   npm run approve
   ```
2. Run Options start:

   ```bash
   npm start
   ```
