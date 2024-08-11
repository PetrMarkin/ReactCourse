(() => {
  var e = {};
  (e.id = 409),
    (e.ids = [409]),
    (e.modules = {
      7849: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/action-async-storage.external');
      },
      2934: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/action-async-storage.external.js');
      },
      5403: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/request-async-storage.external');
      },
      4580: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/request-async-storage.external.js');
      },
      4749: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/static-generation-async-storage.external');
      },
      5869: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/static-generation-async-storage.external.js');
      },
      399: (e) => {
        'use strict';
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js');
      },
      7961: (e, t, r) => {
        'use strict';
        r.r(t),
          r.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => x,
            originalPathname: () => u,
            pages: () => d,
            routeModule: () => h,
            tree: () => c,
          }),
          r(5866),
          r(6748),
          r(6913);
        var s = r(3191),
          n = r(8716),
          o = r(7922),
          i = r.n(o),
          a = r(5231),
          l = {};
        for (let e in a)
          0 >
            [
              'default',
              'tree',
              'pages',
              'GlobalError',
              'originalPathname',
              '__next_app__',
              'routeModule',
            ].indexOf(e) && (l[e] = () => a[e]);
        r.d(t, l);
        let c = [
            '',
            {
              children: [
                '/_not-found',
                {
                  children: [
                    '__PAGE__',
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 6748)),
                        'B:\\ProjectsReact\\next-js\\ReactCourse\\app\\not-found.tsx',
                      ],
                    },
                  ],
                },
                {},
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 6913)),
                'B:\\ProjectsReact\\next-js\\ReactCourse\\app\\layout.tsx',
              ],
              'not-found': [
                () => Promise.resolve().then(r.bind(r, 6748)),
                'B:\\ProjectsReact\\next-js\\ReactCourse\\app\\not-found.tsx',
              ],
            },
          ],
          d = [],
          u = '/_not-found/page',
          x = { require: r, loadChunk: () => Promise.resolve() },
          h = new s.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: '/_not-found/page',
              pathname: '/_not-found',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      4932: (e, t, r) => {
        Promise.resolve().then(r.t.bind(r, 2994, 23)),
          Promise.resolve().then(r.t.bind(r, 6114, 23)),
          Promise.resolve().then(r.t.bind(r, 9727, 23)),
          Promise.resolve().then(r.t.bind(r, 9671, 23)),
          Promise.resolve().then(r.t.bind(r, 1868, 23)),
          Promise.resolve().then(r.t.bind(r, 4759, 23));
      },
      5093: () => {},
      4062: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 1559)),
          Promise.resolve().then(r.bind(r, 4763));
      },
      1559: (e, t, r) => {
        'use strict';
        r.d(t, { D: () => a, SelectedItemsProvider: () => i });
        var s = r(326),
          n = r(7577);
        let o = (0, n.createContext)(void 0),
          i = ({ children: e }) => {
            let [t, r] = (0, n.useState)([]);
            return s.jsx(o.Provider, {
              value: {
                selectedItems: t,
                selectItem: (e) => {
                  r((t) => [...t, e]);
                },
                deselectItem: (e) => {
                  r((t) => t.filter((t) => t.url !== e));
                },
              },
              children: e,
            });
          },
          a = () => {
            let e = (0, n.useContext)(o);
            if (!e)
              throw Error(
                'useSelectedItems must be used within a SelectedItemsProvider',
              );
            return e;
          };
      },
      4714: (e, t, r) => {
        'use strict';
        r.d(t, { F: () => n, N: () => o });
        var s = r(7577);
        let n = () => {
            let e = (0, s.useContext)(o);
            if (!e) throw Error('useTheme must be used within a ThemeProvider');
            return e;
          },
          o = (0, s.createContext)(void 0);
      },
      4763: (e, t, r) => {
        'use strict';
        r.d(t, { ThemeProvider: () => i });
        var s = r(326),
          n = r(7577),
          o = r(4714);
        let i = ({ children: e }) => {
          let [t, r] = (0, n.useState)('light');
          return s.jsx(o.N.Provider, {
            value: {
              theme: t,
              toggleTheme: () => {
                r((e) => ('light' === e ? 'dark' : 'light'));
              },
            },
            children: e,
          });
        };
      },
      2565: (e) => {
        e.exports = { errorPage: 'ErrorPage_errorPage__Gs02L' };
      },
      6913: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => p, metadata: () => h });
        var s = r(9510),
          n = r(8570);
        let o = (0, n.createProxy)(
            String.raw`B:\ProjectsReact\next-js\ReactCourse\src\helpers\Contexts\ThemeContext.tsx`,
          ),
          { __esModule: i, $$typeof: a } = o;
        o.default;
        let l = (0, n.createProxy)(
          String.raw`B:\ProjectsReact\next-js\ReactCourse\src\helpers\Contexts\ThemeContext.tsx#ThemeProvider`,
        );
        (0, n.createProxy)(
          String.raw`B:\ProjectsReact\next-js\ReactCourse\src\helpers\Contexts\ThemeContext.tsx#ThemeContext`,
        ),
          r(1141);
        let c = (0, n.createProxy)(
            String.raw`B:\ProjectsReact\next-js\ReactCourse\src\helpers\Contexts\SelectedItemsContext.tsx`,
          ),
          { __esModule: d, $$typeof: u } = c;
        c.default;
        let x = (0, n.createProxy)(
          String.raw`B:\ProjectsReact\next-js\ReactCourse\src\helpers\Contexts\SelectedItemsContext.tsx#SelectedItemsProvider`,
        );
        (0, n.createProxy)(
          String.raw`B:\ProjectsReact\next-js\ReactCourse\src\helpers\Contexts\SelectedItemsContext.tsx#useSelectedItems`,
        );
        let h = {
          title: 'Star Wars Database',
          description: 'Next.js App Router Api Integration',
        };
        function p({ children: e }) {
          return s.jsx('html', {
            lang: 'en',
            children: s.jsx('body', {
              children: s.jsx(x, { children: s.jsx(l, { children: e }) }),
            }),
          });
        }
      },
      6748: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => a });
        var s = r(9510),
          n = r(2565),
          o = r.n(n);
        function i() {
          return (0, s.jsxs)('div', {
            className: o().errorPage,
            'data-testid': 'error-page',
            children: [
              s.jsx('h1', { children: 'Oops!' }),
              s.jsx('p', {
                children: 'Sorry, an unexpected error has occurred.',
              }),
              s.jsx('p', { children: s.jsx('i', { children: 'Error 404' }) }),
              s.jsx('p', { children: 'May the Force be with you' }),
            ],
          });
        }
        function a() {
          return s.jsx(i, {});
        }
      },
      5866: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'default', {
            enumerable: !0,
            get: function () {
              return o;
            },
          }),
          r(3370);
        let s = r(9510);
        r(1159);
        let n = {
          error: {
            fontFamily:
              'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
            height: '100vh',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          },
          desc: { display: 'inline-block' },
          h1: {
            display: 'inline-block',
            margin: '0 20px 0 0',
            padding: '0 23px 0 0',
            fontSize: 24,
            fontWeight: 500,
            verticalAlign: 'top',
            lineHeight: '49px',
          },
          h2: { fontSize: 14, fontWeight: 400, lineHeight: '49px', margin: 0 },
        };
        function o() {
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)('title', {
                children: '404: This page could not be found.',
              }),
              (0, s.jsx)('div', {
                style: n.error,
                children: (0, s.jsxs)('div', {
                  children: [
                    (0, s.jsx)('style', {
                      dangerouslySetInnerHTML: {
                        __html:
                          'body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}',
                      },
                    }),
                    (0, s.jsx)('h1', {
                      className: 'next-error-h1',
                      style: n.h1,
                      children: '404',
                    }),
                    (0, s.jsx)('div', {
                      style: n.desc,
                      children: (0, s.jsx)('h2', {
                        style: n.h2,
                        children: 'This page could not be found.',
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      1141: () => {},
      3370: (e, t, r) => {
        'use strict';
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        r.r(t), r.d(t, { _: () => s, _interop_require_default: () => s });
      },
    });
  var t = require('../../webpack-runtime.js');
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [746], () => r(7961));
  module.exports = s;
})();
