import test from 'node:test';
import assert from 'node:assert/strict';
import { cloneDemo, validarNome, adicionarAluno, adicionarAtividade, registrarConclusao, relatorioTurmas } from '../src/model.js';

test('dados demo preservam duas turmas', () => { assert.equal(cloneDemo().turmas.length, 2); });
test('validacao rejeita nome vazio', () => { assert.equal(validarNome(' '), false); });
test('cadastra aluno na turma existente', () => { const d = adicionarAluno(cloneDemo(), 'Beatriz Costa', 1); assert.equal(d.alunos.at(-1).nome, 'Beatriz Costa'); });
test('rejeita matricula em turma inexistente', () => { assert.throws(() => adicionarAluno(cloneDemo(), 'Beatriz', 999), /Turma/); });
test('cadastra atividade', () => { const d = adicionarAtividade(cloneDemo(), 'Geometria', 1, 'Matemática'); assert.equal(d.atividades.at(-1).categoria, 'Matemática'); });
test('impede conclusao em turma diferente', () => { assert.throws(() => registrarConclusao(cloneDemo(), 3, 1), /mesma turma/); });
test('conclusao duplicada nao altera registros', () => { const d=cloneDemo(); assert.equal(registrarConclusao(d,1,1).conclusoes.length,d.conclusoes.length); });
test('calcula percentual de conclusoes da turma', () => { const r=relatorioTurmas(cloneDemo()); assert.equal(r.find(t=>t.id===1).percentual, 50); });
