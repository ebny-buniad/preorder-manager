-- CreateTable
CREATE TABLE "preorders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "products" INTEGER NOT NULL,
    "preorderWhen" TEXT NOT NULL,
    "startsAt" DATETIME NOT NULL,
    "endsAt" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'Active',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "preorder_when_starts_at_ends_at_index" ON "preorders"("preorderWhen", "startsAt", "endsAt");
