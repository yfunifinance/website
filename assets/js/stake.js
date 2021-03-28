const abistake = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":true,"internalType":"address","name":"tokenstakeTarget","type":"address"},{"indexed":true,"internalType":"uint256","name":"amountReward","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":true,"internalType":"address","name":"tokenstakeTarget","type":"address"},{"indexed":true,"internalType":"uint256","name":"amountTokenstaked","type":"uint256"}],"name":"Unstake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":true,"internalType":"address","name":"tokenstakeTarget","type":"address"},{"indexed":true,"internalType":"uint256","name":"amountTokenstaked","type":"uint256"}],"name":"stake","type":"event"},{"inputs":[{"internalType":"uint256","name":"timePeriodstake","type":"uint256"}],"name":"addPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addrpair1","type":"address"},{"internalType":"address","name":"addrpair2","type":"address"},{"internalType":"string","name":"symbolpair1","type":"string"},{"internalType":"string","name":"symbolpair2","type":"string"},{"internalType":"uint256","name":"minstake","type":"uint256"},{"internalType":"uint8","name":"decimalpair1","type":"uint8"},{"internalType":"uint8","name":"decimalpair2","type":"uint8"}],"name":"addTokenPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"claimDevBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"claimPoolToDev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"closeActiveEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"specificPoolId","type":"uint256"},{"internalType":"uint256","name":"startDateFilter","type":"uint256"},{"internalType":"uint256","name":"endDateFilter","type":"uint256"},{"internalType":"uint256","name":"specificElapsedTime","type":"uint256"},{"internalType":"uint256","name":"totalReward","type":"uint256"}],"name":"createNewEvent","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"periodEdit","type":"uint256"},{"internalType":"uint256","name":"timePeriodstake","type":"uint256"}],"name":"editPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pairId","type":"uint256"},{"internalType":"address","name":"addrpair1","type":"address"},{"internalType":"address","name":"addrpair2","type":"address"},{"internalType":"string","name":"symbolpair1","type":"string"},{"internalType":"string","name":"symbolpair2","type":"string"},{"internalType":"uint256","name":"minstake","type":"uint256"},{"internalType":"uint8","name":"decimalpair1","type":"uint8"},{"internalType":"uint8","name":"decimalpair2","type":"uint8"}],"name":"editTokenPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pairId","type":"uint256"},{"internalType":"uint256","name":"fpel1","type":"uint256"},{"internalType":"uint256","name":"fpel2","type":"uint256"},{"internalType":"uint256","name":"fclm1","type":"uint256"},{"internalType":"uint256","name":"fclm2","type":"uint256"},{"internalType":"uint256","name":"formula1","type":"uint256"},{"internalType":"uint256","name":"formula2","type":"uint256"},{"internalType":"uint256","name":"equalpair1","type":"uint256"},{"internalType":"uint256","name":"equalpair2","type":"uint256"}],"name":"editTokenPairOption","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pairId","type":"uint256"},{"internalType":"uint256","name":"amountWantstake","type":"uint256"},{"internalType":"uint256","name":"periodwant","type":"uint256"}],"name":"stakeNow","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unstakeNow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"userEventClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"data","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"participant","type":"address"},{"internalType":"uint256","name":"eventId","type":"uint256"}],"name":"checkEligibleUser","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"getDevBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pairId","type":"uint256"}],"name":"getPairInfo","outputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPairList","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pairId","type":"uint256"}],"name":"getPairOptionInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"periodwant","type":"uint256"}],"name":"getPeriodDetail","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPeriodList","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"getPoolBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"getRewardAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pairId","type":"uint256"},{"internalType":"uint256","name":"amountWantstake","type":"uint256"},{"internalType":"uint256","name":"periodwant","type":"uint256"}],"name":"getRewardCalculator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"stakerAddress","type":"address"}],"name":"getRewardClaimable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"stakerAddress","type":"address"}],"name":"getRewardObtained","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"stakerAddress","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"stakerAddress","type":"address"}],"name":"getUserSavedPairinfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"participant","type":"address"},{"internalType":"uint256","name":"eventId","type":"uint256"}],"name":"userRewardCalculator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"viewActiveEvent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"viewActiveRewardAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eventId","type":"uint256"}],"name":"viewDetailEvent","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eventId","type":"uint256"}],"name":"viewReaminingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const abitoken = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
const scstake = "0xc48ca15F3d2B11eccb2f9386b28cF708737BBf3a";
const networkpref = 56;
let etherscanlinktx = "https://www.etherscan.io/tx/";

if(networkpref == 3){
    etherscanlinktx = "https://ropsten.etherscan.io/tx/";
}else if(networkpref == 42){
    etherscanlinktx = "https://kovan.etherscan.io/tx/";
}else if(networkpref == 56){
    etherscanlinktx = "https://www.bscscan.com/tx/";
}else if(networkpref == 97){
    etherscanlinktx = "https://testnet.bscscan.com/tx/";
}

let networklist = {1: "Mainnet", 3: "Ropsten", 42: "Kovan", 56: "BSC Mainnet", 97: "BSC Testnet"};
let poolreamining;
let controllerstakemm;
let activeEventId;
let eventDetail;
let wantperiod;
let wantpoolid;
let wanttoken;
let wantpooltoken;
let stakedperiod;
let minstaking;
let account = "0x0000000000000000000000000000000000000000";
let network;
let claimablereward;
let claimdate;
let endstake;
let cooldown;
let listsc = [];
let periodArray = [];
let tokenArray = [];
let userPairInfo;
let view = [];
let menuperiod = '';
let tokenmenu = '';
let userEligibled = false;
let stt = false;
let inittokenmenu = false;
let initperiodmenu = false;
let inittx = true;
let pairchange = false;
let connected = false;

let web3script = document.createElement("script");
web3script.onload = function () {
    async function connectDapps(){
        // Modern dapp browsers...
        if (window.ethereum) {
            ethereum.autoRefreshOnNetworkChange = false;
            window.web3 = new Web3(ethereum);
            try {
                await ethereum.enable();
                // await ethereum.send('eth_requestAccounts');
                // await ethereum.request({
                //     method: 'eth_requestAccounts'
                // });
                $(".connectnow").hide();
                $(".connecting").show();
                connected = true;
                setTimeout(function(){
                    getWallet();
                    getNetworkType();
                }, 700);
            } catch (error) {
                connectDapps();
            }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
            window.web3 = new Web3(web3.currentProvider);
            $(".connectnow").hide();
            $(".connecting").show();
            connected = true;
            setTimeout(function(){
                getWallet();
                getNetworkType();
            }, 700);
        }
        // Non-dapp browsers...
        else {
            $(".connectnow").hide();
            $(".connecting").hide();
            $('.notsupport').show();
        }
    }

    async function setupSc(){
        controllerstakemm = new window.web3.eth.Contract(abistake,scstake);
    }

    async function getWallet(){
        account = await window.web3.eth.getAccounts();
        account = account[0];
        $("#walletusers").html(account);
    }

    async function getNetworkType(){
        network = await window.web3.eth.net.getId();
        if(network != networkpref){
            $("#textnetwork").html("please change your network to "+networklist[networkpref]);
            $(".connectnow").hide();
            $(".connecting").hide();
            $('.networkfalse').show();
        }else{
            setTimeout(function(){
                setupSc();
            }, 1000);
            setTimeout(function() {
                loader();
            }, 500);
        }
    }
    
    async function getListToken(){
        if(inittokenmenu == false){
            inittokenmenu = true;
            var pairlist = await controllerstakemm.methods.getPairList().call();
            for(var az = 0; az < pairlist.length; az++){
                var pairinfo = await controllerstakemm.methods.getPairInfo(pairlist[az]).call();
                var pairdivideinfo = await controllerstakemm.methods.getPairOptionInfo(pairlist[az]).call();
                var unstakeFee = pairdivideinfo[0] / pairdivideinfo[1];
                var unstakeClaim = pairdivideinfo[2] / pairdivideinfo[3];
                var apy = (pairdivideinfo[4] / pairdivideinfo[5]) * 31536000;
                tokenArray[az] = {
                    "p1address":pairinfo[3],
                    "p2address":pairinfo[4],
                    "p1decimal":pairinfo[0],
                    "p2decimal":pairinfo[1],
                    "p1symbol":pairinfo[5],
                    "p2symbol":pairinfo[6],
                    "p1val":pairdivideinfo[6],
                    "p2val":pairdivideinfo[7],
                    "minStake":pairinfo[2],
                    "divideClaim":unstakeClaim,
                    "divideUnstake":unstakeFee,
                    "apy":apy
                }
                tokenmenu = tokenmenu + '<a onclick="setStaked('+az+')" class="dropdown-item tokenlistchoose">'+pairinfo[5]+' - '+pairinfo[6]+'</a>';
                listsc[pairinfo[3]] = new window.web3.eth.Contract(abitoken, pairinfo[3]);
            }
            $("#tokenselector").html(tokenmenu);
        }
    }

    async function getListPeriod(){
        if(initperiodmenu == false){
            initperiodmenu = true;
            var periodList = await controllerstakemm.methods.getPeriodList().call();
            for(var y = 0; y < periodList.length; y++){
                var periodDetail = await controllerstakemm.methods.getPeriodDetail(periodList[y]).call();
                var unixPeriodToDay = Math.floor(periodDetail / 86400);
                periodArray[periodList[y]] = {"period":periodList[y],"periodDay":unixPeriodToDay};
                menuperiod = menuperiod + '<a onclick="setPeriod('+periodList[y]+')" class="dropdown-item">'+periodArray[periodList[y]]['periodDay']+' Days</a>';
            }
            $("#periodselector").html(menuperiod);
            $(".connecting").hide();
        }
    }
    
    async function getUserPairInfo(wallet) {
        var result = await controllerstakemm.methods.getUserSavedPairinfo(wallet).call();
        var apy = Math.floor((result[2] / result[3]) * 31536000);
        userPairInfo = {"equal1":result[0],"equal2":result[1],"apysaved":apy};
    }
    
    async function viewDetailEvent(eventid) {
        var result = await controllerstakemm.methods.viewDetailEvent(eventid).call();
        var startFilter = result[2] * 1000;
        var endFilter = result[3] * 1000;
        var dataStart = moment(startFilter).format('MM/DD/YYYY');
        var dataEnd = moment(endFilter).format('MM/DD/YYYY');
        eventDetail = {"stakeMustOn":result[0],"poolIdGotEvent":result[1],"stakeRangeFilterDate":dataStart + " - " + dataEnd,"stakeTimeElapsed":result[4]};
    }
    
    async function viewActiveEvent() {
        var result = await controllerstakemm.methods.viewActiveEvent().call();
        return result;
    }
    
    async function userRewardCalculator(wallet, eventid){
        var result = await controllerstakemm.methods.userRewardCalculator(wallet, eventid).call();
        return result;
    }
    
    async function checkEligibleUser(wallet, eventid){
        var result = await controllerstakemm.methods.checkEligibleUser(wallet, eventid).call();
        return result;
    }
    
    async function eventView(){
        var activeEvent = await viewActiveEvent();
        var getUserReward = await userRewardCalculator(account, activeEvent);
        var getEligibleUserr = await checkEligibleUser(account, activeEvent);
        userEligibled = getEligibleUserr;
        await viewDetailEvent(activeEvent);
        
        setTimeout(function(){
            if(activeEvent > 0){
                $("#eventalert").removeClass("d-none");
                $("#idevent").html("<b>Event #"+activeEvent+"</b>");
                $("#eventIdModal").html("Event #"+activeEvent);
                
                var stakeOn = "No";
                var poolEventPair = eventDetail['poolIdGotEvent'];
                var pairIndex = poolEventPair-1;
                var pairs = tokenArray[pairIndex]["p1symbol"] + " - " + tokenArray[pairIndex]["p2symbol"];
                var usrRwd = getUserReward / (10**tokenArray[pairIndex]["p2decimal"])
                var elapsedMinimum = eventDetail['stakeTimeElapsed'] / 86400;
                
                if(eventDetail['stakeMustOn'] == true){
                    stakeOn = "Yes";
                }
                
                if(getEligibleUserr == true){
                    $("#takeRewardEvent").attr("disabled",false);
                }else{
                    $("#takeRewardEvent").attr("disabled",true);
                }
                
                $("#eventMustActive").html(stakeOn);
                $("#eventSelPool").html(pairs);
                $("#eventDateFilter").html(eventDetail['stakeRangeFilterDate']);
                $("#eventElapsedFilter").html(Math.floor(elapsedMinimum) + " Day");
                if(userEligibled == true){
                    $("#eligibledUser").html("Your Eligible : " + (usrRwd).toFixed(8) + " " + tokenArray[pairIndex]["p2symbol"]);
                }else{
                    $("#eligibledUser").html("Your Eligible : 0 " + tokenArray[pairIndex]["p2symbol"]);
                }
            }else{
                $("#eventalert").addClass("d-none");
                $("#takeRewardEvent").attr("disabled",true);
            }
        }, 1000);
    }
    
    async function getBalance(wallet) {
        if(wantpoolid != null && wantpoolid != 0){
            var idpoolselected = wantpoolid-1;
            var addressbal = tokenArray[idpoolselected]["p1address"];
            if(addressbal == "0x0000000000000000000000000000000000000000"){
                setTimeout(async function(){
                    var checkbalance = await web3.eth.getBalance(wallet);
                    view[addressbal] = (checkbalance / (10**18)).toFixed(4);
                    $("#balancess").html("Available Balance : "+view[addressbal]+" BNB");
                    $("#amountstakes").attr("placeholder", "Amount to Stake, minimum is "+minstaking);
                }, 500);
            }else{
                setTimeout(async function(){
                    if(listsc[addressbal] != null){
                        var checkbalance = await listsc[addressbal].methods.balanceOf(wallet).call();
                        view[addressbal] = (checkbalance / (10**tokenArray[idpoolselected]["p1decimal"])).toFixed(4);
                        $("#balancess").html("Available Balance : "+view[addressbal]+" "+tokenArray[idpoolselected]["p1symbol"]);
                        $("#amountstakes").attr("placeholder", "Amount to Stake, minimum is "+minstaking);
                    }
                }, 500);
            }
            // console.log(view[addressbal]);
        }else{
            var addressbal = "0x0000000000000000000000000000000000000000";
            setTimeout(async function(){
                var checkbalance = await web3.eth.getBalance(wallet);
                view[addressbal] = (checkbalance / (10**18)).toFixed(4);
                $("#balancess").html("Available Balance : "+view[addressbal]+" BNB");
            }, 500);
        }
    }
    
    async function getApproved(wallet) {
        if(wantpoolid != null && wantpoolid != 0){
            var idpoolselected = wantpoolid-1;
            var addressbal = tokenArray[idpoolselected]["p1address"];
            if(addressbal != "0x0000000000000000000000000000000000000000"){
                if(listsc[addressbal] != null){
                    var checkbalance = await listsc[addressbal].methods.allowance(wallet, scstake).call();
                    view["ap"+addressbal] = (checkbalance / (10**tokenArray[idpoolselected]["p1decimal"])).toPrecision(8);
                }
            }
        }
    }

    async function getClaimable(wallet) {
        if(wantpoolid != null){
            var idpoolselected = wantpoolid-1;
            var result = await controllerstakemm.methods.getRewardClaimable(wallet).call();
            claimablereward = result;
            if(stt){
                $("#claimable").html(convert((result / (10**tokenArray[idpoolselected]["p2decimal"])))  + " " + tokenArray[idpoolselected]["p2symbol"]);
            }
        }
    }

    async function getStakerInfo(wallet) {
        var result = await controllerstakemm.methods.getUserInfo(wallet).call();
        // console.log(result);
        stt = result[0];
        claimdate = result[5];
        endstake = result[6];
        cooldown = result[7];
        stakedperiod = result[1];

        if(stt){
            $(".unstake").show();
            $(".stake").hide();
            
            wantpoolid = result[2];
            var indexid = wantpoolid-1;
            var newunixtime = endstake * 1000;
            var datatiame = moment(newunixtime).format('MM/DD/YYYY HH:mm:ss');
            var cdunixtime = cooldown * 1000;
            var cdunstake = moment(cdunixtime).format('MM/DD/YYYY HH:mm:ss');
            var clunixtime = claimdate * 1000;
            var cdclaim = moment(clunixtime).format('MM/DD/YYYY HH:mm:ss');
            
            if(wantpoolid != null && wantpoolid != 0){
                setTimeout(function(){
                    setPeriod(stakedperiod);
                    setStaked(indexid);
                    var getstakk = convert(result[3] / (10**tokenArray[indexid]["p1decimal"]));
                    var gettclm = convert(result[8] / (10**tokenArray[indexid]["p2decimal"]));
                    $("#staked").html(getstakk + " " + tokenArray[indexid]["p1symbol"]);
                    $("#totalclaim").html(gettclm + " " + tokenArray[indexid]["p2symbol"]);
                }, 1500);
            }
            
            $('#timer').countdown(datatiame, {elapse: true}).on('update.countdown', function(event) {
                var $this = $(this);
                if (event.elapsed) {
                    $this.html('Ended');
                } else {
                    $this.html(event.strftime('%D') + ':' + event.strftime('%H') + ':' + event.strftime('%M') + ':' + event.strftime('%S'));
                }
            });
            
            $('.claimbtn').countdown(cdclaim, {elapse: true}).on('update.countdown', function(event) {
                var $this = $(this);
                if (event.elapsed) {
                    $(".claimbtn").attr('disabled',false);
                    $this.html('Claim');
                } else {
                    $(".claimbtn").attr('disabled',true);
                    $this.html('Claim cooldown : ' + event.strftime('%D') + ':' + event.strftime('%H') + ':' + event.strftime('%M') + ':' + event.strftime('%S'));
                }
            });
            
            $('#unstakebtn').countdown(cdunstake, {elapse: true}).on('update.countdown', function(event) {
                var $this = $(this);
                if (event.elapsed) {
                    $("#unstakebtn").attr('disabled',false);
                    $this.html('Unstake');
                } else {
                    $("#unstakebtn").attr('disabled',true);
                    $this.html('Unstake cooldown : ' + event.strftime('%D') + ':' + event.strftime('%H') + ':' + event.strftime('%M') + ':' + event.strftime('%S'));
                }
            });
        }else{
            $(".stake").show();
            $(".unstake").hide();
        }
    }

    async function approve(amount) {
        if(wanttoken != null){
            try{
                var tx;
                var to18 = amount * (10**18);
                // console.log(to18);
                var newbn = new BigNumber(to18);
                if(parseFloat(view[wanttoken]) >= amount){
                    // console.log(parseFloat(view[wanttoken]));
                    // console.log(parseFloat(amount));
                    // console.log(newbn);
                    tx = await listsc[wanttoken].methods.approve(scstake,newbn).send({from: account}, function(error, resi){
                        var truncatetx = resi.substr(0, 10) + "....." + resi.substr(56, 66);
                        if(resi != null){
                            toastInfo(5000, 'Pending TX :', '<a style="color:#000" target="_blank" href="'+etherscanlinktx+resi+'">'+truncatetx+'</a>');
                        }
                    }).on('receipt', (receipt) => {
                        setTimeout(function(){
                            var truncatetx = receipt.transactionHash.substr(0, 10) + "....." + receipt.transactionHash.substr(56, 66);
                            if(receipt.status){
                                toastSuccess(5000, 'TX Successfully :', '<a style="color:#000" target="_blank" href="'+etherscanlinktx+receipt.transactionHash+'">'+truncatetx+'</a>');
                            }else{
                                toastError(5000, 'TX Failed :', '<a style="color:#000" target="_blank" href="'+etherscanlinktx+receipt.transactionHash+'">'+truncatetx+'</a>');
                            }
                        },8000);
                    });
                }else{
                    toastWarning(2000, 'Warning', 'Not enought balance');
                }
                setTimeout(function(){
                    loader();
                },8000);
            }catch (error){
                toastError(3000, 'Error', error.message);
            }
        }else{
            toastError(3000, 'Error', 'Please choose pair first');
        }
    }
    
    async function userEventClaim() {
        try{
            if(userEligibled == true){
                var tx;
                tx = await controllerstakemm.methods.userEventClaim().send({from: account}, function(error, resi){
                    var truncatetx = resi.substr(0, 10) + "....." + resi.substr(56, 66);
                    if(resi != null){
                        toastInfo(5000, 'Pending TX :', '<a style="color:#000" target="_blank" href="'+etherscanlinktx+resi+'">'+truncatetx+'</a>');
                    }
                }).on('receipt', (receipt) => {
                    setTimeout(function(){
                        var truncatetx = receipt.transactionHash.substr(0, 10) + "....." + receipt.transactionHash.substr(56, 66);
                        if(receipt.status){
                            toastSuccess(5000, 'TX Successfully :', '<a style="color:#000" target="_blank" href="'+etherscanlinktx+receipt.transactionHash+'">'+truncatetx+'</a>');
                        }else{
                            toastError(5000, 'TX Failed :', '<a style="color:#000" target="_blank" href="'+etherscanlinktx+receipt.transactionHash+'">'+truncatetx+'</a>');
                        }
                    },8000);
                });
            }else{
                toastError(5000, 'Forbidden :', "You're not eligibled");
            }
            setTimeout(function(){
                loader();
            },8000);
        }catch (error){
            toastError(3000, 'Error', error.message);
        }
    }

    async function claimReward() {
        try{
            var tx;
            var datatiame;
            var today = new Date();
            if(claimdate == 0){
                datatiame = moment(0).format('MM/DD/YYYY HH:mm:ss');
            }else{
                var newunixtime = claimdate * 1000;
                datatiame = moment(newunixtime).format('MM/DD/YYYY HH:mm:ss');
            }
            if(claimablereward > 0 && today > claimdate){
                tx = await controllerstakemm.methods.claimReward().send({from: account}, function(error, resi){
                    var truncatetx = resi.substr(0, 10) + "....." + resi.substr(56, 66);
                    if(resi != null){
                        toastInfo(5000, 'Pending TX :', '<a style="color:#000" target="_blank" href="'+etherscanlinktx+resi+'">'+truncatetx+'</a>');
                    }
                }).on('receipt', (receipt) => {
                    setTimeout(function(){
                        var truncatetx = receipt.transactionHash.substr(0, 10) + "....." + receipt.transactionHash.substr(56, 66);
                        if(receipt.status){
                            if(!stt){
                                $(".unstake").hide();
                                $(".stake").show();
                                setPeriod(stakedperiod);
                            }
                            toastSuccess(5000, 'TX Successfully :', '<a style="color:#000" target="_blank" href="'+etherscanlinktx+receipt.transactionHash+'">'+truncatetx+'</a>');
                        }else{
                            toastError(5000, 'TX Failed :', '<a style="color:#000" target="_blank" href="'+etherscanlinktx+receipt.transactionHash+'">'+truncatetx+'</a>');
                        }
                    },8000);
                });
            }else{
                if(stt == false){
                    toastWarning(2000, 'Warning', 'Stake not started yet');
                }else{
                    toastWarning(2000, 'Warning', 'Not enought claimable balance or you still in cooldown time, you might claim at : '+datatiame);
                }
            }
            setTimeout(function(){
                loader();
            },8000);
        }catch (error){
            toastError(3000, 'Error', error.message);
        }
    }

    async function stake(poolid, amount, wantperiod) {
        try{
            var tx;
            inittx = true;
            var to18 = amount * (10**18);
            // console.log(to18)
            var newbn = new BigNumber(to18);
            if(wantperiod == null){
                toastWarning(2000, 'Warning', 'Please choose stake period you want');
            }else{
                if(wanttoken == "0x0000000000000000000000000000000000000000"){
                    if(parseFloat(view[wanttoken]) >= amount){
                        tx = await controllerstakemm.methods.stakeNow(poolid,newbn,wantperiod).send({from: account, value: newbn}, function(error, resi){
                            if(error == null){
                                var truncatetx = resi.substr(0, 10) + "....." + resi.substr(56, 66);
                                if(resi != null){
                                    toastInfo(5000, 'Pending TX :', '<a style="color:#000" target="_blank" href="'+etherscanlinktx+resi+'">'+truncatetx+'</a>');
                                }
                            }
                        }).on('receipt', (receipt) => {
                            setTimeout(function(){
                                var truncatetx = receipt.transactionHash.substr(0, 10) + "....." + receipt.transactionHash.substr(56, 66);
                                if(receipt.status){
                                    $("#estreward").val("");
                                    $("#amountstakes").val("");
                                    $(".unstake").show();
                                    $(".stake").hide();
                                    toastSuccess(5000, 'TX Successfully :', '<a style="color:#000" target="_blank" href="'+etherscanlinktx+receipt.transactionHash+'">'+truncatetx+'</a>');
                                }else{
                                    toastError(5000, 'TX Failed :', '<a style="color:#000" target="_blank" href="'+etherscanlinktx+receipt.transactionHash+'">'+truncatetx+'</a>');
                                }
                            },8000);
                        });
                    }else{
                        toastWarning(5000, 'Warning', 'Not enought ETH balance');
                    }
                }else{
                    if(parseFloat(view["ap"+wanttoken]) >= amount){
                        // console.log(parseFloat(view["ap"+wanttoken]));
                        tx = await controllerstakemm.methods.stakeNow(poolid,newbn,wantperiod).send({from: account}, function(error, resi){
                            if(error == null){
                                var truncatetx = resi.substr(0, 10) + "....." + resi.substr(56, 66);
                                if(resi != null){
                                    toastInfo(5000, 'Pending TX :', '<a style="color:#000" target="_blank" href="'+etherscanlinktx+resi+'">'+truncatetx+'</a>');
                                }
                            }
                        }).on('receipt', (receipt) => {
                            setTimeout(function(){
                                var truncatetx = receipt.transactionHash.substr(0, 10) + "....." + receipt.transactionHash.substr(56, 66);
                                if(receipt.status){
                                    $("#estreward").val("");
                                    $(".unstake").show();
                                    $(".stake").hide();
                                    toastSuccess(5000, 'TX Successfully :', '<a style="color:#000" target="_blank" href="'+etherscanlinktx+receipt.transactionHash+'">'+truncatetx+'</a>');
                                }else{
                                    toastError(5000, 'TX Failed :', '<a style="color:#000" target="_blank" href="'+etherscanlinktx+receipt.transactionHash+'">'+truncatetx+'</a>');
                                }
                            },8000);
                        });
                    }else{
                        toastWarning(5000, 'Warning', 'Not enought Approved balance, your allowance is : '+view["ap"+wanttoken]);
                    }
                }
            }
            setTimeout(function(){
                loader();
            },8000);
        }catch (error){
            toastError(3000, 'Error', error.message);
        }
    }
    
    async function getRewardCalculator(token, amount, afwa) {
        var to18 = amount * (10**18);
        var newbn = new BigNumber(to18);
        var result = await controllerstakemm.methods.getRewardCalculator(token.toString(), newbn, afwa).call();
        return result;
    }

    async function getPoolBalance() {
        if(wantpooltoken != null && wantpooltoken != "0x0000000000000000000000000000000000000000" ){
            var result = await controllerstakemm.methods.getPoolBalance(wantpooltoken).call();
            poolreamining = result;
            return result;   
        }
    }

    async function unstake() {
        try{
            var tx;
            var datatiawme;
            var today = new Date();
            if(cooldown == 0){
                datatiawme = moment(0).format('MM/DD/YYYY HH:mm:ss');
            }else{
                var newunixtime = cooldown * 1000;
                datatiawme = moment(newunixtime).format('MM/DD/YYYY HH:mm:ss');
            }
            if(today > cooldown){
                if(stt){
                    tx = await controllerstakemm.methods.unstakeNow().send({from: account}, function(error, resi){
                        var truncatetx = resi.substr(0, 10) + "....." + resi.substr(56, 66);
                        if(resi != null){
                            toastInfo(5000, 'Pending TX :', '<a style="color:#000" target="_blank" href="'+etherscanlinktx+resi+'">'+truncatetx+'</a>');
                        }
                    }).on('receipt', (receipt) => {
                        setTimeout(function(){
                            var truncatetx = receipt.transactionHash.substr(0, 10) + "....." + receipt.transactionHash.substr(56, 66);
                            if(receipt.status){
                                $(".stake").show();
                                $(".unstake").hide();
                                $("#staked").html('0.0000000 ??');
                                $("#claimable").html('0.0000000 ??');
                                $("#totalclaim").html('0.0000000 ??');
                                toastSuccess(5000, 'TX Successfully :', '<a style="color:#000" target="_blank" href="'+etherscanlinktx+receipt.transactionHash+'">'+truncatetx+'</a>');
                            }else{
                                toastError(5000, 'TX Failed :', '<a style="color:#000" target="_blank" href="'+etherscanlinktx+receipt.transactionHash+'">'+truncatetx+'</a>');
                            }
                        },8000);
                    });
                }else{
                    toastWarning(2000, 'Warning', 'Stake not started yet');
                }
            }else{
                toastWarning(2000, 'Warning', 'You still in cooldown time, you might unstake at : '+datatiawme);
            }
            setTimeout(function(){
                loader();
            },5000);
        }catch (error){
            toastError(3000, 'Error', error.message);
        }
    }

    function loader(){
        if(connected){
            setTimeout(function(){
                getListToken();
                getListPeriod();
                getPoolBalance();
                eventView();
                getUserPairInfo(account);
                getApproved(account);
                getBalance(account);
                getStakerInfo(account);
                getClaimable(account);
            }, 2500);
        }
    }
    
    if(window.ethereum){
        if(window.ethereum.providerName != 'opera'){
            window.ethereum.on('accountsChanged', function () {
                connectDapps();
                loader();
            });
            
            window.ethereum.on('chainChanged', () => {
                window.location.reload();
            }); 
        }
    }
    
    function validateUnfocus(words) {
        var getdt = minstaking.toString();
        if(words.charAt(words.length - 1) == '.'){
            words = words + 0;
        }
        
        if(words.length > getdt.length && words < minstaking){
            $("#amountstakes").val("");
            toastWarning(2000, 'Warning', 'Minimum stake is '+minstaking);
        }else{
            $("#amountstakes").val(words);
        }
    }
    
    function validate(valuea) {
        var rgx = /^[0-9]*\.?[0-9]*$/;
        var data = valuea;
        var res = data.replace(/[^.\d]/g, '').replace(/^(\d*\.?)|(\d*)\.?/g, "$1$2");
        if(res[0] == '.'){
            res = 0 + res;
        }
        $("#amountstakes").val(res);
    }

    setInterval(function(){
        loader();
    }, 20000);
    
    setInterval(function(){
        if(pairchange == true){
            pairchange = false;
            getApproved(account);
            getBalance(account);
            getPoolBalance();
        }
    },1500);

    $("#connectbtn").click(function(){
        connectDapps();
    });
    
    $("#takeRewardEvent").click(function(){
       userEventClaim(); 
    });

    $(".claimbtn").click(function(){
        claimReward();
    });

    $("#unstakebtn").click(function(){
        unstake();
    });

    $("#approvebtn").click(function(){
        var amtstake = $("#amountstakes").val();
        approve(amtstake);
    });

    $("#stakebtn").click(function(){
        var amtstake1 = $("#amountstakes").val();
        stake(wantpoolid, amtstake1, wantperiod);
    });
    
    $("#amountstakes").on("input",async function(){
        var datainput = $("#amountstakes").val();
        var idpoolselected = wantpoolid-1;
        if(wantperiod == null || wantpoolid == null){
            toastWarning(2000, 'Warning', 'Select pair and period first');
            $("#amountstakes").val("");
        }else{
            var data = await getRewardCalculator(wantpoolid, datainput, wantperiod);
            var reamin = poolreamining;
            reamin = reamin / (10**tokenArray[idpoolselected]["p2decimal"]);
            data = data / (10**tokenArray[idpoolselected]["p1decimal"]);
            
            if(reamin < data){
                toastError(5000,'Forbidden','Insufficient pool reward allocation');
                $("#approvebtn").attr('disabled',true);
                $("#stakebtn").attr('disabled',true);
            }else{
                $("#approvebtn").attr('disabled',false);
                $("#stakebtn").attr('disabled',false);
            }
            
            $("#estreward").val(data);
        }
    });
    
    $("#amountstakes").on("keyup",function(){
        var datainput = $("#amountstakes").val();
        validate(datainput);
    });
    
    $("#amountstakes").on("blur",function(){
        var datainput = $("#amountstakes").val();
        validateUnfocus(datainput);
    });
}
web3script.src = 'https://cdnjs.cloudflare.com/ajax/libs/web3/1.3.3/web3.min.js';
document.body.appendChild(web3script);

function setPeriod(val){
    wantperiod = val;
    $("#perioddropdown").html(periodArray[val]['periodDay']+" Days");
    $("#periodview").html(periodArray[val]['periodDay']+" Days");
    $("#amountstakes").val("");
    $("#estreward").val("");
}

function setStaked(val){
    $("#amountstakes").val("");
    pairchange = true;
    wantpoolid = val+1;
    wanttoken = tokenArray[val]['p1address'];
    wantpooltoken = tokenArray[val]['p2address'];
    minstaking = tokenArray[val]['minStake'] / (10**tokenArray[val]['p1decimal']);
    $("#dvdcalc").html('<span class="greytext">DvU</span> '+tokenArray[val]['divideUnstake']+'% <span class="greytext">DvC</span> '+tokenArray[val]['divideClaim']+'%');
    $("#tokendropdown").html(tokenArray[val]['p1symbol']+" - "+tokenArray[val]['p2symbol']);
    $("#tokenview").html(tokenArray[val]['p1symbol']+" - "+tokenArray[val]['p2symbol']);
    if(stt == false){
        $("#rppcalc").html('<span class="greytext">APY</span> '+tokenArray[val]['apy']+'%');
        var eq1 = tokenArray[val]['p1val']/(10**tokenArray[val]['p1decimal']);
        var eq2 = tokenArray[val]['p2val']/(10**tokenArray[val]['p2decimal']);
        $("#equalpair").html('<span class="greytext">'+eq1+' '+tokenArray[val]['p1symbol']+'</span> = <span class="greytext">'+eq2+' '+tokenArray[val]['p2symbol']+'</span>');
    }else{
        $("#rppcalc").html('<span class="greytext">APY</span> '+userPairInfo['apysaved']+'%');
        var eq1 = userPairInfo['equal1']/(10**tokenArray[val]['p1decimal']);
        var eq2 = userPairInfo['equal2']/(10**tokenArray[val]['p2decimal']);
        $("#equalpair").html('<span class="greytext">'+eq1+' '+tokenArray[val]['p1symbol']+'</span> = <span class="greytext">'+eq2+' '+tokenArray[val]['p2symbol']+'</span>');
    }
    if(tokenArray[val]['p1address'] != "0x0000000000000000000000000000000000000000"){
        $("#approvebtn").show();
    }else{
        $("#approvebtn").hide();
    }
    $("#amountstakes").val("");
    $("#estreward").val("");
}

function toastInfo(timeoutInMili, textTitle, textToast){
    iziToast.info({
        close: false,
        pauseOnHover: false,
        timeout: timeoutInMili,
        position: 'topRight',
        title: textTitle,
        message: textToast,
    });
}

function toastWarning(timeoutInMili, textTitle, textToast){
    iziToast.warning({
        close: false,
        pauseOnHover: false,
        timeout: timeoutInMili,
        position: 'topRight',
        title: textTitle,
        message: textToast,
    });
}

function toastError(timeoutInMili, textTitle, textToast){
    iziToast.error({
        close: false,
        pauseOnHover: false,
        timeout: timeoutInMili,
        position: 'topRight',
        title: textTitle,
        message: textToast,
    });
}

function toastSuccess(timeoutInMili, textTitle, textToast){
    iziToast.success({
        close: false,
        pauseOnHover: false,
        timeout: timeoutInMili,
        position: 'topRight',
        title: textTitle,
        message: textToast,
    });
}

function convert(n){
    var sign = +n < 0 ? "-" : "",toStr = n.toString();
    if (!/e/i.test(toStr)) {
        return n;
    }
    var [lead,decimal,pow] = n.toString().replace(/^-/,"").replace(/^([0-9]+)(e.*)/,"$1.$2").split(/e|\./);
    return +pow < 0 ? sign + "0." + "0".repeat(Math.max(Math.abs(pow)-1 || 0, 0)) + lead + decimal : sign + lead + (+pow >= decimal.length ? (decimal + "0".repeat(Math.max(+pow-decimal.length || 0, 0))) : (decimal.slice(0,+pow)+"."+decimal.slice(+pow)));
}
