import { PlurizaTestPage } from './app.po';

describe('pluriza-test App', () => {
  let page: PlurizaTestPage;

  beforeEach(() => {
    page = new PlurizaTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
