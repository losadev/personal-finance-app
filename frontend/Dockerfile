FROM node:20-alpine
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9.12.0 --activate

# Instala deps solo con manifiestos para cache
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# En dev copiarás el código con un volumen, pero dejamos un fallback:
COPY . .

EXPOSE 3001

# start:dev debe existir (nest start --watch / ts-node-dev)
CMD ["pnpm", "run", "dev"]