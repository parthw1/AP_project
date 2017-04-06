<?php
    session_start();
    if(!isset($_SESSION['username'])){
        header('Location: Login.php');
    }
    else{
        echo "<p style='padding: 20px 0px 0px 0px';>" ."Welcome!"."  ".$_SESSION['username']."</p>" ;
    }
?>
<!DOCTYPE HTML>
<html>
 <head> <title> HTML </title>
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 	<link href="new1.css" rel="stylesheet">
</head>
    <body>
        <div class="header1" >
    		<a href="html.php" > HTML TUTORIAL </a>
    	</div>
        <div>
            <ul>
                <li>
                    <a href="/test/home.php" title="home"> <i class="material-icons" style="font-size:31px" >home</i> </a>
                </li>
                <li>
                    <a href="/test/html.php" title="html"target="_blank"> HTML </a>
                </li>
                <li>
                    <a href="/test/css.php" title="css" target="_blank"> CSS </a>
                </li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn"> MENU &#8711;</a>
                    <div class="dropdown-content">
                        <a href="/test/js.php" title="js" target="_blank"> JAVASCRIPT </a>
                        <a href="/test/php.php" title="php" target="_blank"> PHP </a>
                        <a href="/test/sql.php" title="sql" target="_blank"> SQL </a>
                    </div>
                </li>
            </ul>
        </div>
        <br /><br /><br />
        <div>
            <p> WELCOME TO HTML TUTORIAL.. </p>
            <p> click on try it yourself for compiling your first code... </p>
        </div>
        <div>
           <a class="w3-btn w3-margin-bottom" href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default" target="_blank">Try it Yourself &raquo;</a>
        </div>
    </body>
</html>
