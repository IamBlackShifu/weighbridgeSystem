# Weighbridge System

A modern, production-ready weighbridge web application UI/UX for desktop-first operations with responsive tablet support. Designed for gatehouse and bridge operators, prioritizing speed, clarity, and traceability.

## Features

- Live weighbridge dashboard with KPI cards, live weight, stable/unstable state, connection state, vehicle and camera placeholders
- Ticket workflow with first/second weight capture, gross/tare/net auto-calculation, stored tare, and manual override approval flow
- Vehicle registry table with search
- Ticket detail with audit timeline and prominent duty snapshot
- Search and investigations with multi-field filters and CSV export
- Reports, duty roster, exceptions queue, login, and print view
- Permission-aware actions for operator/supervisor/admin
- Loading and offline/error states with mock backend-ready API integration points

## Tech Stack

- HTML5, CSS3, JavaScript (vanilla for simplicity)
- Backend-ready with API placeholders

## Getting Started

Clone the repo and open `/home/runner/work/weighbridgeSystem/weighbridgeSystem/index.html` in a browser.

## API Placeholders

- `GET /scales/:bridgeId/live-weight`
- `GET /vehicles/search`
- `GET /customers/search`
- `GET /materials/search`
- `POST /tickets`
- `PATCH /tickets/:id`
- `POST /tickets/:id/complete`
- `POST /tickets/:id/override`
- `GET /tickets`
- `GET /tickets/:id`
- `GET /tickets/:id/audit-trail`
- `GET /duty-roster/current`
- `GET /operators/on-duty`
- `POST /shift-handover`
- `GET /reports/...`

## Sample JSON Models

See `/home/runner/work/weighbridgeSystem/weighbridgeSystem/mock-data.json` for sample structures for live scale response, ticket, vehicle, duty roster, and audit event.
