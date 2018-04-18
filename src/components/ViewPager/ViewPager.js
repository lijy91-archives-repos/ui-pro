import React, { PureComponent } from 'react';
import { View as RNView } from 'react-native';
import withStyles from '@blankapp/ui/src/withStyles';

import ViewPaggerIndicator from './ViewPagerIndicator';

/**
 * ViewPagger
 *
 * @example
 * <ViewPagger />
 */
class ViewPagger extends PureComponent {
  render() {
    const { ...restProps } = this.props;
    return (
      <RNView {...restProps} />
    );
  }
}

ViewPagger.Indicator = ViewPaggerIndicator;

export default withStyles('ViewPagger')(ViewPagger);
