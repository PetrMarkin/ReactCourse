(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    3633: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 635));
    },
    6463: function (e, t, a) {
      'use strict';
      var n = a(1169);
      a.o(n, 'useRouter') &&
        a.d(t, {
          useRouter: function () {
            return n.useRouter;
          },
        }),
        a.o(n, 'useSearchParams') &&
          a.d(t, {
            useSearchParams: function () {
              return n.useSearchParams;
            },
          });
    },
    635: function (e, t, a) {
      'use strict';
      a.d(t, {
        default: function () {
          return H;
        },
      });
      var n = a(7437),
        r = a(2265),
        c = a(1494),
        s = a.n(c),
        i = a(5534),
        l = a(9199),
        o = a.n(l),
        u = function (e) {
          let { onClick: t, children: a } = e,
            { theme: r } = (0, i.F)();
          return (0, n.jsx)('button', {
            className: ''.concat(o().button, ' ').concat(o()[r]),
            onClick: t,
            children: a,
          });
        },
        d = a(7815),
        h = a.n(d),
        _ = function (e) {
          let { searchTerm: t, onChange: a } = e,
            { theme: r } = (0, i.F)();
          return (0, n.jsx)('input', {
            type: 'text',
            value: t,
            onChange: a,
            placeholder: 'Search your character',
            className: ''.concat(h().searchInput, ' ').concat(h()[r]),
          });
        },
        m = a(2837),
        f = a.n(m),
        p = () => {
          let e = (0, r.useContext)(i.N);
          if (!e)
            throw Error('ThemeSwitcher must be used within a ThemeProvider');
          let { theme: t, toggleTheme: a } = e;
          return (0, n.jsxs)('button', {
            onClick: a,
            className: ''.concat(f().btnTheme, ' ').concat(f()[t]),
            children: [
              'Switch to ',
              'light' === t ? 'dark' : 'light',
              ' theme',
            ],
          });
        },
        g = a(2967),
        x = a.n(g),
        S = function (e) {
          let { searchTerm: t, onSearch: a, onChange: r } = e;
          return (0, n.jsxs)('div', {
            className: x().searchSection,
            children: [
              (0, n.jsx)(_, { searchTerm: t, onChange: r }),
              (0, n.jsx)(u, { onClick: a, children: 'Search' }),
              (0, n.jsx)(p, {}),
            ],
          });
        },
        C = a(6463),
        j = a(6836),
        v = a.n(j),
        k = (e) => {
          let { totalPages: t, initialPage: a = 1 } = e,
            [c, s] = (0, r.useState)(a),
            { theme: l } = (0, i.F)(),
            o = (0, C.useRouter)(),
            u = (0, C.useSearchParams)();
          (0, r.useEffect)(() => {
            let e = u.get('page'),
              n = e ? parseInt(e, 10) : a;
            n >= 1 && n <= t && s(n);
          }, [u, a, t]);
          let d = (e) => {
            s(e), o.push('?page='.concat(e));
          };
          return (0, n.jsxs)('div', {
            className: v().pagination,
            children: [
              (0, n.jsx)('span', {
                onClick: () => d(c > 1 ? c - 1 : 1),
                className: ''.concat(v().btnPage, ' ').concat(v()[l]),
                children: 'Previous',
              }),
              (() => {
                let e = [];
                for (let a = 1; a <= t; a++)
                  e.push(
                    (0, n.jsx)(
                      'span',
                      {
                        onClick: () => d(a),
                        className: ''
                          .concat(v().btnPage, ' ')
                          .concat(v()[l], ' ')
                          .concat(c === a ? v().active : ''),
                        children: a,
                      },
                      a,
                    ),
                  );
                return e;
              })(),
              (0, n.jsx)('span', {
                onClick: () => d(c < t ? c + 1 : t),
                className: ''.concat(v().btnPage, ' ').concat(v()[l]),
                children: 'Next',
              }),
            ],
          });
        },
        w = a(2257),
        P = a.n(w),
        b = a(7249),
        N = function () {
          let { selectedItems: e, deselectItem: t } = (0, b.D)(),
            { theme: a } = (0, i.F)(),
            c = (0, r.useRef)(null);
          return (0, n.jsxs)('div', {
            'data-testid': 'selected-items',
            className: ''.concat(P().selectedContainer, ' ').concat(P()[a]),
            children: [
              (0, n.jsx)('h3', {
                className: ''.concat(P().itemsTitle, ' ').concat(a),
                children: 'Selected Items:',
              }),
              (0, n.jsx)('ul', {
                className: ''.concat(P().itemsList, ' ').concat(a),
                children: e.map((e) =>
                  (0, n.jsx)(
                    'li',
                    {
                      className: ''.concat(P().item, ' ').concat(a),
                      children: e.name,
                    },
                    e.url,
                  ),
                ),
              }),
              (0, n.jsxs)('div', {
                className: ''.concat(P().btnsContainer, ' ').concat(a),
                children: [
                  (0, n.jsx)(u, {
                    onClick: () => {
                      e.forEach((e) => t(e.url));
                    },
                    children: 'Unselect all',
                  }),
                  (0, n.jsx)(u, {
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
                        a = URL.createObjectURL(t);
                      c.current &&
                        ((c.current.href = a),
                        (c.current.download = ''.concat(
                          e.length,
                          '_characters.csv',
                        )),
                        c.current.click(),
                        URL.revokeObjectURL(a));
                    },
                    children: 'Download',
                  }),
                  (0, n.jsx)('a', { ref: c, style: { display: 'none' } }),
                ],
              }),
            ],
          });
        },
        y = a(3913),
        I = a.n(y),
        E = function () {
          let { theme: e } = (0, i.F)();
          return (0, n.jsx)('div', {
            'data-testid': 'loader-container',
            className: I().loaderContainer,
            children: (0, n.jsx)('div', {
              'data-testid': 'loader',
              className: ''.concat(I().loader, ' ').concat(I()[e]),
            }),
          });
        };
      let L = 'https://swapi.dev/api/';
      async function T(e) {
        let t = await fetch(''.concat(L, '/people?page=').concat(e));
        return await t.json();
      }
      let R = async (e) => {
          let t = await fetch(''.concat(L, '/people/').concat(e));
          return await t.json();
        },
        F = async (e) => {
          let t = await fetch(''.concat(L, '/people/?search=').concat(e));
          return await t.json();
        };
      var U = a(4023),
        D = a.n(U),
        O = (e) => {
          let [t, a] = (0, r.useState)(e),
            n = (0, r.useRef)(null),
            c = (0, C.useRouter)(),
            s = (0, C.useSearchParams)(),
            i = (0, r.useCallback)(
              (e) => {
                if (n.current && !n.current.contains(e.target)) {
                  a(!1);
                  let e = new URLSearchParams(s.toString());
                  e.delete('details'), c.push('?'.concat(e.toString()));
                }
              },
              [s, c],
            );
          return (
            (0, r.useEffect)(
              () => (
                document.addEventListener('click', i),
                () => {
                  document.removeEventListener('click', i);
                }
              ),
              [i],
            ),
            { ref: n, isActive: t, setIsActive: a }
          );
        },
        B = (e) => {
          let { id: t } = e,
            [a, c] = (0, r.useState)(null),
            [s, l] = (0, r.useState)(!1),
            { ref: o, isActive: d } = O(!0),
            { theme: h } = (0, i.F)(),
            _ = (0, C.useRouter)(),
            m = (0, C.useSearchParams)();
          return ((0, r.useEffect)(() => {
            l(!0),
              (async () => {
                try {
                  let e = await R(t);
                  c(e);
                } catch (e) {
                  console.error('Failed to fetch person details:', e);
                } finally {
                  l(!1);
                }
              })().catch((e) => {
                console.error('Error fetching results:', e);
              });
          }, [t, d]),
          a)
            ? (0, n.jsxs)('div', {
                className: ''
                  .concat(D().detailedCard, ' ')
                  .concat(d ? D().active : ''),
                ref: o,
                children: [
                  (0, n.jsx)(u, {
                    'data-testid': 'close',
                    onClick: () => {
                      let e = new URLSearchParams(
                        null == m ? void 0 : m.toString(),
                      );
                      e.delete('details'), _.push('?'.concat(e.toString()));
                    },
                    children: 'Close',
                  }),
                  s
                    ? (0, n.jsx)(E, {})
                    : (0, n.jsxs)('div', {
                        className: ''
                          .concat(D().resultItem, ' ')
                          .concat(D()[h]),
                        children: [
                          (0, n.jsx)('h3', { children: a.name }),
                          (0, n.jsxs)('p', {
                            children: ['Height: ', a.height],
                          }),
                          (0, n.jsxs)('p', { children: ['Mass: ', a.mass] }),
                          (0, n.jsxs)('p', {
                            children: ['Hair Color: ', a.hair_color],
                          }),
                          (0, n.jsxs)('p', {
                            children: ['Skin Color: ', a.skin_color],
                          }),
                          (0, n.jsxs)('p', {
                            children: ['Eye Color: ', a.eye_color],
                          }),
                          (0, n.jsxs)('p', {
                            children: ['Birth Year: ', a.birth_year],
                          }),
                          (0, n.jsxs)('p', {
                            children: ['Gender: ', a.gender],
                          }),
                        ],
                      }),
                ],
              })
            : null;
        },
        M = function (e, t) {
          let [a, n] = (0, r.useState)(t);
          return (
            (0, r.useEffect)(() => {
              let t = localStorage.getItem(e);
              t && n(JSON.parse(t));
            }, [e]),
            (0, r.useEffect)(() => {
              localStorage.setItem(e, JSON.stringify(a));
            }, [e, a]),
            [a, n]
          );
        };
      let A = (0, r.lazy)(() =>
        Promise.all([a.e(158), a.e(111)]).then(a.bind(a, 111)),
      );
      var H = (e) => {
        let { searchParams: t } = e,
          [a, c] = (0, r.useState)(null),
          { selectedItems: l } = (0, b.D)(),
          [o, u] = M('searchQuery', ''),
          [d, h] = (0, r.useState)(''),
          [_, m] = (0, r.useState)(!1),
          [f, p] = (0, r.useState)(null),
          { theme: g } = (0, i.F)(),
          x = (0, C.useSearchParams)(),
          { page: j = '1' } = t,
          v = (0, r.useCallback)(async function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : '',
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : '1';
            m(!0);
            try {
              let a = e ? await F(e.trim()) : await T(t);
              c(a);
            } catch (e) {
              console.error('Error fetching data:', e);
            } finally {
              m(!1);
            }
          }, []);
        (0, r.useEffect)(() => {
          t.details && p(t.details);
        }, [t.details]),
          (0, r.useEffect)(() => {
            v(o, j).catch((e) => {
              console.error('Error fetching results:', e);
            });
          }, [o, j, v]),
          (0, r.useEffect)(() => {
            let e = new URLSearchParams(x.toString()).get('details');
            e ? p(e) : p(null);
          }, [x]);
        let w = (0, r.useCallback)(() => {
            u(d);
          }, [d, u]),
          P = (0, r.useCallback)((e) => {
            h(e.target.value);
          }, []);
        return a
          ? (0, n.jsxs)('div', {
              className: ''.concat(s().app, ' ').concat(s()[g]),
              children: [
                (0, n.jsx)(S, { searchTerm: d, onSearch: w, onChange: P }),
                (0, n.jsx)('hr', {}),
                (0, n.jsxs)('div', {
                  className: s().mainContent,
                  children: [
                    _
                      ? (0, n.jsx)(E, {})
                      : (0, n.jsx)(r.Suspense, {
                          fallback: (0, n.jsx)(E, {}),
                          children: (0, n.jsx)(A, { data: a.results }),
                        }),
                    f && (0, n.jsx)(B, { id: f }),
                  ],
                }),
                l.length ? (0, n.jsx)(N, {}) : null,
                (0, n.jsx)('hr', {}),
                (0, n.jsx)(k, { totalPages: 9 }),
              ],
            })
          : null;
      };
    },
    7249: function (e, t, a) {
      'use strict';
      a.d(t, {
        D: function () {
          return i;
        },
        SelectedItemsProvider: function () {
          return s;
        },
      });
      var n = a(7437),
        r = a(2265);
      let c = (0, r.createContext)(void 0),
        s = (e) => {
          let { children: t } = e,
            [a, s] = (0, r.useState)([]);
          return (0, n.jsx)(c.Provider, {
            value: {
              selectedItems: a,
              selectItem: (e) => {
                s((t) => [...t, e]);
              },
              deselectItem: (e) => {
                s((t) => t.filter((t) => t.url !== e));
              },
            },
            children: t,
          });
        },
        i = () => {
          let e = (0, r.useContext)(c);
          if (!e)
            throw Error(
              'useSelectedItems must be used within a SelectedItemsProvider',
            );
          return e;
        };
    },
    5534: function (e, t, a) {
      'use strict';
      a.d(t, {
        F: function () {
          return r;
        },
        N: function () {
          return c;
        },
      });
      var n = a(2265);
      let r = () => {
          let e = (0, n.useContext)(c);
          if (!e) throw Error('useTheme must be used within a ThemeProvider');
          return e;
        },
        c = (0, n.createContext)(void 0);
    },
    1494: function (e) {
      e.exports = {
        app: 'ClientLayout_app__u6D8e',
        dark: 'ClientLayout_dark__712CJ',
        light: 'ClientLayout_light__nqOIF',
        mainContent: 'ClientLayout_mainContent__CKcK6',
      };
    },
    4023: function (e) {
      e.exports = {
        detailedCard: 'DetailedCard_detailedCard__d8sZu',
        light: 'DetailedCard_light__OLrax',
        dark: 'DetailedCard_dark__F2ZQw',
        resultItem: 'DetailedCard_resultItem__riNyo',
      };
    },
    6836: function (e) {
      e.exports = {
        btnPage: 'Pagination_btnPage__CT2Xf',
        pagination: 'Pagination_pagination__c7olK',
        light: 'Pagination_light__8MnhH',
        dark: 'Pagination_dark___AtUM',
        active: 'Pagination_active__xC1TQ',
      };
    },
    2967: function (e) {
      e.exports = { searchSection: 'SearchSection_searchSection__n1giP' };
    },
    2257: function (e) {
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
    9199: function (e) {
      e.exports = {
        button: 'Button_button__7F12w',
        light: 'Button_light__ry4yY',
        dark: 'Button_dark__ETufX',
      };
    },
    3913: function (e) {
      e.exports = {
        loaderContainer: 'Loader_loaderContainer__706AE',
        loader: 'Loader_loader__JrqMn',
        rotation: 'Loader_rotation__YYz8C',
        dark: 'Loader_dark__wScU_',
        light: 'Loader_light__UPlLR',
      };
    },
    7815: function (e) {
      e.exports = {
        searchInput: 'SearchInput_searchInput__WCkEm',
        light: 'SearchInput_light__5F3cz',
        dark: 'SearchInput_dark__BXv90',
      };
    },
    2837: function (e) {
      e.exports = {
        btnTheme: 'ThemeSwitcher_btnTheme__zM1vA',
        light: 'ThemeSwitcher_light__KhkaS',
        dark: 'ThemeSwitcher_dark__JGEaA',
      };
    },
  },
  function (e) {
    e.O(0, [942, 971, 23, 744], function () {
      return e((e.s = 3633));
    }),
      (_N_E = e.O());
  },
]);
