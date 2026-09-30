# 待辦清單 Web App

這是在 GitHub Copilot 實戰工作坊中完成的待辦清單網頁應用程式，透過純前端技術提供日常待辦管理、主題切換與清單篩選功能。

## 線上展示

- 預期網址：[https://d11516133.github.io/school-work/](https://d11516133.github.io/school-work/)
- 狀態：GitHub Pages 已設定從 `main` / `/(root)` 部署；目前尚無部署記錄，網址仍待首次部署完成後驗證。

## 功能

- 新增待辦事項，空白內容不會新增。
- 勾選完成或取消完成；完成項目會顯示刪除線並淡化。
- 刪除個別待辦事項。
- 即時顯示整份清單的未完成數量，不受目前篩選條件影響。
- 依全部、未完成或已完成篩選待辦事項，並在沒有符合項目時顯示提示。
- 手動切換淺色與深色模式；未手動選擇時跟隨作業系統偏好，並記住手動選擇。
- 透過 `localStorage` 保存待辦資料，重新整理後仍可保留。
- 採用響應式版面，支援手機螢幕。

## 技術

- HTML、CSS、原生 JavaScript。
- 不使用前端框架或套件，不需 `package.json` 或建置流程。
- 使用 CSS 變數管理主題色彩，並以 `prefers-color-scheme` 偵測系統色彩偏好。
- 使用瀏覽器 `localStorage` 儲存待辦與手動主題偏好。

## 開發方式

- 使用 GitHub Copilot Agent Mode 協助跨檔案實作與驗證待辦功能。
- 以 Git 版本控制保存階段成果，並練習透過提交與範本檔案還原專案。
- 建立 `.github/copilot-instructions.md` 專案規則，以及 `.github/prompts/fix-issue.prompt.md` issue 修復流程；劇本會先提出計畫並等待確認。
- 已建立 `.vscode/mcp.json`，設定 Microsoft Learn 與 GitHub MCP Server；MCP Server 的啟動與 GitHub 授權仍待在 VS Code 完成，本次尚未透過 MCP 工具操作遠端 issue。
- GitHub issue 修復劇本尚未執行，目前沒有由該流程建立的 Pull Request。

## 我學到什麼

- 把技術限制與驗收條件寫清楚，能讓多檔案修改更容易檢查。
- AI 產出的程式仍需要執行測試、檢查差異並由人確認。
- Git 提交、還原與已準備好的解答檔能降低嘗試新功能的風險。
- 專案指示與可重複使用的 Prompt 能把協作規則保存到版本庫。
- 深淺色主題除了配色，也要檢查文字、按鈕及控制項的對比度。