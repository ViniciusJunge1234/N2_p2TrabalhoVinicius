# Plano de Gerência de Configuração de Software — OngConecta

**Acadêmico:** Vinicius Mesquita Junge  
**Versão:** 1.0  
**Disciplina:** Gerência, Configuração e Processos de Software  
**Escopo:** Atividade individual N2-P2

## 1. Objetivo

Definir procedimentos para identificação, armazenamento, versionamento, alteração, revisão, rastreabilidade e auditoria dos itens de configuração do projeto demonstrativo OngConecta. O processo adota o Git para histórico de alterações e o GitHub para revisão, permissões e ambientes.

## 2. Identificação dos itens de configuração

| Item | Localização | Controle |
| --- | --- | --- |
| Código-fonte | `src/` | Commits, branches e Pull Requests |
| Testes | `tests/` | Histórico Git e CI |
| Plano de GCS | `docs/Plano_GCS.md` | Versionamento e revisão |
| Documentação | `README.md`, `docs/` | Histórico Git |
| Workflows | `.github/workflows/` | Versionamento e revisão |
| Baselines | Tags `vMAJOR.MINOR.PATCH` | Referência imutável a commits |

## 3. Papéis e responsabilidades

- **Responsável pelo projeto:** Vinicius Mesquita Junge (`ViniciusJunge1234`), responsável pela documentação, controle do repositório e revisão de implantações em `production`.
- **Par de revisão:** colega convidado para colaborar com acesso de escrita, que revisará e aprovará Pull Requests; o nome será registrado quando o convite for aceito.
- **Professor:** avaliador com acesso de leitura ao repositório público e às evidências.

## 4. Estratégia de branches

- `main`: branch estável, protegida contra atualizações diretas.
- `feature/<assunto>`: alterações planejadas e novas funcionalidades.
- `fix/<assunto>`: correções.

Cada mudança deverá conter uma descrição clara, um commit rastreável e, para integração na `main`, um Pull Request revisado.

## 5. Controle de mudanças

1. Registrar finalidade e impacto da alteração em issue ou descrição do Pull Request.
2. Criar branch de trabalho a partir da `main`.
3. Modificar e testar os arquivos necessários.
4. Abrir Pull Request para `main` e solicitar avaliação ao colega com acesso de escrita.
5. Obter a aprovação exigida e corrigir pendências.
6. Efetuar merge e associar a alteração à entrega ou tag correspondente.

## 6. Regras de proteção de `main`

O repositório deverá configurar uma regra de proteção com:

- Pull Request obrigatório antes de merge.
- Ao menos uma aprovação de revisão.
- Bloqueio de bypass da proteção por administradores, quando disponível.
- Bloqueio de force push e exclusão da branch principal.

**Verificação:** executar uma tentativa real de `git push origin main` com novo commit e registrar a mensagem de rejeição. O arquivo e a evidência serão mantidos em `docs/evidencias/`. Não é suficiente simular a saída do terminal.

## 7. Environments

| Environment | Objetivo | Aprovação |
| --- | --- | --- |
| `staging` | Homologação e verificação antes da produção | Sem revisor obrigatório nesta versão do plano |
| `production` | Publicação controlada | `ViniciusJunge1234` como revisor obrigatório |

No GitHub, a regra **Required reviewers** de `production` deverá selecionar `ViniciusJunge1234`. Se a intenção for que Vinicius aprove suas próprias execuções, manter **Prevent self-review** desativado. A proteção só se aplica aos jobs que referenciem efetivamente o environment, como o workflow deste projeto.

## 8. Verificação, auditoria e rastreabilidade

- Os testes serão executados localmente e pelo GitHub Actions, quando habilitado.
- Commits, branches, Pull Requests e revisões serão registros de auditoria.
- As evidências administrativas serão capturas reais identificadas em `docs/evidencias/`.
- Baselines de entrega poderão ser marcadas com tags semânticas, por exemplo `v1.0.0`.

## 9. Critérios de conclusão da N2-P2

- [x] Plano de GCS disponível como arquivo de configuração.
- [ ] Repositório publicado e acessível ao professor.
- [ ] Proteção de `main` configurada e comprovada.
- [ ] Push direto rejeitado e captura incluída.
- [ ] Colega com convite aceito e acesso de escrita.
- [ ] Environment `staging` criado.
- [ ] Environment `production` criado com `ViniciusJunge1234` como revisor obrigatório.

As caixas são um checklist de validação; a existência deste arquivo não comprova controles administrativos configurados no GitHub.
