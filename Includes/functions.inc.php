<?php
// Function to check if any inputs are empty
function emptyInputSignup($username, $email, $pwd, $pwdRepeat) {
    $result;
    if (empty($username) || empty($email) || empty($pwd) || empty($pwdRepeat)) {
        $result = true;
    } else {
        $result = false;
    }
    return $result;
}
// Function to check if the username is valid
function invalidUid($username) {
    $result;
    if (!preg_match("/^[a-zA-Z0-9]*$/", $username)) {
        $result = true;
    } else {
        $result = false;
    }
    return $result;
}
// Function to check if the email is valid
function invalidEmail($email) {
    $result;
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $result = true;
    } else {
        $result = false;
    }
    return $result;
}
// Function to check if the passwords match
function pwdMatch($pwd, $pwdRepeat) {
    $result;
    if ($pwd !== $pwdRepeat) {
        $result = true;
    } else {
        $result = false;
    }
    return $result;
}
// Function to check if the username is already taken
function uidExists($conn, $username, $email) {
    // Define the SQL statement
    $sql = "SELECT * FROM users WHERE usersUid = ? OR usersEmail = ?;";
    // Initialize the prepared statement
    $stmt = mysqli_stmt_init($conn);
    // Tie the SQL statement to the prepared statement
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location: ../signup.php?error=stmtfailed");
        exit();
    }
    // Bind and execute the SQL statement
    mysqli_stmt_bind_param($stmt, "ss", $username, $email);
    mysqli_stmt_execute($stmt);

    // Grab the data
    $resultData = mysqli_stmt_get_result($stmt);
    // Check if there is anything in the data
    if ($row = mysqli_fetch_assoc($resultData)) {
        return $row;        
    } else {
        $result = false;
        return $result;
    }
    mysqli_stmt_close($stmt);
}
// Function to insert new user into the DB
function createUser($conn, $name, $email, $username, $pwd) {
    // Define the SQL statement
    $sql = "INSERT INTO users (usersName, usersEmail, usersUid, usersPwd) VALUES (?, ?, ?, ?);";
    // Initialize the prepared statement
    $stmt = mysqli_stmt_init($conn);
    // Tie the SQL statement to the prepared statement
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location: ../signup.php?error=stmtfailed");
        exit();
    }
    // Hash the password
    $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);
    
    // Bind and execute the SQL statement
    mysqli_stmt_bind_param($stmt, "ssss", $name, $email, $username, $hashedPwd);
    mysqli_stmt_execute($stmt);
    // Close the statement
    mysqli_stmt_close($stmt);
    // Send user to success page
    header("location: ../signup.php?error=none");
        exit();
}