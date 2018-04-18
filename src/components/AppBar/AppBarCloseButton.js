import React, { PureComponent } from 'react';
import withStyles from '@blankapp/ui/src/withStyles';
import IconButton from '../IconButton/IconButton';

/**
 * AppBarCloseButton
 *
 * @example
 * <AppBar.CloseButton />
 */
class AppBarBackButton extends PureComponent {
  render() {
    const { ...restProps } = this.props;
    return (
      <IconButton {...restProps} iconName="close" />
    );
  }
}

export default withStyles('AppBarBackButton')(AppBarBackButton);
