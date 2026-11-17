/** Regras de domínio, independentes da interface e do armazenamento. */
export const demo = {
  turmas: [{ id: 1, nome: '7º Ano A', escola: 'Escola Municipal Horizonte' }, { id: 2, nome: '8º Ano B', escola: 'Escola Municipal Horizonte' }],
  alunos: [
    { id: 1, nome: 'Ana Souza', turmaId: 1 },
    { id: 2, nome: 'Lucas Pereira', turmaId: 1 },
    { id: 3, nome: 'Marina Lima', turmaId: 2 },
  ],
  atividades: [
    { id: 1, titulo: 'Leitura e interpretação', turmaId: 1, categoria: 'Português' },
    { id: 2, titulo: 'Frações básicas', turmaId: 1, categoria: 'Matemática' },
    { id: 3, titulo: 'Ecossistemas', turmaId: 2, categoria: 'Ciências' },
  ],
  conclusoes: [{ alunoId: 1, atividadeId: 1 }, { alunoId: 2, atividadeId: 1 }],
};
export const cloneDemo = () => structuredClone(demo);
export function validarNome(nome) {
  return typeof nome === 'string' && nome.trim().length >= 2 && nome.trim().length <= 90;
}
export function adicionarAluno(dados, nome, turmaId) {
  if (!validarNome(nome)) throw new Error('Informe um nome válido (2 a 90 caracteres).');
  if (!dados.turmas.some(t => t.id === Number(turmaId))) throw new Error('Turma não encontrada.');
  const id = Math.max(0, ...dados.alunos.map(a => a.id)) + 1;
  return { ...dados, alunos: [...dados.alunos, { id, nome: nome.trim(), turmaId: Number(turmaId) }] };
}
export function adicionarAtividade(dados, titulo, turmaId, categoria) {
  if (!validarNome(titulo)) throw new Error('Informe um título válido (2 a 90 caracteres).');
  if (!dados.turmas.some(t => t.id === Number(turmaId))) throw new Error('Turma não encontrada.');
  const id = Math.max(0, ...dados.atividades.map(a => a.id)) + 1;
  return { ...dados, atividades: [...dados.atividades, { id, titulo: titulo.trim(), turmaId: Number(turmaId), categoria: String(categoria || 'Geral') }] };
}
export function registrarConclusao(dados, alunoId, atividadeId) {
  const aluno = dados.alunos.find(a => a.id === Number(alunoId));
  const atividade = dados.atividades.find(a => a.id === Number(atividadeId));
  if (!aluno || !atividade || aluno.turmaId !== atividade.turmaId) throw new Error('Aluno e atividade devem pertencer à mesma turma.');
  if (dados.conclusoes.some(c => c.alunoId === aluno.id && c.atividadeId === atividade.id)) return dados;
  return { ...dados, conclusoes: [...dados.conclusoes, { alunoId: aluno.id, atividadeId: atividade.id }] };
}
export function relatorioTurmas(dados) {
  return dados.turmas.map(turma => {
    const alunos = dados.alunos.filter(a => a.turmaId === turma.id);
    const atividades = dados.atividades.filter(a => a.turmaId === turma.id);
    const concluidas = dados.conclusoes.filter(c => alunos.some(a => a.id === c.alunoId) && atividades.some(a => a.id === c.atividadeId)).length;
    const possiveis = alunos.length * atividades.length;
    return { ...turma, alunos: alunos.length, atividades: atividades.length, concluidas, percentual: possiveis ? Math.round((concluidas / possiveis) * 100) : 0 };
  });
}
