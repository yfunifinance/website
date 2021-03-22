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
                <li class="nav-item dropdown"><a class="dropdown-toggle nav-link <?php if($menuselected == "platform"){ echo "active"; } ?>" data-toggle="dropdown" aria-expanded="false" href="#">Platform</a>
                    <div class="dropdown-menu" role="menu">
                        <a class="dropdown-item" role="presentation" href="/uEarn">uEarn</a>
                        <a class="dropdown-item" role="presentation" href="/uFarm">uFarm</a>
                        <a class="dropdown-item" role="presentation" href="/uVault">uVault</a>
                        <a class="dropdown-item" role="presentation" href="/uBarter">uBarter</a>
                        <a class="dropdown-item" role="presentation" href="/uBorrow">uBorrow</a>
                        <a class="dropdown-item" role="presentation" href="/uMortgage">uMortgage</a>
                    </div>
                </li>
                <li class="nav-item" role="presentation"><a class="nav-link <?php if($menuselected == "liquidity"){ echo "active"; } ?>" href="/liquidity">Liquidity</a></li>
                <li class="nav-item" role="presentation"><a class="nav-link" href="https://t.me/yfunifinance">Telegram</a></li>
            </ul>
        </div>
    </div>
</nav>