(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    4780: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 7249)),
        Promise.resolve().then(r.bind(r, 9477)),
        Promise.resolve().then(r.t.bind(r, 320, 23));
    },
    7249: function (e, t, r) {
      'use strict';
      r.d(t, {
        D: function () {
          return s;
        },
        SelectedItemsProvider: function () {
          return o;
        },
      });
      var n = r(7437),
        i = r(2265);
      let u = (0, i.createContext)(void 0),
        o = (e) => {
          let { children: t } = e,
            [r, o] = (0, i.useState)([]);
          return (0, n.jsx)(u.Provider, {
            value: {
              selectedItems: r,
              selectItem: (e) => {
                o((t) => [...t, e]);
              },
              deselectItem: (e) => {
                o((t) => t.filter((t) => t.url !== e));
              },
            },
            children: t,
          });
        },
        s = () => {
          let e = (0, i.useContext)(u);
          if (!e)
            throw Error(
              'useSelectedItems must be used within a SelectedItemsProvider',
            );
          return e;
        };
    },
    5534: function (e, t, r) {
      'use strict';
      r.d(t, {
        F: function () {
          return i;
        },
        N: function () {
          return u;
        },
      });
      var n = r(2265);
      let i = () => {
          let e = (0, n.useContext)(u);
          if (!e) throw Error('useTheme must be used within a ThemeProvider');
          return e;
        },
        u = (0, n.createContext)(void 0);
    },
    9477: function (e, t, r) {
      'use strict';
      r.d(t, {
        ThemeProvider: function () {
          return o;
        },
      });
      var n = r(7437),
        i = r(2265),
        u = r(5534);
      let o = (e) => {
        let { children: t } = e,
          [r, o] = (0, i.useState)('light');
        return (0, n.jsx)(u.N.Provider, {
          value: {
            theme: r,
            toggleTheme: () => {
              o((e) => ('light' === e ? 'dark' : 'light'));
            },
          },
          children: t,
        });
      };
    },
    320: function () {},
  },
  function (e) {
    e.O(0, [41, 971, 23, 744], function () {
      return e((e.s = 4780));
    }),
      (_N_E = e.O());
  },
]);
