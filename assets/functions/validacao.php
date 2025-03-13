<?php
// Capturar os dados do formulário
$nome = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';

// Sanitizar os dados
$nome = filter_var($nome, FILTER_SANITIZE_STRING);
$email = filter_var($email, FILTER_SANITIZE_EMAIL);

$erros = [];

// Validar o nome (não vazio e com comprimento mínimo)
if (empty($nome) || strlen($nome) < 3) {
    $erros[] = "Nome deve ter pelo menos 3 caracteres.";
}

// Validar o email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $erros[] = "Email inválido.";
}

// Exibir erros ou processar os dados
if (!empty($erros)) {
    foreach ($erros as $erro) {
        echo "<p>$erro</p>";
    }
} else {
    echo "<p>Dados válidos e sanitizados:</p>";
    echo "<p>Nome: $nome</p>";
    echo "<p>Email: $email</p>";
}
?>