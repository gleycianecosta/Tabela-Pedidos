    function calcularSubtotal(input) {
    const row = input.closest('tr');
    const preco = parseFloat(row.querySelector('.preco').textContent);
    const unidadesdacaixa = parseFloat(row.querySelector('.unidadesdacaixa').textContent);
    let quantidade = 0;
    let caixa = 0;
    let troca = 0;

    if (row.querySelector('.quantidade')) {
        quantidade = parseInt(row.querySelector('.quantidade').value) || 0;
    }

    if (row.querySelector('.caixa')) {
        caixa = parseInt(row.querySelector('.caixa').value) || 0;
    }

    if (row.querySelector('.troca')) {
        troca = parseInt(row.querySelector('.troca').value) || 0;
    }

    const subtotal = (quantidade * preco) + (caixa * preco * unidadesdacaixa) - (troca * preco);
    const subtotalInput = row.querySelector('.subtotal');
    subtotalInput.value = subtotal.toFixed(2);

    calcularTotal();
}
function calcularTotal() {
    const subtotais = document.querySelectorAll('.subtotal');
    let total = 0;

    subtotais.forEach(subtotalInput => {
        const subtotal = parseFloat(subtotalInput.value) || 0;
        total += subtotal;
    });

    document.getElementById('totalInput').value = total.toFixed(2);
}


// Adicione ouvintes de eventos aos campos de entrada
const inputs = document.querySelectorAll('.quantidade, .caixa, .troca');
inputs.forEach(input => {
    input.addEventListener('input', function () {
        calcularSubtotal(this);
    });
});

//CALCULA O TOTAL DE UNIDADES
    
    // Função para calcular o total de quantidade
    function calcularTotalQuantidade() {
        // Seleciona todos os campos de quantidade com a classe 'quantidade'
        const camposQuantidade = document.querySelectorAll('.quantidade');
        let totalQuantidade = 0;

        // Itera sobre os campos de quantidade e soma os valores
        camposQuantidade.forEach(function (campo) {
            const quantidade = parseInt(campo.value) || 0;
            totalQuantidade += quantidade;
        });

        // Atualiza o valor do campo de entrada com o total de quantidade
        document.querySelector('.totalQuantidade').value = totalQuantidade;
    }

    // Função para calcular subtotal do produto
    function calcularSubtotalProduto(input) {
        // Sua lógica para calcular subtotal do produto aqui
    }
//CALCULA O TOTAL DE  CAIXAS
    // Função para calcular a soma das caixas
    function calcularTotalCaixa() {
        // Seleciona todos os campos de caixa com a classe 'caixa'
        const camposCaixa = document.querySelectorAll('.caixa');
        let totalCaixa = 0;

        // Itera sobre os campos de caixa e soma os valores
        camposCaixa.forEach(function (campo) {
            const caixa = parseInt(campo.value) || 0;
            totalCaixa += caixa;
        });

        // Atualiza o valor do campo de entrada com o total de caixas
        document.querySelector('.totalCaixa').value = totalCaixa;
    }

    // Chamada da função ao alterar qualquer campo de caixa
    const camposCaixa = document.querySelectorAll('.caixa');
    camposCaixa.forEach(function (campo) {
        campo.addEventListener('input', function() {
            calcularTotalCaixa();
        });
    });




//POPUP
var nomeProduto = document.getElementById('nomeProduto_4');
var popup = document.getElementById('produtoPopup_4');
var imagemProduto_ = document.getElementById('imagemProduto_4');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/BicovilhSalg1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_4').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_5');
var popup = document.getElementById('produtoPopup_5');
var imagemProduto_ = document.getElementById('imagemProduto_5');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/BiscovilhDoce-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_5').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_2');
var popup = document.getElementById('produtoPopup_2');
var imagemProduto_ = document.getElementById('imagemProduto_2');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/Suspiro-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_2').addEventListener('click', function() {
  popup.style.display = 'none';
});

  var nomeProduto = document.getElementById('nomeProduto_1');
  var popup = document.getElementById('produtoPopup_1');
  var imagemProduto_ = document.getElementById('imagemProduto_1');
  nomeProduto.addEventListener('click', function() {
    var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/BatataPalha-1.png';
    imagemProduto_.src = urlImagem;
    popup.style.display = 'block';
  });
  document.getElementById('fecharPopup_1').addEventListener('click', function() {
    popup.style.display = 'none';
  });


var nomeProduto = document.getElementById('nomeProduto_6');
var popup = document.getElementById('produtoPopup_6');
var imagemProduto_ = document.getElementById('imagemProduto_6');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/BiscovilhQueij-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_6').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_7');
var popup = document.getElementById('produtoPopup_7');
var imagemProduto_ = document.getElementById('imagemProduto_7');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/RosquinLeite-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_7').addEventListener('click', function() {
  popup.style.display = 'none';
});
   

var nomeProduto = document.getElementById('nomeProduto_8');
var popup = document.getElementById('produtoPopup_8');
var imagemProduto_ = document.getElementById('imagemProduto_8');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/SequiJoia-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_8').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_9');
var popup = document.getElementById('produtoPopup_9');
var imagemProduto_ = document.getElementById('imagemProduto_9');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/BroaAmend-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_9').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_10');
var popup = document.getElementById('produtoPopup_10');
var imagemProduto_ = document.getElementById('imagemProduto_10');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/AmendChoc.1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_10').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_11');
var popup = document.getElementById('produtoPopup_11');
var imagemProduto_ = document.getElementById('imagemProduto_11');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/Chocorrosca-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_11').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_12');
var popup = document.getElementById('produtoPopup_12');
var imagemProduto_ = document.getElementById('imagemProduto_12');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/GeleiMocot.-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_12').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_13');
var popup = document.getElementById('produtoPopup_13');
var imagemProduto_ = document.getElementById('imagemProduto_13');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/GeleiMocot.-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_13').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_133');
var popup = document.getElementById('produtoPopup_133');
var imagemProduto_ = document.getElementById('imagemProduto_133');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/ArrozCaramel.1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_133').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_14');
var popup = document.getElementById('produtoPopup_14');
var imagemProduto_ = document.getElementById('imagemProduto_14');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/Champagne-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_14').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_15');
var popup = document.getElementById('produtoPopup_15');
var imagemProduto_ = document.getElementById('imagemProduto_15');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/Champagn-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_15').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_16');
var popup = document.getElementById('produtoPopup_16');
var imagemProduto_ = document.getElementById('imagemProduto_16');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/Sembei-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_16').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_17');
var popup = document.getElementById('produtoPopup_17');
var imagemProduto_ = document.getElementById('imagemProduto_17');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/Sembeizin-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_17').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_18');
var popup = document.getElementById('produtoPopup_18');
var imagemProduto_ = document.getElementById('imagemProduto_18');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/SequiPaulist-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_18').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_19');
var popup = document.getElementById('produtoPopup_19');
var imagemProduto_ = document.getElementById('imagemProduto_19');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/CocoPetyan-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_19').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_20');
var popup = document.getElementById('produtoPopup_20');
var imagemProduto_ = document.getElementById('imagemProduto_20');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/SetCapa-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_20').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_22');
var popup = document.getElementById('produtoPopup_22');
var imagemProduto_ = document.getElementById('imagemProduto_22');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/Pipoca-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_22').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_24');
var popup = document.getElementById('produtoPopup_24');
var imagemProduto_ = document.getElementById('imagemProduto_24');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/FoliadCanela-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_24').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_25');
var popup = document.getElementById('produtoPopup_25');
var imagemProduto_ = document.getElementById('imagemProduto_25');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/BeijoDivino-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_25').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_27');
var popup = document.getElementById('produtoPopup_27');
var imagemProduto_ = document.getElementById('imagemProduto_27');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/BeijoDeRei-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_27').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_277');
var popup = document.getElementById('produtoPopup_277');
var imagemProduto_ = document.getElementById('imagemProduto_277');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/BeijoGlacial-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_277').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_28');
var popup = document.getElementById('produtoPopup_28');
var imagemProduto_ = document.getElementById('imagemProduto_28');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/BeijoTafai-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_28').addEventListener('click', function() {
  popup.style.display = 'none';
});

var nomeProduto = document.getElementById('nomeProduto_29');
var popup = document.getElementById('produtoPopup_29');
var imagemProduto_ = document.getElementById('imagemProduto_29');
nomeProduto.addEventListener('click', function() {
  var urlImagem = 'http://isellertecnologia.com.br/wp-content/uploads/2023/08/CoquinProdasa-1-1.png';
  imagemProduto_.src = urlImagem;
  popup.style.display = 'block';
});
document.getElementById('fecharPopup_29').addEventListener('click', function() {
  popup.style.display = 'none';
});
