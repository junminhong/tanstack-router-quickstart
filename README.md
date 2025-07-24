# Tanstack Router Quickstart

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/junminhong/tanstack-router-quickstart/pulls)
[![React v19](https://img.shields.io/badge/React-v19-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.x-yellowgreen?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

[繁體中文](README_zh_hant.md)

**Tanstack Router Quickstart** is a modern frontend development template designed to eliminate the repetitive environment setup in modern frontend development.

It integrates **TanStack Router**, **React v19**, **Vite**, **Tailwind CSS v4**, and **Biome**, allowing developers to skip the tedious configuration and focus on implementing core business logic.

## Core Features

*   **Advanced Tech Stack**: Integrates industry-leading tools to ensure high performance and a superior development experience.
*   **Type-Safe File-Based Routing**: Leverages TanStack Router to manage routes intuitively through file structure, all with full TypeScript support.
*   **Optimized Developer Experience**: Features Vite for lightning-fast Hot Module Replacement (HMR) and Biome for automatic code formatting and linting on save.
*   **Zero-Configuration Start**: Clone the repository, install dependencies, and start developing immediately without any extra setup.

## Quick Start Guide

Follow these steps to get the project up and running.

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/junminhong/tanstack-router-quickstart.git
    cd tanstack-router-quickstart
    ```

2.  **Install Dependencies**

    This project recommends using `pnpm` as the package manager.

    ```bash
    pnpm install
    ```

3.  **Start the Development Server**

    ```bash
    pnpm dev
    ```

    The development server will start at [http://localhost:3000](http://localhost:3000). Open your browser and navigate to this URL to begin development.

## Project Structure

```
tanstack-router-quickstart/
├── biome.json             # Biome configuration for formatting and linting
├── LICENSE.md             # MIT License terms
├── package.json           # Project dependencies and scripts definition
├── pnpm-lock.yaml         # Lockfile for consistent dependency versions
├── tsconfig.json          # TypeScript compiler options
├── vite.config.ts         # Vite build tool configuration
└── src/
    ├── router.tsx         # TanStack Router instantiation and configuration
    ├── routeTree.gen.ts   # Auto-generated route tree by TanStack Router (Do not edit manually)
    ├── routes/
    │   ├── __root.tsx     # Root route component (serves as the main layout for all pages)
    │   └── index.tsx      # Index route component (maps to '/')
    └── styles/
        └── app.css        # Global styles and Tailwind CSS base directives
```

## Available Scripts

The following scripts are available in `package.json`:

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `pnpm build` | Builds the application for production, outputting optimized files to the `dist/` directory. |
| `pnpm format` | Formats all files in the project using Biome (`biome format --write`). |
| `pnpm lint` | Lints the codebase for syntax and style issues using Biome (`biome lint --apply`). |
| `pnpm check` | Runs both formatting and linting, applying all auto-fixable changes (`biome check --apply`). |

## Contributing

Contributions of all forms are welcome, whether it's reporting issues, suggesting enhancements, or submitting code.

*   **Reporting Issues**: If you find a bug or have a feature suggestion, please open an issue on the [Issues](https://github.com/junminhong/tanstack-router-quickstart/issues) page.
*   **Submitting Pull Requests**: If you would like to contribute code, please fork the repository, make your changes in a new branch, and then submit a Pull Request.

## License

This project is licensed under the MIT License. For more details, see the [LICENSE.md](LICENSE.md) file.
