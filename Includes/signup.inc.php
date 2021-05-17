<?php
// Check if user accesses this page via the submit button
// if not, redirect them back to the signup page
if (isset($_POST["submit"])) {
    // Grab data from inside the URL
    $name = $_POST["name"];
    $email = $_POST["email"];
    $username = $_POST["uid"];
    $pwd = $_POST["pwd"];
    $pwdRepeat = $_POST["pwdrepeat"];
    // Import other files that are needed
    require_once 'dbh.inc.php';
    require_once 'functions.inc.php';
    // ERROR HANDLING
    // Empty input box
    if (emptyInputSignup($username, $email, $pwd, $pwdRepeat) !== false) {
        header("location: ../signup.php?error=emptyinput");
        exit();
    }
    // Proper User Name?
    if (invalidUid($username) !== false) {
        header("location: ../signup.php?error=invaliduid");
        exit();
    }
    // Proper Email?
    if (invalidEmail($email) !== false) {
        header("location: ../signup.php?error=invalidemail");
        exit();
    }
    // Matching Passwords?
    if (pwdMatch($pwd, $pwdRepeat) !== false) {
        header("location: ../signup.php?error=passwordsdontmatch");
        exit();
    }
    // Username already exists
    if (uidExists($conn, $username, $email) !== false) {
        header("location: ../signup.php?error=usernametaken");
        exit();
    }
    // Create User in the DB
    createUser($conn, $name, $username, $email, $pwd);
} else {
    header("location: ../signup.php");
    exit();
}
