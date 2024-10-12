import Elysia from "elysia";

// Return types:
// company: {
//   index: {
//       get: {
//           body: unknown;
//           params: {};
//           query: unknown;
//           headers: unknown;
//           response: {
//               ...;
//           };
//       };
//   };
// };

const list = (app: Elysia) => app.get('', () => {
  return {
    items: [{id: 1, name: "Elysia"}],
    total: 1
  }
});

export const company = (app: Elysia) =>
  app.group("/company", (app) => app.use(list));

export const company2 = (app: Elysia) =>
  app.group("/company", () => new Elysia({ name: "company", strictPath: true }).get('', () => {
    return {
      items: [{id: 1, name: "Elysia"}],
      total: 1
    }
  }));

export const company3 = new Elysia({ prefix: '/company', strictPath: true }).get('/', () => {
  return {
    items: [{id: 1, name: "Elysia"}],
    total: 1
  }
})

// Return types:
// company: {
//   get: {
//       body: unknown;
//       params: {};
//       query: unknown;
//       headers: unknown;
//       response: {
//           ...;
//       };
//   };
// };

export const workingCompany = (app: Elysia) =>
  app.group("/company", (app) => app.get('', () => {
    return {
      items: [{id: 1, name: "Elysia"}],
      total: 1
    }
  }));