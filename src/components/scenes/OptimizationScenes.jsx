// Mini-escenas de plataformas conectadas a modelos de optimización.
// Dominios de ejemplo deliberadamente genéricos (turnos, agendas,
// asignaciones): la plataforma propone, las personas deciden.

function ParamsScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Planificador de turnos</div>
        <div className="m-compare-row"><span className="m-specs">Costo</span><div className="m-slider" style={{ flex: 1 }}><i style={{ left: "68%" }} /></div><span className="m-specs">prioridad alta</span></div>
        <div className="m-compare-row"><span className="m-specs">Cobertura</span><div className="m-slider" style={{ flex: 1 }}><i style={{ left: "82%" }} /></div><span className="m-specs">mínimo 95%</span></div>
        <div className="m-compare-row"><span className="m-specs">Preferencias</span><div className="m-slider" style={{ flex: 1 }}><i style={{ left: "40%" }} /></div><span className="m-specs">cuando se pueda</span></div>
        <span className="m-btn">Optimizar</span>
      </div>
    </div>
  );
}

function PlanScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Plan propuesto · semana 28</div>
        <div className="m-sched">
          <div className="m-sched-row"><span className="m-specs">Carla</span><i className="a" /><i className="a" /><i /><i className="b" /><i className="b" /></div>
          <div className="m-sched-row"><span className="m-specs">Diego</span><i className="b" /><i /><i className="a" /><i className="a" /><i /></div>
          <div className="m-sched-row"><span className="m-specs">Rosa</span><i /><i className="b" /><i className="b" /><i /><i className="a" /></div>
        </div>
        <p className="m-caption">El modelo propone; el equipo revisa y ajusta arrastrando.</p>
      </div>
    </div>
  );
}

function ConstraintsScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Reglas del negocio</div>
        <ul className="check-list">
          <li>Máximo 45 horas por semana por persona</li>
          <li>Descanso mínimo de 12 horas entre turnos</li>
          <li>Siempre alguien con experiencia por turno</li>
          <li>Vacaciones y licencias respetadas</li>
        </ul>
        <span className="m-chip ok">✓ Plan válido: cumple las 4 reglas</span>
      </div>
    </div>
  );
}

function ScenariosScene() {
  return (
    <div className="m-scene">
      <div className="m-grid two">
        <div className="m-panel">
          <div className="m-panel-title">Escenario A</div>
          <div className="m-total soft"><span>Costo mensual</span><b>$4,2M</b></div>
          <div className="m-total soft"><span>Cobertura</span><b>96%</b></div>
        </div>
        <div className="m-panel">
          <div className="m-panel-title">Escenario B · +1 persona</div>
          <div className="m-total soft"><span>Costo mensual</span><b>$4,8M</b></div>
          <div className="m-total soft orange-text"><span>Cobertura</span><b>99,5%</b></div>
        </div>
      </div>
      <p className="m-caption">Las decisiones grandes se comparan antes de tomarse.</p>
    </div>
  );
}

function RecomputeScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-alert">Diego avisó licencia médica para el jueves</div>
        <span className="m-btn">Recalcular plan</span>
        <span className="m-chip ok">✓ Plan ajustado en segundos — cobertura se mantiene</span>
      </div>
    </div>
  );
}

function SourcesScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-flow">
        <div className="m-flow-sources">
          <span className="m-chip">Planilla de personal</span>
          <span className="m-chip">Sistema de asistencia</span>
          <span className="m-chip">Calendario</span>
        </div>
        <span className="m-flow-arrow">→</span>
        <div className="m-stat-tile"><b>Plataforma</b><div className="m-specs">el plan siempre al día</div></div>
      </div>
      <p className="m-caption">Se conecta a lo que ya usas — nadie digita dos veces.</p>
    </div>
  );
}

const scenes = {
  params: ParamsScene,
  plan: PlanScene,
  constraints: ConstraintsScene,
  scenarios: ScenariosScene,
  recompute: RecomputeScene,
  sources: SourcesScene,
};

export default scenes;
