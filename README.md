## Up & Running steps
Please use the following commands to install dependencies & start the project. This project is built using nodeV14.17, to use the same version please run `nvm use` command.

```
npm install
npm run bootstrap
npm start
```

## Architecture
This project has multiple packages (monorepo structure). This project uses Lerna tool to manage client & server packages.
```
lerna
  |
  -- packages/
     |
    -- client
    -- server
```

## Client Information
Client (frontend) part is bootstrapped using create-react-app. This project uses React.js, scss modules for css, Jest for testing, eslint for linting.

### Lint Command
Client package uses eslint for linting.
- From root run following command
```
npm run lint
```

- Or From packages/client run following command
```
npm run test:lint
```

### Test Command
Client package uses jest for unit-tests. Unit-tests can be found at `packages/client/src/tests`.
- From root run following command
```
npm run test
```

- Or From packages/client run following command
```
npm run test
```

### Carousel 
Carousel component is available at `packages/client/src/components/Carousel.jsx`. This component is reusable and it can be easily extracted to build as a npm library package. Carousel component is built using [render props](https://reactjs.org/docs/render-props.html) concept of react.

#### Example
```
<Carousel items={[..list_of_item]}>
  {({ item, isActive }) => (
    <CustomElement
      key={item._id}
      {...item}
    />
  )}
</Carousel>
```

#### Props
| prop   | Type   | Default    | Values    | Description   |
|:---|:---|:---|:---|:---|
| items   | Array   | null   |   | List of items which can be used to display slides  |
| defaultActive   | Number   | 0   | index of a slide  | To start carousel with any slide  |
| size   | Number   | 4   |   | Batch size for a slide  |
