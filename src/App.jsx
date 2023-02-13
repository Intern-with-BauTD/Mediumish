/* eslint-disable react/jsx-wrap-multilines */
import { Fragment, React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import protectedRoute from './routes';
import DefaultLayout from './components/Layouts/DefaultLayout';

function App() {
  return (
    <Router>
      <Routes>
        {protectedRoute.map((route) => {
          let Layout = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          const Page = route.component;
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
