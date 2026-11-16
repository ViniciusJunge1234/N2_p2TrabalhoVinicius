# OngConecta — N2-P2 de Gerência de Configuração de Software

**Acadêmico:** Vinicius Mesquita Junge  
**Disciplina:** Gerência, Configuração e Processos de Software  
**Repositório:** https://github.com/ViniciusJunge1234/N2_p2TrabalhoVinicius

Projeto acadêmico demonstrativo de uma página da **OngConecta**, acompanhado do plano de Gerência de Configuração de Software (GCS). O principal objetivo desta entrega é demonstrar o processo de controle de configuração no GitHub, não um sistema de produção finalizado.

## Documentação

- [Plano de GCS](docs/Plano_GCS.md)
- [Evidências exigidas](docs/evidencias/README.md)

## Estrutura

- `src/`: interface demonstrativa da OngConecta (HTML, CSS e JavaScript).
- `tests/`: testes simples para a aplicação.
- `.github/workflows/`: workflow de testes e fluxo manual de implantação nos environments `staging` e `production`.
- `docs/`: Plano de GCS e instruções das evidências.

## Execução local

Abra `src/index.html` no navegador. Para executar testes, instale Node.js 20+ e rode:

```bash
npm test
```

## Política proposta de GCS

1. Desenvolver em branches `feature/*` ou `fix/*`.
2. Abrir Pull Request para a `main`.
3. Exigir pelo menos uma revisão antes do merge, conforme regra de proteção configurada no GitHub.
4. Usar `staging` para verificação e `production` com revisão obrigatória pelo usuário `ViniciusJunge1234`.
5. Registrar capturas reais das configurações e da recusa de push direto em `docs/evidencias/`.

**Atenção:** os arquivos deste repositório **não ativam sozinhos** a proteção da `main`, o convite do colega ou as regras dos environments. São configurações administrativas feitas em **Settings** no GitHub e exigem comprovação separada.
