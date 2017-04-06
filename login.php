<?php
	session_start();
	$message = '';
    $user = '';
    $pass = '';

	if(isset($_POST['login'])) {
	require('database.php');

  if(!empty($_POST['username']) && !empty($_POST['password1'])):

	$username = $_POST['username'];
	$password = $_POST['password1'];

	$que = " SELECT * FROM Users WHERE username = '$username' AND password = '$password' ";
	$result = mysqli_query($conn, $que);
    	$num = mysqli_num_rows($result);
	if( $num == 1 ){
	$row = mysqli_fetch_assoc($result);
	$user = $row['Username'];
	$pass = $row['password'];
	}

	if ($username == $user && $password == $pass ) {
        $message = '[ Succesfully logged in ]' ;
        $_SESSION['username'] = $username;
        header('location: index_loggedin_message.html ' );
        exit();
	} else {
		$message = '[ There is an error in login ]' ;
	}
	endif;
mysqli_close($conn);
}
?>

<!DOCTYPE HTML>
<html>
  <head>
    <title> LOGIN PAGE </title>
	<link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">
	<link href="new.css" rel="stylesheet">
  </head>
   <body>
	<div class="header" >
		<a href="index.php" ><h3>Index Page</h3> </a>
	</div>
	<span> not registered? <a href="regis.php"> register here </a></span>
	<?php if(!empty($message)): ?>
		<p style="color: red;display: block;text-align: center;"> <?= $message ?></p>
	<?php endif; ?>
	<h3> WELCOME ! ! TO THE LOGIN PAGE </h3>
	<form align="center" action="" method="POST" autocomplete="on" >
	  <input type="text" name="username" placeholder="enter your username" required>
	  <input type="password" name="password1" placeholder="enter your password" required >
	  <input type="submit" class="submit" name="login" value="login" >
	</form>
   </body>
</html>
