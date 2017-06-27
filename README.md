# autodrop

Tool to create ready to use skeleton directories

## Install

Do a global install to be able to use it in any directory

```
npm i -g autodrop
```
or 
```
yarn global add autodrop
```

## Usage

Currently it only supports the quick creation of React Components skeletons iwth the `-r` option

```
autodrop -r [component name]
```

E.g: `autodrop -r MyHappyComponent`

The above command will create the following tree on the current directory:

```
- MyHappyComponent (directory)
-- index.js (exports the component)
-- MyHappyComponent.js (component functionality)
```

Work in progress...

TODO: 
- Add option to choose between state or stateless components
