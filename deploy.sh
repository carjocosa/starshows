#!/usr/bin/env bash
set -e
echo "★ Starshows — Deploy en servidor propio"
if ! command -v docker &> /dev/null; then
  echo "Instalando Docker..."
  curl -fsSL https://get.docker.com | sh
  sudo usermod -aG docker $USER
fi
if [ ! -f .env ]; then
  cp .env.example .env
  echo "⚠️  Configure .env antes de continuar (DB_PASSWORD, JWT_SECRET, DIRECTUS_KEY)"
  exit 1
fi
echo "→ Levantando stack..."
docker compose up -d --build
echo "→ Esperando Postgres..."
until docker compose exec -T postgres pg_isready -U starshows; do sleep 2; done
echo "→ Migrando Prisma..."
docker compose exec -T api npx prisma migrate deploy || docker compose exec -T api npx prisma db push
docker compose exec -T api npx prisma generate
echo "→ Verificando servicios..."
docker compose ps
echo "→ Logs Caddy (TLS)..."
docker compose logs caddy --tail 20 || true
echo "✔ Deploy listo:"
echo "  Frontend: https://starshows.ec"
echo "  API: https://api.starshows.ec/api/events"
echo "  Admin Directus: https://admin.starshows.ec (cargar eventos con fecha+ciudad y precios USD)"
echo "  MinIO: https://minio.starshows.ec"
