"use client";

import { useEffect, useRef } from "react";

// ─── inline the full optimised HTML site as a client component ───
// The complete SPA lives in a single <div> with dangerouslySetInnerHTML.
// All JS is inlined as a <script> tag injected after mount so Next.js
// hydration is not blocked and the page scores well on Core Web Vitals.

const SITE_HTML = `
<!-- paste the full <body> content from your index.html here
     (everything between <body> and </body>, excluding <script> tags) -->
<div id="pantera-app">
  <!-- NAV, all .page divs, FOOTER, FLOAT buttons, MODAL go here -->
  <!-- Copy from your index.html artifact -->
</div>
`;

const SITE_JS = `
(function(){
  'use strict';
  // ── paste the full <script> block from your index.html here ──
  // goTo(), toggleMob(), countdown, directions, video logic, etc.
})();
`;

export default function Home() {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Inject the SPA script after React hydration
    const script = document.createElement("script");
    script.textContent = SITE_JS;
    script.id = "pantera-spa-js";
    document.body.appendChild(script);
    scriptRef.current = script;

    return () => {
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current);
      }
    };
  }, []);

  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SITE_HTML }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────────
   HOW TO COMPLETE THIS FILE
   ─────────────────────────────────────────────────────────────────
   1. Open the main site artifact (remixed-af7f06c6) in Claude
   2. Copy everything between <body> and </body>
      — stop before the final <script> tag
   3. Paste it into SITE_HTML above (replace the comment placeholder)
   4. Copy the content of the final <script> block
   5. Paste it into SITE_JS above (replace the comment placeholder)
   6. Run: npm run dev  →  http://localhost:3000
   ───────────────────────────────────────────────────────────────── */
