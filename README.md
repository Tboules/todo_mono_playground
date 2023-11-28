## MonoRepo Playgound

**Backgound:**

> I have always wanted to create a project that shared backend services between a react native application
> and a web app, but up until now have had tons of issues with mono repo intimidation.
>
> The goal of this project is to get over that intimidation and have fun with a simple project that will allow me to
> play with the infrustructure without any anxiety.

**Goals:**

1. Create a shared authentication/authorization strategy between the mobile and web applications
2. Create a drizzle backend with zod type checking and clean migrations
3. Use tRPC and Next 14 app router to create an api that is accessible by both the mobile and web apps
4. Deploy both applications using CI/CD

**Nice To Haves:**

> It would be nice to play around with testing in all environments and learning more about front-end testing
> through this project.

---

<img src="./apps/web/app/favicon.ico" width='200' />

### Project Status:

- [x] Create tRPC Server
- [x] Create Drizzle Backend
- [x] Create Shared Api Package (models and api functions)
- [x] Create client side and server side comps in next
- [ ] shadcn/ui library for web
- [ ] modern ui library research for react native
