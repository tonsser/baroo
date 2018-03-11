import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import styles from '@sambego/storybook-styles';

import { Button, Header, Themes, PictureHeader, Tab, MemberAvatar } from '../src';

Themes.Base();
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Header', module)
  .add('black', () => <Header type="black" cta={{ url: '/', title: 'Get app' }} link={{ url: '/', title: 'Request coach access' }} />);
storiesOf('Header', module)
  .addDecorator(styles({ background: '#000' }))
  .add('transparent', () => <Header cta={{ url: '/', title: 'Get app' }} link={{ url: '/', title: 'Request coach access' }} />);

storiesOf('PictureHeader', module)
  .add('with title', () => <PictureHeader imageUrl="https://tonsser.com/assets/landing_page/landing-home-large-fa66edc48045d207b34a911f01cbdb3b30737df5500fe7aff5e9653ec2737fac.png" title="Meet the starting lineup at Tonsser" />);

storiesOf('Tab', module)
  .add('normal', () => <Tab>Hello</Tab>)
  .add('active', () => <Tab active>Hello</Tab>);

storiesOf('MemberAvatar', module)
  .add('Baroo', () => (<div style={{ width: '300px' }}>
    <MemberAvatar
      image="https://tonsser.com/assets/members/baroo_the_viking-7d0ee13e624d6ec099926882fe0a1d2fbdeea9537d5e2e6aaa800d1ae6570126.jpg"
      name="Baroo The Viking"
      title="Office dog"
    />
  </div>));
