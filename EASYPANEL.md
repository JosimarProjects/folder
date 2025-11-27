# Deploy no Easypanel - Guia Completo

## ✅ Solução Implementada: Runtime Injection

O projeto agora está configurado para injetar a `GEMINI_API_KEY` em **runtime**, resolvendo o problema do Easypanel.

### Como funciona:

1. **Build**: A aplicação é buildada sem a chave da API
2. **Runtime**: Um script de entrada (`entrypoint.sh`) injeta a chave no arquivo `config.js`
3. **Aplicação**: O código busca a chave de `window.ENV.GEMINI_API_KEY`

## Configuração no Easypanel

### Passo 1: Adicionar Variável de Ambiente

1. Acesse seu projeto no Easypanel
2. Vá em **Settings** > **Environment Variables**
3. Adicione a variável:
   ```
   GEMINI_API_KEY=sua_chave_da_api_gemini_aqui
   ```
4. Salve

### Passo 2: Deploy

1. Faça commit e push das alterações:
   ```bash
   git add .
   git commit -m "Add runtime injection for API key"
   git push origin main
   ```

2. No Easypanel, clique em **Implantar** (Deploy)

3. Aguarde o build completar

### Passo 3: Verificar

Após o deploy, a aplicação deve:
- ✅ Iniciar sem erros
- ✅ Mostrar no log: "Injecting GEMINI_API_KEY into config.js..."
- ✅ Responder na URL do domínio

## Verificação de Logs

Para ver os logs no Easypanel:

1. Acesse o container
2. Veja os logs em tempo real
3. Procure por erros relacionados a:
   - Porta não disponível
   - Variáveis de ambiente undefined
   - Erros de API

## Checklist de Deploy

- [ ] Variável `GEMINI_API_KEY` configurada
- [ ] Build args configurados (se disponível)
- [ ] Porta 8765 exposta corretamente
- [ ] Container iniciando sem erros
- [ ] Health check passando

## Comandos Úteis no Easypanel

```bash
# Ver logs do container
docker logs folder-interativo-viva -f

# Verificar variáveis de ambiente
docker exec folder-interativo-viva env | grep GEMINI

# Testar se a porta está respondendo
docker exec folder-interativo-viva wget -O- http://localhost:8765
```

## Próximos Passos

1. Escolha uma das soluções acima
2. Configure no Easypanel
3. Faça rebuild do container
4. Verifique os logs
5. Teste o acesso via URL do Easypanel
