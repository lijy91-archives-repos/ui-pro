import React, { PureComponent } from 'react';
import MaterialDesignIcon from 'react-native-vector-icons/MaterialIcons';

const mapPropToStyles = [
  'size',
  'color',
];

/**
 * Icon
 *
 * @example
 * <Icon name="menu-back" />
 */
class Icon extends PureComponent {
  render() {
    return (
      <MaterialDesignIcon {...this.props} />
    );
  }
}

Icon.mapPropToStyles = mapPropToStyles;

export default Icon;
