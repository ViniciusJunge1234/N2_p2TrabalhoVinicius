# Plano de Gerência de Configuração de Software — EduFlux

**Responsável:** Vinicius Mesquita Junge  
**Disciplina:** Gerência, Configuração e Processos de Software  
**Atividade:** N2-P2  
**Versão:** 1.0

## 1. Objetivo e contexto

Controlar a identificação, evolução, revisão, aprovação e rastreabilidade dos artefatos da plataforma educacional EduFlux. O projeto toma como referência o **Domínio 2 — Plataforma educacional** da N2-P1: a análise propôs Scrum para experimentos, fluxo contínuo para chamados das escolas e modelo Incremental para entregas contratuais à prefeitura.

A aplicação implementada nesta entrega é um **protótipo acadêmico**, não um sistema homologado nem conectado a escolas. As práticas descritas abaixo definem um processo de GCS que pode ser demonstrado no GitHub.

## 2. Itens de configuração

| IC | Localização | Controle |
| --- | --- | --- |
| Interface educacional e regras | `src/` | Git e Pull Requests |
| Testes unitários | `tests/` | Git e execução pela CI |
| Documentação | `README.md`, `docs/` | Git e revisão |
| Plano GCS | `docs/Plano_GCS.md` | Git e revisão |
| Workflow de CI/ambientes | `.github/workflows/ci.yml` | Git e revisão |
| Baselines | Tags `vMAJOR.MINOR.PATCH` | Referência a commits aprovados |

## 3. Estratégia de branches

- `main`: branch principal, protegida contra push direto.
- `feature/*`: desenvolvimento de novas funcionalidades ou documentação.
- `fix/*`: correções de defeitos.

Commits devem ter descrição objetiva e identificável. Mudanças destinadas à `main` devem entrar por Pull Request com revisão aprovada.

## 4. Papéis e responsabilidades

- **ViniciusJunge1234:** proprietário do repositório; mantém o plano, as regras de proteção e aprova execuções do environment `production`.
- **Par de revisão:** colega convidado com acesso de escrita, que verifica os Pull Requests e registra aprovação ou solicitação de ajustes.
- **Professor:** avaliador com acesso de leitura ao repositório e às evidências reais.

O acesso do revisor deve ser confirmado depois que o convite for aceito.

## 5. Fluxo de solicitação e aprovação de mudanças

1. Registrar objetivo, impacto e critérios de verificação em issue ou Pull Request.
2. Criar uma branch a partir da versão atual de `main`.
3. Implementar a mudança e executar `npm test`.
4. Abrir Pull Request direcionado a `main`.
5. Solicitar revisão de colega com permissão de escrita.
6. Corrigir observações e obter aprovação, respeitando as regras da branch.
7. Fazer merge; quando relevante, registrar a entrega como baseline/tag.

## 6. Baselines, rastreabilidade e auditoria

Uma baseline corresponde a um estado identificado e aprovado do código, documentos, testes e configurações. Releases podem ser marcadas com tags, por exemplo `v1.0.0`. A rastreabilidade usa issues, commits, Pull Requests, revisões, testes e tags. Nenhuma tag é declarada criada neste documento sem registro correspondente no GitHub.

## 7. Política de proteção de `main`

A branch principal deve exigir Pull Request, ao menos uma aprovação e ausência de bypass administrativo, conforme os recursos disponibilizados pela plataforma. Force pushes e exclusão devem permanecer bloqueados.

**Evidência de funcionamento:** captura real de um `git push origin main` recusado com mensagem `GH006` ou equivalente. A comprovação não deve ser simulada. A proteção existente deve ser mantida quando o conteúdo do projeto for substituído.

## 8. Environments

| Ambiente | Propósito | Condição |
| --- | --- | --- |
| `staging` | Validação anterior à publicação | Execução de testes e verificação da alteração |
| `production` | Aprovação controlada de release | `ViniciusJunge1234` configurado como revisor obrigatório |

O workflow de GitHub Actions referencia os dois environments e permite execução manual, mas **não publica em hospedagem externa**. A regra de revisão deve existir no GitHub para produzir a aprovação obrigatória; somente o arquivo YAML não a cria.

## 9. Processo de desenvolvimento previsto na N2-P1

No cenário completo da EdTech, Scrum apoiaria melhorias experimentais, fluxo contínuo trataria chamados imprevisíveis, e o modelo Incremental seria aplicado às entregas formais da prefeitura. A N2-P1 previa importação de alunos e turmas, registro de uso integrado ao diário e relatórios por escola/aluno. Neste protótipo, há cadastros locais e relatório simples; **não foram implementados integração com diário de classe, operação contratual ou aceite formal**.

## 10. Qualidade e critérios de conclusão

- Executar testes automatizados e documentar falhas.
- Verificar revisão e proteção da `main`.
- Comprovar acesso de escrita do colaborador.
- Conferir `staging` e `production` e a aprovação obrigatória em produção.
- Preservar evidências reais e o link público do repositório.

O documento especifica controles; a presença do plano não garante que todas as regras administrativas estejam habilitadas.
