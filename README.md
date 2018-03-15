# Phonewords

Implement a number to word list converter as a Node backend and React/Redux fronted.

The backend should provide a rest endpoint that converts a given numeric string
into a list of corresponding words in the style of T9 [https://en.wikipedia.org/wiki/T9_(predictive_text)]
or Phonewords [https://en.wikipedia.org/wiki/Phoneword]. For example, given
the input 23 the output should be: ad, ae, af, bd, be, bf, cd, ce, cf

The frontend should allow the user to enter a number, query the backend for
the corresponding expansions, and display them.

## Installing

```bash
git clone 'git@github.com:slawa85/phonewords.git' app-name
cd app-name
npm install
```

## Running The App

```bash
grunt init_static
grunt
```

Now simply visit the app at 'http://localhost:3000'.
