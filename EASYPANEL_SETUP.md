# 🔧 Configuração da Variável de Ambiente no Easypanel

## ⚠️ PROBLEMA ATUAL

O log mostra: `The "GEMINI_API_KEY" variable is not set. Defaulting to a blank string.`

Isso significa que a variável de ambiente **NÃO está configurada** no Easypanel.

## ✅ SOLUÇÃO: Passo a Passo

### 1. Acesse as Configurações do Serviço

No painel do Easypanel:
1. Clique no seu projeto **gptultraplus / folder**
2. Vá até a aba **"Configurações"** ou **"Settings"**

### 2. Adicione a Variável de Ambiente

Procure pela seção **"Environment Variables"** ou **"Variáveis de Ambiente"**

Adicione uma nova variável:
- **Nome/Key**: `GEMINI_API_KEY`
- **Valor/Value**: Sua chave da API Gemini (exemplo: `AIzaSy...`)

### 3. Salve e Faça Rebuild

1. Clique em **"Salvar"** ou **"Save"**
2. Clique em **"Implantar"** ou **"Deploy"** novamente
3. Aguarde o build completar

### 4. Verifique os Logs

Após o deploy, verifique os logs do container. Você deve ver:

```
Injecting GEMINI_API_KEY into config.js...
Starting server on port 8765...
```

Se ainda aparecer "WARNING: GEMINI_API_KEY not set!", a variável não foi configurada corretamente.

## 🔍 Como Obter a Chave da API Gemini

Se você ainda não tem a chave:

1. Acesse: https://aistudio.google.com/app/apikey
2. Faça login com sua conta Google
3. Clique em **"Create API Key"**
4. Copie a chave gerada
5. Cole no Easypanel

## 📸 Onde Encontrar no Easypanel

Baseado nas suas imagens, você deve:

1. Clicar no serviço **folder-interativo-viva**
2. Procurar por uma aba chamada:
   - **"Environment"**
   - **"Variables"**
   - **"Config"**
   - **"Settings"**

3. Adicionar a variável lá

## 🆘 Se Não Encontrar a Opção

Se você não encontrar onde adicionar variáveis de ambiente no Easypanel:

1. Verifique a documentação do Easypanel
2. Ou tente adicionar diretamente no `docker-compose.yml` commitando a chave (não recomendado)
3. Ou entre em contato com o suporte do Easypanel

## ⚡ Teste Rápido

Após configurar, teste acessando:
https://gptultraplus-folder.dhqcua.easypanel.host/

A página deve carregar corretamente sem o erro "Service is not reachable".
