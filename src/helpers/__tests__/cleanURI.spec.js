import {cleanURI} from '../cleanURI';

test('test cleanURI', () => {
  expect(cleanURI('Le SEO en 2020, avec =Nicolas +Baldi')).toBe(
    'Le SEO en 2020 avec Nicolas Baldi',
  );
  expect(cleanURI('Le SEO en 2020 & avec Nicolas Baldi')).toBe(
    'Le SEO en 2020  avec Nicolas Baldi',
  );
  expect(cleanURI('Le SEO en 2020 @ avec Nicolas Baldi ?')).toBe(
    'Le SEO en 2020  avec Nicolas Baldi',
  );
  expect(cleanURI('Le SEO en 2020; avec /Nicolas Baldi $')).toBe(
    'Le SEO en 2020 avec Nicolas Baldi',
  );
  expect(cleanURI('Le SEO en 2020, avec #Nicolas Baldi')).toBe(
    'Le SEO en 2020 avec Nicolas Baldi',
  );
});
