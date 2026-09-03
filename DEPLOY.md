# Deploy Starshows en servidor propio

## Requisitos VPS
- Ubuntu 22.04/24.04, 4GB RAM, 2 vCPU, 40GB SSD
- Puertos 80/443 abiertos
- DNS A: starshows.ec, api.starshows.ec, admin.starshows.ec, minio.starshows.ec → IP del VPS

## Pasos (5 minutos)
```bash
# 1. En su máquina local
scp -r starshows-selfhosted root@SU_IP:/opt/starshows

# 2. En el VPS
ssh root@SU_IP
cd /opt/starshows
cp .env.example .env
nano .env  # cambiar DB_PASSWORD, REDIS_PASSWORD, JWT_SECRET (openssl rand -hex 32), DIRECTUS_KEY

chmod +x deploy.sh
./deploy.sh

# 3. Verificación (deploy evidence)
curl -s https://starshows.ec | head -20
curl -s https://api.starshows.ec/api/events | head -20
docker compose ps
docker compose logs --tail 30
```

## Evidencia de deploy
- `docker compose ps` → todos healthy
- `curl https://starshows.ec` → HTML con SISTEMA STAR / EN ÓRBITA / CONSTELACIÓN
- `curl https://api.starshows.ec/api/events` → JSON []
- Directus login en https://admin.starshows.ec

## Backup diario (agregar a crontab)
```bash
0 3 * * * docker compose exec -T postgres pg_dump -U starshows starshows | gzip > /opt/backups/starshows-$(date +\%F).sql.gz
```
