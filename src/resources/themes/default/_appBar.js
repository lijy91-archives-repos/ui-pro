import { Platform } from 'react-native';
import {
  white,
  themePrimary,
  // textPrimary,
} from '@blankapp/ui/src/resources/themes/default/colors';
import { fontSizeTitle } from '@blankapp/ui/src/resources/themes/default/dimens';

const getAppBarHeight = (isLandscape) => {
  let appBarHeight = 56;
  if (Platform.OS === 'ios') {
    appBarHeight = isLandscape && !Platform.isPad ? 32 : 44;
  }
  return appBarHeight;
};

export default {
  AppBar: {
    backgroundColor: themePrimary,
    height: getAppBarHeight(),
  },
  AppBarBackButton: {
    Icon: {
      padding: 0,
      size: 24,
      color: white,
      width: getAppBarHeight(),
      height: getAppBarHeight(),
      lineHeight: getAppBarHeight(),
      textAlign: 'center',
    },
  },
  AppBarButton: {
    Text: {
      color: white,
    },
  },
  AppBarIconButton: {
    Icon: {
      padding: 0,
      size: 24,
      color: white,
      width: getAppBarHeight(),
      height: getAppBarHeight(),
      lineHeight: getAppBarHeight(),
      textAlign: 'center',
    },
  },
  AppBarTitle: {
    color: white,
    fontSize: fontSizeTitle,
    fontWeight: '500',
  },
};
