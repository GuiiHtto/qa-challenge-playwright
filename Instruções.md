Para garantir que os testes funcionem corretamente, é necessário instalar as seguintes dependências:
Para facilitar a cópia dos comandos acima, você pode usar os botões abaixo:

```html
<button onclick="copyToClipboard('npm install --save-dev @playwright/test')">Copiar</button>
<button onclick="copyToClipboard('npm install --save-dev @types/axios')">Copiar</button>
<button onclick="copyToClipboard('npm install chai @types/chai')">Copiar</button>
<button onclick="copyToClipboard('npm i --save-dev @types/mocha')">Copiar</button>

<script>
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Comando copiado para a área de transferência!');
    });
}
</script>
```

```bash
npm install --save-dev @playwright/test
npm install --save-dev @types/axios
npm install chai @types/chai
npm i --save-dev @types/mocha
```

Esses pacotes são essenciais para o funcionamento adequado dos testes e para fornecer suporte a tipos e asserções.

