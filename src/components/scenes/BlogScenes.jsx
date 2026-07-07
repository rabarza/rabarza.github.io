// Mini-escenas esquemáticas del blog / sitio de contenidos.

function EditorScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-toolbar">
          <span className="m-chip ink">B</span>
          <span className="m-chip">I</span>
          <span className="m-chip">Título</span>
          <span className="m-chip">Imagen</span>
          <span className="m-chip orange">Publicar</span>
        </div>
        <div className="m-line" style={{ width: "88%" }} />
        <div className="m-line" style={{ width: "94%" }} />
        <div className="m-line" style={{ width: "72%" }} />
        <p className="m-caption">Escribir y publicar, tan simple como redactar un correo.</p>
      </div>
    </div>
  );
}

function TaxonomyScene() {
  return (
    <div className="m-scene">
      <div className="m-grid two">
        <div className="m-card article">
          <span className="m-flag">Destacado</span>
          <span className="m-chip ink">Opinión</span>
          <div className="m-article-title">Lo que aprendí midiendo la sequía</div>
          <div className="m-line" style={{ width: "76%" }} />
        </div>
        <div className="m-card article">
          <span className="m-chip ink">Tutorial</span>
          <div className="m-article-title">Guía: entender tu boleta de luz</div>
          <div className="m-line" style={{ width: "68%" }} />
        </div>
      </div>
      <p className="m-caption">Categorías, etiquetas y destacados para ordenar el archivo.</p>
    </div>
  );
}

function SearchScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-form">
          <span className="m-input">sequía</span>
          <span className="m-btn">Buscar</span>
        </div>
        <div className="m-bill"><div className="m-line" style={{ width: "70%" }} /><span className="m-chip">3 resultados</span></div>
        <div className="m-bill"><div className="m-line" style={{ width: "58%" }} /><span className="m-chip">Opinión</span></div>
        <p className="m-caption">Búsqueda dentro de todo el contenido, al instante.</p>
      </div>
    </div>
  );
}

function DarkModeScene() {
  return (
    <div className="m-scene">
      <div className="m-grid two">
        <div className="m-card article">
          <span className="m-chip ink">Claro</span>
          <div className="m-article-title">El mismo artículo</div>
          <div className="m-line" style={{ width: "80%" }} />
          <div className="m-line" style={{ width: "64%" }} />
        </div>
        <div className="m-card article v-dark">
          <span className="m-chip orange">Oscuro</span>
          <div className="m-article-title" style={{ color: "#f2efe6" }}>El mismo artículo</div>
          <div className="m-line" style={{ width: "80%" }} />
          <div className="m-line" style={{ width: "64%" }} />
        </div>
      </div>
      <p className="m-caption">El lector elige; el sitio recuerda su preferencia.</p>
    </div>
  );
}

function MathScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Contenido técnico sin miedo</div>
        <div className="m-formula">∫ f(x) dx &nbsp;·&nbsp; y = mx + b</div>
        <div className="m-grid two">
          <div className="m-thumb" />
          <div>
            <div className="m-line" style={{ width: "90%" }} />
            <div className="m-line" style={{ width: "76%" }} />
            <div className="m-line" style={{ width: "82%" }} />
          </div>
        </div>
        <p className="m-caption">Fórmulas y diagramas renderizados de verdad, no pegados como foto.</p>
      </div>
    </div>
  );
}

function SubscribeScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel">
        <div className="m-panel-title">Para tus lectores</div>
        <div className="m-form">
          <span className="m-input">tu@correo.cl</span>
          <span className="m-btn">Suscribirme</span>
        </div>
        <span className="m-chip ok">✓ Cada artículo nuevo llega solo a quien se suscribió</span>
      </div>
    </div>
  );
}

function SpeedScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Peso de la página</div>
        <div className="m-compare-row">
          <span className="m-specs">Con plantilla</span>
          <div className="m-hbar"><i style={{ width: "92%" }} className="alt" /></div>
          <b className="m-figure">~4 MB</b>
        </div>
        <div className="m-compare-row">
          <span className="m-specs">A medida</span>
          <div className="m-hbar"><i style={{ width: "8%" }} /></div>
          <b className="m-figure">~0,3 MB</b>
        </div>
        <span className="m-chip ok">✓ Se entrega con las métricas de velocidad medidas, no prometidas</span>
        <p className="m-caption">
          La base técnica que los buscadores exigen, bien hecha. Lo que ningún sitio
          puede prometerte es el primer lugar en Google — desconfía de quien lo haga.
        </p>
      </div>
    </div>
  );
}

const scenes = {
  editor: EditorScene,
  taxonomy: TaxonomyScene,
  search: SearchScene,
  darkmode: DarkModeScene,
  math: MathScene,
  subscribe: SubscribeScene,
  speed: SpeedScene,
};

export default scenes;
