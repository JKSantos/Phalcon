<!DOCTYPE html>
<html lang = "en">
    <head>
        <meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="keywords" content="your,keywords">
		<meta name="description" content="Short explanation about this website">

		<link type="text/css" rel="stylesheet" href="../../public/css/bootstrap-css/bootstrap.css" />
        <title>Phalcon-Login</title>

        <style>
            body{
                background-image: url("../../public/img/background.jpeg");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                opacity: 0.8;
                background-attachment: fixed;
                background-position: center;
               
            }
        </style>
    </head>

    <body>
         <div class = "modal-content" style = "height: 350px; width: 500px; margin-left: 700px; margin-top: 250px;">
			<div class = "modal-header" style = "background: #80ffff;">	
				<label style = "font-size:20px;">User Authentication:</label>
			</div>
			<div class = "modal-body">
						
				<form class="form-horizontal" role="form" action = "login.php" method= "post">
				    <div class="form-group">
                        <label style = "margin-left: 50px;">Please sign-in using your username and password.</label><br><br>
                        <label class="control-label col-sm-2">Username:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name= "tfUsername" placeholder="Enter Username" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2">Password:</label>
                        <div class="col-sm-10"> 
                            <input type="password" class="form-control" name= "tfPassword" placeholder="Enter password" required>
                        </div>
                    </div>
						 
                    <div class="form-group"> 
                        <span style = "margin-left: 100px;"><a href = "forgot.php">Forgot Password?</a></span>
                        <div style= "margin-top:20px;" class=" col-sm-10">
                            <button type="submit" class="btn btn-primary" name= "btnLogin">Login</button>
                            <input class = "btn btn-default" type="reset" name = "btnClear" value = "Clear Entries">
                        </div>
                    </div>

                </form>
				
            </div>
        </div>
    </body>
</html>