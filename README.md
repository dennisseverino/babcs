# BABCS

BABCS is currently a React frontend project. The backend and its technology
stack have not been selected yet.

## Tech Stack

- React
- TypeScript
- Vite
- ESLint

## Project Structure

```text
babcs/
|-- frontend/        React application
|   |-- public/      Static files
|   `-- src/         Application source code
`-- README.md        Project and contributor instructions
```

## Prerequisites

Install the following before setting up the project:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (use a current LTS release)
- npm (included with Node.js)

Check that they are installed:

```powershell
git --version
node --version
npm --version
```

## Local Setup

1. Clone the repository:

   ```powershell
   git clone https://github.com/dennisseverino/babcs.git
   cd babcs
   ```

2. Install the frontend dependencies:

   ```powershell
   cd frontend
   npm install
   ```

3. Start the development server:

   ```powershell
   npm run dev
   ```

4. Open the local URL displayed by Vite in the terminal.

## Available Commands

Run these commands from the `frontend` directory:

```powershell
npm run dev       # Start the development server
npm run build     # Type-check and create a production build
npm run lint      # Check the code with ESLint
npm run preview   # Preview the production build locally
```

## Development Workflow

1. Update your local `main` branch:

   ```powershell
   git switch main
   git pull
   ```

2. Create a branch for your work:

   ```powershell
   git switch -c feature/short-description
   ```

3. Make and verify your changes:

   ```powershell
   cd frontend
   npm run lint
   npm run build
   ```

4. Commit and push the branch:

   ```powershell
   git add .
   git commit -m "Describe the change"
   git push -u origin feature/short-description
   ```

5. Open a pull request on GitHub. Avoid pushing feature work directly to
   `main`.

## Contribution Guidelines

- Keep changes focused on one task per pull request.
- Use TypeScript for new application code.
- Follow the existing project structure and ESLint rules.
- Do not commit `node_modules`, build output, secrets, or local environment
  files.
- Document any new environment variables in this README and provide a safe
  `.env.example` file.
- Run `npm run lint` and `npm run build` before opening a pull request.

## TODO

- [ ] Define the product requirements and initial frontend pages.
- [ ] Decide on the backend architecture and API contract.
- [ ] Choose the database and authentication approach.
- [ ] Add routing and the main application layout.
- [ ] Establish reusable component and styling conventions.
- [ ] Add automated frontend tests.
- [ ] Add continuous integration for linting, testing, and builds.
- [ ] Document environment variables when API integration begins.
- [ ] Add deployment instructions.

## Backend Status

No backend has been selected or implemented. Keep API calls isolated from UI
components so the backend can be integrated later without tightly coupling the
frontend to a specific provider or framework.
