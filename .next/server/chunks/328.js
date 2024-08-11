(exports.id = 328),
  (exports.ids = [328]),
  (exports.modules = {
    7328: (e, t, s) => {
      'use strict';
      s.r(t), s.d(t, { default: () => h });
      var r = s(326),
        l = s(5047),
        a = s(4714),
        d = s(7302),
        i = s.n(d),
        c = s(1559);
      let u = function ({ item: e }) {
        let { theme: t } = (0, a.F)(),
          s = (0, l.useRouter)(),
          d = (0, l.useSearchParams)(),
          { selectedItems: u, selectItem: n, deselectItem: o } = (0, c.D)(),
          h = u.some((t) => t.url === e.url);
        return (0, r.jsxs)('div', {
          className: `${i().resultItem} ${i()[t]}`,
          'data-testid': 'result-item',
          onClick: (t) => {
            if ('INPUT' === t.target.tagName) return;
            let r = e.url.split('/').slice(-2, -1)[0],
              l = d.get('page') || '1';
            try {
              s.push(`?page=${l}&details=${r}`);
            } catch (e) {
              console.error('Failed to navigate:', e);
            }
          },
          children: [
            r.jsx('h3', { children: e.name }),
            r.jsx('div', {
              className: i()[t],
              children: r.jsx('input', {
                className: i().selectedCheckbox,
                type: 'checkbox',
                checked: h,
                onChange: () => {
                  h ? o(e.url) : n(e);
                },
              }),
            }),
          ],
        });
      };
      var n = s(2365),
        o = s.n(n);
      let h = function ({ data: e }) {
        if (!e || 0 === e.length)
          return r.jsx('div', { children: 'No results found' });
        let t = e.map((e, t) => r.jsx(u, { index: t, item: e }, e.name));
        return r.jsx('div', { className: o().results, children: t });
      };
    },
    2365: (e) => {
      e.exports = { results: 'CardList_results__c8AbG' };
    },
    7302: (e) => {
      e.exports = {
        resultItem: 'Card_resultItem__qYS99',
        light: 'Card_light__Fkbbg',
        dark: 'Card_dark___aMFt',
        selectedCheckbox: 'Card_selectedCheckbox__pXf_x',
      };
    },
  });
