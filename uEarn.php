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
        <title>uEarn - YFUNI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=yes">
        <link rel="icon" href="assets/img/logo.ico">
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/Navigation-Clean.css">
        <link rel="stylesheet" href="assets/css/Footer-Basic.css">
        <link rel="stylesheet" href="assets/css/timeline.css">
        <link rel="stylesheet" href="assets/css/iziToast.min.css">
        <link rel="stylesheet" href="assets/css/styles.css?data=<?php echo rand(0,9999999999999); ?>">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
    </head>
    <body>
        <?php include("header.php"); ?>
        <div class="container bghead3 mt-5">
            <h2 class="mt-5 mb-5 card-title text-center"><b>uEarn v1.0.2</b></h2>
            
            <div class="card" id="cardstake" class="cardstakeww">
                <div class="card-body stakess">
                    <div class="row">
                        <div class="col-12 changepaddingcol">
                            <div id="eventalert" class="alert alert-primary d-none" role="alert">
                                <div class="row">
                                    <div class="col-10">
                                        <span id="idevent"><b>Event #0</b></span> has come, check yours now.
                                    </div>
                                    <div class="col-2">
                                        <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#eventModal">Check</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 changepaddingcol">
                            <p id="walletusers" class="inlineinfo text-center">
                                0x0000000000000000000000000000000000000000
                            </p>
                        </div>
                        <div class="col-12 col-md-6 changepaddingcol">
                            <p id="equalpair" class="inlineinfo text-center">
                                <span class="greytext">0 ??</span> = <span class="greytext">0 ??</span>
                            </p>
                        </div>
                        <div class="dropdown col-6 col-md-3 changepaddingcol">
                            <div class="stake">
                                <button class="stake btn btn-light btn-block dropdown-toggle togglemn" type="button" id="tokendropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Select Pair
                                </button>
                                <div id="tokenselector" class="dropdown-menu dropdown-menu-stake" aria-labelledby="tokendropdown">
                                    <a class="dropdown-item dropdown-item-stake tokenlistchoose">Select Pair</a>
                                </div>
                            </div>
                            <div class="unstake" style="display: none;">
                                <p id="tokenview" class="inlineinfo text-center">
                                    Select Pair
                                </p>
                            </div>
                        </div>
                        <div class="dropdown col-6 col-md-3 changepaddingcol">
                            <div class="stake">
                                <button class="stake btn btn-light btn-block dropdown-toggle togglemn" type="button" id="perioddropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Select Period
                                </button>
                                <div id="periodselector" class="dropdown-menu dropdown-menu-stake" aria-labelledby="perioddropdown">
                                    <a class="dropdown-item dropdown-item-stake">Select Period</a>
                                </div>
                            </div>
                            <div class="unstake" style="display: none;">
                                <p id="periodview" class="inlineinfo text-center">
                                    Select Period
                                </p>
                            </div>
                        </div>
                        <div class="col-6 col-md-3 changepaddingcol">
                            <p id="rppcalc" class="inlineinfo text-center">
                                <span class="greytext">APY</span> 0%
                            </p>
                        </div>
                        <div class="col-6 col-md-3 changepaddingcol">
                            <p id="dvdcalc" class="inlineinfo text-center">
                                <span class="greytext">DvU</span> 0% <span class="greytext">DvC</span> 0%
                            </p>
                        </div>
                    </div>
                    <div class="row" class="stakenow">
                        <div class="connectnow col-12 changepaddingcol">
                            <button id="connectbtn" type="button" class="btn btn-light btn-block stakebtn">Connect</button>
                        </div>
                        <div class="connecting col-12 changepaddingcol" style="display: none;">
                            <center>
                                <h3 class="text-center card-title">
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                     Connecting
                                </h3>
                            </center>
                        </div>
                        <div class="notsupport col-12 changepaddingcol" style="display: none;">
                            <center>
                                <h3 class="text-center card-title">
                                    Not Support, please use DApps browser.
                                </h3>
                            </center>
                        </div>
                        <div class="networkfalse col-12 changepaddingcol" style="display: none;">
                            <center>
                                <h3 id="textnetwork" class="text-center card-title">
                                    ...
                                </h3>
                            </center>
                        </div>
                        <div class="stake col-12 col-md-6 changepaddingcol" style="display: none;">
                            <p id="balancess" class="custparaf text-left">
                                Available Balance : 0 BNB
                            </p>
                            <input id="amountstakes" class="form-control form-control-lg forminputt mb-2 cardreg" type="text" placeholder="Amount to Stake">
                        </div>
                        <div class="stake col-12 col-md-6 changepaddingcol" style="display: none;">
                            <p class="custparaf text-left">
                                Reward Estimation
                            </p>
                            <input id="estreward" class="form-control form-control-lg forminputt mb-2 cardreg" disabled type="text" placeholder="0.00000000">
                        </div>
                        <div class="stake col-12 col-md-6 changepaddingcol" style="display: none;">
                            <button id="approvebtn" disabled="true" type="button" class="btn btn-light btn-block stakebtn">Approve</button>
                        </div>
                        <div class="stake col-12 col-md-6 changepaddingcol" style="display: none;">
                            <button id="stakebtn" disabled="true type="button" class="btn btn-light btn-block stakebtn">Stake</button>
                        </div>
                        <div class="unstake col-12 changepaddingcol" style="display: none;">
                            <center>
                                <h3 id="timer" class="text-center card-title">
                                    Loading...
                                </h3>
                                <p>* Note : You will got charged dividend fee if you unstake your balance and claim reward balance.</p>
                            </center>
                        </div>
                        <div class="unstake col-12 col-md-6 changepaddingcol" style="display: none;">
                            <button type="button" class="claimbtn btn btn-light btn-block stakebtn">Claim Reward</button>
                        </div>
                        <div class="unstake col-12 col-md-6 changepaddingcol" style="display: none;">
                            <button id="unstakebtn" type="button" class="btn btn-light btn-block stakebtn">Unstake</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card" id="estimatornow" class="cardstakeww">
                <div class="card-body stakess">
                    <div class="row">
                        <div class="col-12 col-md-4 changepaddingcol">
                            <p class="custparaf text-center">
                                Staked Balance
                            </p>
                            <p id="staked" class="custparaf inlineinfo text-center">
                                0.0000000 ??
                            </p>
                        </div>
                        <div class="col-12 col-md-4 changepaddingcol">
                            <p class="custparaf text-center">
                                Claimable
                            </p>
                            <p id="claimable" class="custparaf inlineinfo text-center">
                                0.0000000 ??
                            </p>
                        </div>
                        <div class="col-12 col-md-4 changepaddingcol">
                            <p class="custparaf text-center">
                                Total Claim
                            </p>
                            <p id="totalclaim" class="custparaf inlineinfo text-center">
                                0.0000000 ??
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal fade" id="eventModal" tabindex="-1" aria-labelledby="eventModal" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="eventIdModal">Event #0</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>Must Active</td>
                                    <td id="eventMustActive" class="text-right">??</td>
                                </tr>
                                <tr>
                                    <td>Selected Pair</td>
                                    <td id="eventSelPool" class="text-right">?? - ??</td>
                                </tr>
                                <tr>
                                    <td>Date Start Filter</td>
                                    <td id="eventDateFilter" class="text-right">?? - ??</td>
                                </tr>
                                <tr>
                                    <td>Elapsed Time Filter</td>
                                    <td id="eventElapsedFilter" class="text-right">??</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                    <td id="eligibledUser">Your Eligible : 0</td>
                                    <td class="text-right">
                                        <button id="takeRewardEvent" type="button" class="btn btn-primary" disabled="true">Take</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <?php include("footer.php"); ?>
    </body>
    <?php include("seo/schema.php"); ?>
    <script src="assets/js/jquery.min.js"></script>
    <script>
        $(".navbar").css("background-color", "#0083ff");
    </script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/js/all.min.js"></script>
    <script src="assets/js/iziToast.min.js" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/moment@2.27.0/moment.min.js"></script>
    <script src="assets/js/jquery.countdown.min.js" type="text/javascript"></script>
    <!--<script src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>-->
    <script src="assets/js/bignumber/bignumber.js"></script>
    <script src="assets/js/stake.js?data=<?php echo rand(0,9999999999999); ?>"></script>
</html>
