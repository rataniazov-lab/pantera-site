#!/bin/bash
# ─────────────────────────────────────────────
#  PANTERA LUXE — One-command project setup
#  Run: bash SETUP.sh
# ─────────────────────────────────────────────

set -e

echo "📁 Creating project structure..."

mkdir -p pantera-site/public
mkdir -p pantera-site/src/app

echo "📦 Copying files..."
# Move all files downloaded from Claude into pantera-site/

echo "📦 Installing dependencies..."
cd pantera-site
npm install

echo ""
echo "✅ Done! Next steps:"
echo ""
echo "  1. Open src/app/page.tsx"
echo "  2. Copy HTML from Claude artifact into SITE_HTML"
echo "  3. Copy JS from Claude artifact into SITE_JS"
echo "  4. Run: npm run dev"
echo "  5. Open: http://localhost:3000"
echo ""
echo "🚀 Deploy to Vercel:"
echo "  npx vercel --prod"
echo ""
