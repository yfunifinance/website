<?php if ( ! defined('BASEPATH')) exit(header("location: /")); ?>
<nav class="navbar navbar-light navbar-expand-md navigation-clean fixed-top">
    <div class="container">
        <a class="navbar-brand" href="https://yfuni.finance">
            <object alt="yfuni logo" id="logoimg" type="image/svg+xml" data="assets/img/logoheader.svg" width="auto" height="60">
                YFUNI
            </object>
        </a>
        <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1">
            <span class="sr-only">Menu</span><span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navcol-1">
            <ul class="nav navbar-nav ml-auto">
                <li class="nav-item" role="presentation"><a class="nav-link <?php if($menuselected == "home"){ echo "active"; } ?>" href="/">Home</a></li>
                <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link <?php if($menuselected == "platform"){ echo "active"; } ?>" id="#dplatform" data-toggle="dropdown" aria-expanded="false" href="#">Platform</a>
                    <div class="dropdown-menu" aria-labelled-by="dplatform">
                        <a class="dropdown-item" role="presentation" href="/uEarn">uEarn</a>
                        <a class="dropdown-item" role="presentation" href="/uFarm">uFarm</a>
                        <a class="dropdown-item" role="presentation" href="/uVault">uVault</a>
                        <a class="dropdown-item" role="presentation" href="/uBarter">uBarter</a>
                        <a class="dropdown-item" role="presentation" href="/uBorrow">uBorrow</a>
                        <a class="dropdown-item" role="presentation" href="/uMortgage">uMortgage</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link <?php if($menuselected == "liquidity"){ echo "active"; } ?>" id="#dliquidity" data-toggle="dropdown" aria-expanded="false" href="#">Liquidity</a>
                    <div class="dropdown-menu" aria-labelled-by="dliquidity">
                        <a target="blank" class="dropdown-item" role="presentation" href="https://exchange.pancakeswap.finance/#/add/BNB/0x7EF548Ee7cA0855B18cC5372BD9A34678da43658">LPYFUNIBNB</a>
                        <a target="blank" class="dropdown-item" role="presentation" href="https://exchange.pancakeswap.finance/#/add/BNB/0xe3E1FabEaBD48491bD6902B0c32FDEee8D2Ff12b">LPUNICORNBNB</a>
                        <a target="blank" class="dropdown-item" role="presentation" href="https://exchange.pancakeswap.finance/#/add/BNB/0x31D0a7AdA4d4c131Eb612DB48861211F63e57610">LPSTARTBNB</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="dropdown-toggle nav-link <?php if($menuselected == "liquidity"){ echo "active"; } ?>" id="#dbuy" data-toggle="dropdown" aria-expanded="false" href="#">Buy</a>
                    <div class="dropdown-menu" aria-labelled-by="dbuy">
                        <a target="blank" class="dropdown-item" role="presentation" href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x7ef548ee7ca0855b18cc5372bd9a34678da43658">YFUNI</a>
                        <a target="blank" class="dropdown-item" role="presentation" href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe3e1fabeabd48491bd6902b0c32fdeee8d2ff12b">UNICORN</a>
                    </div>
                </li>
                <li class="nav-item" role="presentation"><a class="nav-link" href="https://t.me/yfunifinance">Telegram</a></li>
            </ul>
        </div>
    </div>
</nav>
