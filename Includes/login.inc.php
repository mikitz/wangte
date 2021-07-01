<?php

if (isset($_POST["submit"])) {
    // Grab data from inside the URL
    $username = $_POST["uid"];
    $pwd = $_POST["pwd"];
    // Import other files that are needed
    require_once 'dbh.inc.php';
    require_once 'functions.inc.php';
    // ERROR HANDLING
    // Empty input box
    if (emptyInputLogin($username, $pwd) !== false) {
        header("location: ../login.php?error=emptyinput");
        exit();
    }
    // Login the user
    loginUser($conn, $username, $pwd);
} else {
    // If user accesses this page 'illegally' send them back to the login page
    header("location: ../login.php");
    exit();
}