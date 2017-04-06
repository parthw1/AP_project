<?php
	session_start();
	require("database.php");

	$message = '';
  if(isset($_POST['register'])){
  if(!empty($_POST["email"]) && !empty($_POST["password"])):

	$username = $_POST["username"];
	$email = $_POST["email"];
	$pass = $_POST["password"];

	//insert data into tables
	$sql = "INSERT INTO Users (username, emailid, password)
	VALUES ( '$username', '$email','$pass' )";

	if (mysqli_query($conn, $sql)):
		$message = 'Succesfully registered..';
		$_SESSION['username'] = $username ;
	else:
		$message = 'Sorry there is an issue in registering..';
		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	endif;

endif;
mysqli_close($conn);
}
?>

<!DOCTYPE HTML>
<html>
  <head>
    <title> REGISTRATION PAGE </title>
	<link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">
	<link href="new.css" rel="stylesheet">
	<script>
	function check() {
    if(document.getElementById('password').value === document.getElementById('confirmpass').value) {
		document.getElementById('message').innerHTML = "";
		document.getElementById('register').disabled = false;
		} else {
        document.getElementById('message').innerHTML = " * * passwords do not match! ";
		document.getElementById('register').disabled = true;
		}
	}
	</script>
  </head>
   <body>
	<div class="header" >
		<a href="index.php" ><h3>Register here to recieve the Scheme Benefits</h3> </a>
	</div>
	<span> To login <a href="login.php"> login here </a></span>
	<?php if(!empty($message)): ?>
		<p style="color: red;display: block;text-align: center;"> <?= $message ?></p>
	<?php endif; ?>
	<h3> WELCOME ! ! TO THE REGISTRATION PAGE </h3>
	<form align="center" action="" method="POST" autocomplete="on" >
	  <input type="text" name="username" placeholder="enter your name" required>
	  <input type="email" name="email" placeholder="enter your email" required>
	  <input type="password" name="password" id="password" placeholder="enter your password" required >
	  <input type="password" name="passconfirm" placeholder="confirm your password" id="confirmpass" onkeyup="check()" required >
	  <input type="submit" class="submit" name="register" id="register" value="register" disabled >
	  <span id="message"></span>
	</form>
   </body>
</html>
