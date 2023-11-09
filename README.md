# APP

TO DO LIST

## Instalar e subir aplicação localhost

```
nvm install >18.0.0

nvm use 18.0.0

npm install

npm run dev -> Start Project

npm run server -> Start Server

```

## RFs (Requisitos funcionais)

- [x] Deve ser possível cadastrar uma nova Task;
- [x] Deve ser possível excluir uma Task;
- [ ] Deve ser possível atualizar o status da Task;

## RNs (Regras de negócio)

- [x] Não será possível cadastrar uma nova Task sem definir seu Status;
- [x] Não será possível cadastrar uma nova Task com com menos de 10 caracteres no campo description;

## RNFs (Requisitos não-funcionais)

- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por página;
