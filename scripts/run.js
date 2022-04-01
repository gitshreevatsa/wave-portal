const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const smileContractFactory = await hre.ethers.getContractFactory('WavePortal');
  const smileContract = await smileContractFactory.deploy();
  await smileContract.deployed();

  console.log('Contract deployed to:', smileContract.address);
  console.log('Contract deployed by:', owner.address);
  const area = new Array(smileContract.address, owner.address, Date());
  console.log(area);

  let smileCount;
  smileCount = await smileContract.getTotalSmiles();

  let smileTxn = await smileContract.smile();
  await smileTxn.wait();

  smileCount = await smileContract.getTotalSmiles();

  smileTxn = await smileContract.connect(randomPerson).smile();
  await smileTxn.wait();

  smileCount = await smileContract.getTotalSmiles();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();