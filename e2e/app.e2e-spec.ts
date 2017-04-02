import { BehandlungsjournalPage } from './app.po';

describe('behandlungsjournal App', () => {
  let page: BehandlungsjournalPage;

  beforeEach(() => {
    page = new BehandlungsjournalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
