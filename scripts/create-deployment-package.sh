#!/bin/bash

# Create deployment packages for LeapGen.AI
# This script creates both production-ready and source code packages

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="leapgen-ai"
VERSION=$(node -p "require('./package.json').version" 2>/dev/null || echo "1.0.0")
DATE=$(date +%Y%m%d-%H%M%S)
OUTPUT_DIR="deployment-packages"

echo -e "${BLUE}📦 Creating deployment packages for $PROJECT_NAME v$VERSION${NC}"

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Build the application
echo "🏗️  Building production application..."
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Build failed - dist directory not found${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully${NC}"

# Create production deployment package
echo "📦 Creating production deployment package..."

PRODUCTION_PACKAGE="$OUTPUT_DIR/${PROJECT_NAME}-production-v${VERSION}-${DATE}.zip"

# Create temporary directory for production package
TEMP_PROD_DIR=$(mktemp -d)
cp -r dist/* "$TEMP_PROD_DIR/"

# Copy essential configuration files
cp netlify.toml "$TEMP_PROD_DIR/" 2>/dev/null || true
cp vercel.json "$TEMP_PROD_DIR/" 2>/dev/null || true
cp public/robots.txt "$TEMP_PROD_DIR/" 2>/dev/null || true

# Create deployment instructions
cat > "$TEMP_PROD_DIR/DEPLOYMENT_INSTRUCTIONS.txt" << EOF
LeapGen.AI Production Deployment Package
========================================

Version: $VERSION
Build Date: $(date)
Package Contents:
- Built application files (optimized for production)
- Configuration files for hosting platforms
- Deployment instructions

Deployment Instructions:
1. Extract this package to your web server's document root
2. Configure your web server to serve index.html for all routes (SPA routing)
3. Set up SSL/HTTPS (required for optimal performance)
4. Configure caching headers as specified in DEPLOYMENT.md

Hosting Platform Quick Deploy:
- Netlify: Use netlify.toml configuration
- Vercel: Use vercel.json configuration  
- AWS S3: Upload files and configure CloudFront
- Traditional servers: See nginx/apache configuration examples

For detailed instructions, see DEPLOYMENT.md in the source package.

Support: https://github.com/leapgen-ai/support
Documentation: https://docs.leapgen.ai
EOF

# Create the production zip
(cd "$TEMP_PROD_DIR" && zip -r "../$PRODUCTION_PACKAGE" . -q)
rm -rf "$TEMP_PROD_DIR"

echo -e "${GREEN}✅ Production package created: $PRODUCTION_PACKAGE${NC}"

# Create source code package
echo "📦 Creating source code package..."

SOURCE_PACKAGE="$OUTPUT_DIR/${PROJECT_NAME}-source-v${VERSION}-${DATE}.zip"

# Create temporary directory for source package
TEMP_SOURCE_DIR=$(mktemp -d)
PROJECT_DIR="$TEMP_SOURCE_DIR/$PROJECT_NAME"
mkdir -p "$PROJECT_DIR"

# Copy source files (exclude node_modules, dist, and other build artifacts)
rsync -av \
    --exclude='node_modules' \
    --exclude='dist' \
    --exclude='.git' \
    --exclude='*.log' \
    --exclude='.env*' \
    --exclude='deployment-packages' \
    --exclude='coverage' \
    --exclude='.nyc_output' \
    . "$PROJECT_DIR/"

# Create setup instructions
cat > "$PROJECT_DIR/SETUP_INSTRUCTIONS.txt" << EOF
LeapGen.AI Source Code Package
==============================

Version: $VERSION
Package Date: $(date)

Prerequisites:
- Node.js 18+ (https://nodejs.org/)
- npm (comes with Node.js)

Setup Instructions:
1. Extract this package
2. Open terminal in the project directory
3. Run: npm install
4. Run: npm run dev (for development)
5. Run: npm run build (for production build)

Available Commands:
- npm run dev        # Start development server
- npm run build      # Create production build
- npm run preview    # Preview production build
- npm run lint       # Run code linting

Project Structure:
- src/               # Source code
- public/            # Static assets
- docs/              # Documentation
- scripts/           # Deployment scripts

For detailed documentation, see:
- README.md          # Getting started guide
- DEPLOYMENT.md      # Deployment instructions
- TECHNICAL_SPECS.md # Technical documentation

Support: https://github.com/leapgen-ai/support
Documentation: https://docs.leapgen.ai
EOF

# Create the source zip
(cd "$TEMP_SOURCE_DIR" && zip -r "../$SOURCE_PACKAGE" . -q)
rm -rf "$TEMP_SOURCE_DIR"

echo -e "${GREEN}✅ Source package created: $SOURCE_PACKAGE${NC}"

# Create checksums
echo "🔐 Creating checksums..."
CHECKSUM_FILE="$OUTPUT_DIR/checksums-v${VERSION}-${DATE}.txt"

(cd "$OUTPUT_DIR" && {
    echo "SHA256 Checksums for LeapGen.AI v$VERSION packages"
    echo "Generated: $(date)"
    echo "================================================="
    echo ""
    sha256sum "$(basename "$PRODUCTION_PACKAGE")"
    sha256sum "$(basename "$SOURCE_PACKAGE")"
}) > "$CHECKSUM_FILE"

echo -e "${GREEN}✅ Checksums created: $CHECKSUM_FILE${NC}"

# Display package information
echo ""
echo -e "${BLUE}📋 Package Summary${NC}"
echo "=================="
echo "Version: $VERSION"
echo "Build Date: $(date)"
echo ""
echo "Production Package:"
echo "  File: $(basename "$PRODUCTION_PACKAGE")"
echo "  Size: $(du -h "$PRODUCTION_PACKAGE" | cut -f1)"
echo "  Contains: Built application ready for deployment"
echo ""
echo "Source Package:"
echo "  File: $(basename "$SOURCE_PACKAGE")"
echo "  Size: $(du -h "$SOURCE_PACKAGE" | cut -f1)"
echo "  Contains: Complete source code with documentation"
echo ""
echo "Checksums:"
echo "  File: $(basename "$CHECKSUM_FILE")"
echo ""
echo -e "${GREEN}🎉 All packages created successfully!${NC}"
echo ""
echo "Next steps:"
echo "1. Test the production package on a staging environment"
echo "2. Deploy to production using your preferred platform"
echo "3. Monitor performance and functionality"
echo ""
echo "For deployment instructions, see DEPLOYMENT.md"