import {Controller} from 'egg';

class LoginController extends Controller {
    async login() {
        const {ctx} = this;
        await ctx.render('login/index.js');
    }
}

module.exports = LoginController;