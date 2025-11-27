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

**IMPORTANTE**: A chave da API precisa estar disponível durante o build:

```bash
# Carregar variáveis do .env.local
export $(cat .env.local | xargs)

# Construir e iniciar
docker-compose up -d --build
```

Ou em uma linha:

```bash
export $(cat .env.local | xargs) && docker-compose up -d --build
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

## Deploy no Easypanel

No Easypanel, você precisa configurar a variável de ambiente **antes do build**:

1. Vá em **Settings** > **Environment Variables**
2. Adicione: `GEMINI_API_KEY=sua_chave_aqui`
3. Marque a opção **"Available at build time"** (se disponível)
4. Faça o rebuild do container

**Nota**: Se o Easypanel não suportar build args diretamente, você pode precisar modificar o Dockerfile para usar um arquivo `.env` commitado (não recomendado por segurança) ou usar uma abordagem de runtime injection.
