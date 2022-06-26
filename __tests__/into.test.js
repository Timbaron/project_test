import Intro from "../components/intro";
const ReactTestRenderer = require('react-test-renderer');

test('Renders correctly', () => {
    const tree = ReactTestRenderer.create(<Intro />).toJSON();
    expect(tree).toMatchSnapshot();
})