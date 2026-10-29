# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## NEHOSA donations and Pesapal setup

The donation form currently collects the amount, frequency and optional donor details in the browser only. The payment button remains disabled. No donor details are sent or stored and no payment is processed.

The backend integration point is `POST /api/donations/checkout` in `server/server.js`. It returns HTTP 503 until Pesapal checkout is configured. The Pesapal merchant credentials must stay on the server and must never be added to browser code or `VITE_*` variables.

Before connecting checkout, NEHOSA needs a Pesapal business/merchant account with API 3.0 access and:

- Sandbox and production consumer key and consumer secret.
- A stable public HTTPS callback URL and IPN notification URL. Register the IPN URL with Pesapal and save the returned notification ID.
- Confirmation that TZS and the desired payment methods (local mobile money and international cards, if enabled for the account) are active.
- Official NEHOSA contact and receipt/privacy wording.

The planned server flow is: authenticate to Pesapal, create a unique donation order, redirect the donor to the returned Pesapal checkout URL, then use Pesapal's transaction-status API after callback/IPN notifications. Do not treat a browser redirect or notification by itself as proof that a donation was paid. Add validation, idempotency and durable transaction records before going live. Monthly donations require separate recurring-payment setup and must not be promised until Pesapal confirms it for the merchant account.

Use `server/.env.example` as a variable-name template. Create a private `server/.env` for real credentials after receiving them; do not commit it. The server endpoint remains disabled until the integration is implemented and verified in Pesapal sandbox.