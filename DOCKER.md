# Docker Setup

Este projeto está configurado para rodar com Docker Compose na porta **8765**.

## Pré-requisitos

- Docker
- Docker Compose

## Configuração

1. Certifique-se de que o arquivo `.env.local` existe e contém sua chave da API Gemini:
   ```
   GEMINI_API_KEY=sua_chave_aqui
   ```

## Como usar

### Construir e iniciar o container

```bash
docker-compose up -d --build
```

### Parar o container

```bash
docker-compose down
```

### Ver logs

```bash
docker-compose logs -f
```

### Reconstruir após mudanças

```bash
docker-compose up -d --build
```

## Acesso

Após iniciar o container, acesse a aplicação em:

**http://localhost:8765**

## Comandos úteis

- **Verificar status**: `docker-compose ps`
- **Reiniciar**: `docker-compose restart`
- **Remover tudo (incluindo volumes)**: `docker-compose down -v`
- **Ver logs em tempo real**: `docker-compose logs -f folder-interativo-viva`

## Porta

A aplicação está configurada para rodar na porta **8765**, uma porta menos comum para evitar conflitos.
