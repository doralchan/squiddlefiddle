<?php
// Available since PHP 4.1.0

   echo $_POST['username'];
   echo $_REQUEST['username'];

   import_request_variables('p', 'p_');
   echo $p_username;

// As of PHP 5.0.0, these long predefined variables can be
// disabled with the register_long_arrays directive.

   echo $HTTP_POST_VARS['username'];

// Available if the PHP directive register_globals = on. As of
// PHP 4.2.0 the default value of register_globals = off.
// Using/relying on this method is not preferred.

   echo $username;
?>
