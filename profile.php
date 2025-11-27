<?php

// *** Database connection block ***
$servername="localhost";
$username="root";
$password="Root@1234";
$dbname="facebook";
$conn=new mysqli($servername,$username,$password,$dbname);

// *** Get user ID from URL block ***
$user_id = $_GET['uid'];

// *** Update profile block ***
if(isset($_POST['update'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $pwd = $_POST['password'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];

    $sql = "UPDATE tUser SET 
            Name='$name', Email_id='$email', Password='$pwd',
            Address='$address', Phone='$phone'
            WHERE user_id=$user_id";

    $conn->query($sql);
    echo "<script>alert('Updated Successfully');</script>";
}

// *** Load user details block ***
$sql = "SELECT * FROM tUser WHERE user_id=$user_id";
$res = $conn->query($sql);

if(!$res){
    die("SQL ERROR: " . $conn->error . "<br> QUERY: " . $sql);
}

$u = $res->fetch_assoc();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Edit Profile</title>
    <link rel="stylesheet" href="profile.css">
</head>
<body>

<!-- *** Page header block *** -->
<div class="page-header">
    <h2>Edit Profile</h2>
</div>

<!-- *** Edit profile form block *** -->
<form method="POST">
    <table id="user_details">
        <tr>
            <td><label for="name">Name</label></td>
            <td>:</td>
            <td><input type="text" name="name" value="<?php echo $u['Name']; ?>"></td>
            <td><label for="name">Email</label></td>
            <td>:</td>
            <td><input type="text" name="email" value="<?php echo $u['Email_id']; ?>"></td>
        </tr>
        <tr>
            <td><label for="name">Password</label></td>
            <td>:</td>
            <td><input type="text" name="password" value="<?php echo $u['Password']; ?>"></td>
            <td><label for="name">Address</label></td>
            <td>:</td>
            <td><input type="text" name="address" value="<?php echo $u['Address']; ?>"></td>
        </tr>
        <tr>
            <td><label for="name">Phone</label></td>
            <td>:</td>
            <td><input type="text" name="phone" value="<?php echo $u['Phone']; ?>"></td>
        </tr>
        <tr>
            <td colspan="4" align="center"><button type="submit" name="update">Update</button></td>
        </tr>
    </table>
</form>

</body>
</html>