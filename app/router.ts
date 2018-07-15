import {Application} from 'egg';

/**
 * @param {Egg.Application} app - egg application
 */
export default (application: Application) => {
    const {router, controller} = application;
    router.get('/login', controller.loginController.login);
    router.get('/(/.+)?', controller.homeController.index);
}