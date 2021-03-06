import React from 'react';
import { mount } from 'enzyme';
import i18n from './i18n';
import { withTranslation } from '../src/hooks/withTranslation';

jest.unmock('../src/hooks/withTranslation');

describe('useTranslation', () => {
  function TestComponent({ t, i18n: instance }) {
    expect(typeof t).toBe('function');
    expect(instance).toBe(i18n);

    return <div>{t('key1')}</div>;
  }

  it('should render correct content', () => {
    const HocElement = withTranslation()(TestComponent);
    const wrapper = mount(<HocElement />);
    // console.log(wrapper.debug());
    expect(wrapper.contains(<div>test</div>)).toBe(true);
  });
});
