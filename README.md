This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, create the docker docker volume

```bash
docker volume create --name=db_volume
```

Then run the application using

```
docker-compose up --build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To shut down, use

```
docker-compose down
```

## FOLDER STRUCTURING

- `.github` contains workflows related to github. The main workflow here `nextjs.yml` deploys the project to github pages after completing the build command.
  
- `/components` This is the folder housing all the components of the application it is further subdivided into
   - `shared` This contains base-ui components that are shared acrosss the application like CustomInputs and CustomButtons
   - `layout` This folder contains layout components that wrap particular sections of the application based on the ui needs
   - `[page]` This folder carries components related to a single page

- `/lib` This contains custom hooks, useful utility functions, and also contants that are re-used in the entire application. Furthere broken down into,
     - `/lib/hooks/` custom hooks for particular logic
     - `/lib/constants.ts` constants that are re-used, like the api url   
     - `/lib/utils.ts` General purpose utility functions, like date formatters, parsers, etc.
  
- `/pages/`  Here we have all the pages of our application. The page name will denote the route used to access it on a web-browser dynamically. **Pages with long names should be hyphenated**.
  
- `/public/` This folder contains all the stattics and assets for the project, like icons and images
  
- `/styles/` This folder contains the global styles applied to the project, and other custom-styles that cannot be handled with tailwind only.
  