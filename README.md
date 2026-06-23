# Preorder Manager Backend

A RESTful backend API for managing preorders, built with Express.js, TypeScript, Prisma ORM, SQLite, and Zod.

---

## Tech Stack

- Node.js v22.17.1
- Express.js
- TypeScript
- Prisma ORM
- SQLite
- Zod
- npm

---

## Prerequisites

Make sure the following are installed:

- Node.js v22.17.1 or later
- npm

Verify installation:

```bash
node -v
npm -v
```

---

## Clone the Repository

```bash
git clone <https://github.com/ebny-buniad/preorder-manager.git>
cd preorder-manager
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
DATABASE_URL="file:./prisma/db.db"
```

---

## Database Setup

Generate Prisma Client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev --name init
```

This command will:

- Create the SQLite database
- Apply all migrations
- Generate the Prisma Client

---

## Run the Application

Development mode:

```bash
npm run dev
```

The server will start on:

```txt
http://localhost:5000
```

---

## API Base URL

```txt
http://localhost:5000/api/v1/preorder

For get specific preorder, update and delete
http://localhost:5000/api/v1/preorder/(use preorder ID)
```

---

## Sample Request

### Create Preorder

**POST**

```http
POST /api/v1/preorder
```

Request Body:

```json
{
  "name": "Summer Collection",
  "slug": "summer-collection",
  "products": 25,
  "preorderWhen": "out-of-stock",
  "startsAt": "2026-06-01T00:00:00.000Z",
  "endsAt": "2026-07-01T00:00:00.000Z",
  "status": "Active"
}
```

---

## Features

### Preorder Management

- Create preorder
- Get all preorders
- Get preorder by ID
- Update preorder
- Delete preorder

### Filtering

```http
GET /api/v1/preorder?status=Active
GET /api/v1/preorder?status=Inactive
GET /api/v1/preorder?status=all
```

### Sorting

```http
GET /api/v1/preorder?sortBy=name&sortOrder=asc

GET /api/v1/preorder?sortBy=createdAt&sortOrder=desc

GET /api/v1/preorder?sortBy=startsAt&sortOrder=asc

GET /api/v1/preorder?sortBy=endsAt&sortOrder=desc
```

### Pagination

```http
GET /api/v1/preorder?page=1&limit=10
```

### Combined Example

```http
GET /api/v1/preorder?page=1&limit=10&status=Active&sortBy=createdAt&sortOrder=desc
```

---

## Validation & Error Handling

- Request validation using Zod
- Global error handling middleware
- Prisma error handling
- Consistent API response structure

---

## Available Scripts

Start development server:

```bash
npm run dev
```

Build TypeScript:

```bash
npm run build
```

Start production build:

```bash
npm start
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

Open Prisma Studio:

```bash
npx prisma studio
```

---

## Project Structure

```txt
src/
├── app/
│   ├── modules/
│   │   └── preorder/
│   ├── middleware/
│   ├── errors/
│   └── lib/
├── app.ts
└── server.ts

prisma/
├── schema.prisma
└── migrations/
```

---

## Notes for Reviewers

1. Clone the repository.
2. Run `npm install`.
3. Create the `.env` file using the example above.
4. Run `npx prisma migrate dev`.
5. Run `npm run dev`.
6. Test the API using Postman or any REST client.

The application uses SQLite, so no external database installation is required.