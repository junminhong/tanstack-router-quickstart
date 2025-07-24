# Tanstack Router Quickstart

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/junminhong/tanstack-router-quickstart/pulls)
[![React v19](https://img.shields.io/badge/React-v19-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.x-yellowgreen?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

**Tanstack Router Quickstart** 是一個現代化的前端開發模板，旨在解決現代前端開發中重複的環境配置問題。

它整合了 **TanStack Router**、**React v19**、**Vite**、**Tailwind CSS v4** 與 **Biome**，讓開發者能夠跳過繁瑣的設定，專注於核心業務邏輯的實現。

## 核心特色

*   **先進的技術整合**：採用業界領先的工具，確保高效能與優質的開發體驗。
*   **型別安全的檔案式路由**：藉由 TanStack Router，透過檔案結構直觀地管理路由，並享受完整的 TypeScript 型別支援。
*   **極致的開發體驗**：整合 Vite 提供閃電般的熱模組替換 (HMR)，並利用 Biome 在存檔時自動格式化與修正程式碼。
*   **零配置啟動**：複製專案、安裝依賴後即可立即投入開發，無需額外配置。

## 快速入門指南

請遵循以下步驟以快速啟動專案。

1.  **複製儲存庫 (Clone Repository)**

    ```bash
    git clone https://github.com/junminhong/tanstack-router-quickstart.git
    cd tanstack-router-quickstart
    ```

2.  **安裝依賴 (Install Dependencies)**

    本專案推薦使用 `pnpm` 作為套件管理器。

    ```bash
    pnpm install
    ```

3.  **啟動開發伺服器 (Start Development Server)**

    ```bash
    pnpm dev
    ```

    開發伺服器將會啟動於 [http://localhost:3000](http://localhost:3000)。開啟瀏覽器造訪此網址，即可開始進行開發。

## 專案結構

```
tanstack-router-quickstart/
├── biome.json             # Biome 格式化與 Lint 工具的設定檔
├── LICENSE.md             # MIT 授權條款
├── package.json           # 專案依賴與腳本定義
├── pnpm-lock.yaml         # 鎖定依賴套件版本，確保環境一致性
├── tsconfig.json          # TypeScript 編譯器設定
├── vite.config.ts         # Vite 建置工具設定檔
└── src/
    ├── router.tsx         # TanStack Router 的實例化與路由配置
    ├── routeTree.gen.ts   # 由 TanStack Router 自動生成的路由樹 (請勿手動修改)
    ├── routes/
    │   ├── __root.tsx     # 根路由元件 (作為所有頁面的根佈局)
    │   └── index.tsx      # 首頁路由元件 (對應 '/')
    └── styles/
        └── app.css        # 全域樣式與 Tailwind CSS 基礎指令
```

## 可用腳本 (NPM Scripts)

您可以在 `package.json` 中找到以下可執行的腳本：

| 指令 | 說明 |
| :--- | :--- |
| `pnpm dev` | 啟動 Vite 開發伺服器，並啟用熱模組替換 (HMR)。 |
| `pnpm build` | 執行生產環境打包，將最佳化後的檔案輸出至 `dist/` 目錄。 |
| `pnpm format` | 使用 Biome 格式化專案中的所有檔案 (`biome format --write`)。 |
| `pnpm lint` | 使用 Biome 檢查程式碼中的語法及風格問題 (`biome lint --apply`)。 |
| `pnpm check` | 執行格式化與語法檢查，並自動修復所有可修復的問題 (`biome check --apply`)。 |

## 貢獻指南

我們歡迎任何形式的貢獻，無論是回報問題、提出建議，或是提交程式碼。

*   **回報問題 (Issues)**：如果您發現任何錯誤或有功能建議，請至 [Issues](https://github.com/junminhong/tanstack-router-quickstart/issues) 頁面提交。
*   **提交合併請求 (Pull Requests)**：如果您希望貢獻程式碼，請先 Fork 本專案，在您的分支上完成修改後，再提交 Pull Request。

## 授權條款

本專案採用 MIT 授權條款。詳細資訊請參閱 [LICENSE.md](LICENSE.md) 檔案。
