<?php
// Carregue o arquivo do PHPMailer
require_once ABSPATH . WPINC . '/class-phpmailer.php';

// Instancie o PHPMailer
$mail = new PHPMailer;

// Configurações do servidor SMTP (usando o exemplo da Hostinger)
$mail->isSMTP();
$mail->Host = 'smtp.hostinger.com';
$mail->SMTPAuth = true;
$mail->Username = 'teste@isellertecnologia.com.br';
$mail->Password = 'NGMVAIsaber@123';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

// Configurações adicionais (opcional)
$mail->addReplyTo('seuemail@seudominio.com', 'Seu Nome');
$mail->isHTML(true);

// Corpo do e-mail
$mensagem = "<html><body>";
$mensagem .= "<p>Destalhes do Pedido</p>";
$mensagem .= "<table>";
$mensagem .= "<thead>";
			$mensagem .= "<tr>";
			$mensagem .= "<th style='text-align: left; padding: 8px; border: 1px solid red;'>Produtos</th>";
			$mensagem .= "<th style='text-align: left; padding: 8px; border: 1px solid red;'>Cod.</th>";
			$mensagem .= "<th style='text-align: left; padding: 8px; border: 1px solid red;'>Caixa</th>";
			$mensagem .= "<th style='text-align: left; padding: 8px; border: 1px solid red;'>Troca</th>";
			$mensagem .= "<th style='text-align: left; padding: 8px; border: 1px solid red;'>Unidade</th>";
			$mensagem .= "<th style='text-align: left; padding: 8px; border: 1px solid red;'>Subtotal</th>";
			$mensagem .= "</tr>";
			$mensagem .= "</thead>";
for ($i = 1; $i <= 261; $i++) {
    $nomeProduto = $_POST["nome_produto_" . $i];
    $codigoProduto = $_POST["codigo_produto_" . $i];
	$caixa = $_POST["caixa_completa_" . $i];
	$troca = $_POST["troca_produto_" . $i];
    $quantidadeProduto = $_POST["quantidade_produto_" . $i];
    $subtotalProduto = $_POST["subtotal_" . $i];

    if (!empty($nomeProduto)) {
		$mensagem .= "<tr>";
        $mensagem .= "<td style='text-align: center;' >" . $nomeProduto . "</td>";
        $mensagem .= "<td style='text-align: center;' >" . $codigoProduto . "</td>";
		$mensagem .= "<td style='text-align: center;' >" . $caixa . "</td>";
		$mensagem .= "<td style='text-align: center;' >" . $troca . "</td>";
        $mensagem .= "<td style='text-align: center;' >" . $quantidadeProduto . "</td>";
        $mensagem .= "<td style='text-align: center;' >" . $subtotalProduto . "</td>";
		$mensagem .= "</tr>";
    }
}
$mensagem .= "</table>";
$mensagem .= "<div style='padding: 8px; border: 1px solid red;'>";
$mensagem .= "<h3>Total do pedido</h3>";
$mensagem .= "<p>Total de caixas: " . $_POST["caixa"] . "</p>";
$mensagem .= "<p>Total de unidades: " . $_POST["total_quantidade"] . "</p>";
$mensagem .= "<p>Total do pedido: " . $_POST["total"] . "</p>";
$mensagem .= "<h2>Dados Cliente</h2>";
$mensagem .= "<p>Forma de pagamento: " . $_POST["forma_de_pagamento"] . "</p>";
$mensagem .= "<p>Nome da loja: " . $_POST["nome_origem"] . "</p>";
$mensagem .= "<p>Comprador: " . $_POST["comprador"] . "</p>";
$mensagem .= "<p>Endereco: " . $_POST["endereco"] . "</p>";
$mensagem .= "<p>Celular: " . $_POST["celular_origem"] . "</p>";
$mensagem .= "<p>Email: " . $_POST["email_origem"] . "</p>";
$mensagem .= "</div>";
$mensagem .= "</body></html>";

// Define o corpo do e-mail
$mail->Subject = 'Detalhes do Pedido';
$mail->Body = $mensagem;

// Envie o e-mail
$mail->addAddress('teste@isellertecnologia.com.br', 'Nome do Destinatário');

if ($mail->send()) {
    echo 'E-mail enviado com sucesso!';
} else {
    echo 'Erro ao enviar o e-mail: ' . $mail->ErrorInfo;
}
?>
