require("dotenv").config();
console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);

const { PrismaClient } = require('@prisma/client');

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

module.exports = prisma
