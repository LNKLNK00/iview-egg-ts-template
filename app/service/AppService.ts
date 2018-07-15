import {Service} from 'egg';
import * as Model from '../mocks/article/list';

class AppService extends Service {

    public async getPage(pageIndex: number = 1, pageSize: number = 10) {
        return Model.getPage(pageIndex, pageSize);
    }
}

module.exports = AppService;