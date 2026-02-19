For detailed build, testing, and code style guidelines, see [AGENTS.md](./AGENTS.md).

This repository defaults to using Bun instead of Node.js. Key differences:
- Bun automatically loads `.env` files, no need for dotenv
- Use `bunx <package> <command>` instead of `npx`

Refer to AGENTS.md for complete API conventions, testing setup, and frontend/server patterns.

For more information, read the Bun API docs in `node_modules/bun-types/docs/**.mdx`.
