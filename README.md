### 说明：

本项目目的是为了解决vercel直接部署CI/CD 测试专用。

- 代码包括 `App.js` 以及其他几个组件（Header、HeroSection、FeaturesSection 和 Footer）。
- `package.json` 定义了应用程序的依赖项和脚本。
- `vercel.json` 用于配置 Vercel 的设置，以确保 SPA（单页应用）可以正常工作。
- `public/index.html` 是项目的 HTML 模板。

### 启动项目步骤

1. **安装依赖**：
   在项目的根目录下，运行以下命令来安装项目的所有依赖：
   ```bash
   nvm use 16.20.2
   npm install
   ```

2. **启动开发服务器**：
   安装完成后，运行以下命令来启动开发服务器：
   ```bash
   npm start
   ```

   运行成功后，React 开发服务器会启动，并且可以通过在浏览器中访问 `http://localhost:3000` 来查看你的 Web UI 项目。

3. **构建生产环境版本**（可选）：
   如果你希望构建生产环境的版本，可以运行以下命令：
   ```bash
   npm run build
   ```

   该命令会在项目根目录下生成一个 `build` 文件夹，包含了项目的静态文件，可以用于生产部署。

### 部署到 Vercel

##### 步骤 1: 将代码推送到 GitHub 仓库。

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

将 `<your-github-repo-url>` 替换为你在 GitHub 上创建的仓库的 URL。

##### 步骤 2: 在 Vercel 创建新项目

1. **登录 Vercel**：访问 [Vercel](https://vercel.com/) 并登录，可以使用 GitHub 账号直接登录。
2. **创建新项目**：
   - 点击 **“New Project”**。
   - 点击 **“Import GitHub Repository”**。
   - 选择你要部署的 GitHub 仓库。
3. **配置部署设置**：
   - Vercel 会自动检测项目类型，并设置默认的构建命令为 `npm run build`，以及输出目录为 `build`。
   - 如果 Vercel 没有自动检测到这些信息，你可以在配置页面手动指定：
     - **Build Command**: `npm run build`
     - **Output Directory**: `build`
4. **点击“Deploy”按钮**：Vercel 会开始从你的 GitHub 仓库获取代码，并进行构建和部署。

##### 步骤 3: 部署成功后查看网站
- 部署成功后，Vercel 会为你生成一个唯一的域名。
- 你可以在 Vercel 项目面板中找到这个域名，并点击访问已部署的 Web UI 项目。

##### 持续集成和自动部署
- 连接 GitHub 后，每次你推送到主分支（或其他配置的分支），Vercel 会自动重新构建和部署最新版本。
- 你可以在 Vercel 的项目设置页面中管理自动部署的触发条件。