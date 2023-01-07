# react-native-dolphin-ui

React Native UI Kit

## Installation

```sh
npm install react-native-dolphin-ui
```
or
```sh
yarn add react-native-dolphin-ui
```


## Usage

```js
import {
  Button,
  Container,
  Input,
  Loading,
  Panel,
  Select,
  BottomSheet,
} from 'react-native-dolphin-ui';

// ...

<Container>
  <Loading isShow={pageLoading} />
  <View style={styles.container}>
    <Panel title="Example form title">
      <Input label="Name" />
      <Input label="Surname" />
      <Input label="Password" secureTextEntry />
      <Select title="Choose your favorite team" options={options} />
      <Select
        title="Choose your favorite team (canDelete)"
        options={options}
        canDelete
      />
      <Button title="Button" onPress={onButtonPress} />
    </Panel>
  </View>
  <BottomSheet
    title="Alert"
    description="Are you sure?"
    isShow={isShowBottomSheet}
    handleClosePress={handleClosePress}
  />
</Container>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
