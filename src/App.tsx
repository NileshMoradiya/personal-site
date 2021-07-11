import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { StyledEngineProvider, ThemeProvider } from '@material-ui/core/styles';

import { CssBaseline } from '@material-ui/core';
import Main from './layout/Main'; // fallback for lazy pages
import useAppTheme from './hooks/useAppTheme';

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));

const App = () => {
  const { theme } = useAppTheme();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename={PUBLIC_URL}>
          <Main>
            <Suspense fallback={<>Loading...</>}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/stats" component={Stats} />
                <Route path="/contact" component={Contact} />
                <Route path="/resume" component={Resume} />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </Main>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
