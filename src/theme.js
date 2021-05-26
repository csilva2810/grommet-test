import { css } from 'styled-components';
import { Text, Heading, Paragraph } from 'grommet';

Text.defaultProps = {
  ...Text.defaultProps,
  color: 'brand',
};

Heading.defaultProps = {
  ...Heading.defaultProps,
  color: 'brand',
};

Paragraph.defaultProps = {
  ...Paragraph.defaultProps,
  color: 'brand',
};

export const theme = {
  global: {
    colors: {
      brand: '#000E5C',
      'accent-1': '#5CA5D1',
      border: '#dddddd',
      control: {
        dark: 'accent-1',
        light: 'accent-1',
      },
      text: {
        dark: '#f8f8f8',
        light: 'brand',
      },
    },

    focus: {
      shadow: {
        size: '0px',
      },
      border: {
        color: 'accent-1',
      },
    },

    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },

    input: {
      font: {
        weight: 400,
      },
    },

    control: {
      border: {
        radius: '10px',
        color: 'border',
      },
      disabled: {
        opacity: 0.3,
      },
    },
  },

  button: {
    primary: {
      color: 'accent-1',
      extend: (props) => css`
        color: ${props.theme.global.colors.white};
      `,
    },
  },
};
