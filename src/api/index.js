import Mock from 'mockjs';

import Settings from '../common/Settings';
import entriesAPI from './entries';
// Mock.setup({
//   timeout: '350-600'
// })

Mock.mock(Settings.APIURL+'/entradas/', 'get', entriesAPI.getEntradas);
export default Mock;
