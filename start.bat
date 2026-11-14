@echo off
title Personal Portfolio - TRAN NGOC PHUONG
cd /d "%~dp0"
set "PATH=%~dp0.tools\node;%PATH%"
echo ========================================================
echo   Launching Portfolio - TRAN NGOC PHUONG
echo   Nganh: Su pham Am nhac - DH Su pham Nghe thuat TW
echo ========================================================
echo   Local URL: http://localhost:3000
echo.
npm run dev
pause
