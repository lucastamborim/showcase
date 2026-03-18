import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Tamborim da Silva</title>
        <meta
          name="description"
          content="Lucas Tamborim da Silva — Developer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0a0a0a;
          --surface: #111111;
          --border: #1e1e1e;
          --accent: #c8f135;
          --accent2: #ff5c3a;
          --text: #f0ede6;
          --muted: #555555;
          --font-display: 'Syne', sans-serif;
          --font-mono: 'DM Mono', monospace;
        }

        html, body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-display);
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Grain overlay */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.035;
          pointer-events: none;
          z-index: 9999;
        }

        .page {
          min-height: 100vh;
          display: grid;
          grid-template-rows: 1fr auto;
          padding: 0;
        }

        /* ─── HERO ─── */
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          position: relative;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 60px 56px;
          border-right: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }

        .hero-left::before {
          content: '';
          position: absolute;
          top: -200px;
          left: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(200, 241, 53, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .tag {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          gap: 10px;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 0.1s;
        }

        .tag::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: var(--accent);
        }

        .hero-name {
          font-size: clamp(52px, 6vw, 96px);
          font-weight: 800;
          line-height: 0.92;
          letter-spacing: -0.03em;
          margin-bottom: 32px;
          opacity: 0;
          animation: fadeUp 0.7s ease forwards 0.2s;
        }

        .hero-name span {
          display: block;
        }

        .hero-name .highlight {
          color: var(--accent);
          position: relative;
        }

        .hero-desc {
          font-family: var(--font-mono);
          font-size: 14px;
          line-height: 1.8;
          color: var(--muted);
          max-width: 380px;
          margin-bottom: 48px;
          opacity: 0;
          animation: fadeUp 0.7s ease forwards 0.35s;
        }

        .hero-desc em {
          color: var(--text);
          font-style: italic;
          font-weight: 300;
        }

        .links {
          display: flex;
          gap: 16px;
          opacity: 0;
          animation: fadeUp 0.7s ease forwards 0.5s;
        }

        .link-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text);
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.05em;
          text-decoration: none;
          text-transform: uppercase;
          transition: all 0.25s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .link-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--accent);
          transform: translateY(100%);
          transition: transform 0.25s ease;
          z-index: 0;
        }

        .link-btn:hover::before { transform: translateY(0); }
        .link-btn:hover { color: var(--bg); border-color: var(--accent); }
        .link-btn:hover svg { color: var(--bg); }

        .link-btn svg, .link-btn span { position: relative; z-index: 1; }

        .link-btn svg {
          width: 16px;
          height: 16px;
          transition: color 0.25s ease;
        }

        /* ─── HERO RIGHT ─── */
        .hero-right {
          display: flex;
          flex-direction: column;
          padding: 60px 56px;
          position: relative;
        }

        .hero-right::after {
          content: '';
          position: absolute;
          bottom: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 92, 58, 0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .index-number {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.1em;
          margin-bottom: auto;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 0.15s;
        }

        .big-initial {
          font-size: clamp(200px, 25vw, 360px);
          font-weight: 800;
          line-height: 0.85;
          letter-spacing: -0.05em;
          color: transparent;
          -webkit-text-stroke: 1px var(--border);
          position: absolute;
          right: 40px;
          top: 50%;
          transform: translateY(-50%);
          user-select: none;
          opacity: 0;
          animation: fadeIn 1.2s ease forwards 0.6s;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: var(--surface);
          border: 1px solid var(--border);
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--muted);
          margin-bottom: 40px;
          width: fit-content;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 0.7s;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          animation: pulse 2s ease infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .skill-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          margin-top: auto;
          opacity: 0;
          animation: fadeUp 0.7s ease forwards 0.85s;
        }

        .skill-cell {
          background: var(--bg);
          padding: 20px 22px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
          transition: background 0.2s ease, color 0.2s ease;
          cursor: default;
        }

        .skill-cell:hover {
          background: var(--surface);
          color: var(--text);
        }

        .skill-cell strong {
          display: block;
          font-size: 13px;
          color: var(--text);
          letter-spacing: 0.02em;
          margin-bottom: 4px;
          font-family: var(--font-display);
          font-weight: 700;
        }

        /* ─── FOOTER ─── */
        .footer {
          border-top: 1px solid var(--border);
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .footer-left {
          padding: 24px 56px;
          border-right: 1px solid var(--border);
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .footer-left a {
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s ease;
          letter-spacing: 0.05em;
        }

        .footer-left a:hover { color: var(--accent); }

        .footer-right {
          padding: 24px 56px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          display: flex;
          align-items: center;
          justify-content: flex-end;
          letter-spacing: 0.05em;
        }

        /* ─── DIVIDER LINE ─── */
        .h-rule {
          width: 100%;
          height: 1px;
          background: var(--border);
        }

        /* ─── ANIMATIONS ─── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 768px) {
          .hero {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .hero-left {
            border-right: none;
            border-bottom: 1px solid var(--border);
            padding: 48px 32px;
          }

          .hero-right {
            padding: 48px 32px;
          }

          .big-initial {
            font-size: 220px;
            right: 16px;
            opacity: 0.5;
          }

          .footer {
            grid-template-columns: 1fr;
          }

          .footer-left {
            border-right: none;
            border-bottom: 1px solid var(--border);
            padding: 20px 32px;
          }

          .footer-right {
            padding: 20px 32px;
            justify-content: flex-start;
          }
        }
      `}</style>

      <div className="page">
        <div className="hero">
          {/* LEFT */}
          <div className="hero-left">
            <div className="tag">Portfolio — 2026</div>

            <h1 className="hero-name">
              <span>Lucas</span>
              <span>Tamborim</span>
              <span className="highlight">da Silva</span>
            </h1>

            <p className="hero-desc">
              Desenvolvedor full stack com experiência em <em>web e mobile</em>.
              Do frontend em React até APIs REST com Node e Django — código{" "}
              preciso, produto que funciona.
            </p>

            <div className="links">
              <a
                href="https://www.linkedin.com/in/lucastamborim/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/lucastamborim"
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <div className="index-number">LTS — 001</div>

            <div className="big-initial">L</div>

            <div className="status-badge">
              <span className="status-dot" />
              Disponível para projetos
            </div>

            <div className="skill-grid">
              <div className="skill-cell">
                <strong>Frontend</strong>
                React · React Native · TypeScript
              </div>
              <div className="skill-cell">
                <strong>Backend</strong>
                Node.js · Python · Django · DRF
              </div>
              <div className="skill-cell">
                <strong>Banco de Dados</strong>
                MySQL
              </div>
              <div className="skill-cell">
                <strong>DevOps</strong>
                Docker · Bitbucket
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-left">
            <a
              href="https://www.linkedin.com/in/lucastamborim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/lucastamborim
            </a>
            <a
              href="https://github.com/lucastamborim"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/lucastamborim
            </a>
          </div>
          <div className="footer-right">© 2026 Lucas Tamborim da Silva</div>
        </footer>
      </div>
    </>
  );
}
