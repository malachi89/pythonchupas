#!/bin/bash
set -euo pipefail

# === PythonChupas — Ubuntu 24 setup ===
# Usage:
#   1. Build locally: npm run build
#   2. Upload dist/index.html to the server
#   3. Run this script on the server
#   4. Access at http://<ip>:3000

APP_DIR=/var/www/pythonchupas

echo "[1/5] Installing nginx..."
sudo apt update
sudo apt install -y nginx

echo "[2/5] Allowing port 3000 in UFW..."
sudo ufw allow 3000/tcp

echo "[3/5] Creating app directory..."
sudo mkdir -p "$APP_DIR"

echo "[4/5] Copying nginx config..."
sudo cp deploy/nginx.conf /etc/nginx/sites-available/pythonchupas
sudo ln -sf /etc/nginx/sites-available/pythonchupas /etc/nginx/sites-enabled/

echo "[5/5] Enabling and starting nginx..."
sudo systemctl enable nginx
sudo systemctl restart nginx

echo "=== Done ==="
echo "Next step — upload dist/index.html and reload:"
echo "  sudo cp dist/index.html $APP_DIR/"
echo "  sudo systemctl reload nginx"
