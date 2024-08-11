(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [111],
  {
    111: function (e, t, s) {
      'use strict';
      s.r(t),
        s.d(t, {
          default: function () {
            return h;
          },
        });
      var r = s(7437),
        a = s(6463),
        c = s(5534),
        n = s(2549),
        l = s.n(n),
        u = s(7249),
        i = function (e) {
          let { item: t } = e,
            { theme: s } = (0, c.F)(),
            n = (0, a.useRouter)(),
            i = (0, a.useSearchParams)(),
            { selectedItems: d, selectItem: o, deselectItem: h } = (0, u.D)(),
            _ = d.some((e) => e.url === t.url);
          return (0, r.jsxs)('div', {
            className: ''.concat(l().resultItem, ' ').concat(l()[s]),
            'data-testid': 'result-item',
            onClick: (e) => {
              if ('INPUT' === e.target.tagName) return;
              let s = t.url.split('/').slice(-2, -1)[0],
                r = i.get('page') || '1';
              try {
                n.push('?page='.concat(r, '&details=').concat(s));
              } catch (e) {
                console.error('Failed to navigate:', e);
              }
            },
            children: [
              (0, r.jsx)('h3', { children: t.name }),
              (0, r.jsx)('div', {
                className: l()[s],
                children: (0, r.jsx)('input', {
                  className: l().selectedCheckbox,
                  type: 'checkbox',
                  checked: _,
                  onChange: () => {
                    _ ? h(t.url) : o(t);
                  },
                }),
              }),
            ],
          });
        },
        d = s(4140),
        o = s.n(d),
        h = function (e) {
          let { data: t } = e;
          if (!t || 0 === t.length)
            return (0, r.jsx)('div', { children: 'No results found' });
          let s = t.map((e, t) => (0, r.jsx)(i, { index: t, item: e }, e.name));
          return (0, r.jsx)('div', { className: o().results, children: s });
        };
    },
    4140: function (e) {
      e.exports = { results: 'CardList_results__c8AbG' };
    },
    2549: function (e) {
      e.exports = {
        resultItem: 'Card_resultItem__qYS99',
        light: 'Card_light__Fkbbg',
        dark: 'Card_dark___aMFt',
        selectedCheckbox: 'Card_selectedCheckbox__pXf_x',
      };
    },
  },
]);
