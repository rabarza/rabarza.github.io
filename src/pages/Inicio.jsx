import Garabatos from "../components/Garabatos.jsx";
import Cinta from "../components/Cinta.jsx";
import {
  contacto, navegacion, cintaItems, queHago, software, respaldo,
  capacidadesWeb, proyectos, metodo, preguntas,
} from "../content/sitio.js";

const DEMO_URL = `${import.meta.env.BASE_URL}demo/`;

export default function Inicio() {
  return (
    <>
      {/* ---------- Navegación ---------- */}
      <nav className="barra">
        <div className="lienzo barra-inner">
          <a className="marca" href="#inicio">Rolando Abarza</a>
          <div className="enlaces">
            {navegacion.map((n) => (
              <a key={n.ancla} href={n.ancla}>{n.etiqueta}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* ---------- Héroe ---------- */}
      <div className="con-mate" id="inicio">
        <Garabatos />
        <header className="lienzo heroe">
          <span className="chip-borde">Ingeniero civil informático e industrial · {contacto.ciudad}</span>
          <h1>
            Rolando Abarza<br />
            <mark>construye software</mark><br />
            que funciona
          </h1>
          <p>
            Sitios y aplicaciones web, sistemas de datos y automatización — con la
            ingeniería que empresas reales usan a diario para operar.
          </p>
          <div>
            <a className="btn naranja" href="#que-hago">Ver lo que hago</a>
            <a className="btn" href={`mailto:${contacto.correo}`}>Escríbeme</a>
          </div>
          <p className="contactos">
            <a href={`mailto:${contacto.correo}`}>{contacto.correo}</a>
            {" · "}
            <a href={contacto.telefonoEnlace}>{contacto.telefono}</a>
            {" · "}
            <a href={contacto.github}>github.com/rabarza</a>
            {" · "}
            <a href={contacto.linkedin}>LinkedIn</a>
          </p>
        </header>
      </div>

      <Cinta items={cintaItems} />

      {/* ---------- Qué hago ---------- */}
      <section id="que-hago">
        <div className="lienzo">
          <div className="cabeza-seccion">
            <h2 className="titulo-seccion">Qué <mark>hago</mark></h2>
          </div>
          <div className="bloques">
            {queHago.map((q) => (
              <a className="bloque enlazado" href={q.ancla} key={q.titulo}>
                <h3>{q.titulo}</h3>
                <p>{q.texto}</p>
                <span className="ir">Ver más ↓</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Desarrollo de software ---------- */}
      <section id="software" className="seccion-marcada">
        <div className="lienzo">
          <div className="cabeza-seccion">
            <h2 className="titulo-seccion">Desarrollo de <mark>software</mark></h2>
            <p className="intro-seccion">
              Mi trabajo diario: sistemas de datos y optimización que empresas de retail
              y distribución usan para decidir qué comprar, cuánto y cuándo. Esta es la
              ingeniería que respalda todo lo demás.
            </p>
          </div>
          <div className="bloques">
            {software.map((s) => (
              <article className="bloque" key={s.titulo}>
                <span className="dato">{s.dato}</span>
                <h3>{s.titulo}</h3>
                <p>{s.texto}</p>
              </article>
            ))}
          </div>
          <div className="bloques" style={{ marginTop: 22 }}>
            {respaldo.map((r) => (
              <article className="bloque claro" key={r.titulo}>
                <span className="dato">{r.dato}</span>
                <h3>{r.titulo}</h3>
                <p>{r.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Desarrollo web ---------- */}
      <section id="web">
        <div className="lienzo">
          <div className="cabeza-seccion">
            <h2 className="titulo-seccion">Desarrollo <mark>web</mark></h2>
            <p className="intro-seccion">
              No solo páginas estáticas: aplicaciones funcionales, con lógica, datos y
              flujos de trabajo detrás. La primera no es solo una idea — se puede
              visitar y probar funcionando.
            </p>
          </div>
          <div className="notas">
            {capacidadesWeb.map((c) => (
              <article className="nota" key={c.titulo}>
                <h3>{c.titulo}</h3>
                <p>{c.texto}</p>
                {c.demo && (
                  <div className="extra">
                    <a className="chip-tinta" href={DEMO_URL}>Ver demo navegable →</a>
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="cabeza-seccion" style={{ marginTop: 64 }}>
            <h2 className="titulo-seccion">Cosas que <mark>ya construí</mark></h2>
          </div>
          {proyectos.map((p) => (
            <article className="obra" key={p.titulo}>
              <div>
                <span className="chip-tinta">{p.rol}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
                <p className="detalle">{p.detalle}</p>
              </div>
              <div className="marco">
                <img src={p.imagen} alt={p.alt} loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Método ---------- */}
      <section id="metodo">
        <div className="lienzo">
          <div className="cabeza-seccion">
            <h2 className="titulo-seccion">Cómo <mark>trabajo</mark></h2>
            <p className="intro-seccion">Proceso simple, con avances visibles desde la primera semana.</p>
          </div>
          <div className="pasos">
            {metodo.map((m) => (
              <article className="paso" key={m.titulo}>
                <h3>{m.titulo}</h3>
                <p>{m.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Preguntas frecuentes ---------- */}
      <section id="preguntas">
        <div className="lienzo">
          <div className="cabeza-seccion">
            <h2 className="titulo-seccion">Lo que siempre <mark>me preguntan</mark></h2>
          </div>
          <div className="notas dos">
            {preguntas.map((q) => (
              <article className="nota" key={q.pregunta}>
                <h3>{q.pregunta}</h3>
                <p>{q.respuesta}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Cierre ---------- */}
      <div className="lienzo cierre-envoltura" id="contacto">
        <div className="cierre">
          <h2>¿Conversamos?</h2>
          <p>Una reunión corta basta para mostrar todo esto funcionando.</p>
          <a className="btn" href={`mailto:${contacto.correo}`}>{contacto.correo}</a>
        </div>
      </div>

      <footer>
        Este sitio también es una muestra: diseñado y construido a mano por Rolando
        Abarza — incluidos los garabatos matemáticos del fondo.
      </footer>
    </>
  );
}
