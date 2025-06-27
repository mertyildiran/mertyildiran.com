<?php

// Your email address
$to = "me@mertyildiran.com";

// Grab user's email address filled out on the form
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);

// Email subject line
$subject = "Message from: " . $name;

// Body text for email notification
$body = $name . " just sent you a message at " . date('G:i A T') . ".";

$body .= "\n\n";

$body .= "-------";

$body .= "\n\n";

$body .= $message;

$body .= "\n\n";

$body .= "-------";

$body .= "\n\n";

$body .= "You can reply to this person through this address: " . $email;

// From
$headers = "From:" . $name . " <" . $email . ">";

// Send!
mail($to, $subject, $body, $headers);

?>
