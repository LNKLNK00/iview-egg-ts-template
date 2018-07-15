import {Controller} from 'egg';

class HomeController extends Controller {
    async index() {
        await this.ctx.render('home/app.js', {
            url: this.ctx.url.replace(/\/app/, '')
        });
    }
}

module.exports = HomeController;