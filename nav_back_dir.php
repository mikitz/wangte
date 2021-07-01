<?php
    session_start();
?>

<div class="topnav">
    <!-- <img src="https://i.pinimg.com/originals/48/cb/53/48cb5349f515f6e59edc2a4de294f439.png" alt="Logo"> -->
    <a href="../index.php">Home</a>
    <a href="../Calculators/Calculator_Bounty_Reward.html">Calculators</a>
    <a href="../Generators/Random_Encounters.html">Generators</a>
    <a href="../Homebrew/Homebrew_Beer_Brewing.html">Homebrew</a>
    <a href="../Tools/Bounty_Board.html">Tools</a>
    <a href="../DataViz/DataViz.html">DataViz</a>
    <a href="../Nav_Donate.html">Donate</a>
    <div class="topnav-right">
        <?php
            if (isset($_SESSION["userid"])) {
                echo "<a href='../profile.php'>Profile</a>";
                echo "<a href='../includes/logout.inc.php'>Log out</a>";
            } else {
                echo "<a href='../signup.php'>Sign Up</a>";
                echo "<a href='../login.php'>Login</a>";
            }
        ?>
    </div>
</div>