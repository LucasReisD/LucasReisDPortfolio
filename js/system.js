"use strict";

const GITHUB = "https://github.com/LucasReisD";
const EMAIL = "lucassampaio360x@gmail.com";
const previewData = {
    jarvis: `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>J.A.R.V.I.S</title>
  <style>
    :root {
      --bg: #061418;
      --panel: rgba(9, 19, 25, 0.9);
      --line: rgba(119, 181, 205, 0.25);
      --text: #eaf9ff;
      --muted: #8ea8b3;
      --green: #4de2af;
      --cyan: #4eb7ff;
      --amber: #f0b95d;
      --red: #ff6b7f;
    }
    * { box-sizing: border-box; }
    html, body { margin: 0; min-height: 100%; }
    body {
      display: grid;
      place-items: center;
      background: linear-gradient(180deg, #020d12 0%, #081a22 100%);
      color: var(--text);
      font-family: "Segoe UI", Tahoma, sans-serif;
    }
    .frame {
      width: min(100%, 900px);
      min-height: 100vh;
      padding: 22px 22px 18px;
      background: linear-gradient(180deg, rgba(5, 20, 28, 0.96), rgba(4, 12, 16, 0.96));
      box-shadow: inset 0 0 0 1px rgba(113, 181, 202, 0.12);
      border: 1px solid rgba(113, 181, 202, 0.18);
    }
    .topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 14px 14px;
      border-bottom: 1px solid var(--line);
      letter-spacing: 0.22em;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 700;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 30px;
      letter-spacing: 0.08em;
      font-weight: 800;
    }
    .brand-mark {
      display: inline-flex;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #54dd9c;
      box-shadow: 0 0 12px rgba(84, 221, 156, 0.8);
    }
    .status {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--muted);
      font-size: 11px;
      letter-spacing: 0.18em;
    }
    .status-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #52e5a3;
      box-shadow: 0 0 8px rgba(82, 229, 163, 0.9);
    }
    .hero {
      margin-top: 18px;
      padding: 0 12px 6px;
      display: grid;
      grid-template-columns: 1.6fr 0.8fr;
      gap: 18px;
      align-items: end;
    }
    .hero-copy {
      background: rgba(14, 31, 36, 0.76);
      border: 1px solid var(--line);
      border-radius: 12px;
      padding: 18px 18px 14px;
    }
    .eyebrow {
      color: #8ab9d4;
      font-size: 12px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-weight: 700;
    }
    .title {
      margin: 12px 0 4px;
      font-size: clamp(26px, 4vw, 44px);
      line-height: 1;
      font-weight: 800;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #dff8ff;
    }
    .sub { color: var(--muted); font-size: 14px; }
    .mini-card {
      display: grid;
      gap: 8px;
      background: rgba(14, 31, 36, 0.76);
      border: 1px solid var(--line);
      border-radius: 12px;
      padding: 18px 16px 14px;
    }
    .mini-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.18em;
      font-size: 10px;
    }
    .mini-code {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 54px;
      height: 54px;
      border-radius: 12px;
      background: rgba(20, 37, 44, 0.7);
      color: #dff8ff;
      border: 1px solid var(--line);
      font-size: 26px;
      font-weight: 800;
      margin-left: auto;
    }
    .toolbar {
      display: grid;
      grid-template-columns: 1fr 120px 1fr 1fr;
      gap: 14px;
      align-items: center;
      padding: 10px 12px;
      border: 1px solid var(--line);
      border-radius: 12px;
      background: rgba(13, 27, 31, 0.9);
      color: var(--muted);
      font-size: 12px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-top: 18px;
    }
    .toolbar .task {
      display: flex; align-items: center; gap: 8px; color: var(--text); font-weight: 700; letter-spacing: 0.04em; text-transform: none;
    }
    .toolbar .task::before {
      content: ""; width: 10px; height: 10px; border-radius: 50%; background: rgba(78, 183, 255, 0.7); box-shadow: 0 0 10px rgba(78, 183, 255, 0.7);
    }
    .stats { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; margin-top: 18px; }
    .stat { min-height: 100px; display: flex; flex-direction: column; justify-content: center; padding: 18px 18px 14px; border: 1px solid var(--line); border-radius: 12px; background: rgba(15, 29, 34, 0.78); }
    .stat strong { font-size: clamp(28px, 3vw, 52px); line-height: 1; letter-spacing: -0.04em; }
    .stat span { margin-top: 8px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.14em; font-size: 11px; }
    .stat[data-tone="green"] { border-top: 3px solid var(--green); }
    .stat[data-tone="cyan"] { border-top: 3px solid var(--cyan); }
    .stat[data-tone="amber"] { border-top: 3px solid var(--amber); }
    .stat[data-tone="red"] { border-top: 3px solid var(--red); }
    .grid { display: grid; grid-template-columns: 1.5fr 0.9fr; gap: 14px; margin-top: 18px; }
    .panel { border: 1px solid var(--line); border-radius: 12px; background: rgba(11, 24, 28, 0.9); overflow: hidden; }
    .panel-header { display: flex; align-items: center; justify-content: space-between; padding: 14px 16px; border-bottom: 1px solid var(--line); color: var(--muted); text-transform: uppercase; font-size: 11px; letter-spacing: 0.18em; font-weight: 700; }
    .list { padding: 12px 0; }
    .row { display: grid; grid-template-columns: 1fr auto auto; gap: 10px; align-items: center; padding: 13px 16px; border-top: 1px solid rgba(119, 181, 205, 0.08); color: var(--text); font-size: 14px; }
    .pill { display: inline-flex; align-items: center; justify-content: center; min-width: 66px; padding: 5px 10px; border: 1px solid rgba(255,255,255,0.08); border-radius: 999px; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; background: rgba(255,255,255,0.02); }
    .pill.green { color: var(--green); }
    .pill.blue { color: var(--cyan); }
    .pill.red { color: var(--red); }
    .pill.amber { color: var(--amber); }
    .donut { display: grid; place-items: center; min-height: 210px; padding: 18px; position: relative; }
    .ring { width: 132px; height: 132px; border-radius: 50%; background: conic-gradient(var(--green) 0 56%, var(--cyan) 56% 78%, var(--amber) 78% 90%, var(--red) 90% 100%); position: relative; }
    .ring::before { content: ""; position: absolute; inset: 18px; border-radius: 50%; background: rgba(7, 17, 22, 0.96); border: 1px solid rgba(119,181,205,0.12); }
    .ring-value { position: absolute; font-size: 32px; font-weight: 800; letter-spacing: -0.04em; }
    .legend { display: grid; gap: 8px; padding: 0 16px 16px; color: var(--muted); font-size: 12px; }
    .legend-item { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
    .left { display: flex; align-items: center; gap: 8px; }
    .swatch { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
    @media (max-width: 760px) { .hero { grid-template-columns: 1fr; } .stats { grid-template-columns: repeat(2, minmax(0, 1fr)); } .grid { grid-template-columns: 1fr; } .toolbar { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  </style>
</head>
<body>
  <div class="frame">
    <div class="topbar">
      <div class="brand"><span>J.A.R.V.I.S</span></div>
      <div class="status"><span class="status-dot"></span><span>Ativo</span></div>
    </div>

    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow">Central de comando</div>
        <h1 class="title">Boa tarde.</h1>
        <div class="sub">Seus dados ficam neste dispositivo.</div>
      </div>
      <div class="mini-card">
        <div class="mini-head"><span>Qui, 08 de Out.</span><span>J</span></div>
        <div class="mini-code">J</div>
      </div>
    </section>

    <div class="toolbar">
      <div class="task">Tarefa</div>
      <div>Sem tarefas</div>
      <div>Hoje</div>
      <div>+ Novo</div>
    </div>

    <div class="stats">
      <div class="stat" data-tone="green"><strong>26</strong><span>Produção</span></div>
      <div class="stat" data-tone="cyan"><strong>5</strong><span>Manutenção</span></div>
      <div class="stat" data-tone="amber"><strong>2</strong><span>Backup</span></div>
      <div class="stat" data-tone="red"><strong>2</strong><span>Desativado</span></div>
    </div>

    <div class="grid">
      <div class="panel">
        <div class="panel-header"><span>Monitoramento</span><span>Locais</span></div>
        <div class="list">
          <div class="row"><span>ITUPEVA</span><span class="pill green">5</span><span>Produção</span></div>
          <div class="row"><span>MEC/BRASILIA</span><span class="pill blue">8</span><span>Manutenção</span></div>
          <div class="row"><span>SEDE</span><span class="pill amber">4</span><span>Backup</span></div>
          <div class="row"><span>CONAB/BRASILIA</span><span class="pill red">2</span><span>Desativado</span></div>
        </div>
      </div>

      <div class="panel">
        <div class="donut">
          <div class="ring"></div>
          <div class="ring-value">36</div>
        </div>
        <div class="legend">
          <div class="legend-item"><span class="left"><span class="swatch" style="background: var(--green);"></span>Produção</span><span>26</span></div>
          <div class="legend-item"><span class="left"><span class="swatch" style="background: var(--cyan);"></span>Manutenção</span><span>5</span></div>
          <div class="legend-item"><span class="left"><span class="swatch" style="background: var(--amber);"></span>Backup</span><span>2</span></div>
          <div class="legend-item"><span class="left"><span class="swatch" style="background: var(--red);"></span>Desativado</span><span>3</span></div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    scanner: `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Scanner Control</title>
  <style>
    :root {
      --bg: #eef1f3;
      --panel: #f7f8f8;
      --sidebar: #f4a33a;
      --sidebar-text: #fff8ef;
      --text: #1f2933;
      --muted: #6b7280;
      --line: #dfe5ea;
      --green: #39b979;
      --blue: #2e8bff;
      --orange: #f39a3d;
      --red: #ea5b52;
    }
    * { box-sizing: border-box; }
    html, body { margin: 0; min-height: 100%; }
    body {
      font-family: "Segoe UI", Tahoma, sans-serif;
      background: var(--bg);
      color: var(--text);
    }
    .layout { display: grid; grid-template-columns: 220px minmax(0, 1fr); min-height: 100vh; }
    .sidebar { background: linear-gradient(180deg, #f5a43a 0%, #e88b1c 100%); color: var(--sidebar-text); display: flex; flex-direction: column; padding: 12px 10px 18px; }
    .brand { display: flex; align-items: center; gap: 10px; padding: 10px 8px 14px; border-bottom: 1px solid rgba(255,255,255,0.22); font-weight: 700; font-size: 13px; }
    .brand-mark { display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 5px; background: rgba(255,255,255,0.24); font-size: 10px; }
    .menu { margin-top: 12px; display: grid; gap: 6px; }
    .menu-item { display: flex; align-items: center; gap: 12px; padding: 11px 12px; border-radius: 8px; color: rgba(255,255,255,0.98); font-size: 15px; font-weight: 600; text-decoration: none; }
    .menu-item.active { background: rgba(255,255,255,0.16); }
    .menu-item .icon { width: 18px; text-align: center; opacity: 0.9; }
    .topbar { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 18px 10px; border-bottom: 1px solid var(--line); background: rgba(255,255,255,0.34); }
    .title { color: var(--text); text-transform: uppercase; letter-spacing: 0.2em; font-weight: 700; font-size: 12px; }
    .search { flex: 1; max-width: 420px; margin-left: auto; display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.7); border: 1px solid var(--line); border-radius: 8px; padding: 8px 10px; color: var(--muted); font-size: 12px; }
    .avatar { display: flex; align-items: center; gap: 8px; padding-left: 12px; border-left: 1px solid var(--line); color: var(--text); font-size: 12px; font-weight: 600; }
    .avatar-badge { width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #f5b55d, #ef7d34); color: white; display: grid; place-items: center; font-size: 12px; font-weight: 800; }
    .stats { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 14px; padding: 18px 18px 0; }
    .stat { background: rgba(255,255,255,0.58); border: 1px solid var(--line); border-radius: 10px; padding: 18px 18px 16px; min-height: 100px; display: flex; flex-direction: column; justify-content: center; }
    .stat strong { font-size: 34px; line-height: 1; margin: 0 0 6px; letter-spacing: -0.05em; }
    .stat span { color: var(--muted); text-transform: capitalize; font-size: 12px; }
    .stat[data-tone="green"] { border-top: 4px solid var(--green); }
    .stat[data-tone="blue"] { border-top: 4px solid var(--blue); }
    .stat[data-tone="orange"] { border-top: 4px solid var(--orange); }
    .stat[data-tone="red"] { border-top: 4px solid var(--red); }
    .content { display: grid; grid-template-columns: minmax(0, 1.6fr) 280px; gap: 18px; padding: 18px; }
    .panel { background: rgba(255,255,255,0.58); border: 1px solid var(--line); border-radius: 12px; overflow: hidden; }
    .panel-head { display: flex; justify-content: space-between; align-items: center; padding: 14px 16px; border-bottom: 1px solid var(--line); color: var(--muted); text-transform: uppercase; letter-spacing: 0.18em; font-size: 11px; font-weight: 700; }
    .chips { display: flex; gap: 10px; flex-wrap: wrap; padding: 14px 16px 8px; }
    .chip { display: inline-flex; padding: 5px 9px; border-radius: 999px; color: var(--text); font-size: 11px; border: 1px solid rgba(15,23,42,0.08); background: rgba(255,255,255,0.4); }
    .chip.green { color: var(--green); }
    .chip.blue { color: var(--blue); }
    .chip.orange { color: var(--orange); }
    .chip.red { color: var(--red); }
    .list { display: grid; gap: 10px; padding: 10px 16px 16px; }
    .row { display: grid; grid-template-columns: 1fr auto auto; gap: 8px; align-items: center; padding: 12px 12px; border: 1px solid var(--line); border-radius: 10px; background: rgba(255,255,255,0.28); font-size: 14px; }
    .row .name { font-weight: 700; color: #24313e; }
    .row .pill { display: inline-flex; align-items: center; justify-content: center; min-width: 82px; padding: 7px 10px; border-radius: 999px; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; border: 1px solid rgba(15,23,42,0.08); }
    .pill.green { background: rgba(57,185,121,0.12); color: var(--green); }
    .pill.blue { background: rgba(46,139,255,0.12); color: var(--blue); }
    .pill.red { background: rgba(234,91,82,0.12); color: var(--red); }
    .pill.orange { background: rgba(243,154,61,0.12); color: var(--orange); }
    .side { display: grid; gap: 14px; }
    .donut-wrap { display: grid; place-items: center; min-height: 200px; padding-top: 18px; }
    .donut { width: 150px; height: 150px; border-radius: 50%; position: relative; background: conic-gradient(var(--green) 0 66%, var(--blue) 66% 86%, var(--orange) 86% 95%, var(--red) 95% 100%); }
    .donut::before { content: ""; position: absolute; inset: 20px; background: rgba(247,248,248,0.98); border-radius: 50%; border: 1px solid rgba(15,23,42,0.06); }
    .donut-value { position: absolute; inset: 0; display: grid; place-items: center; font-size: 36px; font-weight: 800; letter-spacing: -0.06em; }
    .legend { display: grid; gap: 9px; padding: 0 16px 16px; color: var(--muted); font-size: 12px; }
    .legend-item { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
    .left { display: flex; align-items: center; gap: 8px; }
    .swatch { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
    @media (max-width: 900px) { .layout { grid-template-columns: 1fr; } .menu { grid-template-columns: repeat(2, minmax(0, 1fr)); } .stats, .content { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <div class="layout">
    <aside class="sidebar">
      <div class="brand"><span class="brand-mark">F</span><span>FábricaInfo</span></div>
      <nav class="menu">
        <a class="menu-item active" href="#"><span class="icon">◫</span><span>Dashboard</span></a>
        <a class="menu-item" href="#"><span class="icon">◧</span><span>Scanners</span></a>
        <a class="menu-item" href="#"><span class="icon">✓</span><span>Produção</span></a>
        <a class="menu-item" href="#"><span class="icon">✦</span><span>Manutenção</span></a>
        <a class="menu-item" href="#"><span class="icon">◌</span><span>Backup</span></a>
      </nav>
    </aside>

    <main>
      <div class="topbar">
        <div class="title">Scanner Control</div>
        <div class="search">Buscar por patrimônio, serial, setor...</div>
        <div class="avatar"><span class="avatar-badge">M</span><span>Marcos</span></div>
      </div>

      <section class="stats">
        <div class="stat" data-tone="green"><strong>26</strong><span>Produção</span></div>
        <div class="stat" data-tone="blue"><strong>5</strong><span>Manutenção</span></div>
        <div class="stat" data-tone="orange"><strong>2</strong><span>Backup</span></div>
        <div class="stat" data-tone="red"><strong>2</strong><span>Desativado</span></div>
      </section>

      <section class="content">
        <div class="panel">
          <div class="panel-head"><span>Monitoramento</span><span>Locais</span></div>
          <div class="chips">
            <span class="chip green">5 Produção</span>
            <span class="chip blue">2 Backup</span>
            <span class="chip orange">1 Em trânsito</span>
            <span class="chip red">2 Desativado</span>
          </div>
          <div class="list">
            <div class="row"><span class="name">ITUPEVA</span><span class="pill green">5 Produção</span><span>9 scanners</span></div>
            <div class="row"><span class="name">MEC/BRASILIA</span><span class="pill blue">8 scanners</span><span>8 scanners</span></div>
            <div class="row"><span class="name">SEDE</span><span class="pill orange">4 scanners</span><span>4 scanners</span></div>
            <div class="row"><span class="name">CONAB/BRASILIA</span><span class="pill green">2 scanners</span><span>2 scanners</span></div>
          </div>
        </div>

        <aside class="side">
          <div class="panel donut-wrap">
            <div class="donut"><div class="donut-value">36</div></div>
          </div>
          <div class="legend">
            <div class="legend-item"><span class="left"><span class="swatch" style="background: var(--green);"></span>Produção</span><span>26</span></div>
            <div class="legend-item"><span class="left"><span class="swatch" style="background: var(--blue);"></span>Manutenção</span><span>5</span></div>
            <div class="legend-item"><span class="left"><span class="swatch" style="background: var(--orange);"></span>Backup</span><span>2</span></div>
            <div class="legend-item"><span class="left"><span class="swatch" style="background: var(--red);"></span>Desativado</span><span>3</span></div>
          </div>
        </aside>
      </section>
    </main>
  </div>
</body>
</html>`,
};
const projects = [
    { id: "assetflow", name: "AssetFlow", category: "it", categoryLabel: "SUPORTE / SISTEMAS", status: "DEMO PÚBLICA", description: "Fluxo web para registrar, atribuir e acompanhar equipamentos de TI.", technologies: ["HTML", "CSS", "JavaScript", "localStorage"], featured: true, repository: `${GITHUB}/AssetFlow`, demo: "https://lucasreisd.github.io/AssetFlow/", caseStudy: { objective: "Organizar o cadastro inicial e a atribuição de equipamentos em equipes de suporte técnico.", problem: "O projeto descreve a necessidade de registrar informações e acompanhar ativos de TI em um fluxo único.", solution: "Uma aplicação web de gestão de ativos com cadastro, filtros, manutenção, relatórios e ações sobre os registros.", architecture: "HTML, CSS e JavaScript sem framework. Os registros são mantidos no navegador; o código implementa persistência local e exportação CSV e JSON.", features: ["Cadastro, edição e remoção de ativos", "Busca por identificador, série, fabricante, modelo, local ou responsável", "Checklist de inspeção por tipo de equipamento", "Visões de manutenção e distribuição por status", "Exportação de dados em CSV e JSON"], technicalNote: "O checklist e o histórico acompanham cada registro, conectando a entrada do ativo à conferência técnica." } },
    { id: "nutrystudy", name: "NutryStudy", category: "studies", categoryLabel: "ESTUDOS / APLICAÇÃO WEB", status: "DEMO PÚBLICA", description: "Aplicação de organização de estudos com agenda de revisões e acompanhamento da rotina.", technologies: ["React", "TypeScript", "localStorage"], featured: true, repository: `${GITHUB}/NutryStudy`, demo: "https://lvnutrystudy.vercel.app/", caseStudy: { objective: "Ajudar estudantes a organizar conteúdos e acompanhar o ciclo de revisão.", problem: "A descrição do projeto parte de uma rotina de estudo dispersa entre anotações e lembretes.", solution: "Uma aplicação com estudos, revisões programadas, calendário, dashboard e histórico de conteúdos concluídos.", architecture: "A aplicação atual usa React e TypeScript. O código salva estudos e preferências no navegador e oferece importação e exportação de backup.", features: ["Revisões programadas para 24 horas, 7 dias e 30 dias", "Dashboard, calendário e histórico", "Busca e filtros por matéria", "Notas, exercícios e planejamento semanal", "Importação e exportação de backup local"], technicalNote: "A aplicação não depende de uma conta ou de um backend para guardar os dados do usuário neste dispositivo." } },
    { id: "curriculo-facil", name: "Currículo Fácil", category: "development", categoryLabel: "DESENVOLVIMENTO / WEB", status: "DEMO PÚBLICA", description: "Editor em etapas para montar um currículo com prévia ao vivo e saída pronta para impressão em PDF.", technologies: ["HTML", "CSS", "JavaScript", "localStorage"], featured: false, repository: `${GITHUB}/EasyCv`, demo: "https://curriculo-facil.netlify.app/", caseStudy: { objective: "Facilitar a criação de um currículo, inclusive para quem está começando e usa o celular.", problem: "O README apresenta a atividade de extensão e a dificuldade de organizar um currículo como motivação do projeto.", solution: "Um editor guiado que reúne perfil, objetivo, formação, experiência e habilidades com uma prévia atualizada durante o preenchimento.", architecture: "HTML, CSS e JavaScript. O projeto mantém os dados do formulário no navegador e usa a impressão do browser para gerar o PDF.", features: ["Formulário dividido em etapas", "Prévia atualizada conforme os campos mudam", "Campos de formação, experiências e habilidades", "Salvamento local das informações", "Geração do arquivo por impressão para PDF"], technicalNote: "O código inclui layout de impressão e uma prévia de currículo A4." } },
    { id: "dev-tools", name: "DevTools", category: "development", categoryLabel: "DESENVOLVIMENTO / FERRAMENTAS", status: "DEMO PÚBLICA", description: "Coleção de utilitários para gerar e formatar dados diretamente no navegador.", technologies: ["HTML", "CSS", "JavaScript", "Web Crypto"], featured: false, repository: `${GITHUB}/Dev-tools`, demo: "https://lucasreisd.github.io/Dev-tools/", caseStudy: { objective: "Reunir ferramentas pequenas para tarefas repetitivas de desenvolvimento, suporte e testes.", problem: "A documentação propõe reduzir a troca entre utilitários isolados para tarefas rápidas.", solution: "Uma suíte web local-first com ferramentas selecionáveis e uma área de trabalho compartilhada.", architecture: "HTML, CSS e JavaScript sem framework. O repositório publica o projeto no GitHub Pages.", features: ["Formatador e conversor de JSON", "Geradores de UUID, hash e strings", "Gerador de dados de teste", "Gerador de senhas com Web Crypto", "Uso no navegador sem instalação"], technicalNote: "A interface informa que os valores são processados no navegador, sem envio para um servidor." } },
    { id: "chrome-jarvis", name: "Chrome-Jarvis", category: "experiments", categoryLabel: "EXPERIMENTOS / NAVEGADOR", status: "EM DESENVOLVIMENTO", description: "Painel local com tarefas, notas, links favoritos e utilitários de dados.", technologies: ["JavaScript", "HTML", "CSS", "Chrome API"], featured: false, repository: `${GITHUB}/Chrome-Jarvis`, demo: previewData.jarvis, caseStudy: { objective: "Centralizar pequenas ações de produtividade e ferramentas em uma interface de navegador.", problem: "O projeto reúne capturas rápidas e utilitários que normalmente ficam espalhados por páginas diferentes.", solution: "Um painel com tarefas, notas, links e uma bancada de ferramentas para dados e credenciais.", architecture: "Interface em HTML, CSS e JavaScript. O código usa armazenamento local no navegador e prevê armazenamento da extensão quando a API está disponível.", features: ["Tarefas com opção de conclusão", "Notas e links favoritos", "Formatação JSON", "Codificação e decodificação Base64", "Conversão de data e timestamp", "Geração de senha com aleatoriedade criptográfica"], technicalNote: "O README marca o projeto em desenvolvimento. As funcionalidades descritas aqui foram conferidas no popup e no script públicos." } },
    { id: "scanner-control", name: "Scanner Control", category: "it", categoryLabel: "SUPORTE / SISTEMA INTERNO", status: "INTERNO / PRIVADO", description: "Projeto corporativo descrito publicamente como painel de gestão e acompanhamento de scanners.", technologies: ["PROJETO CORPORATIVO"], featured: false, repository: null, demo: previewData.scanner, private: true, caseStudy: null },
];
const skills = { support: ["Suporte técnico", "GLPI", "Troubleshooting", "Hardware", "Windows"], infrastructure: ["Linux / Debian", "Redes", "Bash", "FOG Project", "Diagnóstico"], development: ["HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "Python", "React"], tools: ["Git", "GitHub", "VS Code", "Terminal", "Office", "LibreOffice"] };
const html = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("primary-links");
const projectGrid = document.getElementById("project-grid");
const featuredProjects = document.getElementById("featured-projects");
const projectSearch = document.getElementById("project-search");
const emptyState = document.getElementById("project-empty");
const caseDialog = document.getElementById("case-dialog");
const caseContent = document.getElementById("case-content");
const previewDialog = document.getElementById("preview-dialog");
const previewDialogTitle = document.getElementById("preview-dialog-title");
const previewDialogStage = document.getElementById("preview-dialog-stage");
const terminalOutput = document.getElementById("terminal-output");
const terminalInput = document.getElementById("terminal-input");
const terminalForm = document.getElementById("terminal-form");
let expandedPreview = null;
const previewObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadProjectPreview(entry.target);
        previewObserver.unobserve(entry.target);
    }), { rootMargin: "280px 0px" })
    : null;

function applyTheme(mode) {
    const nextTheme = mode === "light" ? "light" : "dark";
    html.classList.remove("dark", "light");
    html.classList.add(nextTheme);
    html.dataset.theme = nextTheme;
    try { localStorage.setItem("lucas-system-theme", nextTheme); } catch { /* The selected theme remains active for this session. */ }
    updateThemeControl();
}
function loadTheme() {
    try {
        const savedTheme = localStorage.getItem("lucas-system-theme");
        if (savedTheme === "dark" || savedTheme === "light") {
            applyTheme(savedTheme);
            return;
        }
    } catch {}

    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(systemPrefersDark ? "dark" : "light");
}
function updateThemeControl() {
    const isDark = html.classList.contains("dark") || html.dataset.theme === "dark";
    themeToggle.textContent = isDark ? "[DOMAIN: VOID]" : "[DOMAIN: SHRINE]";
    themeToggle.setAttribute("aria-label", isDark ? "Ativar modo claro" : "Ativar modo escuro");
    themeToggle.setAttribute("aria-pressed", String(!isDark));
    themeToggle.classList.toggle("theme-light", !isDark);
    themeToggle.classList.toggle("theme-dark", isDark);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", isDark ? "#0A0202" : "#F8FAFC");
}
loadTheme();
themeToggle.addEventListener("click", () => {
    const nextTheme = html.classList.contains("dark") ? "light" : "dark";
    applyTheme(nextTheme);
});
menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    menuToggle.querySelector("span").textContent = isOpen ? "☰" : "×";
    navLinks.classList.toggle("is-open", !isOpen);
});
navLinks.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuToggle.querySelector("span").textContent = "☰";
});
function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}
function markPreviewUnavailable(frame) {
    frame.dataset.previewState = "unavailable";
    const screen = frame.closest(".preview-screen");
    screen?.classList.remove("is-loading", "is-live");
    screen?.classList.add("is-unavailable");
    const fallbackLabel = screen?.querySelector(".preview-fallback-label");
    if (fallbackLabel) fallbackLabel.textContent = "PRÉVIA INDISPONÍVEL NESTE FRAME";
    frame.remove();
    document.querySelectorAll(`[data-preview-expand="${frame.dataset.projectId}"]`).forEach((button) => {
        button.textContent = "PRÉVIA INDISPONÍVEL";
        button.disabled = true;
    });
}
function loadProjectPreview(frame) {
    if (!frame || frame.dataset.previewState === "loading" || frame.dataset.previewState === "live") return;
    frame.dataset.previewState = "loading";
    const screen = frame.closest(".preview-screen");
    screen?.classList.remove("is-unavailable");
    screen?.classList.add("is-loading");
    const timeout = window.setTimeout(() => {
        if (frame.dataset.previewState === "loading") markPreviewUnavailable(frame);
    }, 18000);
    frame.addEventListener("load", () => {
        window.clearTimeout(timeout);
        frame.dataset.previewState = "live";
        const currentScreen = frame.closest(".preview-screen");
        currentScreen?.classList.remove("is-loading", "is-unavailable");
        currentScreen?.classList.add("is-live");
    }, { once: true });
    frame.addEventListener("error", () => {
        window.clearTimeout(timeout);
        markPreviewUnavailable(frame);
    }, { once: true });
    frame.src = frame.dataset.previewSrc;
}
function createProjectPreview(project) {
    const windowFrame = el("div", "project-preview-window");
    const toolbar = el("div", "preview-toolbar");
    const lights = el("span", "preview-lights");
    lights.setAttribute("aria-hidden", "true");
    for (let index = 0; index < 3; index += 1) lights.append(el("i", ""));
    toolbar.append(lights);
    const addressLabel = project.demo && /^https?:/i.test(project.demo) ? new URL(project.demo).host : "LOCAL PREVIEW";
    const address = el("span", "preview-address", project.demo ? addressLabel : "PREVIEW INDISPONÍVEL");
    toolbar.append(address);
    if (project.demo) {
        const openLink = el("a", "preview-open-link", "ABRIR ↗");
        openLink.href = project.demo.startsWith("<") ? "#" : project.demo;
        openLink.target = project.demo.startsWith("<") ? "_self" : "_blank";
        openLink.rel = "noopener noreferrer";
        openLink.setAttribute("aria-label", `Abrir ${project.name} em uma nova aba`);
        toolbar.append(openLink);
    }
    windowFrame.append(toolbar);

    const screen = el("div", `preview-screen${project.demo ? " is-loading" : " is-unavailable"}`);
    const fallback = el("div", "preview-fallback");
    fallback.append(el("span", "preview-fallback-label", project.demo ? "CARREGANDO PRÉVIA AO VIVO" : "SEM DEMONSTRAÇÃO PÚBLICA"));
    fallback.append(el("strong", "", project.name));
    fallback.append(el("span", "", project.description));
    screen.append(fallback);

    if (project.demo) {
        const frame = el("iframe", "live-project-frame");
        frame.title = `Prévia ao vivo de ${project.name}`;
        frame.loading = "lazy";
        frame.referrerPolicy = "strict-origin-when-cross-origin";
        frame.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox");
        frame.setAttribute("allow", "clipboard-write");
        frame.setAttribute("scrolling", "no");
        frame.style.overflow = "hidden";
        frame.dataset.projectId = project.id;
        if (project.demo.startsWith("<")) {
            frame.srcdoc = project.demo;
            frame.dataset.previewSrc = "inline";
            frame.dataset.previewState = "live";
            screen.classList.remove("is-loading", "is-unavailable");
            screen.classList.add("is-live");
            fallback.style.display = "none";
        } else {
            frame.dataset.previewSrc = project.demo;
            if (previewObserver) previewObserver.observe(frame);
            else loadProjectPreview(frame);
        }
        screen.prepend(frame);
    }
    windowFrame.append(screen);
    return windowFrame;
}
function projectCard(project, featured = false) {
    const article = el("article", `project-card${project.private ? " private-card" : ""}`);
    article.dataset.projectId = project.id;
    article.dataset.category = project.category;
    article.dataset.search = [project.name, project.categoryLabel, project.description, ...project.technologies].join(" ").toLocaleLowerCase("pt-BR");
    const head = el("div", "project-card-head");
    head.append(el("span", "project-kicker", `${featured ? "DESTAQUE" : "PROJETO"} / ${String(projects.indexOf(project) + 1).padStart(3, "0")}`), el("span", "project-status", project.status));
  const overlay = el("div", "project-overlay");
  overlay.append(el("p", "project-kicker", project.categoryLabel), el("h3", "", project.name), el("p", "", project.description));
    const tags = el("ul", "project-tech-list");
    tags.setAttribute("aria-label", `Tecnologias e contexto de ${project.name}`);
    project.technologies.forEach((technology) => tags.append(el("li", "project-tech", technology)));
  overlay.append(tags);
    const actions = el("div", "project-card-actions");
    if (project.caseStudy) {
        const button = el("button", "", "VER DETALHES →");
        button.type = "button"; button.dataset.case = project.id; button.setAttribute("aria-label", `Abrir estudo de caso: ${project.name}`); actions.append(button);
    }
    if (project.repository) {
        const link = el("a", "", "GITHUB ↗"); link.href = project.repository; link.target = "_blank"; link.rel = "noopener noreferrer"; actions.append(link);
    }
    if (project.demo) {
        const link = el("a", "", "ABRIR PROJETO ↗"); link.href = project.demo; link.target = "_blank"; link.rel = "noopener noreferrer"; actions.append(link);
        const expand = el("button", "", "EXPANDIR PRÉVIA ↗"); expand.type = "button"; expand.dataset.previewExpand = project.id; expand.setAttribute("aria-label", `Expandir prévia de ${project.name}`); actions.append(expand);
    }
    if (actions.childElementCount) overlay.append(actions);
    article.append(head, createProjectPreview(project), overlay);
    return article;
}
function openProjectPreview(projectId, trigger) {
    const project = projects.find((item) => item.id === projectId);
    const card = document.querySelector(`.project-card[data-project-id="${projectId}"]`);
    const previewWindow = card?.querySelector(".project-preview-window");
    const frame = previewWindow?.querySelector("iframe");
    if (!project?.demo || !previewWindow || !frame) return;

    expandedPreview = {
        card,
        frame,
        previewWindow,
        originalParent: previewWindow.parentElement,
        originalNextSibling: previewWindow.nextSibling,
        trigger,
    };
    previewDialogTitle.textContent = `${project.name} / ${new URL(project.demo).host}`;
    previewDialog.showModal();
    previewDialogStage.append(previewWindow);
    document.getElementById("preview-dialog-close").focus();
    loadProjectPreview(frame);
}

function restoreProjectPreview() {
    if (!expandedPreview) return;
    const { card, frame, previewWindow, originalParent, originalNextSibling, trigger } = expandedPreview;
    if (originalNextSibling?.parentElement === originalParent) originalParent.insertBefore(previewWindow, originalNextSibling);
    else originalParent.append(previewWindow);

    const screen = frame.closest(".preview-screen");
    screen?.classList.remove("is-loading", "is-unavailable", "is-live");
    if (frame.dataset.previewState === "live") screen?.classList.add("is-live");
    if (frame.dataset.previewState === "unavailable") screen?.classList.add("is-unavailable");
    expandedPreview = null;
    if (card.isConnected) trigger?.focus();
}

document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-preview-expand]");
    if (button) openProjectPreview(button.dataset.previewExpand, button);
});
document.getElementById("preview-dialog-close").addEventListener("click", () => previewDialog.close());
previewDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    previewDialog.close();
});
previewDialog.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !previewDialog.open) return;
    event.preventDefault();
    previewDialog.close();
});
previewDialog.addEventListener("click", (event) => {
    if (event.target === previewDialog) previewDialog.close();
});
previewDialog.addEventListener("close", restoreProjectPreview);

const siteHeader = document.querySelector(".site-header");
function updateHeaderScrollState() {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);
}
window.addEventListener("scroll", updateHeaderScrollState, { passive: true });
updateHeaderScrollState();
projects.filter((project) => project.featured).forEach((project) => {
    const wrapper = el("div", "featured-project"); wrapper.append(projectCard(project, true)); featuredProjects.append(wrapper);
});
projects.filter((project) => !project.featured).forEach((project) => projectGrid.append(projectCard(project)));
function filterProjects() {
    const filter = document.querySelector(".filter-button.is-active")?.dataset.filter || "all";
    const query = projectSearch.value.trim().toLocaleLowerCase("pt-BR");
    let visible = 0;
    document.querySelectorAll(".featured-project, .project-grid .project-card").forEach((item) => {
        const card = item.matches(".featured-project") ? item.querySelector(".project-card") : item;
        const matches = (filter === "all" || card.dataset.category === filter) && (!query || card.dataset.search.includes(query));
        item.hidden = !matches; if (matches) visible += 1;
    });
    emptyState.hidden = visible > 0;
}
document.querySelectorAll(".filter-button").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach((item) => {
        const active = item === button; item.classList.toggle("is-active", active); item.setAttribute("aria-pressed", String(active));
    });
    filterProjects();
}));
projectSearch.addEventListener("input", filterProjects);
function appendCaseField(grid, title, content) {
    const field = el("section", "case-field"); field.append(el("h3", "", title));
    if (Array.isArray(content)) { const list = el("ul", ""); content.forEach((item) => list.append(el("li", "", item))); field.append(list); }
    else field.append(el("p", "", content));
    grid.append(field);
}
function openCase(projectId) {
    const project = projects.find((item) => item.id === projectId);
    if (!project?.caseStudy) return;
    caseContent.replaceChildren();
    const heading = el("header", "case-heading");
    const title = el("h2", "", project.name);
    title.id = "case-title";
    heading.append(el("p", "", project.categoryLabel), title, el("span", "", `SITUAÇÃO / ${project.status}`));
    caseContent.append(heading);
    const details = el("div", "case-grid");
    appendCaseField(details, "OBJETIVO", project.caseStudy.objective);
    appendCaseField(details, "PROBLEMA", project.caseStudy.problem);
    appendCaseField(details, "SOLUÇÃO", project.caseStudy.solution);
    appendCaseField(details, "TECNOLOGIAS / ARQUITETURA", project.caseStudy.architecture);
    appendCaseField(details, "FUNCIONALIDADES VERIFICADAS", project.caseStudy.features);
    appendCaseField(details, "NOTA TÉCNICA", project.caseStudy.technicalNote);
    caseContent.append(details);
    const links = el("div", "case-links");
    [[project.repository, "VER CÓDIGO NO GITHUB ↗"], [project.demo, "ABRIR PROJETO ↗"]].forEach(([href, text]) => {
        if (!href) return; const link = el("a", "", text); link.href = href; link.target = "_blank"; link.rel = "noopener noreferrer"; links.append(link);
    });
    caseContent.append(links); caseDialog.showModal();
    document.getElementById("dialog-close").dataset.returnFocus = projectId;
}
document.addEventListener("click", (event) => { const button = event.target.closest("[data-case]"); if (button) openCase(button.dataset.case); });
document.getElementById("dialog-close").addEventListener("click", () => caseDialog.close());
caseDialog.addEventListener("click", (event) => { if (event.target === caseDialog) caseDialog.close(); });
caseDialog.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !caseDialog.open) return;
    event.preventDefault();
    caseDialog.close();
});
caseDialog.addEventListener("close", () => document.querySelector(`[data-case="${document.getElementById("dialog-close").dataset.returnFocus}"]`)?.focus());
if (terminalOutput && terminalInput && terminalForm) {
    function terminalLine(text, className = "terminal-result") { terminalOutput.append(el("p", className, text)); terminalOutput.scrollTop = terminalOutput.scrollHeight; }
    function runCommand(raw) {
        const command = raw.trim().toLocaleLowerCase("pt-BR"); if (!command) return;
        if (command === "clear") { terminalOutput.replaceChildren(); return; }
        terminalLine(`lucas@system:~$ ${raw}`, "command-line");
        switch (command) {
            case "help": terminalLine("Comandos: help, about, projects, skills, github, contact, neofetch, clear"); break;
            case "about": terminalLine("Lucas Reis | Estudante de ADS e aprendiz de suporte técnico em Fortaleza — CE."); break;
            case "projects": terminalLine(projects.map((project) => `${project.name} — ${project.status}`).join("\n")); break;
            case "skills": {
                const areas = { support: "SUPORTE", infrastructure: "INFRAESTRUTURA", development: "DESENVOLVIMENTO", tools: "FERRAMENTAS" };
                terminalLine(Object.entries(skills).map(([area, items]) => `${areas[area]}: ${items.join(", ")}`).join("\n"));
                break;
            }
            case "github": {
                const link = el("a", "", "Abrir GitHub / LucasReisD ↗"); link.href = GITHUB; link.target = "_blank"; link.rel = "noopener noreferrer";
                const line = el("p", "terminal-result"); line.append(link); terminalOutput.append(line); window.open(GITHUB, "_blank", "noopener,noreferrer"); break;
            }
            case "contact": terminalLine(`E-mail: ${EMAIL} | LinkedIn: linkedin.com/in/LucasReisD`); break;
            case "neofetch": terminalLine("LUCAS REIS // SISTEMA\nSistema operacional: não informado\nAtuação: suporte técnico / estudante de ADS\nFoco: suporte + infraestrutura + desenvolvimento\nStatus: portfólio online"); break;
            default: terminalLine(`Comando não reconhecido: ${raw}. Digite help para ver as opções.`);
        }
    }
    const commandHistory = []; let historyIndex = 0;
    terminalForm.addEventListener("submit", (event) => {
        event.preventDefault(); const command = terminalInput.value;
        if (command.trim()) { commandHistory.push(command); historyIndex = commandHistory.length; }
        runCommand(command); terminalInput.value = "";
    });
    terminalInput.addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp" && commandHistory.length) { event.preventDefault(); historyIndex = Math.max(0, historyIndex - 1); terminalInput.value = commandHistory[historyIndex]; }
        if (event.key === "ArrowDown" && commandHistory.length) { event.preventDefault(); historyIndex = Math.min(commandHistory.length, historyIndex + 1); terminalInput.value = commandHistory[historyIndex] || ""; }
    });
}
if ("IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.querySelectorAll("a").forEach((link) => link.hash === `#${entry.target.id}` ? link.setAttribute("aria-current", "location") : link.removeAttribute("aria-current"));
    }), { rootMargin: "-35% 0px -58% 0px" });
    document.querySelectorAll("main section[id]").forEach((section) => navObserver.observe(section));
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.body.classList.add("reveal-ready");
        const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
            if (!entry.isIntersecting) return; entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target);
        }), { threshold: .12, rootMargin: "0px 0px -30px 0px" });
        document.querySelectorAll(".section-heading, .profile-story, .progression-step, .project-card, .career-entry, .loadout-group, .terminal-window").forEach((element) => { element.classList.add("reveal"); revealObserver.observe(element); });
    }
}
document.getElementById("current-year").textContent = String(new Date().getFullYear());
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const boot = document.getElementById("system-boot"); boot.hidden = false;
    window.setTimeout(() => { boot.classList.add("is-leaving"); window.setTimeout(() => { boot.hidden = true; }, 220); }, 420);
}
