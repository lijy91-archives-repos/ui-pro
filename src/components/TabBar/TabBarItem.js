import React, { PureComponent } from 'react';
import { View as RNView } from 'react-native';
import withStyles from '@blankapp/ui/src/withStyles';

class TabBarItem extends PureComponent {
  render() {
    const { ...restProps } = this.props;
    return (
      <RNView {...restProps} />
    );
  }
}

export default withStyles('TabBarItem')(TabBarItem);
