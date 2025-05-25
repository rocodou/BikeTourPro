<?php
// Form gönderildi mi kontrol et
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form verilerini topla
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';
    $phone = $_POST['phone'] ?? '';
    
    // Form verilerini doğrula
    $errors = [];
    
    if (empty($name)) {
        $errors[] = "İsim alanı zorunludur.";
    }
    
    if (empty($email)) {
        $errors[] = "E-posta alanı zorunludur.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Geçerli bir e-posta adresi giriniz.";
    }
    
    if (empty($message)) {
        $errors[] = "Mesaj alanı zorunludur.";
    }
    
    // Hata yoksa e-posta gönder
    if (empty($errors)) {
        $to = "info@biketourcappadocia.com"; // Alıcı e-posta adresini buraya girin
        $subject = "Bike Tour Cappadocia - İletişim Formu";
        
        $email_content = "İsim: $name\n";
        $email_content .= "E-posta: $email\n";
        $email_content .= "Telefon: $phone\n\n";
        $email_content .= "Mesaj:\n$message\n";
        
        $headers = "From: $name <$email>";
        
        // E-posta gönder
        $success = mail($to, $subject, $email_content, $headers);
        
        if ($success) {
            // Başarılı ise yönlendirme
            header("Location: contact.html?status=success");
            exit;
        } else {
            // Başarısız ise yönlendirme
            header("Location: contact.html?status=error");
            exit;
        }
    } else {
        // Hatalar varsa yönlendirme
        $error_message = implode("<br>", $errors);
        header("Location: contact.html?status=validation_error&message=".urlencode($error_message));
        exit;
    }
}

// GET isteği ise contact sayfasına yönlendir
header("Location: contact.html");
exit;
?>