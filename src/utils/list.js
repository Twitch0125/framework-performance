import token from '../utils/token.js'
const list = [];
for (let i = 0; i < 500; i++) {
  list.push({name: token(), id: i });
}
export default list