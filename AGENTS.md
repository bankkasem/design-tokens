# Agents Guide

This repository uses Bun as the default JavaScript runtime. Follow these guidelines when working with this codebase.

## Build & Development Commands

### Dependency Management
- `bun install` - Install dependencies (preferred over npm/yarn/pnpm)
- `bun add <package>` - Add a dependency
- `bun add -d <package>` - Add a dev dependency

### Running Code
- `bun run <file>` - Execute TypeScript/JavaScript files
- `bun --hot <file>` - Run with hot module replacement for development
- `bun build <file>` - Bundle files for production

### Testing
- `bun test` - Run all tests (uses Bun's built-in test runner)
- `bun test <pattern>` - Run specific tests matching a pattern
- `bun test --watch` - Run tests in watch mode

No lint or typecheck scripts are currently configured. Add them to package.json if needed.

## Code Style Guidelines

### TypeScript Configuration
- Strict mode is enabled (`strict: true`)
- Target: ESNext with bundler module resolution
- .ts extensions are allowed in imports (`allowImportingTsExtensions: true`)
- All imports must include file extensions (`verbatimModuleSyntax: true`)
- No unchecked indexed access (`noUncheckedIndexedAccess: true`)
- Explicit override required for inherited members (`noImplicitOverride: true`)

### Import Conventions
- Use Bun APIs over Node.js equivalents:
  - `Bun.file()` instead of `fs.readFile/writeFile`
  - `bun:sqlite` instead of `better-sqlite3`
  - `Bun.redis` instead of `ioredis`
  - `Bun.sql` instead of `pg` or `postgres.js`
  - Built-in `WebSocket` instead of `ws`
- Prefer Bun.$ over execa for shell commands
- Use `import type { ... }` for type-only imports
- No bare specifiers - always include file extensions

### Naming Conventions
- Use camelCase for variables and functions
- Use PascalCase for classes, components, and types
- Use UPPER_SNAKE_CASE for constants
- Use kebab-case for filenames

### Error Handling
- Always use try-catch with async operations
- Provide meaningful error messages
- Never expose secrets or keys in error messages
- Use proper TypeScript error types

### Code Organization
- Keep files focused on a single responsibility
- Export main functionality as default when appropriate
- Use named exports for utilities and types
- Organize imports: external libraries → internal modules → relative imports

### Server & Frontend (if applicable)
- Use `Bun.serve()` for servers, not Express
- Use HTML imports with `Bun.serve()` for frontend, not Vite
- Implement WebSocket support via `Bun.serve({ websocket: ... })`
- Import CSS/TSX files directly in HTML

### Formatting & Comments
- Do not add comments unless explicitly requested
- Keep code self-documenting through clear naming
- Use concise, direct variable names

### Commit Guidelines
- Only commit when explicitly requested
- Use conventional commit messages if committing
- Never commit secrets or credentials (.env files)
- Run tests and build before committing if available

### Testing Guidelines
- Use Bun test framework (`import { test, expect } from "bun:test"`)
- Place test files alongside source files or in a test directory
- Name test files: `<name>.test.ts` or `<name>.spec.ts`
- Write descriptive test names that explain what is being tested
- Use `expect()` assertions from bun:test

## Project Structure

See [README.md](README.md) for complete project structure overview and token documentation.

Key files:
- `tokens/` - JSON token definitions (color, typography, components, etc.)
- `scripts/` - Build scripts for token transformation
- `dist/` - Generated output (CSS variables, etc.)
- `docs/` - Project documentation
  - `FLOW.md` - Architecture notes and setup guide
  - `TODO.md` - Project roadmap
- `index.ts` - Main entry point for token exports
- `AGENTS.md` - This file - Development guidelines

## Notes

This is a minimal Bun project. There are no configured linting, formatting, or build tools. Add them to package.json as the project grows.
