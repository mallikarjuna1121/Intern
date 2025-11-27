<?php

// *** Database connection block ***
$servername="localhost";
$username="root";
$password="Root@1234"; 
$dbname="facebook";

$conn = new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
    die("Connection failed: ".$conn->connect_error);
}

// *** Fetch wall posts when a friend is clicked (AJAX request block) ***
if(isset($_POST['uid'])){
    $uid = $_POST['uid'];
    $w_sql = "SELECT * FROM tWall WHERE user_id=$uid ORDER BY posting_date DESC";
    $posts = $conn->query($w_sql);
    while($p = $posts->fetch_assoc()){
        echo "<div class='post'><b>".$p['posting_date']."</b><br>".$p['post']."</div>";
    }
    exit;
}

// *** Default user ID selection block ***
$user_id = isset($_GET['uid']) ? $_GET['uid'] : 1;

// *** Fetch logged-in user details block ***
$user_sql = "SELECT * FROM tUser WHERE user_id=$user_id";
$user_res = $conn->query($user_sql);
$user = $user_res->fetch_assoc();

// *** Insert new post block ***
if(isset($_POST['new_post'])){
    $post = $_POST['new_post'];
    if($post!=""){
        $sql = "INSERT INTO tWall(user_id, posting_date, post)
                VALUES($user_id, NOW(), '$post')";
        $conn->query($sql);
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Social Media</title>
    <style>
        
    </style>
    <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
    <link rel="stylesheet" href="home.css">
</head>
<body>
<div class="container">

<!-- *** Header block (Shows logged-in user's name) *** -->
<div class="header">
    Welcome <b><a href="profile.php?uid=<?php echo $user_id; ?>" style="color:yellow;"><?php echo $user['Name']; ?></a></b>
</div>

<!-- *** Friends list block *** -->
<div class="friends">
    <h3>Friends</h3>
    <?php
    $f_sql = "SELECT tUser.user_id, tUser.Name 
              FROM tFriends 
              JOIN tUser ON tUser.user_id = tFriends.friend_id
              WHERE tFriends.user_id = $user_id";
    $friends = $conn->query($f_sql);
    while($f = $friends->fetch_assoc()){
        echo "<a href='#' class='friend-link' data-id='".$f['user_id']."'>".$f['Name']."</a><br>";
    }
    ?>
</div>

<!-- *** Wall posts + new post form block *** -->
<div class="wall">

    <!-- New post form block -->
    <div class="post-box">
        <form method="POST">
            <textarea name="new_post" rows="3" cols="30" placeholder="Write something..."></textarea><br>
            <button type="submit">Add/Show Posts</button>
        </form>
    </div>

    <!-- Display wall posts block -->
    <h3>Wall Posts</h3>
    <div class="wall-posts" id="wallPosts">
        <?php
        $w_sql = "SELECT * FROM tWall WHERE user_id=$user_id ORDER BY posting_date DESC";
        $posts = $conn->query($w_sql);
        while($p = $posts->fetch_assoc()){
            echo "<div class='post'><b>".$p['posting_date']."</b><br>".$p['post']."</div>";
        }
        ?>
    </div>
</div>
</div>

<!-- *** jQuery AJAX block to load friend's posts *** -->
<script>
$(document).on("click", ".friend-link", function () {
    let uid = $(this).data("id");
    $.post("", {uid: uid}, function(res){
        $("#wallPosts").html(res);
    });
});
</script>

</body>
</html>
