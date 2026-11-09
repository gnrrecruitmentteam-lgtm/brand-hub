import brand from "@/brand.config";
import CopyButton from "@/components/CopyButton";
import { rgbString, cmykString, isDark } from "@/components/colour";

const nav = [
  { group: "Brand", items: [["logos", "Logos"], ["colours", "Colours"], ["typography", "Typography"], ["voice", "Tone of voice"], ["dos-donts", "Do's & don'ts"]] },
  { group: "Recruitment", items: [["evp", "EVP & values"], ["benefits", "Benefits"], ["process", "Hiring process"], ["job-ads", "Job ads"], ["language", "Inclusive language"], ["templates", "Templates"], ["social", "Social specs"]] },
];

function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="section">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {intro && <p className="intro">{intro}</p>}
      {children}
    </section>
  );
}

export default function Home() {
  const r = brand.recruitment;
  const colourGroups = [...new Set(brand.colours.map((c) => c.group))];

  return (
    <div className="shell">
      <aside className="sidebar">
        <a href="#top" className="brandmark">
          <img src={brand.logos[0]?.file} alt={brand.name} />
        </a>
        <nav>
          {nav.map((g) => (
            <div key={g.group} className="nav-group">
              <p className="nav-title">{g.group}</p>
              {g.items.map(([id, label]) => (
                <a key={id} href={`#${id}`}>{label}</a>
              ))}
            </div>
          ))}
        </nav>
        <p className="sidebar-foot">{brand.version}</p>
      </aside>

      <main id="top">
        <header className="hero">
          <p className="eyebrow">Brand Hub</p>
          <h1>{brand.name}</h1>
          <p className="hero-sub">{brand.tagline}</p>
          <div className="hero-actions">
            <a href="#logos" className="btn primary">Brand guidelines</a>
            <a href="#evp" className="btn">Recruitment toolkit</a>
          </div>
        </header>

        {/* ── LOGOS ── */}
        <Section id="logos" eyebrow="Brand" title="Logos" intro="Right-click or use the download link to save each version.">
          <div className="grid logos">
            {brand.logos.map((l) => (
              <figure key={l.name} className="card logo-card">
                <div className={`logo-stage ${l.background}`}>
                  <img src={l.file} alt={l.name} />
                </div>
                <figcaption>
                  <strong>{l.name}</strong>
                  <span>{l.usage}</span>
                  <a href={l.file} download className="link">Download ↓</a>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="rules">
            <div className="card"><strong>Clear space</strong><p>{brand.logoRules.clearSpace}</p></div>
            <div className="card"><strong>Minimum size</strong><p>{brand.logoRules.minimumSize}</p></div>
          </div>
        </Section>

        {/* ── COLOURS ── */}
        <Section id="colours" eyebrow="Brand" title="Colours" intro="Click any value to copy it.">
          {colourGroups.map((group) => (
            <div key={group} className="colour-group">
              <h3>{group}</h3>
              <div className="grid colours">
                {brand.colours.filter((c) => c.group === group).map((c) => (
                  <div key={c.name} className="card swatch-card">
                    <div className="swatch" style={{ background: c.hex, color: isDark(c.hex) ? "#fff" : "#111" }}>
                      <span>{c.name}</span>
                    </div>
                    <div className="swatch-body">
                      <CopyButton label="HEX" value={c.hex.toUpperCase()} />
                      <CopyButton label="RGB" value={rgbString(c.hex)} />
                      <CopyButton label="CMYK" value={c.cmyk || cmykString(c.hex)} />
                      <p className="muted">{c.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Section>

        {/* ── TYPOGRAPHY ── */}
        <Section id="typography" eyebrow="Brand" title="Typography">
          <div className="grid two">
            {brand.typography.map((t) => (
              <div key={t.role} className="card type-card">
                <p className="eyebrow">{t.role}</p>
                <p className="type-aa" style={{ fontFamily: `'${t.family}', ${t.fallback}` }}>Aa</p>
                <h3 style={{ fontFamily: `'${t.family}', ${t.fallback}` }}>{t.family}</h3>
                <p className="type-sample" style={{ fontFamily: `'${t.family}', ${t.fallback}` }}>{t.sample}</p>
                <dl>
                  <dt>Weights</dt><dd>{t.weights}</dd>
                  <dt>Fallback</dt><dd>{t.fallback}</dd>
                </dl>
                <a className="link" href={`https://fonts.google.com/specimen/${t.family.replace(/ /g, "+")}`} target="_blank" rel="noreferrer">Get the font ↗</a>
              </div>
            ))}
          </div>
          <div className="card scale">
            {brand.typeScale.map((s) => (
              <div key={s.name} className="scale-row">
                <span className="scale-meta">{s.name} · {s.size} / {s.lineHeight}</span>
                <span style={{ fontSize: s.size, lineHeight: s.lineHeight, fontFamily: s.name.startsWith("H") ? `'${brand.typography[0].family}'` : undefined }}>
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── VOICE ── */}
        <Section id="voice" eyebrow="Brand" title="Tone of voice" intro={brand.voice.summary}>
          <div className="grid three">
            {brand.voice.traits.map((v) => (
              <div key={v.trait} className="card">
                <h3>{v.trait}</h3>
                <p><span className="tag good">We are</span> {v.weAre}</p>
                <p><span className="tag bad">We're not</span> {v.weAreNot}</p>
              </div>
            ))}
          </div>
          <div className="examples">
            {brand.voice.examples.map((e) => (
              <div key={e.context} className="card example">
                <p className="eyebrow">{e.context}</p>
                <p className="say good-line">✓ {e.do}</p>
                <p className="say bad-line">✗ {e.dont}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── DOS & DONTS ── */}
        <Section id="dos-donts" eyebrow="Brand" title="Do's & don'ts">
          <div className="grid two">
            <div className="card do-card">
              <h3>Do</h3>
              <ul>{brand.dos.map((d) => <li key={d}>{d}</li>)}</ul>
            </div>
            <div className="card dont-card">
              <h3>Don't</h3>
              <ul>{brand.donts.map((d) => <li key={d}>{d}</li>)}</ul>
            </div>
          </div>
        </Section>

        {/* ══════════ RECRUITMENT ══════════ */}
        <div className="divider"><span>Recruitment toolkit</span></div>

        <Section id="evp" eyebrow="Recruitment" title="Employer value proposition" intro={r.evp.body}>
          <blockquote className="evp">{r.evp.headline}</blockquote>
          <div className="grid four">
            {r.evp.pillars.map((p, i) => (
              <div key={p.title} className="card pillar">
                <span className="num">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
          <h3 className="sub">Our values</h3>
          <div className="chips">{r.values.map((v) => <span key={v} className="chip">{v}</span>)}</div>
        </Section>

        <Section id="benefits" eyebrow="Recruitment" title="Benefits" intro="Use this approved list in job ads and careers content.">
          <div className="grid three">
            {r.benefits.map((b) => <div key={b} className="card benefit">{b}</div>)}
          </div>
          <CopyButton hideValue className="block" label="Copy all" value={r.benefits.map((b) => `• ${b}`).join("\n")} />
        </Section>

        <Section id="process" eyebrow="Recruitment" title="Hiring process" intro="Share this with candidates so they know what to expect.">
          <ol className="timeline">
            {r.hiringProcess.map((s, i) => (
              <li key={s.step}>
                <span className="dot">{i + 1}</span>
                <div>
                  <strong>{s.step}</strong> <span className="muted">· {s.time}</span>
                  <p>{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="job-ads" eyebrow="Recruitment" title="Writing job ads">
          <div className="card">
            <ul className="checks">{r.jobAdGuidelines.map((g) => <li key={g}>{g}</li>)}</ul>
          </div>
        </Section>

        <Section id="language" eyebrow="Recruitment" title="Inclusive language" intro="Small word choices change who applies.">
          <div className="card table-wrap">
            <table>
              <thead><tr><th>Avoid</th><th>Use instead</th></tr></thead>
              <tbody>
                {r.inclusiveLanguage.map((l) => (
                  <tr key={l.avoid}><td className="bad-line">{l.avoid}</td><td className="good-line">{l.use}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="templates" eyebrow="Recruitment" title="Approved copy & templates" intro="Copy, then replace anything in [brackets].">
          <div className="grid two">
            {r.boilerplate.map((b) => (
              <div key={b.title} className="card template">
                <h3>{b.title}</h3>
                <p>{b.text}</p>
                <CopyButton hideValue className="block" label="Copy text" value={b.text} />
              </div>
            ))}
          </div>
        </Section>

        <Section id="social" eyebrow="Recruitment" title="Social media specs">
          <div className="card table-wrap">
            <table>
              <thead><tr><th>Format</th><th>Size</th><th>Note</th></tr></thead>
              <tbody>
                {r.socialSpecs.map((s) => (
                  <tr key={s.platform}><td>{s.platform}</td><td><strong>{s.size}</strong></td><td className="muted">{s.note}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="sub">Hashtags</h3>
          <div className="chips">
            {r.hashtags.map((h) => <CopyButton key={h} className="chip-btn" value={h} />)}
          </div>
        </Section>

        <footer className="footer">
          <p>Questions about the brand? Contact <a href={`mailto:${brand.contactEmail}`}>{brand.contactEmail}</a></p>
          <p className="muted">{brand.version}</p>
        </footer>
      </main>
    </div>
  );
}
