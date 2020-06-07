// Create account
web3.eth.accounts.create();

//creat an account from a private key
web3.eth.accounts.privateKeyToAccount(privateKey);

//Sign Transaction
web3.eth.accounts.signTransaction(tx, privateKey);

//recoverTransaction
web3.eth.accounts.recoverTransaction(rawTransaction);

//hashMessage
web3.eth.accounts.hashMessage(message);

//sign
web3.eth.accounts.sign(data, privateKey);

//encrypt
web3.eth.accounts.encrypt(privateKey, password);

//decrypt
web3.eth.accounts.decrypt(keystoreJsonV3, password);

//wallet
web3.eth.accounts.wallet;

//wallet.create
web3.eth.accounts.wallet.create(numberOfAccounts);

//wallet.add
web3.eth.accounts.wallet.add(account);

//wallet.remove
web3.eth.accounts.wallet.remove(account);

//wallet.clear
web3.eth.accounts.wallet.clear();

//wallet.encrypt
web3.eth.accounts.wallet.encrypt(password);

//wallet.decrypt
web3.eth.accounts.wallet.decrypt(keystoreArray, password);

//wallet.save
web3.eth.accounts.wallet.save(password);