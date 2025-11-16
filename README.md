# Testing and Debugging MERN Applications

# MERN Bug Tracker — Testing & Debugging

Project: "MERN Bug Tracker" — demonstrates testing and debugging best practices for a MERN application (backend in `server/`, frontend in `client/`).

## Contents

- server/ — Express API, Mongoose models, tests
  - src/, tests/
- client/ — React UI, components, tests
  - src/, tests/

## Prerequisites

- Node.js (v14+)
- npm
- MongoDB (local or remote) — optional for running integration API locally; tests mock DB where applicable
- Recommended: VS Code for debugging

## Setup

1. Clone or open the repo at:
   d:\MERN-JULY(PLP)\assignment\week_6\Assignment\testing-and-debugging-ensuring-mern-app-reliability-Rebira678

2. Install dependencies for server and client (open two terminals or run sequentially):

- Server:

  - cd server
  - npm install

- Client:
  - cd client
  - npm install

## Running the Backend (development)

From the server folder:

- Start with local MongoDB (default):

  - cmd:
    set MONGO_URI=mongodb://localhost:27017/mern-bug-tracker && node src/server.js
  - PowerShell:
    $env:MONGO_URI="mongodb://localhost:27017/mern-bug-tracker"; node src/server.js

- Alternatively run with nodemon:
  - npx nodemon src/server.js

Notes:

- The app exports the Express `app` and prevents automatic connect/listen when NODE_ENV=test so tests can import without starting the real server.
- Set `MONGO_URI` to point to your DB if not using localhost.

## Running the Frontend (development)

From the client folder:

- Start React app:
  - npm start

The client expects the API at /api (proxy or CORS). Adjust environment or proxy in client package.json if needed.

## Tests

Tests are organized under `server/tests` and `client/src/tests`.

- Server tests:

  - Unit: `server/tests/unit/`
  - Integration: `server/tests/integration/`

- Client tests:
  - Unit & integration: `client/src/tests/`

Run tests:

- Server:

  - cd server
  - npm test
    (Runs Jest using `NODE_ENV=test` so app won't auto-listen; DB calls are mocked where appropriate.)

- Client:
  - cd client
  - npm test
    (Runs React testing-library/Jest tests. To run once without interactive watch: npm test -- --watchAll=false)

Run a single test by name:

- npm test -- -t "test name pattern"

Notes on testing strategy:

- Backend unit tests validate helpers (e.g., `validateBug`).
- Backend integration tests exercise routes (create, list, update, delete). Database interactions are mocked where tests should be isolated.
- Frontend unit tests assert component rendering and interactions (forms, buttons).
- Frontend integration tests assert that API calls update the UI (mock fetch/axios).

## Debugging Techniques

1. Console logging

   - Add targeted logs (server controllers, React component lifecycle / handlers).

2. Node Inspector (server)

   - Run: node --inspect-brk src/server.js
   - Open `chrome://inspect` → Open dedicated DevTools for Node
   - Or use VS Code launch configuration (Examples below).

3. VS Code Debugging

   - Create a launch configuration to run server with inspector or attach to Jest tests.
   - Example (place in `.vscode/launch.json`):
     {
     "version": "0.2.0",
     "configurations": [
     {
     "type": "node",
     "request": "launch",
     "name": "Launch Server",
     "program": "${workspaceFolder}/server/src/server.js",
           "cwd": "${workspaceFolder}/server",
     "runtimeArgs": ["--nolazy"],
     "env": { "MONGO_URI": "mongodb://localhost:27017/mern-bug-tracker" }
     }
     ]
     }

4. Chrome DevTools (frontend)

   - Use React DevTools extension to inspect component tree and props/state.
   - Inspect network requests in DevTools to verify API calls.

5. Jest Debugging

   - Run: node --inspect-brk ./node_modules/.bin/jest --runInBand
   - Attach debugger to step through tests.

6. Error Boundaries (React)
   - Use Error Boundary components to catch render-time errors and display fallback UI. Add logging (e.g., Sentry or console.error) inside componentDidCatch/getDerivedStateFromError.

## Intentional Bugs & How to Find Them

- Introduced issues (example):
  - Disabled DB connect during tests (so importable `app`) — intended to teach test isolation.
  - Missing component or mock — solved by adding mock `fileMock.js` and `Button.jsx`.
- Use console logs, breakpoints, and tests to reproduce and locate failures.

## Error Handling

- Server: express error-handling middleware is used to centralize error responses (status codes and messages).
- Client: use try/catch around async calls and show user-friendly messages; Error Boundaries capture component errors.

## Project Notes & Tips

- Tests run with NODE_ENV=test; ensure code checks NODE_ENV before side-effects (like starting server or connecting DB).
- Use jest.mock to stub DB models or external APIs during unit/integration tests.
- Keep tests small and deterministic — mock external dependencies, use test DB instances for full integration.

## Useful Commands Summary (Windows)

- Install deps:
  - cd server && npm install
  - cd client && npm install
- Run server:
  - cd server
  - set MONGO_URI=mongodb://localhost:27017/mern-bug-tracker && node src/server.js
- Run client:
  - cd client && npm start
- Run tests:
  - cd server && npm test
  - cd client && npm test

## Where Tests Live

- Server:
  - server/tests/unit/
  - server/tests/integration/
- Client:
  - client/src/tests/unit/
  - client/src/tests/integration/

## Extending Tests

- Add more unit tests for controllers, validators, and helpers.
- Add integration tests that run against a test DB (use a separate MongoDB URI) or in-memory DB (mongodb-memory-server) for full-stack verification.

---

This README covers running, testing, and debugging the MERN Bug Tracker. Adjust environment variables and test DB settings as needed for your local environment.

This assignment focuses on implementing comprehensive testing strategies for a MERN stack application, including unit testing, integration testing, and end-to-end testing, along with debugging techniques.

## Assignment Overview

You will:

1. Set up testing environments for both client and server
2. Write unit tests for React components and server functions
3. Implement integration tests for API endpoints
4. Create end-to-end tests for critical user flows
5. Apply debugging techniques for common MERN stack issues

## Project Structure

```
mern-testing/
├── client/                 # React front-end
│   ├── src/                # React source code
│   │   ├── components/     # React components
│   │   ├── tests/          # Client-side tests
│   │   │   ├── unit/       # Unit tests
│   │   │   └── integration/ # Integration tests
│   │   └── App.jsx         # Main application component
│   └── cypress/            # End-to-end tests
├── server/                 # Express.js back-end
│   ├── src/                # Server source code
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   └── middleware/     # Custom middleware
│   └── tests/              # Server-side tests
│       ├── unit/           # Unit tests
│       └── integration/    # Integration tests
├── jest.config.js          # Jest configuration
└── package.json            # Project dependencies
```

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Follow the setup instructions in the `Week6-Assignment.md` file
4. Explore the starter code and existing tests
5. Complete the tasks outlined in the assignment

## Files Included

- `Week6-Assignment.md`: Detailed assignment instructions
- Starter code for a MERN application with basic test setup:
  - Sample React components with test files
  - Express routes with test files
  - Jest and testing library configurations
  - Example tests for reference

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn
- Basic understanding of testing concepts

## Testing Tools

- Jest: JavaScript testing framework
- React Testing Library: Testing utilities for React
- Supertest: HTTP assertions for API testing
- Cypress/Playwright: End-to-end testing framework
- MongoDB Memory Server: In-memory MongoDB for testing

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all required tests (unit, integration, and end-to-end)
2. Achieve at least 70% code coverage for unit tests
3. Document your testing strategy in the README.md
4. Include screenshots of your test coverage reports
5. Demonstrate debugging techniques in your code

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Supertest Documentation](https://github.com/visionmedia/supertest)
- [Cypress Documentation](https://docs.cypress.io/)
- [MongoDB Testing Best Practices](https://www.mongodb.com/blog/post/mongodb-testing-best-practices)
