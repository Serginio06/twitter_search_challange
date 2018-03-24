import { Selector } from 'testcafe';
import ReactSelector from 'testcafe-react-selectors';
import config from './../config';
// import Menu from "../components/Menu";

console.log('config =', config);

fixture`menuPage`
  .page(`http://${config.domain}:${config.port}`)
  .before(async (ctx) => {
    ctx.MenuPage = new MenuPage();
  });

export class MenuPage {
  constructor() {
    this.statisticBtn = Selector('#statisticsBtn');
    this.orderbookBtn = Selector('#orderbookBtn');
    this.orderbookErrBtn = Selector('#orderbookErrBtn');
    this.tradesBtn = Selector('#tradesBtn');
    this.lastTradesBtn = Selector('#lastTradesBtn');
    this.apiDocBtn = Selector('#apiDocBtn');
  }


  async registration(t) {
    await t
      .expect(this.statisticBtn.textContent).contains('Statistics')
      .expect(this.orderbookBtn.textContent).contains('Orderbook')
      .expect(this.orderbookErrBtn.textContent).contains('Orderbook reconstruction errors')
      .expect(this.tradesBtn.textContent).contains('Trades')
      .expect(this.lastTradesBtn.textContent).contains('Last trades')
      .expect(this.apiDocBtn.textContent).contains('API documentations');
  }
}


test('Main page. Menu button label check', async (t) => {
  await t
    .fixtureCtx.MenuPage.registration(t);
});
