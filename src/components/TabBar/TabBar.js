import React, { PureComponent } from 'react';
import { View as RNView } from 'react-native';
import withStyles from '@blankapp/ui/src/withStyles';

import TabBarItem from './TabBarItem';

/**
 * TabBar
 *
 * @example
 * <TabBar />
 */
class TabBar extends PureComponent {
  render() {
    const { ...restProps } = this.props;
    return (
      <RNView {...restProps} />
    );
  }
}

TabBar.Item = TabBarItem;

export default withStyles('TabBar')(TabBar);
