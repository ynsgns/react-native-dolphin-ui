import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Button,
  Container,
  Input,
  Loading,
  Panel,
  Select,
  BottomSheet,
} from 'react-native-dolphin-ui';

const options = [
  {label: 'Galatasaray', value: '1905'},
  {label: 'Karşıyaka', value: '1912'},
];

export default function App() {
  const [pageLoading, setPageLoading] = React.useState(true);
  const [isShowBottomSheet, setIsShowBottomSheet] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 1000);
  }, []);

  const onButtonPress = () => {
    setIsShowBottomSheet(true);
  };

  const handleClosePress = () => {
    setIsShowBottomSheet(false);
  };

  return (
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
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
