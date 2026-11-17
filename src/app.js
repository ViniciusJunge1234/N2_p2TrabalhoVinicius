import { cloneDemo, adicionarAluno, adicionarAtividade, registrarConclusao, relatorioTurmas } from './model.js';
const KEY = 'eduflux-n2p2-v1';
function carregar() { try { const dado = JSON.parse(localStorage.getItem(KEY)); if (dado && ['turmas','alunos','atividades','conclusoes'].every(k => Array.isArray(dado[k]))) return dado; } catch {} return cloneDemo(); }
let dados = carregar();
const el = id => document.getElementById(id);
const txt = (tag, value, cls = '') => { const node = document.createElement(tag); node.textContent = String(value); if (cls) node.className = cls; return node; };
function select(id, entries, val, label) { const s = el(id); const previous = s.value; s.replaceChildren(); for (const item of entries) { const o = document.createElement('option'); o.value = item[val]; o.textContent = item[label]; s.appendChild(o); } if (entries.some(x => String(x[val]) === previous)) s.value = previous; }
function render() {
  el('qTurmas').textContent = dados.turmas.length;
  el('qAlunos').textContent = dados.alunos.length;
  el('qAtividades').textContent = dados.atividades.length;
  el('qConclusoes').textContent = dados.conclusoes.length;
  select('turmaAluno', dados.turmas, 'id','nome'); select('turmaAtividade', dados.turmas,'id','nome');
  select('alunoConclusao', dados.alunos,'id','nome'); select('atividadeConclusao', dados.atividades,'id','titulo');
  const list = el('listaTurmas'); list.replaceChildren();
  for (const turma of dados.turmas) { const block=txt('div','','turma'); block.append(txt('h3',turma.nome)); block.append(txt('p',turma.escola,'muted')); const students=dados.alunos.filter(a=>a.turmaId===turma.id); block.append(txt('p',students.length?students.map(a=>a.nome).join(' · '):'Nenhum aluno cadastrado')); list.append(block); }
  const reports=el('relatorios'); reports.replaceChildren();
  for (const r of relatorioTurmas(dados)) { const row=txt('div','','reportrow'); const top=txt('div','','reporttop'); top.append(txt('strong',r.nome)); top.append(txt('span',`${r.percentual}%`)); const progress=txt('div','','progress'); const fill=txt('div','','progressfill'); fill.style.width=`${r.percentual}%`; progress.append(fill); row.append(top,txt('small',`${r.alunos} alunos · ${r.atividades} atividades · ${r.concluidas} conclusões`),progress); reports.append(row); }
}
function salvar(message) { localStorage.setItem(KEY,JSON.stringify(dados)); render(); el('feedback').textContent=message; }
function action(fn) { try { fn(); } catch (e) { el('feedback').textContent=e.message; } }
el('formAluno').addEventListener('submit',e=>{e.preventDefault(); action(()=>{dados=adicionarAluno(dados,el('nomeAluno').value,el('turmaAluno').value); el('nomeAluno').value=''; salvar('Aluno cadastrado com sucesso.');});});
el('formAtividade').addEventListener('submit',e=>{e.preventDefault();action(()=>{dados=adicionarAtividade(dados,el('tituloAtividade').value,el('turmaAtividade').value,el('categoria').value); el('tituloAtividade').value=''; salvar('Atividade cadastrada com sucesso.');});});
el('formConclusao').addEventListener('submit',e=>{e.preventDefault();action(()=>{const antes=dados.conclusoes.length; dados=registrarConclusao(dados,el('alunoConclusao').value,el('atividadeConclusao').value);salvar(dados.conclusoes.length===antes?'Conclusão já registrada.':'Conclusão registrada.');});});
el('reset').addEventListener('click',()=>{dados=cloneDemo(); salvar('Dados de demonstração restaurados.');});
render();
