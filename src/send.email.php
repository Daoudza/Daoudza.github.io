<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "recipient@example.com";
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $headers = "From: " . $_POST["email"] . "\r\n" .
               "Reply-To: " . $_POST["email"] . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    mail($to, $subject, $message, $headers);
    echo "E-mail envoyé avec succès.";
} else {
    echo "Une erreur est survenue.";
}
?>
