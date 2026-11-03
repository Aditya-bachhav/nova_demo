import { useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { ShapePhysics } from '../@/components/shape-physics';
import { FanGallery } from '../@/components/fan-gallery';
import { RefractedText } from '../@/components/refracted-text';
import { ChromaticButton } from '../@/components/chromatic-button';
import {
  SoapBubbleButton,
  SoapBubbleIconButton,
  SoapBubbleMaterial,
  SoapBubbleMenu,
  SoapBubbleSearch,
  SoapBubbleSlider,
  SoapBubbleToggle,
} from '../@/components/soap-bubble';

type Application = {
  number: string;
  title: string;
  description: string;
  category: string;
};

const applications: Application[] = [
  {
    number: '01',
    title: 'Defence & ISR',
    description: 'Situational awareness in darkness, smoke, haze and light fog.',
    category: 'Field systems',
  },
  {
    number: '02',
    title: 'Aerospace & UAV',
    description: 'Airborne perception for navigation, monitoring and intelligence.',
    category: 'Autonomous flight',
  },
  {
    number: '03',
    title: 'Surveillance & security',
    description: 'A clearer view through haze and smoke, by day and by night.',
    category: 'Perimeter sensing',
  },
  {
    number: '04',
    title: 'Automotive & autonomy',
    description: 'Perception through haze and spray, with the potential to detect water and ice on roads.',
    category: 'Road perception',
  },
  {
    number: '05',
    title: 'Industrial inspection',
    description: 'Detection of moisture, defects and material differences beyond standard imaging.',
    category: 'Machine vision',
  },
  {
    number: '06',
    title: 'Wearables & consumer',
    description: 'Potential for under-display authentication and sensing in phones and smart glasses.',
    category: 'Compact sensing',
  },
];

const galleryItems = [
  {
    src: '/assets/gallery/01-quantum-dot-ink.webp',
    alt: 'Engraved illustration of a quantum-dot ink vial and molecular structure',
  },
  {
    src: '/assets/gallery/02-film-deposition.webp',
    alt: 'Engraved illustration of a wafer during thin-film deposition',
  },
  {
    src: '/assets/gallery/03-device-stack.webp',
    alt: 'Engraved cross-section of a layered quantum-dot sensor device',
  },
  {
    src: '/assets/gallery/04-cmos-integration.webp',
    alt: 'Engraved close-up of a CMOS image-sensor die',
  },
  {
    src: '/assets/gallery/05-field-sensing.webp',
    alt: 'Engraved illustration of a sensor-equipped drone over a misty landscape',
  },
];

const roadmap = [
  {
    year: '2026',
    status: 'In progress',
    title: 'Ink & photodiode',
    description: 'InAs cQD inks and ligand exchange, formulated in-house; photodiode stack development.',
  },
  {
    year: '2027',
    status: 'Next',
    title: 'On CMOS wafers',
    description: 'Quantum-dot films deposited and patterned directly on CMOS readout wafers; test structures.',
  },
  {
    year: '2028',
    status: 'Planned',
    title: 'Sensor-chip prototype',
    description: 'Field-ready sensor-array prototype, packaging with specialist partners and performance validation.',
  },
  {
    year: '2029',
    status: 'Planned',
    title: 'Pilot fab & field pilots',
    description: 'A pilot fabrication line and field pilots with defence and ISR partners.',
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span className="arrow-mark" aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="section-label">
      <span className="section-label__index">{index}</span>
      <span>{children}</span>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ['Technology', '#technology'],
    ['Mission', '#mission'],
    ['Applications', '#applications'],
    ['Team', '#team'],
  ];

  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label="Nova Spectral home">
        <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>
        <span className="brand-wordmark">NOVA<span>SPECTRAL</span></span>
      </a>
      <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <a className="nav-contact" href="#contact">Get in touch <Arrow diagonal /></a>
      </nav>
      <button
        className="mobile-menu-button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span /><span />
      </button>
    </header>
  );
}

function LayerExplorer() {
  const surface = useRef<HTMLDivElement>(null);
  const [annotations, setAnnotations] = useState(true);
  const [spread, setSpread] = useState(42);

  return (
    <div ref={surface} className="optics-surface" data-theme="light">
      <SoapBubbleMaterial
        backdrop={surface}
        glass={0.95}
        iridescence={0.5}
        filmScale={4.85}
        oilOpacity={1}
        oilCoverage={0.73}
        oilEdge={18}
        oilEdgeFade={2.33}
        clearCenter={0.57}
        thickness={480}
        drainage={0.35}
        swirl={0.5}
        reflectivity={1.3}
        refraction={0.15}
        dispersion={1}
        bevel={14}
        windowLength={1.3}
        windowMargin={0.85}
        windowBend={0.75}
        windowSize={0.75}
        windowWidth={0.8}
        windowGradient={0.96}
        windowHead={0.7}
        windowTail={0.6}
        glintSize={1.65}
        glintIntensity={0}
        glintDistance={-0.45}
        glintHeight={0.65}
        windowIntensity={0.85}
        windowTwin={false}
        bottomShadeColor="#ffffff"
      >
        <div className="optics-inner">
          <div className="optics-topline">
            <div>
              <span className="eyebrow eyebrow--ink">INTERACTIVE STUDY / 001</span>
              <h3>Inside the sensor stack.</h3>
            </div>
            <div className="optics-tools">
              <SoapBubbleMenu
                round
                label="•••"
                triggerLabel="Explore"
                items={[{ label: 'Material layers' }, { label: 'Charge transport' }, { label: 'CMOS readout' }]}
              />
              <SoapBubbleIconButton aria-label="Toggle layer notes" style={{ marginLeft: 'auto' }} onClick={() => setAnnotations((value) => !value)}>↗</SoapBubbleIconButton>
            </div>
          </div>
          <div className={`stack-stage ${annotations ? 'show-annotations' : ''}`} style={{ '--layer-spread': `${spread}px` } as CSSProperties}>
            <div className="stack-glow" />
            <div className="stack-layer stack-layer--glass"><span>ENCAPSULATION</span></div>
            <div className="stack-layer stack-layer--gold"><span>CONTACTS</span></div>
            <div className="stack-layer stack-layer--active"><span>InAs cQD ACTIVE FILM</span></div>
            <div className="stack-layer stack-layer--transport"><span>CHARGE TRANSPORT</span></div>
            <div className="stack-layer stack-layer--oxide"><span>INTERFACE LAYER</span></div>
            <div className="stack-layer stack-layer--cmos"><span>CMOS READOUT</span></div>
            <div className="stack-layer stack-layer--base"><span>SILICON SUBSTRATE</span></div>
            <div className="stack-dimension dimension-a" />
            <div className="stack-dimension dimension-b" />
          </div>
          <div className="optics-controls">
            <div className="optics-control">
              <div className="optics-control__heading">
                <span>Layer annotation</span>
                <SoapBubbleToggle checked={annotations} onCheckedChange={setAnnotations} aria-label="Show layer annotation" scale={1.35} />
              </div>
              <p>Reveal the functional layers in this conceptual stack.</p>
            </div>
            <div className="optics-control optics-control--slider">
              <SoapBubbleSlider value={spread} onValueChange={setSpread} label="Layer separation" from="#0a84ff" scale={1.65} />
              <p>Illustrative spacing · not to scale</p>
            </div>
            <SoapBubbleButton onClick={() => { setSpread(42); setAnnotations(true); }}>Reset view</SoapBubbleButton>
          </div>
          <p className="optics-footnote">Conceptual device architecture. Layer sequence and proportions are illustrative, not a released product specification.</p>
        </div>
      </SoapBubbleMaterial>
    </div>
  );
}

function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setLoaded(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="top" className={`hero ${loaded ? 'is-loaded' : ''}`}>
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-topline">
        <span>INDEPENDENT SWIR SENSOR DEVELOPMENT</span>
        <span className="hero-topline__right">BENGALURU, INDIA <b>·</b> 2026</span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="status-dot" /> VISION FOR PHYSICAL AI</div>
          <h1>See beyond<br /><em>what is visible.</em></h1>
          <p className="hero-lede">Building affordable, indigenous short-wave infrared image sensors with lead-free Indium Arsenide quantum dots on silicon CMOS.</p>
          <div className="hero-actions">
            <ChromaticButton
              color="#b126ff"
              colorMode="spectrum"
              speed={0.7}
              paused={false}
              phase={0}
              feather={100}
              projectionScale={174.7}
              intensity={1.4}
              grain={0.105}
              seed={7}
              borderRadius={50}
              hoverEffect="brighten"
              entrance="blur-up"
              entranceSpeed={1}
              entranceBlur={10}
              entranceDistance={20}
              entranceScale={0.65}
              onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore the technology <Arrow />
            </ChromaticButton>
            <a href="#mission" className="text-link text-link--muted">Our first mission <Arrow diagonal /></a>
          </div>
          <div className="hero-specs">
            <div><span>01 / MATERIAL</span><strong>InAs cQD</strong></div>
            <div><span>02 / PLATFORM</span><strong>Silicon CMOS</strong></div>
            <div><span>03 / PATH</span><strong>Lab to fab</strong></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img src="/assets/sensor-engraving.webp" alt="Illustrative engraved concept of a packaged SWIR image sensor chip with a silicon wafer and quantum-dot ink in the background" />
            <div className="hero-image-wash" />
            <div className="hero-image-caption"><span>FIG. 01</span><span>PACKAGED SENSOR / CONCEPT</span></div>
          </div>
          <div className="hero-visual-note"><span className="note-rule" />
            <span>Material science<br />meets silicon scale.</span>
          </div>
        </div>
      </div>
      <div className="hero-bottomline">
        <span>SHORT-WAVE INFRARED / SWIR</span>
        <span className="scroll-cue">SCROLL TO EXPLORE <span className="scroll-line" /></span>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro-section reveal-on-scroll" id="technology">
      <div className="section-grid">
        <div className="section-aside"><SectionLabel index="01">THE PLATFORM</SectionLabel></div>
        <div className="intro-main">
          <h2>For machines that<br /><span>need to see more.</span></h2>
          <div className="intro-copy-grid">
            <p className="intro-lede">Autonomous systems are moving into environments where visible-light cameras struggle. Short-wave infrared can reveal detail in low light and through obscurants such as smoke, haze, dust and light fog.</p>
            <p className="body-copy">The technology is proven. Its adoption is constrained by the cost of today's InGaAs sensors. Nova Spectral is developing a different route: lead-free InAs colloidal quantum dots integrated with standard silicon CMOS, with the aim of making SWIR sensing more accessible to the systems that need it.</p>
          </div>
          <div className="capability-strip">
            <div><span className="capability-index">A</span><strong>Beyond visible</strong><small>Short-wave infrared sensing</small></div>
            <div><span className="capability-index">B</span><strong>Lead-free materials</strong><small>Indium Arsenide cQD</small></div>
            <div><span className="capability-index">C</span><strong>Silicon integration</strong><small>CMOS-compatible direction</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Technology() {
  const stages = [
    ['01', 'Stability', 'Ink chemistry', 'Turning InAs quantum dots into stable, conductive ink.'],
    ['02', 'Uniformity', 'Film deposition', 'Coating the material into smooth, even films across the wafer.'],
    ['03', 'Efficiency', 'Charge transport', 'Building the layers that carry the signal out of the quantum-dot film.'],
    ['04', 'Compatibility', 'CMOS integration', 'Building the full stack on silicon CMOS readout wafers.'],
  ];

  return (
    <section className="technology-section reveal-on-scroll">
      <div className="section-grid">
        <div className="section-aside"><SectionLabel index="02">FROM LAB TO FAB</SectionLabel><p className="aside-note">A material-to-device programme, built around a clear integration path.</p></div>
        <div className="technology-main">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">DEVELOPMENT PROGRAMME</p>
              <h2>From quantum-dot ink<br />to a sensor on CMOS.</h2>
            </div>
            <span className="inline-index">PROCESS / 04 STAGES</span>
          </div>
          <div className="stage-list">
            {stages.map(([number, tag, title, description]) => (
              <article className="stage-row" key={number}>
                <span className="stage-number">{number}</span>
                <span className="stage-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <Arrow diagonal />
              </article>
            ))}
          </div>
          <LayerExplorer />
        </div>
      </div>
    </section>
  );
}

function Thesis() {
  return (
    <section className="thesis-section reveal-on-scroll" id="mission">
      <div className="thesis-topline">
        <SectionLabel index="03">THE THESIS</SectionLabel>
        <span className="eyebrow">PERCEPTION IS THE LIMIT</span>
      </div>
      <div className="thesis-main">
        <div className="thesis-heading">
          <h2>Intelligence is only<br />as good as <em>its eyes.</em></h2>
          <p>The intelligence is ready. The perception isn't. We are working to make SWIR sensing affordable and indigenous, so machines can act with better information in the environments that matter.</p>
        </div>
        <div className="thesis-points">
          <article><span>01 / THE BOTTLENECK</span><h3>Perception sets the ceiling.</h3><p>Every automated decision depends on what a sensor can resolve. When the input is incomplete, intelligence is working with a blind spot.</p></article>
          <article><span>02 / THE BLIND SPOT</span><h3>Real conditions are unforgiving.</h3><p>Darkness, glare, smoke, haze and dust are not edge cases for autonomous systems. They are part of the operating environment.</p></article>
          <article><span>03 / THE OPENING</span><h3>SWIR needs to travel further.</h3><p>Short-wave infrared can see beyond visible imaging, but current InGaAs systems remain too expensive for broad deployment.</p></article>
        </div>
      </div>
      <div className="spectrum-stage">
        <div className="spectrum-copy">
          <span className="eyebrow">A DIFFERENT SENSING WINDOW</span>
          <h3>Not more intelligence.<br /><em>Better perception.</em></h3>
          <p>SWIR gives machines another way to read the world when visible light is not enough.</p>
        </div>
        <div className="refracted-word" aria-label="SWIR refracted text visual">
          <RefractedText
            text={'SWIR'}
            theme={'dark'}
            topColor={'auto'}
            bottomColor={'auto'}
            beamColor={'auto'}
            spectrumWarmColor={'auto'}
            spectrumMiddleColor={'auto'}
            spectrumCoolColor={'auto'}
            reveal={true}
            stagger={0.55}
            liftDuration={1.75}
            ease={'power4.out'}
            beamFollowsLift={false}
            animateBeam={true}
            openingDuration={6.9}
            duration={13.2}
            intensity={1.2}
            dispersion={1}
            colorIntensity={1}
            beamPosition={0.5}
            fixedBeam={false}
            paused={false}
            cursorMovesBeam={false}
            fontSize={'400px'}
            fontFamily={"'ReactDrops Square Display', 'Arial Black', sans-serif"}
            fontWeight={900}
            letterSpacing={'normal'}
            extraBold={2.25}
            fontHeight={80}
            cornerRounding={1}
          />
        </div>
        <div className="spectrum-foot"><span>VISIBLE LIGHT</span><span>SHORT-WAVE INFRARED</span><span>EXTENDED PERCEPTION</span></div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="gallery-section reveal-on-scroll">
      <div className="gallery-heading">
        <div><SectionLabel index="04">THE MATERIAL JOURNEY</SectionLabel><h2>Small dimensions.<br /><em>Big implications.</em></h2></div>
        <p>From ink chemistry to a packaged sensor, each step must work as part of one integrated system.</p>
      </div>
      <div className="gallery-wrap">
        <FanGallery
          items={galleryItems}
          cardWidth={162}
          aspectRatio={0.8}
          spacing={0.69}
          curve={0.14}
          tilt={14.5}
          lift={42}
          spread={0.2}
          stackFrom={'left'}
          speed={0.7}
          stagger={0.09}
          bounce={0.35}
          hoverSpeed={0.28}
          radius={18}
          entrance={'stack'}
          trigger={'scroll'}
          viewportStart={75}
          once={true}
          showTitle={false}
        />
      </div>
      <div className="gallery-caption"><span>01—05 / ILLUSTRATIVE RESEARCH IMAGERY</span><span>HAND-ETCHED CONCEPT ART / NOT DEVICE PHOTOGRAPHS</span></div>
    </section>
  );
}

function Mission() {
  return (
    <section className="mission-section reveal-on-scroll">
      <div className="mission-image">
        <img src="/assets/gallery/05-field-sensing.webp" alt="Engraved concept illustration of a sensor-equipped drone above a misty landscape" loading="lazy" />
        <div className="mission-image-stamp"><span>MISSION</span><strong>DRISHYATECH</strong><small>FIRST APPLICATION / DEFENCE</small></div>
      </div>
      <div className="mission-copy">
        <SectionLabel index="05">OUR FIRST MISSION</SectionLabel>
        <p className="eyebrow mission-eyebrow">SOVEREIGN SENSING FOR INDIA</p>
        <h2>Eyes for the<br /><em>environments<br />that matter.</em></h2>
        <p className="mission-lede">SWIR imaging for drones, ISR and the soldier — being developed in India.</p>
        <p className="body-copy">Critical infrared detectors in India's night sights, drone payloads and ISR systems are often imported. Mission DrishyaTech is Nova Spectral's first mission: an indigenous SWIR image sensor chip for platforms that must see first and act with confidence.</p>
        <div className="mission-target"><span>DEVELOPMENT TARGET</span><strong>Field-ready prototype</strong><small>Target horizon: 18 months</small></div>
        <div className="mission-tags"><span>SEE IN THE DARK</span><span>SEE THROUGH</span><span>SEE THE HIDDEN</span></div>
      </div>
    </section>
  );
}

function Applications() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return applications;
    return applications.filter((item) => `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(q));
  }, [query]);

  return (
    <section className="applications-section reveal-on-scroll" id="applications">
      <div className="applications-heading">
        <div><SectionLabel index="06">APPLICATIONS</SectionLabel><h2>Defence first.<br /><em>Then the world's devices.</em></h2></div>
        <div className="applications-intro"><p>Defence is the toughest proving ground and the first market. The longer-term opportunity is a compact, affordable, lead-free SWIR chip that can be designed into a wider range of systems.</p><label className="application-search"><span>FILTER APPLICATIONS</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a field" aria-label="Search applications" /></label></div>
      </div>
      <div className="application-grid">
        {filtered.map((item) => (
          <article className="application-card" key={item.number}>
            <div className="application-card__top"><span>{item.number}</span><span>{item.category}</span></div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="application-rule" />
          </article>
        ))}
        {filtered.length === 0 && <p className="empty-search">No applications match that search.</p>}
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section className="roadmap-section reveal-on-scroll">
      <div className="section-grid">
        <div className="section-aside"><SectionLabel index="07">ROADMAP</SectionLabel><p className="aside-note">An ambitious path from materials research to field validation.</p></div>
        <div className="roadmap-main">
          <div className="roadmap-heading"><p className="eyebrow">DEVELOPMENT MILESTONES</p><h2>Lab to fab.<br /><em>Step by step.</em></h2></div>
          <div className="roadmap-list">
            {roadmap.map((item, index) => (
              <article className={`roadmap-row ${index === 0 ? 'is-current' : ''}`} key={item.year}>
                <div className="roadmap-year"><strong>{item.year}</strong><span>{item.status}</span></div>
                <div className="roadmap-detail"><h3>{item.title}</h3><p>{item.description}</p></div>
                <span className="roadmap-node" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="team-section reveal-on-scroll" id="team">
      <div className="team-heading"><SectionLabel index="08">THE TEAM</SectionLabel><h2>Built at the intersection<br />of <em>materials and scale.</em></h2></div>
      <div className="team-grid">
        <article className="team-card">
          <div className="team-monogram">AP</div>
          <div className="team-meta"><span>CO-FOUNDER / CEO & CTO</span><span>01</span></div>
          <h3>Dr. Anish Priyadarshi</h3>
          <p>Previously built a colloidal quantum-dot device fabrication and R&D facility, and developed InAs quantum-dot photodiodes for SWIR imaging. Industry experience includes CMOS wafer-scale manufacturing at GlobalFoundries and Nanoco. IIT Kanpur; PhD, NTU Singapore.</p>
          <a href="https://www.linkedin.com/in/anish-priyadarshi-3b52504" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
        </article>
        <article className="team-card">
          <div className="team-monogram team-monogram--alt">SK</div>
          <div className="team-meta"><span>CO-FOUNDER / CBO</span><span>02</span></div>
          <h3>Sanjeev Kumar</h3>
          <p>20+ years of commercial leadership across go-to-market strategy, P&L responsibility and building and scaling businesses. IIT Kanpur; IIM Lucknow.</p>
          <a href="https://www.linkedin.com/in/sanjeevkumar79" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
        </article>
        <aside className="team-aside">
          <span className="eyebrow">A SMALL, TECHNICAL TEAM</span>
          <p>Chemists, device physicists and engineers working on a difficult problem: taking a new sensing material from the lab into silicon.</p>
          <div className="team-skills"><span>QUANTUM-DOT CHEMISTRY</span><span>DEVICE PHYSICS</span><span>CMOS PROCESS</span><span>IMAGING & SYSTEMS</span></div>
        </aside>
      </div>
    </section>
  );
}

function Careers() {
  return (
    <section className="careers-section reveal-on-scroll">
      <div className="careers-left"><SectionLabel index="09">CAREERS</SectionLabel><h2>Help build the<br /><em>eyes of Physical AI.</em></h2></div>
      <div className="careers-right"><p>We are a small team taking a new kind of image sensor from the lab to the fab in India. If you want to work at the meeting point of materials science and silicon — on technology that ends up in a real chip — we would like to hear from you.</p><a href="mailto:careers@dhrisyatech.com" className="text-link">Explore opportunities <Arrow diagonal /></a></div>
    </section>
  );
}

function PhysicsInterlude() {
  return (
    <section className="physics-interlude" aria-label="Interactive motion study">
      <div className="physics-copy"><span className="eyebrow">A MATERIAL STUDY / 06 VOLUMES</span><h3>Form follows<br /><em>physics.</em></h3><p>A quiet interactive study of volume, balance and movement. Drag a form to set it in motion.</p></div>
      <div className="physics-canvas"><ShapePhysics height="260px" count={6} size={32} sizeVariation={0.14} spawnRate={1.4} depth="3d" seed={52490} /></div>
      <span className="physics-caption">SHAPE PHYSICS / INTERACTIVE CANVAS</span>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section reveal-on-scroll" id="contact">
      <div className="contact-top"><SectionLabel index="10">GET IN TOUCH</SectionLabel><span className="eyebrow">BENGALURU, INDIA</span></div>
      <div className="contact-main">
        <div><h2>Build what<br /><em>comes next.</em></h2><p>We welcome conversations with camera and device makers, CMOS and materials partners, research institutions and strategic investors.</p></div>
        <div className="contact-links">
          <a href="mailto:partnerships@dhrisyatech.com"><span>TECHNOLOGY PARTNERSHIPS</span><strong>partnerships@dhrisyatech.com</strong><Arrow diagonal /></a>
          <a href="mailto:invest@dhrisyatech.com"><span>INVESTMENT</span><strong>invest@dhrisyatech.com</strong><Arrow diagonal /></a>
          <a href="mailto:info@dhrisyatech.com"><span>GENERAL ENQUIRIES</span><strong>info@dhrisyatech.com</strong><Arrow diagonal /></a>
        </div>
      </div>
      <div className="contact-cta">
        <span>THE NEXT GENERATION OF SWIR SENSING STARTS HERE.</span>
        <ChromaticButton
          color={'#b126ff'}
          colorMode={'spectrum'}
          speed={0.7}
          paused={false}
          phase={0}
          feather={100}
          projectionScale={174.7}
          intensity={1.4}
          grain={0.105}
          seed={7}
          borderRadius={50}
          hoverEffect={'brighten'}
          entrance={'blur-up'}
          entranceSpeed={1}
          entranceBlur={10}
          entranceDistance={20}
          entranceScale={0.65}
          onClick={() => { window.location.href = 'mailto:partnerships@dhrisyatech.com'; }}
        >
          Start a conversation <Arrow diagonal />
        </ChromaticButton>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <a href="#top" className="brand brand--footer" aria-label="Nova Spectral, back to top">
        <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>
        <span className="brand-wordmark">NOVA<span>SPECTRAL</span></span>
      </a>
      <div className="footer-center"><span>VISION FOR PHYSICAL AI</span><span>© {new Date().getFullYear()} NOVA SPECTRAL AI PRIVATE LIMITED</span></div>
      <a href="#top" className="back-top">BACK TO TOP <span>↑</span></a>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal-on-scroll'));
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell" data-theme="dark">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Technology />
        <Thesis />
        <Gallery />
        <Mission />
        <Applications />
        <Roadmap />
        <PhysicsInterlude />
        <Team />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
