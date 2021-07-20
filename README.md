# Pokemon Shakespaere

It's a web application where user can search a Pokemon by its name and get a Shakespaerean translation of its description.
Users can save pokemons in the favourite list.

here the deployed version:
https://pokemon-shakespeare.vercel.app/

## Download respository

---

```
git clone git@github.com:MatteoGiacomo/pokemon-shakespeare.git
```

## Development environment

---

### Requirements:

```
node at least version 14.6
npm at least version 6
```

to have more informarion about `node` and `npm` download follow [this link](https://nodejs.org/it/download/)

```
# install dependencies
$ npm ci


# run development server
$ npm run dev
```

the web application will be visible [in your browser](localhost:8080)

NOTE:

The application has a pre-commit command in order to start automatic checks: prettier, eslint and unit tests

## Production environment

---

```
# create bundle
$ npm run build
```

marging changes in master it triggers automatic deployment with vercel
