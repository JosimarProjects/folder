# 🚀 Instruções de Deploy - Easypanel

## ⚡ Quick Start

### 1. Configure a variável de ambiente no Easypanel

Vá em **Settings** > **Environment Variables** e adicione:

```
GEMINI_API_KEY=sua_chave_da_api_gemini
```

### 2. Faça commit e push

```bash
git add .
git commit -m "Add runtime injection for API key"
git push origin main
```

### 3. Deploy no Easypanel

Clique em **Implantar** e aguarde o build.

## ✅ O que foi implementado

- ✅ Runtime injection da API key
- ✅ Script de entrada (`entrypoint.sh`)
- ✅ Configuração do `window.ENV`
- ✅ Porta 8765 configurada
- ✅ Docker Compose otimizado

## 🔍 Verificar se funcionou

Após o deploy, verifique os logs. Você deve ver:

```
Injecting GEMINI_API_KEY into config.js...
Starting server on port 8765...
```

Se aparecer "WARNING: GEMINI_API_KEY not set!", a variável não foi configurada corretamente no Easypanel.

## 📚 Documentação Completa

- **EASYPANEL.md**: Guia detalhado do Easypanel
- **DOCKER.md**: Instruções para Docker local
- **README.md**: Informações gerais do projeto

## 🆘 Problemas?

1. Verifique se a variável `GEMINI_API_KEY` está configurada no Easypanel
2. Veja os logs do container
3. Certifique-se de que o build completou sem erros
4. Teste acessar a URL do domínio
