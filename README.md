# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## NEHOSA donations and Selcom setup

The donation form currently collects a selected amount, frequency and optional donor details in the browser only. Its payment button is intentionally disabled. No donor details are sent or stored and no payment is processed.

The backend integration point is `POST /api/donations/checkout` in `server/server.js`. It currently returns HTTP 503 until checkout is configured. When connecting Selcom, implement the server-side checkout request there (or in a dedicated payment module) and have the browser submit the donation to that endpoint. The server must create the transaction, return only the provider's checkout URL or supported next step, and verify payment status using Selcom's server-to-server callback/status mechanism before marking a donation paid.

Before enabling checkout, obtain and configure these items from the NEHOSA Selcom merchant account:

- Merchant/vendor identifier and API credentials required by the assigned Selcom product. Keep secrets on the server in environment variables, never in Vite `VITE_*` variables or browser code.
- Selcom environment and API base URL (sandbox first, then production).
- Supported payment methods and currency/amount rules for the account, including confirmation that TZS is enabled.
- Public HTTPS success, cancellation and server callback/notification URLs, plus any signing or IP allowlist requirements Selcom provides.
- NEHOSA's official donation contact and privacy/receipt wording for donor confirmations.

After configuration, enable the frontend submit action to call `POST /api/donations/checkout` with amount in TZS, frequency, donor contact details and a server-generated unique reference. Add request validation, idempotency, callback signature verification, transaction persistence, and clear success/failure return handling before accepting real payments. Do not trust the browser return URL alone as proof of payment.
