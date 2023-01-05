const thema = 'light';

const colors: Themes = {
  light: {
    background: '#F5F5F5',
    primary: '#23d5f0',
    secondary: '#c70c0c',
    text: '#14171a',
    textSecondary: '#FFF',
    placeholder: '#ddd',
    placeholderSecondary: '#fff',
    borderPrimary: '#ccc',
    borderSecondary: '#ddd',
    shadow: '#ccc',
    white: '#FFF',
    succes: '#34B51D',
    error: '#F00',
    warning: 'orange',
    transparent: 'transparent',
  },
  dark: {
    primary: '#1da1f2',
    secondary: '#8ed0f9',
    text: '#FFF',
    textSecondary: '#ffffff',
    placeholder: '#ddd',
    placeholderSecondary: '#fff',
    background: '#15202b',
    white: '#15202b',
    borderPrimary: '#ccc',
    borderSecondary: '#ddd',
    shadow: '#495B6D',
    transparent: 'transparent',
    error: '#F00',
    warning: 'orange',
    succes: '#34B51D',
  },
};

type Theme = {
  primary: string;
  secondary: string;
  text: string;
  textSecondary: string;
  placeholder: string;
  placeholderSecondary: string;
  background: string;
  shadow: string;
  transparent: string;
  borderPrimary: string;
  borderSecondary: string;
  succes: string;
  error: string;
  warning: string;
  white: string;
};
type Themes = {
  dark: Theme;
  light: Theme;
};

const color = colors[thema];

export default color;
