# EduFlux — Plataforma Educacional (N2-P2)

**Acadêmico:** Vinicius Mesquita Junge  
**Disciplina:** Gerência, Configuração e Processos de Software

Projeto próprio de demonstração **baseado no Domínio 2 da N2-P1: Plataforma educacional**, em substituição ao exemplo OngConecta do professor. Esta implementação simplificada permite demonstrar funcionalidades escolares e aplicar o Plano de Gerência de Configuração de Software (GCS).

## Conteúdo funcional

- Visão geral com indicadores de turmas, alunos, atividades e conclusões.
- Cadastro de alunos em turmas existentes.
- Cadastro de atividades por turma e matéria.
- Registro de conclusão de atividades por aluno com verificação de turma.
- Relatórios de participação por turma.
- Dados fictícios persistidos no armazenamento local do navegador, com opção de restaurar dados de demonstração.

**Limites:** protótipo local, sem autenticação, backend, banco de dados externo, integração com escolas ou tratamento de dados reais. Não substitui requisitos contratuais, aceite da Secretaria, LGPD ou segurança de uma versão de produção.

## Como executar

Como a interface utiliza módulos JavaScript, abra-a por um servidor local (não diretamente com `file://`). No VS Code, use a extensão **Live Server** em `src/index.html`, ou rode `python -m http.server 5500` na raiz e acesse `http://localhost:5500/src/`. Não é necessário instalar dependências do projeto. Para executar os testes automatizados, instale Node.js 20+ e rode:

```bash
npm test
```

## Estrutura

- `src/`: interface HTML/CSS/JS e regras de domínio.
- `tests/`: testes unitários de regras, executados em CI.
- `docs/Plano_GCS.md`: plano de GCS versionado.
- `docs/evidencias/`: orientações para as capturas reais exigidas.
- `.github/workflows/ci.yml`: integração contínua e aprovação demonstrativa dos environments.

## Fluxo de mudança

1. Criar branch `feature/*` ou `fix/*`.
2. Abrir Pull Request para `main`.
3. Solicitar aprovação do par de revisão.
4. Integrar após aprovação e testes.
5. Usar `staging` para validação e `production` com `ViniciusJunge1234` como revisor obrigatório.

As regras de proteção e as permissões são configurações administrativas do GitHub; seus arquivos não as aplicam automaticamente.

## Relação com a N2-P1

A N2-P1 analisou uma EdTech que precisava equilibrar evolução experimental do produto (Scrum), suporte escolar (fluxo contínuo) e entregas contratuais à prefeitura (modelo incremental). Este protótipo escolhe um **recorte demonstrativo** desse domínio: alunos, turmas, atividades e métricas de participação. O Plano de GCS registra a estratégia de branches, baselines, controle de alterações, rastreabilidade e aprovação.
