import type Elysia from "elysia";

const list = (app: Elysia) => app.get("", () => {
  return {
    items: [{id: 1, name: "Elysia"}],
    total: 1
  }
});

export const company = (app: Elysia) =>
  app.group('/company', (app) => app.use(list))