# Deploy no Easypanel - Guia Completo

## Problema Identificado

O erro "Service is not reachable" ocorre porque:
- A aplicação React/Vite precisa da `GEMINI_API_KEY` em **build time**
- O Easypanel passa variáveis de ambiente em **runtime**
- O build acontece sem a chave, resultando em `undefined` no código

## Solução 1: Configurar Build Args no Easypanel

Se o Easypanel suportar build arguments:

1. Acesse o projeto no Easypanel
2. Vá em **Settings** > **Build**
3. Adicione em **Build Arguments**:
   ```
   GEMINI_API_KEY=sua_chave_da_api_gemini
   ```
4. Salve e faça rebuild

## Solução 2: Commit do .env.local (Temporário)

**⚠️ ATENÇÃO**: Não recomendado para produção por questões de segurança!

1. Edite o `.env.local` com sua chave real:
   ```
   GEMINI_API_KEY=sua_chave_real_aqui
   ```

2. Remova `.env.local` do `.gitignore` temporariamente

3. Commit e push:
   ```bash
   git add .env.local
   git commit -m "Add env for build"
   git push
   ```

4. Após o deploy, **reverta** e adicione a chave nas variáveis de ambiente do Easypanel

## Solução 3: Runtime Injection (Recomendado)

Modifique a aplicação para buscar a chave em runtime via endpoint:

1. Crie um arquivo `public/config.js`:
   ```javascript
   window.ENV = {
     GEMINI_API_KEY: '__GEMINI_API_KEY__'
   };
   ```

2. Adicione no `index.html` antes do script principal:
   ```html
   <script src="/config.js"></script>
   ```

3. Crie um script de entrada que substitui o placeholder:
   ```bash
   #!/bin/sh
   sed -i "s|__GEMINI_API_KEY__|${GEMINI_API_KEY}|g" /app/dist/config.js
   serve -s dist -l 8765
   ```

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
