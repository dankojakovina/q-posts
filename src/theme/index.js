const baseColors = {
  ' --q-primary': '#fff',
  '--q-secondary': '#424242',
  '--q-text-dark': '#424242',
  '--q-text-light': '#7e7c7c',
};

const baseColorsDark = {
  '--q-primary': '#222222',
  '--q-secondary': '#fff',
  '--q-text-dark': '#fff',
  '--q-text-light': '#fff',
};

let activeTheme = {
  name: 'light',
  colors: baseColors,
};

function changeTheme(isDarkMode) {
  if (!isDarkMode) {
    activeTheme = {
      name: 'light',
      colors: baseColors,
    };
  }
  if (isDarkMode) {
    activeTheme = {
      name: 'dark',
      colors: baseColorsDark,
    };
  }
  const style = document.getElementById('style');
  style.remove();
  this.createTheme();
}

function createTheme() {
  const css = `:root { ${Object.keys(activeTheme.colors).reduce((prev, curr) => `${prev + curr}:${activeTheme.colors[curr]};`, '')}}`;
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.id = 'style';

  head.appendChild(style);

  style.type = 'text/css';
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

export default {
  baseColors, baseColorsDark, changeTheme, createTheme,
};
