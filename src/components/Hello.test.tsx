import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';

it('renders the correct text when no enthusiasm level is given', () => {
    const hello = enzyme.shallow(<Hello name='Mohammad'/>);
    expect(hello.find(".greeting").text()).toEqual('Hello Mohammad!')
});

it('renders the correct text with an explicit enthusiasm level of 1', () => {
    const hello = enzyme.shallow(<Hello name='Mohammad' enthusiasmLevel={1}/>);
    expect(hello.find(".greeting").text()).toEqual('Hello Mohammad!')
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
    const hello = enzyme.shallow(<Hello name='Mohammad' enthusiasmLevel={5}/>);
    expect(hello.find(".greeting").text()).toEqual('Hello Mohammad!!!!!')
});

it('throws when the enthusiasm level is negative', () => {
    expect(() => {
        enzyme.shallow(<Hello name='Mohammad' enthusiasmLevel={-1} />);
    }).toThrow();
});

