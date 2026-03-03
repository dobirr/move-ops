# move-ops

## Projektbeschreibung
Wir entwickeln MoveOps, eine B2B Multi-Tenant SaaS für Umzugsunternehmen in Deutschland. Ziel ist es, den gesamten Büro- und Dispo-Ablauf in einem System zu bündeln, damit Angebote schneller rausgehen, weniger Rückfragen entstehen und die Planung sauber funktioniert.
Jede Umzugsfirma bekommt einen eigenen Mandantenbereich (eigene Nutzer/Rollen, eigene Daten). Der Workflow ist: Anfrage erfassen (Umzugsdetails, Extras, Fotos/Infos) → daraus automatisch ein Angebot erstellen (Preisregeln + manuelle Anpassung) → Angebot als öffentlichen Link an den Kunden senden, der es online annehmen/ablehnen kann → bei Annahme wird ein Auftrag erstellt → der Auftrag wird in der Disposition einem Team, Fahrzeug und Zeitslot zugewiesen (inkl. Konfliktprüfung, damit keine Doppelbelegung passiert). Zusätzlich gibt es als Qualitäts-/USP-Feature ein Übergabe- und Schadensprotokoll (Fotos/Notizen), damit Vorgänge nachvollziehbar dokumentiert sind und Streitfälle reduziert werden.

Technisch setzen wir das als MERN-Stack um, backend-first, mit Microservice-Struktur (Gateway + Auth-Service + Ops-Service), JWT-Auth, TypeScript, tsoa (automatische OpenAPI/Swagger-Specs), zod (Validierung), pino Logging und Vitest/Supertest für Tests. Frontend minimal mit Next.js + Tailwind + shadcn/ui (insbesondere für das öffentliche Angebots-Portal).

## Was MoveOps im MVP anbietet
- Multi-Tenant Setup mit tenant-separierten Daten und Rollen
- Anfrage-Erfassung mit Umzugsdetails, Extras und Zusatzinfos
- Angebots-Erstellung mit Regeln plus manueller Anpassung
- Öffentliches Angebots-Portal per Token-Link (Annehmen/Ablehnen)
- Automatische Auftragserstellung nach Angebotsannahme
- Disposition mit Team/Fahrzeug/Zeitslot-Zuweisung
- Konfliktprüfung zur Vermeidung von Doppelbelegung
- Übergabe- und/oder Schadensprotokoll mit Fotos/Notizen (MVP: `photoUrls`)
- Swagger/OpenAPI-Dokumentation über `tsoa`
- Basis-Testabdeckung mit Vitest/Supertest für den Kern-Flow

## Architektur und Stack
- Monorepo mit `pnpm` Workspaces (`apps/*`, `packages/*`)
- Services: `gateway`, `auth-service`, `ops-service`
- Frontend: `web` (minimal, Fokus auf öffentliches Angebots-Portal)
- Backend: Node.js, Express 5, TypeScript, MongoDB/Mongoose
- Security/Auth: JWT Bearer Auth, RBAC (Admin/Dispatcher/CrewLead)
- Qualität: zod-Validierung, pino-Logging, globale Error-Handling-Strategie

## Geplantes Post-MVP-Angebot
- Ausbau der Admin-/Dispatcher-Oberflächen
- Dispatch-Board (z. B. Kalender/Drag-and-drop)
- Customer-Portal-Erweiterungen
- Invoicing und Reporting
- Binary Uploads und Storage-Adapter (Local/S3)
- Eventing/Queue, bessere Observability, optionale Docker/K8s-Setups

## Projektstatus
- Aktueller Plan und Timeline: [agend.md](./agend.md)
- MVP-Zieltermin: `2026-03-13`
