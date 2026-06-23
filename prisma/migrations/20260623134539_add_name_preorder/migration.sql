/*
  Warnings:

  - Added the required column `name` to the `preorders` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_preorders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "products" INTEGER NOT NULL DEFAULT 0,
    "preorderWhen" TEXT NOT NULL,
    "startsAt" DATETIME NOT NULL,
    "endsAt" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'Active',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_preorders" ("createdAt", "endsAt", "id", "preorderWhen", "products", "startsAt", "status", "updatedAt") SELECT "createdAt", "endsAt", "id", "preorderWhen", "products", "startsAt", "status", "updatedAt" FROM "preorders";
DROP TABLE "preorders";
ALTER TABLE "new_preorders" RENAME TO "preorders";
CREATE INDEX "preorder_when_starts_at_ends_at_index" ON "preorders"("preorderWhen", "startsAt", "endsAt");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
