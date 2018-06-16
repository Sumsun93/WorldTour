/*
 * Package Import
 */
import { should } from 'chai';

/*
 * Local Import
 */
import reducer from 'src/store/reducer';

/*
 * Code
 */
should();

/*
 * Test
 */
describe('Reducer', () => {
  it('should be an function', () => {
    reducer.should.be.an('function');
  });

  it('should return an object', () => {
    reducer().should.be.an('object');
  });
});
