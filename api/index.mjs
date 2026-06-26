// src/app.ts
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// src/app/router/index.routes.ts
import { Router as Router2 } from "express";

// src/app/module/preorder/preorder.routes.ts
import { Router } from "express";

// src/app/shared/catchAsync.ts
var catchAsync = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message || "An unexpected error occurred"
      });
    }
  };
};
var catchAsync_default = catchAsync;

// src/app/lib/prisma.ts
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

// src/generated/prisma/client.ts
import * as path from "path";
import { fileURLToPath } from "url";

// src/generated/prisma/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
var config = {
  "previewFeatures": [],
  "clientVersion": "7.8.0",
  "engineVersion": "3c6e192761c0362d496ed980de936e2f3cebcd3a",
  "activeProvider": "sqlite",
  "inlineSchema": '// Sqlite database schema for the Preorder model\n\nenum PreorderStatus {\n  Active\n  Inactive\n}\n\nmodel Preorder {\n  id           String         @id @default(uuid())\n  name         String         @unique\n  slug         String         @unique\n  products     Int            @default(0)\n  preorderWhen String\n  startsAt     DateTime\n  endsAt       DateTime?\n  status       PreorderStatus @default(Active)\n  createdAt    DateTime       @default(now())\n  updatedAt    DateTime       @updatedAt\n\n  @@index([preorderWhen, startsAt, endsAt], name: "preorder_when_starts_at_ends_at_index")\n  @@map("preorders")\n}\n\n// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider = "prisma-client"\n  output   = "../../src/generated/prisma"\n}\n\ndatasource db {\n  provider = "sqlite"\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "parameterizationSchema": {
    "strings": [],
    "graph": ""
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"Preorder":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"products","kind":"scalar","type":"Int"},{"name":"preorderWhen","kind":"scalar","type":"String"},{"name":"startsAt","kind":"scalar","type":"DateTime"},{"name":"endsAt","kind":"scalar","type":"DateTime"},{"name":"status","kind":"enum","type":"PreorderStatus"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"preorders"}},"enums":{},"types":{}}');
config.parameterizationSchema = {
  strings: JSON.parse('["where","Preorder.findUnique","Preorder.findUniqueOrThrow","orderBy","cursor","Preorder.findFirst","Preorder.findFirstOrThrow","Preorder.findMany","data","Preorder.createOne","Preorder.createMany","Preorder.createManyAndReturn","Preorder.updateOne","Preorder.updateMany","Preorder.updateManyAndReturn","create","update","Preorder.upsertOne","Preorder.deleteOne","Preorder.deleteMany","having","_count","_avg","_sum","_min","_max","Preorder.groupBy","Preorder.aggregate","AND","OR","NOT","id","name","slug","products","preorderWhen","startsAt","endsAt","PreorderStatus","status","createdAt","updatedAt","equals","in","notIn","not","lt","lte","gt","gte","contains","startsWith","endsWith","set","increment","decrement","multiply","divide"]'),
  graph: "PAsQDRwAACwAMB0AAAQAEB4AACwAMB8BAAAAASABAAAAASEBAAAAASICAC4AISMBAC0AISRAAC8AISVAADAAIScAADEnIihAAC8AISlAAC8AIQEAAAABACABAAAAAQAgDRwAACwAMB0AAAQAEB4AACwAMB8BAC0AISABAC0AISEBAC0AISICAC4AISMBAC0AISRAAC8AISVAADAAIScAADEnIihAAC8AISlAAC8AIQElAAAyACADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAKHwEAAAABIAEAAAABIQEAAAABIgIAAAABIwEAAAABJEAAAAABJUAAAAABJwAAACcCKEAAAAABKUAAAAABAQgAAAkAIAofAQAAAAEgAQAAAAEhAQAAAAEiAgAAAAEjAQAAAAEkQAAAAAElQAAAAAEnAAAAJwIoQAAAAAEpQAAAAAEBCAAACwAwAQgAAAsAMAofAQA4ACEgAQA4ACEhAQA4ACEiAgA5ACEjAQA4ACEkQAA6ACElQAA7ACEnAAA8JyIoQAA6ACEpQAA6ACECAAAAAQAgCAAADgAgCh8BADgAISABADgAISEBADgAISICADkAISMBADgAISRAADoAISVAADsAIScAADwnIihAADoAISlAADoAIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgBhUAADMAIBYAADQAIBcAADcAIBgAADYAIBkAADUAICUAADIAIA0cAAAaADAdAAAXABAeAAAaADAfAQAbACEgAQAbACEhAQAbACEiAgAcACEjAQAbACEkQAAdACElQAAeACEnAAAfJyIoQAAdACEpQAAdACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIA0cAAAaADAdAAAXABAeAAAaADAfAQAbACEgAQAbACEhAQAbACEiAgAcACEjAQAbACEkQAAdACElQAAeACEnAAAfJyIoQAAdACEpQAAdACEOFQAAIQAgGAAAKwAgGQAAKwAgKgEAAAABKwEAAAAELAEAAAAELQEAKgAhLgEAAAABLwEAAAABMAEAAAABMQEAAAABMgEAAAABMwEAAAABNAEAAAABDRUAACEAIBYAACkAIBcAACEAIBgAACEAIBkAACEAICoCAAAAASsCAAAABCwCAAAABC0CACgAIS4CAAAAAS8CAAAAATACAAAAATECAAAAAQsVAAAhACAYAAAnACAZAAAnACAqQAAAAAErQAAAAAQsQAAAAAQtQAAmACEuQAAAAAEvQAAAAAEwQAAAAAExQAAAAAELFQAAJAAgGAAAJQAgGQAAJQAgKkAAAAABK0AAAAAFLEAAAAAFLUAAIwAhLkAAAAABL0AAAAABMEAAAAABMUAAAAABBxUAACEAIBgAACIAIBkAACIAICoAAAAnAisAAAAnCCwAAAAnCC0AACAnIgcVAAAhACAYAAAiACAZAAAiACAqAAAAJwIrAAAAJwgsAAAAJwgtAAAgJyIIKgIAAAABKwIAAAAELAIAAAAELQIAIQAhLgIAAAABLwIAAAABMAIAAAABMQIAAAABBCoAAAAnAisAAAAnCCwAAAAnCC0AACInIgsVAAAkACAYAAAlACAZAAAlACAqQAAAAAErQAAAAAUsQAAAAAUtQAAjACEuQAAAAAEvQAAAAAEwQAAAAAExQAAAAAEIKgIAAAABKwIAAAAFLAIAAAAFLQIAJAAhLgIAAAABLwIAAAABMAIAAAABMQIAAAABCCpAAAAAAStAAAAABSxAAAAABS1AACUAIS5AAAAAAS9AAAAAATBAAAAAATFAAAAAAQsVAAAhACAYAAAnACAZAAAnACAqQAAAAAErQAAAAAQsQAAAAAQtQAAmACEuQAAAAAEvQAAAAAEwQAAAAAExQAAAAAEIKkAAAAABK0AAAAAELEAAAAAELUAAJwAhLkAAAAABL0AAAAABMEAAAAABMUAAAAABDRUAACEAIBYAACkAIBcAACEAIBgAACEAIBkAACEAICoCAAAAASsCAAAABCwCAAAABC0CACgAIS4CAAAAAS8CAAAAATACAAAAATECAAAAAQgqCAAAAAErCAAAAAQsCAAAAAQtCAApACEuCAAAAAEvCAAAAAEwCAAAAAExCAAAAAEOFQAAIQAgGAAAKwAgGQAAKwAgKgEAAAABKwEAAAAELAEAAAAELQEAKgAhLgEAAAABLwEAAAABMAEAAAABMQEAAAABMgEAAAABMwEAAAABNAEAAAABCyoBAAAAASsBAAAABCwBAAAABC0BACsAIS4BAAAAAS8BAAAAATABAAAAATEBAAAAATIBAAAAATMBAAAAATQBAAAAAQ0cAAAsADAdAAAEABAeAAAsADAfAQAtACEgAQAtACEhAQAtACEiAgAuACEjAQAtACEkQAAvACElQAAwACEnAAAxJyIoQAAvACEpQAAvACELKgEAAAABKwEAAAAELAEAAAAELQEAKwAhLgEAAAABLwEAAAABMAEAAAABMQEAAAABMgEAAAABMwEAAAABNAEAAAABCCoCAAAAASsCAAAABCwCAAAABC0CACEAIS4CAAAAAS8CAAAAATACAAAAATECAAAAAQgqQAAAAAErQAAAAAQsQAAAAAQtQAAnACEuQAAAAAEvQAAAAAEwQAAAAAExQAAAAAEIKkAAAAABK0AAAAAFLEAAAAAFLUAAJQAhLkAAAAABL0AAAAABMEAAAAABMUAAAAABBCoAAAAnAisAAAAnCCwAAAAnCC0AACInIgAAAAAAAAE1AQAAAAEFNQIAAAABNgIAAAABNwIAAAABOAIAAAABOQIAAAABATVAAAAAAQE1QAAAAAEBNQAAACcCAAAAAAUVAAYWAAcXAAgYAAkZAAoAAAAAAAUVAAYWAAcXAAgYAAkZAAoBAgECAwEFBgEGBwEHCAEJCgEKDAILDQMMDwENEQIOEgQREwESFAETFQIaGAUbGQs"
};
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer } = await import("buffer");
  const wasmArray = Buffer.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.sqlite.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.sqlite.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// src/generated/prisma/internal/prismaNamespace.ts
import * as runtime2 from "@prisma/client/runtime/client";
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  Serializable: "Serializable"
});
var defineExtension = runtime2.Extensions.defineExtension;

// src/generated/prisma/enums.ts
var PreorderStatus = {
  Active: "Active",
  Inactive: "Inactive"
};

// src/generated/prisma/client.ts
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass();

// src/app/lib/prisma.ts
var connectionString = `${process.env.DATABASE_URL}`;
var adapter = new PrismaBetterSqlite3({ url: connectionString });
var prisma = new PrismaClient({ adapter });
var prisma_default = prisma;

// src/app/module/preorder/preorder.service.ts
var createPreorder = async (payload) => {
  const isDuplicate = await prisma_default.preorder.findFirst({
    where: {
      name: payload.name
    }
  });
  if (isDuplicate) {
    throw new Error("Preorder with the same name already exists");
  }
  const slug = payload.name.toLowerCase().replace(/\s+/g, "-");
  const preorder = await prisma_default.preorder.create({
    data: {
      ...payload,
      slug
    }
  });
  return preorder;
};
var getAllPreorders = async (query) => {
  const {
    page = "1",
    limit = "10",
    status = "all",
    sortBy = "createdAt",
    sortOrder = "desc"
  } = query;
  const currentPage = Number(page);
  const perPage = Number(limit);
  const where = {};
  if (status !== "all") {
    where.status = status;
  }
  const sortableFields = [
    "name",
    "createdAt",
    "startsAt",
    "endsAt"
  ];
  const validSortBy = sortableFields.includes(
    sortBy
  ) ? sortBy : "createdAt";
  const orderBy = {
    [validSortBy]: sortOrder === "asc" ? "asc" : "desc"
  };
  const [preorders, total] = await Promise.all([
    prisma_default.preorder.findMany({
      where,
      orderBy,
      skip: (currentPage - 1) * perPage,
      take: perPage
    }),
    prisma_default.preorder.count({
      where
    })
  ]);
  return {
    meta: {
      page: currentPage,
      limit: perPage,
      total,
      totalPage: Math.ceil(total / perPage)
    },
    data: preorders
  };
};
var getPreorderById = async (id) => {
  const preorder = await prisma_default.preorder.findUnique({
    where: {
      id
    }
  });
  return preorder;
};
var updatePreorder = async (id, payload) => {
  const preorder = await prisma_default.preorder.update({
    where: {
      id
    },
    data: payload
  });
  return preorder;
};
var deletePreorder = async (id) => {
  const preorder = await prisma_default.preorder.delete({
    where: {
      id
    }
  });
  return preorder;
};
var preorderService = {
  createPreorder,
  getAllPreorders,
  getPreorderById,
  updatePreorder,
  deletePreorder
};

// src/app/shared/sendResponse.ts
var sendResponse = (res, data) => {
  const { httpStatusCode, success, message, data: responseData } = data;
  res.status(httpStatusCode).json({
    success,
    message,
    data: responseData
  });
};

// src/app/module/preorder/preorder.controller.ts
var createPreorder2 = catchAsync_default(async (req, res) => {
  const payload = req.body;
  const preorder = await preorderService.createPreorder(payload);
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Preorder created successfully",
    data: preorder
  });
});
var getAllPreorders2 = catchAsync_default(async (req, res) => {
  const query = req.query;
  const preorders = await preorderService.getAllPreorders(query);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Preorders retrieved successfully",
    data: preorders
  });
});
var getPreorderById2 = catchAsync_default(async (req, res) => {
  const { id } = req.params;
  const preorder = await preorderService.getPreorderById(id);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Preorder retrieved successfully",
    data: preorder
  });
});
var updatePreorder2 = catchAsync_default(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const preorder = await preorderService.updatePreorder(id, payload);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Preorder updated successfully",
    data: preorder
  });
});
var deletePreorder2 = catchAsync_default(async (req, res) => {
  const { id } = req.params;
  const preorder = await preorderService.deletePreorder(id);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Preorder deleted successfully",
    data: preorder
  });
});
var preorderController = {
  createPreorder: createPreorder2,
  getAllPreorders: getAllPreorders2,
  getPreorderById: getPreorderById2,
  updatePreorder: updatePreorder2,
  deletePreorder: deletePreorder2
};

// src/app/middleware/validateRequest.ts
var validateRequest = (schema) => async (req, res, next) => {
  try {
    await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params
    });
    next();
  } catch (error) {
    next(error);
  }
};
var validateRequest_default = validateRequest;

// src/app/module/preorder/preorder.validation.ts
import { z } from "zod";

// src/generated/prisma/internal/prismaNamespaceBrowser.ts
import * as runtime3 from "@prisma/client/runtime/index-browser";
var NullTypes4 = {
  DbNull: runtime3.NullTypes.DbNull,
  JsonNull: runtime3.NullTypes.JsonNull,
  AnyNull: runtime3.NullTypes.AnyNull
};
var TransactionIsolationLevel2 = runtime3.makeStrictEnum({
  Serializable: "Serializable"
});

// src/app/module/preorder/preorder.validation.ts
var createPreorderSchema = z.object({
  body: z.object({
    name: z.string().min(3),
    products: z.number().int().positive(),
    preorderWhen: z.enum([
      "out-of-stock",
      "always"
    ]),
    startsAt: z.coerce.date(),
    endsAt: z.coerce.date(),
    status: z.nativeEnum(
      PreorderStatus
    )
  })
});
var updatePreorderSchema = z.object({
  body: z.object({
    name: z.string().min(3).optional(),
    products: z.number().int().positive().optional(),
    preorderWhen: z.enum([
      "out-of-stock",
      "always"
    ]).optional(),
    startsAt: z.coerce.date().optional(),
    endsAt: z.coerce.date().optional(),
    status: z.nativeEnum(
      PreorderStatus
    ).optional()
  })
});
var PreorderValidation = {
  createPreorderSchema,
  updatePreorderSchema
};

// src/app/module/preorder/preorder.routes.ts
var router = Router();
router.post("/", validateRequest_default(PreorderValidation.createPreorderSchema), preorderController.createPreorder);
router.get("/", preorderController.getAllPreorders);
router.get("/:id", preorderController.getPreorderById);
router.put("/:id", validateRequest_default(PreorderValidation.updatePreorderSchema), preorderController.updatePreorder);
router.delete("/:id", preorderController.deletePreorder);
var preorderRoutes = router;

// src/app/router/index.routes.ts
var router2 = Router2();
router2.use("/preorder", preorderRoutes);
var indexRouter = router2;

// src/app/middleware/globalErrorHandler.ts
import * as z2 from "zod";
import { StatusCodes } from "http-status-codes";

// src/app/errors/appErrors.ts
var AppError = class extends Error {
  statusCode;
  constructor(statusCode, message, stack = "") {
    super(message);
    this.statusCode = statusCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
};

// src/app/middleware/globalErrorHandler.ts
var globalErrorHandler = (err, req, res, next) => {
  let errorSources = [];
  let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  let message = "Internal Server Error";
  let stack = void 0;
  if (err instanceof z2.ZodError) {
    statusCode = StatusCodes.BAD_REQUEST;
    message = "Zod Validation Error";
    err.issues.forEach((issue) => {
      errorSources.push({
        path: issue.path.join(" => ") || "unknown",
        message: issue.message
      });
    });
  } else if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    stack = err.stack;
    errorSources.push({
      path: "",
      message: err.message
    });
  } else if (err instanceof Error) {
    statusCode = StatusCodes.BAD_REQUEST;
    message = err.message;
    stack = err.stack;
    errorSources.push({
      path: "",
      message: err.message
    });
  }
  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: process.env.NODE_ENV === "development" ? stack : void 0,
    error: process.env.NODE_ENV === "development" ? err : void 0
  });
};
var globalErrorHandler_default = globalErrorHandler;

// src/app.ts
dotenv.config();
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: [
      `${process.env.APP_URL}`
    ],
    credentials: true
  })
);
app.use("/api/v1", indexRouter);
app.use(globalErrorHandler_default);
app.get("/", (req, res) => {
  res.send("Pre order server is running!");
});
var app_default = app;

// src/index.ts
var index_default = app_default;
export {
  index_default as default
};
