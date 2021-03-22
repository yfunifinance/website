<?php
    $menuselected = "home";
    define("BASEPATH", gethostbyaddr($_SERVER['REMOTE_ADDR']));
    header("Cache-Control: no-cache, no-store, must-revalidate");
    header("Pragma: no-cache");
    header("Expires: 0");
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Welcome to YFUNI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=yes">
        <link rel="icon" href="assets/img/logo.ico">
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/Navigation-Clean.css">
        <link rel="stylesheet" href="assets/css/Footer-Basic.css">
        <link rel="stylesheet" href="assets/css/timeline.css">
        <link rel="stylesheet" href="assets/css/styles.css?data=<?php echo rand(0,9999999999999); ?>">
    </head>
    <body>
        <?php include("header.php"); ?>
        <div class="bghead1">
            <div class="container text-center">
                <img src="assets/img/yfuni.png" width="80%" height="auto" />
            </div>
        </div>
        <div class="container text-center">
            <div class="card" id="cardintro">
                <div class="card-body">
                    <h2 class="card-title"><b>Introduction</b></h2>
                    <p class="card-text">
                    YFUNI is a Yearn Inspired, next-gen suite of products for revolutionizes the Decentralized Finance (DeFi) Infrastructure. YFUNI Finance aims to provide new-innovation yield farming aggregation, lending aggregation, crypto banking investment, all on the Binance Smart Chain. We have designed it to allows users to access the best yields available in YFUNI Ecosystem and DeFi market.<br/><br/>
                    YFUNI powers a decentralized saving and multi-level interest generation protocol built on the Binance Smart Chain. The ecosystem can guarantee equality, equity and security for users in staking cryptocurrency assets, whilst simultaneously improving the user experience through its simplified DeFi smart portal.</p><br/>
                        <a href="yfuni-audit.pdf"><button type="button" class="btn btn-primary">YFUNI Audit</button></a>
                        <a href="unicorn-audit.pdf"><button type="button" class="btn btn-primary">UNICORN Audit</button></a>
                </div>
            </div>
            <h2><b>YFUNI Member Benefits</b></h2>
            <p class="spaced">By becoming a member of YFUNI, Everyone can access the Ecosystem advantages:</p>
            <div class="spaced row">
                <div class="col-md-4 col-sm-12">
                    <img class="mb-3" src="assets/img/earn.png"/>
                    <h4>uEarn</h4>
                    <p class="mb-3">Deposit your crypto assets and get the optimal interest rate with the highest yield.</p>
                </div>
                <div class="col-md-4 col-sm-12">
                    <img class="mb-3" src="assets/img/vault.png"/>
                    <h4>uVault</h4>
                    <p class="mb-3">uVault is where you will earn interest when you deposit YFUNI or any stablecoin. Your deposited assets will grow and generate passive income without any risks this is similar to staking but with flexible/varied apr</p>
                </div>
                <div class="col-md-4 col-sm-12">
                    <img class="mb-3" src="assets/img/barter.png"/>
                    <h4>uBarter</h4>
                    <p class="mb-3">An easy way to swap/exchange crypto assets in a P2P (Peer to Peer) way.</p>
                </div>
                <div class="col-md-4 col-sm-12">
                    <img class="mb-3" src="assets/img/borrow.png"/>
                    <h4>uBorrow</h4>
                    <p class="mb-3">Is a loan system that NO requires KYC and competitive costs.</p>
                </div>
                <div class="col-md-4 col-sm-12">
                    <img class="mb-3" src="assets/img/asset.png"/>
                    <h4>uTokens</h4>
                    <p class="mb-3">Are built to an autonomous and non-custodial pegged asset layer for the YFUNI Decentralised Finance (DeFi) ecosystem.</p>
                </div>
                <div class="col-md-4 col-sm-12">
                    <img class="mb-3" src="assets/img/mortgage.png"/>
                    <h4>uMortgage</h4>
                    <p class="mb-3">Is a YFUNI pawn system that provides more benefits for customers, with up to a maximum of 75% borrowing of the total tokens is available, and all YFUNI pawned will go into staking.</p>
                </div>
            </div>
        </div>
        <div class="bghead2">
            <div class="container text-center">
            <div class="row mb-5">
                    <div class="col-md-7 d-none d-md-block mobilenoload">
                        <img alt="YFUNI tokeninfo" class="modleimg tokeninfoimg" src="assets/img/profiletoken.png" />
                    </div>
                    <div class="col-md-5">
                        <div class="modleimg">
                            <center>
                            <h4 class="text-white text-left mb-4"><b>YFUNI Token Profile</b></h4>
                            <table class="table table-borderless text-left text-white mb-3">
                                <tbody>
                                    <tr>
                                        <td width="37%">Name</td>
                                        <td width="3%"> : </td>
                                        <td width="60%">YFUNI Token</td>
                                    </tr>
                                    <tr>
                                        <td>Symbol</td>
                                        <td> : </td>
                                        <td>YFUNI</td>
                                    </tr>
                                    <tr>
                                        <td>Network</td>
                                        <td> : </td>
                                        <td>Binance Smart Chain</td>
                                    </tr>
                                    <tr>
                                        <td>Spec</td>
                                        <td> : </td>
                                        <td>BEP-20</td>
                                    </tr>
                                    <tr>
                                        <td>Precision</td>
                                        <td> : </td>
                                        <td>18</td>
                                    </tr>
                                    <tr>
                                        <td>Smartcontract</td>
                                        <td> : </td>
                                        <td><a class="text-white" href="https://bscscan.com/address/0x7ef548ee7ca0855b18cc5372bd9a34678da43658">0x7ef548ee7ca0855b18cc5372bd9a34678da43658</a></td>
                                    </tr>
                                </tbody>
                            </table>
                            </center>
                            <center>
                                <h4 class="text-white text-left"><b>YFUNI Token Allocation</b></h4>
                                <table class="table table-borderless text-left text-white mb-3">
                                    <tbody>
                                        <tr>
                                            <td width="37%">Total Supply</td>
                                            <td width="3%"> : </td>
                                            <td width="60%">100,000 YFUNI <span class="pinktext">(100%)</span></td>
                                        </tr>
                                        <tr>
                                            <td>Ecosystem Fund</td>
                                            <td> : </td>
                                            <td>90,000 YFUNI <span class="pinktext">(95%)</span></td>
                                        </tr>
                                        <tr>
                                            <td>General Reserve</td>
                                            <td> : </td>
                                            <td>3,000 YFUNI <span class="pinktext">(3%)</span></td>
                                        </tr>
                                        <tr>
                                            <td>Marketing</td>
                                            <td> : </td>
                                            <td>2,000 YFUNI <span class="pinktext">(2%)</span></td>
                                        </tr>
                                        <tr>
                                            <td>Liquidity</td>
                                            <td> : </td>
                                            <td>1,000 YFUNI <span class="pinktext">(1%)</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </center>
                        </div>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-md-5">
                        <div class="modleimg">
                        <center>
                            <h4 class="text-white text-left mb-4"><b>UNICORN Token Profile</b></h4>
                            <table class="table table-borderless text-left text-white mb-3">
                                <tbody>
                                    <tr>
                                        <td width="37%">Name</td>
                                        <td width="3%"> : </td>
                                        <td width="60%">UNICORN Token</td>
                                    </tr>
                                    <tr>
                                        <td>Symbol</td>
                                        <td> : </td>
                                        <td>UNICORN</td>
                                    </tr>
                                    <tr>
                                        <td>Network</td>
                                        <td> : </td>
                                        <td>Binance Smart Chain</td>
                                    </tr>
                                    <tr>
                                        <td>Spec</td>
                                        <td> : </td>
                                        <td>BEP-20</td>
                                    </tr>
                                    <tr>
                                        <td>Precision</td>
                                        <td> : </td>
                                        <td>18</td>
                                    </tr>
                                    <tr>
                                        <td>Smartcontract</td>
                                        <td> : </td>
                                        <td><a class="text-white" href="https://bscscan.com/address/0xe3e1fabeabd48491bd6902b0c32fdeee8d2ff12b">0xe3e1fabeabd48491bd6902b0c32fdeee8d2ff12b</a></td>
                                    </tr>
                                </tbody>
                            </table>
                            </center>
                            <center>
                                <h4 class="text-white text-left"><b>UNICORN Token Allocation</b></h4>
                                <table class="table table-borderless text-left text-white mb-3">
                                    <tbody>
                                        <tr>
                                            <td width="37%">Total Supply</td>
                                            <td width="3%"> : </td>
                                            <td width="60%">50,000,000 UNICORN <span class="pinktext">(100%)</span></td>
                                        </tr>
                                        <tr>
                                            <td>Ecosystem Fund</td>
                                            <td> : </td>
                                            <td>37,500,000 UNICORN <span class="pinktext">(75%)</span></td>
                                        </tr>
                                        <tr>
                                            <td>Token Sale</td>
                                            <td> : </td>
                                            <td>5,000,000 UNICORN <span class="pinktext">(10%)</span></td>
                                        </tr>
                                        <tr>
                                            <td>Liquidity</td>
                                            <td> : </td>
                                            <td>2,500,000 UNICORN <span class="pinktext">(5%)</span></td>
                                        </tr>
                                        <tr>
                                            <td>Marketing</td>
                                            <td> : </td>
                                            <td>2,500,000 UNICORN <span class="pinktext">(5%)</span></td>
                                        </tr>
                                        <tr>
                                            <td>Team</td>
                                            <td> : </td>
                                            <td>2,500,000 UNICORN <span class="pinktext">(5%)</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </center>
                        </div>
                    </div>
                    <div class="col-md-7 d-none d-md-block mobilenoload">
                        <img alt="YFUNI tokenomic" class="modleimg tokeninfoimg" src="assets/img/allocation.png" />
                    </div>
                </div>
            </div>
        </div>
        <div class="container bghead3">
            <h4 class="mb-5 text-center"><b>Roadmap</b></h4>
            <div class="mt-5 row example-centered mb-5">
                <div class="col-xs-12 col-sm-12">
                    <ul class="timeline timeline-centered">
                        <li class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h5 class="timeline-title">2020 Q3</h5>
                                <p>
                                    - Planning and Idea Development YFUNI Ecosystem<br/>
                                    - Token Development Begins and Testing Smartcontract<br/>
                                    - YFUNI Token Created<br/>
                                    - Development Partnership
                                </p>
                            </div>
                        </li>
                        <li class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h5 class="timeline-title">2020 Q4</h5>
                                <p>
                                    - Development of marketing strategies<br/>
                                    - Partnership Audit Smartcontract with Quillhash<br/>
                                </p>
                            </div>
                        </li>
                        <li class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h5 class="timeline-title">2021 Q1</h5>
                                <p>
                                    - Re-build YFUNI on Binance Smart Chain<br/>
                                    - Launch ecosystem Unicorn token<br/>
                                    - Token sale started<br/>
                                    - Dex listing<br/>
                                    - Value DeFi vFarm Pool Launched<br/>
                                    - uFarming Launch<br/>
                                    - uStaking Launch<br/>
                                    - uInsurance Partnership<br/>
                                    - YFUNI hiring team<br/>
                                    - Creating more strategic partners
                                </p>
                            </div>
                        </li>
                        <li class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h5 class="timeline-title">2021 Q2</h5>
                                <p>
                                    - Listing on major exchange<br/>
                                    - NFT and Pool management partnership<br/>
                                    - uBarter Launch<br/>
                                    - uVault Launch<br/>
                                    - uBorrow Launch<br/>
                                    - uGov Launch<br/>
                                    - Social media marketing campaign
                                </p>
                            </div>
                        </li>
                        <li class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h5 class="timeline-title">2021 Q3</h5>
                                <p>
                                    - uMortgage Launch<br/>
                                    - uBridge Launch<br/>
                                    - uAssets Launch<br/>
                                    - Mobile App interface launch<br/>
                                    - uNFT management and mining pool<br/>
                                    - YFUNI NFT drop for holder<br/>
                                    - Expand the Network
                                </p>
                            </div>
                        </li>
                        <li class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h5 class="timeline-title">2021 Q4</h5>
                                <p>
                                    - uSwap Launch<br/>
                                    - Mobile App Launch<br/>
                                    - More update release soon
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <h4 class="text-center mb-4"><b>Partnership & Tech Integration</b></h4>
            <div class="row mt-5 mb-4">
                <div class="col-md-2 mb-3"></div>
                <div class="col-md-4 mb-3">
                    <div class="stakecard3 card">
                        <div class="card-body text-center">
                            <img src="assets/img/quilhash.png" width="80%" height="auto" alt="Quilhash" />
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="stakecard3 card">
                        <div class="card-body text-center">
                            <img src="assets/img/bsc.png" width="25%" height="auto" alt="bsc" />
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="stakecard3 card">
                        <div class="card-body text-center">
                            <img src="assets/img/cake.png" width="25%" height="auto" alt="cake" />
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="stakecard3 card">
                        <div class="card-body text-center">
                            <img src="assets/img/bake.png" width="25%" height="auto" alt="bake" />
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="stakecard3 card">
                        <div class="card-body text-center">
                            <img src="assets/img/bscstarter-logo.png" width="50%" height="auto" alt="BSCstarter" />
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="stakecard3 card">
                        <div class="card-body text-center">
                            <img src="assets/img/dextools.png" width="50%" height="auto" alt="dextools" />
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="stakecard3 card">
                        <div class="card-body text-center">
                            <img src="assets/img/arcuate-capital-logo.png" width="80%" height="auto" alt="Arcuate Capital" />
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="stakecard3 card">
                        <div class="card-body text-center">
                            <img src="assets/img/comingsoonpartner.png" width="80%" height="auto" alt="coming soon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php include("footer.php"); ?>
    </body>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="https://use.typekit.net/bkt6ydm.js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>
    <script src="assets/js/ui.js?data=<?php echo rand(0,9999999999999); ?>"></script>
</html>