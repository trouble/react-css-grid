import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GridContext from './context';
import GlobalStyles from '../GlobalStyles';

const GridProvider = (props) => {
  const {
    hCount,
    hCountOverrides,
    hGap,
    vGap,
    children,
    renderStyleSheet,
    breakpoints,
    scopeCSSTo,
  } = props;

  return (
    <Fragment>
      {renderStyleSheet
        && (
          <GlobalStyles
            {...{
              hCount,
              hGap,
              vGap,
              breakpoints,
              scopeCSSTo,
            }}
          />
        )
      }
      <GridContext.Provider
        value={{ hCount,
          hCountOverrides,
          hGap,
          vGap,
        }}
      >
        {children}
      </GridContext.Provider>
    </Fragment>
  );
};

GridProvider.defaultProps = {
  hGap: '0px',
  vGap: '0px',
  breakpoints: {
    xs: 350,
    s: 576,
    m: 768,
    l: 992,
    xl: 1200,
  },
  renderStyleSheet: true,
  scopeCSSTo: '',
  minifyCSS: true,
  hCountOverrides: undefined,
};

GridProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
  renderStyleSheet: PropTypes.bool,
  hCount: PropTypes.number.isRequired,
  hCountOverrides: PropTypes.shape({
    xs: PropTypes.number,
    s: PropTypes.number,
    m: PropTypes.number,
    l: PropTypes.number,
    xl: PropTypes.number,
  }),
  hGap: PropTypes.oneOfType([
    PropTypes.oneOf([
      'columnWidth',
    ]),
    PropTypes.string,
  ]),
  vGap: PropTypes.string,
  breakpoints: PropTypes.shape({
    xs: PropTypes.number,
    s: PropTypes.number,
    m: PropTypes.number,
    l: PropTypes.number,
    xl: PropTypes.number,
  }),
  scopeCSSTo: PropTypes.string,
  minifyCSS: PropTypes.bool,
};

export default GridProvider;
