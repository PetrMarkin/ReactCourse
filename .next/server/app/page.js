(() => {
  var e = {};
  (e.id = 931),
    (e.ids = [931]),
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
      6675: (e, t, r) => {
        'use strict';
        r.r(t),
          r.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => h,
            originalPathname: () => u,
            pages: () => d,
            routeModule: () => x,
            tree: () => c,
          }),
          r(4576),
          r(6913),
          r(6748);
        var s = r(3191),
          a = r(8716),
          n = r(7922),
          i = r.n(n),
          l = r(5231),
          o = {};
        for (let e in l)
          0 >
            [
              'default',
              'tree',
              'pages',
              'GlobalError',
              'originalPathname',
              '__next_app__',
              'routeModule',
            ].indexOf(e) && (o[e] = () => l[e]);
        r.d(t, o);
        let c = [
            '',
            {
              children: [
                '__PAGE__',
                {},
                {
                  page: [
                    () => Promise.resolve().then(r.bind(r, 4576)),
                    'B:\\ProjectsReact\\next-js\\ReactCourse\\app\\page.tsx',
                  ],
                },
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
          d = ['B:\\ProjectsReact\\next-js\\ReactCourse\\app\\page.tsx'],
          u = '/page',
          h = { require: r, loadChunk: () => Promise.resolve() },
          x = new s.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: '/page',
              pathname: '/',
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
      6028: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 5468));
      },
      5093: () => {},
      4062: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 1559)),
          Promise.resolve().then(r.bind(r, 4763));
      },
      5047: (e, t, r) => {
        'use strict';
        var s = r(7389);
        r.o(s, 'useRouter') &&
          r.d(t, {
            useRouter: function () {
              return s.useRouter;
            },
          }),
          r.o(s, 'useSearchParams') &&
            r.d(t, {
              useSearchParams: function () {
                return s.useSearchParams;
              },
            });
      },
      5468: (e, t, r) => {
        'use strict';
        r.d(t, { default: () => D });
        var s = r(326),
          a = r(7577),
          n = r(2324),
          i = r.n(n),
          l = r(4714),
          o = r(9874),
          c = r.n(o);
        let d = function ({ onClick: e, children: t }) {
          let { theme: r } = (0, l.F)();
          return s.jsx('button', {
            className: `${c().button} ${c()[r]}`,
            onClick: e,
            children: t,
          });
        };
        var u = r(8354),
          h = r.n(u);
        let x = function ({ searchTerm: e, onChange: t }) {
          let { theme: r } = (0, l.F)();
          return s.jsx('input', {
            type: 'text',
            value: e,
            onChange: t,
            placeholder: 'Search your character',
            className: `${h().searchInput} ${h()[r]}`,
          });
        };
        var m = r(3973),
          _ = r.n(m);
        let p = () => {
          let e = (0, a.useContext)(l.N);
          if (!e)
            throw Error('ThemeSwitcher must be used within a ThemeProvider');
          let { theme: t, toggleTheme: r } = e;
          return (0, s.jsxs)('button', {
            onClick: r,
            className: `${_().btnTheme} ${_()[t]}`,
            children: [
              'Switch to ',
              'light' === t ? 'dark' : 'light',
              ' theme',
            ],
          });
        };
        var g = r(6097),
          j = r.n(g);
        let C = function ({ searchTerm: e, onSearch: t, onChange: r }) {
          return (0, s.jsxs)('div', {
            className: j().searchSection,
            children: [
              s.jsx(x, { searchTerm: e, onChange: r }),
              s.jsx(d, { onClick: t, children: 'Search' }),
              s.jsx(p, {}),
            ],
          });
        };
        var P = r(5047),
          v = r(9884),
          S = r.n(v);
        let f = ({ totalPages: e, initialPage: t = 1 }) => {
          let [r, n] = (0, a.useState)(t),
            { theme: i } = (0, l.F)(),
            o = (0, P.useRouter)(),
            c = (0, P.useSearchParams)();
          (0, a.useEffect)(() => {
            let r = c.get('page'),
              s = r ? parseInt(r, 10) : t;
            s >= 1 && s <= e && n(s);
          }, [c, t, e]);
          let d = (e) => {
            n(e), o.push(`?page=${e}`);
          };
          return (0, s.jsxs)('div', {
            className: S().pagination,
            children: [
              s.jsx('span', {
                onClick: () => d(r > 1 ? r - 1 : 1),
                className: `${S().btnPage} ${S()[i]}`,
                children: 'Previous',
              }),
              (() => {
                let t = [];
                for (let a = 1; a <= e; a++)
                  t.push(
                    s.jsx(
                      'span',
                      {
                        onClick: () => d(a),
                        className: `${S().btnPage} ${S()[i]} ${r === a ? S().active : ''}`,
                        children: a,
                      },
                      a,
                    ),
                  );
                return t;
              })(),
              s.jsx('span', {
                onClick: () => d(r < e ? r + 1 : e),
                className: `${S().btnPage} ${S()[i]}`,
                children: 'Next',
              }),
            ],
          });
        };
        var y = r(1265),
          b = r.n(y),
          w = r(1559);
        let k = function () {
          let { selectedItems: e, deselectItem: t } = (0, w.D)(),
            { theme: r } = (0, l.F)(),
            n = (0, a.useRef)(null);
          return (0, s.jsxs)('div', {
            'data-testid': 'selected-items',
            className: `${b().selectedContainer} ${b()[r]}`,
            children: [
              s.jsx('h3', {
                className: `${b().itemsTitle} ${r}`,
                children: 'Selected Items:',
              }),
              s.jsx('ul', {
                className: `${b().itemsList} ${r}`,
                children: e.map((e) =>
                  s.jsx(
                    'li',
                    { className: `${b().item} ${r}`, children: e.name },
                    e.url,
                  ),
                ),
              }),
              (0, s.jsxs)('div', {
                className: `${b().btnsContainer} ${r}`,
                children: [
                  s.jsx(d, {
                    onClick: () => {
                      e.forEach((e) => t(e.url));
                    },
                    children: 'Unselect all',
                  }),
                  s.jsx(d, {
                    onClick: () => {
                      if (0 === e.length) {
                        alert('No items selected');
                        return;
                      }
                      let t = new Blob(
                          [
                            [
                              [
                                'Name',
                                'Height',
                                'Mass',
                                'Homeworld',
                                'Films',
                                'Species',
                                'Created',
                                'Edited',
                                'Url',
                              ],
                              ...e
                                .map((e) => ({
                                  name: e.name,
                                  height: e.height,
                                  mass: e.mass,
                                  homeworld: e.homeworld,
                                  films: e.films.join(', '),
                                  species: e.species.join(', '),
                                  created: e.created,
                                  edited: e.edited,
                                  url: e.url,
                                }))
                                .map((e) => [
                                  e.name,
                                  e.height,
                                  e.mass,
                                  e.homeworld,
                                  e.films,
                                  e.species,
                                  e.created,
                                  e.edited,
                                  e.url,
                                ]),
                            ]
                              .map((e) => e.join(','))
                              .join('\n'),
                          ],
                          { type: 'text/csv;charset=utf-8;' },
                        ),
                        r = URL.createObjectURL(t);
                      n.current &&
                        ((n.current.href = r),
                        (n.current.download = `${e.length}_characters.csv`),
                        n.current.click(),
                        URL.revokeObjectURL(r));
                    },
                    children: 'Download',
                  }),
                  s.jsx('a', { ref: n, style: { display: 'none' } }),
                ],
              }),
            ],
          });
        };
        var $ = r(304),
          R = r.n($);
        let I = function () {
            let { theme: e } = (0, l.F)();
            return s.jsx('div', {
              'data-testid': 'loader-container',
              className: R().loaderContainer,
              children: s.jsx('div', {
                'data-testid': 'loader',
                className: `${R().loader} ${R()[e]}`,
              }),
            });
          },
          L = 'https://swapi.dev/api/';
        async function N(e) {
          let t = await fetch(`${L}/people?page=${e}`);
          return await t.json();
        }
        let E = async (e) => {
            let t = await fetch(`${L}/people/${e}`);
            return await t.json();
          },
          T = async (e) => {
            let t = await fetch(`${L}/people/?search=${e}`);
            return await t.json();
          };
        var B = r(7983),
          F = r.n(B);
        let q = (e) => {
            let [t, r] = (0, a.useState)(e),
              s = (0, a.useRef)(null),
              n = (0, P.useRouter)(),
              i = (0, P.useSearchParams)(),
              l = (0, a.useCallback)(
                (e) => {
                  if (s.current && !s.current.contains(e.target)) {
                    r(!1);
                    let e = new URLSearchParams(i.toString());
                    e.delete('details'), n.push(`?${e.toString()}`);
                  }
                },
                [i, n],
              );
            return (
              (0, a.useEffect)(
                () => (
                  document.addEventListener('click', l),
                  () => {
                    document.removeEventListener('click', l);
                  }
                ),
                [l],
              ),
              { ref: s, isActive: t, setIsActive: r }
            );
          },
          U = ({ id: e }) => {
            let [t, r] = (0, a.useState)(null),
              [n, i] = (0, a.useState)(!1),
              { ref: o, isActive: c } = q(!0),
              { theme: u } = (0, l.F)(),
              h = (0, P.useRouter)(),
              x = (0, P.useSearchParams)();
            return ((0, a.useEffect)(() => {
              i(!0),
                (async () => {
                  try {
                    let t = await E(e);
                    r(t);
                  } catch (e) {
                    console.error('Failed to fetch person details:', e);
                  } finally {
                    i(!1);
                  }
                })().catch((e) => {
                  console.error('Error fetching results:', e);
                });
            }, [e, c]),
            t)
              ? (0, s.jsxs)('div', {
                  className: `${F().detailedCard} ${c ? F().active : ''}`,
                  ref: o,
                  children: [
                    s.jsx(d, {
                      'data-testid': 'close',
                      onClick: () => {
                        let e = new URLSearchParams(x?.toString());
                        e.delete('details'), h.push(`?${e.toString()}`);
                      },
                      children: 'Close',
                    }),
                    n
                      ? s.jsx(I, {})
                      : (0, s.jsxs)('div', {
                          className: `${F().resultItem} ${F()[u]}`,
                          children: [
                            s.jsx('h3', { children: t.name }),
                            (0, s.jsxs)('p', {
                              children: ['Height: ', t.height],
                            }),
                            (0, s.jsxs)('p', { children: ['Mass: ', t.mass] }),
                            (0, s.jsxs)('p', {
                              children: ['Hair Color: ', t.hair_color],
                            }),
                            (0, s.jsxs)('p', {
                              children: ['Skin Color: ', t.skin_color],
                            }),
                            (0, s.jsxs)('p', {
                              children: ['Eye Color: ', t.eye_color],
                            }),
                            (0, s.jsxs)('p', {
                              children: ['Birth Year: ', t.birth_year],
                            }),
                            (0, s.jsxs)('p', {
                              children: ['Gender: ', t.gender],
                            }),
                          ],
                        }),
                  ],
                })
              : null;
          },
          A = function (e, t) {
            let [r, s] = (0, a.useState)(t);
            return [r, s];
          },
          M = (0, a.lazy)(() => r.e(328).then(r.bind(r, 7328))),
          D = ({ searchParams: e }) => {
            let [t, r] = (0, a.useState)(null),
              { selectedItems: n } = (0, w.D)(),
              [o, c] = A('searchQuery', ''),
              [d, u] = (0, a.useState)(''),
              [h, x] = (0, a.useState)(!1),
              [m, _] = (0, a.useState)(null),
              { theme: p } = (0, l.F)(),
              g = (0, P.useSearchParams)(),
              { page: j = '1' } = e,
              v = (0, a.useCallback)(async (e = '', t = '1') => {
                x(!0);
                try {
                  let s = e ? await T(e.trim()) : await N(t);
                  r(s);
                } catch (e) {
                  console.error('Error fetching data:', e);
                } finally {
                  x(!1);
                }
              }, []);
            (0, a.useEffect)(() => {
              e.details && _(e.details);
            }, [e.details]),
              (0, a.useEffect)(() => {
                v(o, j).catch((e) => {
                  console.error('Error fetching results:', e);
                });
              }, [o, j, v]),
              (0, a.useEffect)(() => {
                let e = new URLSearchParams(g.toString()).get('details');
                e ? _(e) : _(null);
              }, [g]);
            let S = (0, a.useCallback)(() => {
                c(d);
              }, [d, c]),
              y = (0, a.useCallback)((e) => {
                u(e.target.value);
              }, []);
            return t
              ? (0, s.jsxs)('div', {
                  className: `${i().app} ${i()[p]}`,
                  children: [
                    s.jsx(C, { searchTerm: d, onSearch: S, onChange: y }),
                    s.jsx('hr', {}),
                    (0, s.jsxs)('div', {
                      className: i().mainContent,
                      children: [
                        h
                          ? s.jsx(I, {})
                          : s.jsx(a.Suspense, {
                              fallback: s.jsx(I, {}),
                              children: s.jsx(M, { data: t.results }),
                            }),
                        m && s.jsx(U, { id: m }),
                      ],
                    }),
                    n.length ? s.jsx(k, {}) : null,
                    s.jsx('hr', {}),
                    s.jsx(f, { totalPages: 9 }),
                  ],
                })
              : null;
          };
      },
      1559: (e, t, r) => {
        'use strict';
        r.d(t, { D: () => l, SelectedItemsProvider: () => i });
        var s = r(326),
          a = r(7577);
        let n = (0, a.createContext)(void 0),
          i = ({ children: e }) => {
            let [t, r] = (0, a.useState)([]);
            return s.jsx(n.Provider, {
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
          l = () => {
            let e = (0, a.useContext)(n);
            if (!e)
              throw Error(
                'useSelectedItems must be used within a SelectedItemsProvider',
              );
            return e;
          };
      },
      4714: (e, t, r) => {
        'use strict';
        r.d(t, { F: () => a, N: () => n });
        var s = r(7577);
        let a = () => {
            let e = (0, s.useContext)(n);
            if (!e) throw Error('useTheme must be used within a ThemeProvider');
            return e;
          },
          n = (0, s.createContext)(void 0);
      },
      4763: (e, t, r) => {
        'use strict';
        r.d(t, { ThemeProvider: () => i });
        var s = r(326),
          a = r(7577),
          n = r(4714);
        let i = ({ children: e }) => {
          let [t, r] = (0, a.useState)('light');
          return s.jsx(n.N.Provider, {
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
      2324: (e) => {
        e.exports = {
          app: 'ClientLayout_app__u6D8e',
          dark: 'ClientLayout_dark__712CJ',
          light: 'ClientLayout_light__nqOIF',
          mainContent: 'ClientLayout_mainContent__CKcK6',
        };
      },
      7983: (e) => {
        e.exports = {
          detailedCard: 'DetailedCard_detailedCard__d8sZu',
          light: 'DetailedCard_light__OLrax',
          dark: 'DetailedCard_dark__F2ZQw',
          resultItem: 'DetailedCard_resultItem__riNyo',
        };
      },
      2565: (e) => {
        e.exports = { errorPage: 'ErrorPage_errorPage__Gs02L' };
      },
      9884: (e) => {
        e.exports = {
          btnPage: 'Pagination_btnPage__CT2Xf',
          pagination: 'Pagination_pagination__c7olK',
          light: 'Pagination_light__8MnhH',
          dark: 'Pagination_dark___AtUM',
          active: 'Pagination_active__xC1TQ',
        };
      },
      6097: (e) => {
        e.exports = { searchSection: 'SearchSection_searchSection__n1giP' };
      },
      1265: (e) => {
        e.exports = {
          selectedContainer: 'SelectedItems_selectedContainer__un4P_',
          light: 'SelectedItems_light__0PdLo',
          dark: 'SelectedItems_dark__Z_Vfc',
          itemsTitle: 'SelectedItems_itemsTitle__85aF0',
          itemsList: 'SelectedItems_itemsList__G2a7I',
          item: 'SelectedItems_item__hPXum',
          btnsContainer: 'SelectedItems_btnsContainer__r2AKQ',
        };
      },
      9874: (e) => {
        e.exports = {
          button: 'Button_button__7F12w',
          light: 'Button_light__ry4yY',
          dark: 'Button_dark__ETufX',
        };
      },
      304: (e) => {
        e.exports = {
          loaderContainer: 'Loader_loaderContainer__706AE',
          loader: 'Loader_loader__JrqMn',
          rotation: 'Loader_rotation__YYz8C',
          dark: 'Loader_dark__wScU_',
          light: 'Loader_light__UPlLR',
        };
      },
      8354: (e) => {
        e.exports = {
          searchInput: 'SearchInput_searchInput__WCkEm',
          light: 'SearchInput_light__5F3cz',
          dark: 'SearchInput_dark__BXv90',
        };
      },
      3973: (e) => {
        e.exports = {
          btnTheme: 'ThemeSwitcher_btnTheme__zM1vA',
          light: 'ThemeSwitcher_light__KhkaS',
          dark: 'ThemeSwitcher_dark__JGEaA',
        };
      },
      6913: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => m, metadata: () => x });
        var s = r(9510),
          a = r(8570);
        let n = (0, a.createProxy)(
            String.raw`B:\ProjectsReact\next-js\ReactCourse\src\helpers\Contexts\ThemeContext.tsx`,
          ),
          { __esModule: i, $$typeof: l } = n;
        n.default;
        let o = (0, a.createProxy)(
          String.raw`B:\ProjectsReact\next-js\ReactCourse\src\helpers\Contexts\ThemeContext.tsx#ThemeProvider`,
        );
        (0, a.createProxy)(
          String.raw`B:\ProjectsReact\next-js\ReactCourse\src\helpers\Contexts\ThemeContext.tsx#ThemeContext`,
        ),
          r(1141);
        let c = (0, a.createProxy)(
            String.raw`B:\ProjectsReact\next-js\ReactCourse\src\helpers\Contexts\SelectedItemsContext.tsx`,
          ),
          { __esModule: d, $$typeof: u } = c;
        c.default;
        let h = (0, a.createProxy)(
          String.raw`B:\ProjectsReact\next-js\ReactCourse\src\helpers\Contexts\SelectedItemsContext.tsx#SelectedItemsProvider`,
        );
        (0, a.createProxy)(
          String.raw`B:\ProjectsReact\next-js\ReactCourse\src\helpers\Contexts\SelectedItemsContext.tsx#useSelectedItems`,
        );
        let x = {
          title: 'Star Wars Database',
          description: 'Next.js App Router Api Integration',
        };
        function m({ children: e }) {
          return s.jsx('html', {
            lang: 'en',
            children: s.jsx('body', {
              children: s.jsx(h, { children: s.jsx(o, { children: e }) }),
            }),
          });
        }
      },
      6748: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => l });
        var s = r(9510),
          a = r(2565),
          n = r.n(a);
        function i() {
          return (0, s.jsxs)('div', {
            className: n().errorPage,
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
        function l() {
          return s.jsx(i, {});
        }
      },
      4576: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => c });
        var s = r(9510),
          a = r(8570);
        let n = (0, a.createProxy)(
            String.raw`B:\ProjectsReact\next-js\ReactCourse\src\components\ClientLayout\ClientLayout.tsx`,
          ),
          { __esModule: i, $$typeof: l } = n;
        n.default;
        let o = (0, a.createProxy)(
          String.raw`B:\ProjectsReact\next-js\ReactCourse\src\components\ClientLayout\ClientLayout.tsx#default`,
        );
        function c({ searchParams: e }) {
          return s.jsx('div', {
            className: 'main-container',
            children: s.jsx(o, { searchParams: e }),
          });
        }
      },
      1141: () => {},
    });
  var t = require('../webpack-runtime.js');
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [746], () => r(6675));
  module.exports = s;
})();
