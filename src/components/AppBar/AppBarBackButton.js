import React, { PureComponent } from 'react';
import withStyles from '@blankapp/ui/src/withStyles';
import IconButton from '../IconButton/IconButton';

/**
 * AppBarBackButton
 *
 * @example
 * <AppBar.BackButton />
 */
class AppBarBackButton extends PureComponent {
  render() {
    const { ...restProps } = this.props;
    return (
      <IconButton {...restProps} iconName="arrow-back" />
    );
  }
}

export default withStyles('AppBarBackButton')(AppBarBackButton);
