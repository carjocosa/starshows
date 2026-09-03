FROM node:20-alpine AS builder
WORKDIR /app
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install
COPY frontend ./frontend
RUN cd frontend && npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/frontend/.next ./frontend/.next
COPY --from=builder /app/frontend/package*.json ./frontend/
COPY --from=builder /app/frontend/public ./frontend/public 2>/dev/null || true
WORKDIR /app/frontend
RUN npm install --omit=dev
EXPOSE 3000
CMD ["npm","start"]
