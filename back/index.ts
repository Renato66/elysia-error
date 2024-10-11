import { Elysia } from 'elysia'
import { company } from './modules/company'
import cors from '@elysiajs/cors'

const setup = new Elysia().use(
  cors({
    origin: 'localhost:5173',
  })
)
const routes = new Elysia({ name: 'routes' })
  .use(company)

// const app =
//   setup.group('/api', (app) => app.use(routes)).listen(3000)

const app = new Elysia().use(
  cors({
    origin: 'localhost:5173',
  })
  .group('/api', (app) => app
    .group('/company', (app) => app
      // .get("", () => { will work
      .get("/", () => {
        return {
          items: [{id: 1, name: "Elysia"}],
          total: 1
        }
      })
    )
  )  
).listen(3000)
export type App = typeof app

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port} on version`
)
