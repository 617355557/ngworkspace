import { NgFirstDemoPage } from './app.po';

describe('ng-first-demo App', function() {
  let page: NgFirstDemoPage;

  beforeEach(() => {
    page = new NgFirstDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
