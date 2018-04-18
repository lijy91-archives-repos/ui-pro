import React, { PureComponent } from 'react';
import RNTouchableOpacity from '@blankapp/ui/src/components/RNTouchableOpacity';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const propTypes = {
  ...RNTouchableOpacity.propTypes,
  iconName: PropTypes.string.isRequired,
  iconStyle: PropTypes.oneOfType([PropTypes.object]),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['mini', 'small', 'medium', 'large', 'big']),
};
const defaultProps = {
  iconStyle: undefined,
  disabled: false,
  size: 'medium',
};
const mapPropToStyles = [
  'activeOpacity',
];

/**
 * IconButton
 *
 * @example
 * <IconButton name="menu-back" />
 */
class IconButton extends PureComponent {
  render() {
    const {
      iconName,
      iconStyle,
      ...restProps
    } = this.props;
    return (
      <RNTouchableOpacity
        {...restProps}
      >
        <Icon name={iconName} style={iconStyle} />
      </RNTouchableOpacity>
    );
  }
}


IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;
IconButton.mapPropToStyles = mapPropToStyles;

export default IconButton;
