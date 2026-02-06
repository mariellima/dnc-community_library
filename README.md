# Community Library

Projeto de uma biblioteca comunitária onde usuários podem cadastrar livros para compartilhar com outras pessoas e também solicitar empréstimos dentro da comunidade.

---

## Instalação

### Pré‑requisitos

* Node.js (v14.x ou superior)
* npm ou yarn

---

### Passos

**1. Clone o repositório**

```bash
git clone https://github.com/seu-usuario/community-library.git
```

**2. Acesse o diretório**

```bash
cd community-library
```

**3. Instale as dependências**

Com npm:

```bash
npm install
```

Com yarn:

```bash
yarn install
```

**4. Configure o .env**

Crie um arquivo `.env` na raiz:

```env
PORT=3000
SECRET=your_jwt_secret
```

Substitua `your_jwt_secret` por uma chave usada para assinar os tokens JWT.

---

### Gerando uma chave SHA256

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

**5. Inicie o servidor**

Com npm:

```bash
npm start
```

Com yarn:

```bash
yarn start
```

Servidor em:

```text
http://localhost:3000
```

---

## Rotas

### /users

Operações de usuários:

* Criar
* Listar
* Buscar por ID
* Atualizar
* Excluir

### /books

Operações de livros:

* Criar
* Listar
* Buscar por ID
* Atualizar
* Excluir

### /loans

Operações de empréstimos:

* Criar
* Listar
* Buscar por ID
* Excluir

---

## Tecnologias

* Node.js
* Express.js
* SQLite (ou outro banco de dados)
* JWT para autenticação
* Zod para validação

---

## Contribuição

Sinta‑se à vontade para abrir issues ou enviar pull requests. Toda contribuição é bem‑vinda.

---

Obrigado por acessar o projeto!
