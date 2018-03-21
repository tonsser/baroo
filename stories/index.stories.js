import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import styles from '@sambego/storybook-styles';

import { Button, Header, Themes, PictureHeader, Tab, MemberAvatar, Footer, ProgressBar, FlexboxGrid, MissionCard, StatBadge } from '../src';

const Div = FlexboxGrid;
const TonsserLogo = 'https://tonsser.com/assets/logotype_white-494b8e75250e112c7fba586805880980af5751415c2a353420a51f3c8daf368d.png';

Themes.Base();

storiesOf('Button', module)
  .add('with text', () => (
    <div>
      <Button btnLg onClick={action('clicked')}>Large Button</Button>
      <br />
      <br />
      <Button onClick={action('clicked')}>Default Button</Button>
      <br />
      <br />
      <Button btnSm onClick={action('clicked')}>Small Button</Button>
      <br />
      <br />
      <Button btnXs onClick={action('clicked')}>Extra small Button</Button>
      <br />
      <br />
      <Button btnOutline onClick={action('clicked')}>Outline Button</Button>
    </div>
  ))
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Header', module)
  .add('black', () => (
    <Header
      logo={TonsserLogo}
      type="black"
      cta={{
        url: '/',
        title: 'Get app',
      }}
      link={{
        url: '/',
        title: 'Request coach access',
      }}
    />
  ));
storiesOf('Header', module)
  .addDecorator(styles({ background: '#000' }))
  .add('transparent', () => (
    <Header
      logo={TonsserLogo}
      cta={{
        url: '/',
        title: 'Get app',
      }}
      link={{
        url: '/',
        title: 'Request coach access',
      }}
    />
  ));

storiesOf('PictureHeader', module)
  .add('with title', () => <PictureHeader imageUrl="https://tonsser.com/assets/landing_page/landing-home-large-fa66edc48045d207b34a911f01cbdb3b30737df5500fe7aff5e9653ec2737fac.png" title="Meet the starting lineup at Tonsser" />);

storiesOf('Tab', module)
  .add('normal', () => <Tab>Hello</Tab>)
  .add('active', () => <Tab active>Hello</Tab>);

storiesOf('MemberAvatar', module)
  .add('Baroo', () => (
    <div style={{ width: '300px' }}>
      <MemberAvatar
        image="https://tonsser.com/assets/members/baroo_the_viking-7d0ee13e624d6ec099926882fe0a1d2fbdeea9537d5e2e6aaa800d1ae6570126.jpg"
        name="Baroo The Viking"
        title="Office dog"
      />
    </div>));

storiesOf('ProgressBar', module)
  .add('normal', () => (
    <Div container>
      <Div row>
        <Div colXs>
          <ProgressBar progress={21}></ProgressBar>
        </Div>
      </Div>
      <Div row>
        <Div colXs>
          <ProgressBar progress={81}></ProgressBar>
        </Div>
      </Div>
      <Div row>
        <Div colXs={6} colXsOffset={3}>
          <ProgressBar progress={66} showDelimiter></ProgressBar>
        </Div>
      </Div>
    </Div>
  ));

storiesOf('MissionCard', module)
  .add('normal', () => (
    <Div container>
      <Div row aroundXs>
        <Div colXs={6}>
          <MissionCard title="Invite your teamates"
            description="Who are you missing on your team?"
            progress={28}
            goals="5/11+ Teamates on Tonsser"
            expandable
          />
        </Div>
      </Div>
    </Div>
  ));

storiesOf('StatBadge', module)
  .add('normal', () => (
    <Div container>
      <Div row aroundXs>
        <Div colXs>
          <StatBadge progress={0.33} />
        </Div>
      </Div>
    </Div>
  ));

const footerCat = [
  {
    title: 'Pages',
    items: [
      {
        text: 'A propos',
        link: '/',
      },
      {
        text: 'L\'équipe',
        link: '/',
      },
      {
        text: 'Carrière',
        link: '/',
      },
    ],
  },
  {
    title: 'Nos histoires',
    items: [
      {
        text: 'NextGen',
        link: '/',
      },
      {
        text: 'Tonsser pour les clubs',
        link: '/',
      },
      {
        text: 'Tonsser pour les coachs',
        link: '/',
      },
      {
        text: 'Tonsser undiscovered',
        link: '/',
      },
      {
        text: 'Tonsser à Rennes',
        link: '/',
      },
    ],
  },
  {
    title: 'Nous contacter',
    items: [
      {
        text: 'Press Kit',
        link: '/',
      },
      {
        text: 'info@tonsser.com',
        link: '/',
      },
      { text: '#tonsser.com' },
    ],
  },
  {
    title: 'Nous suivre',
    items: [
      {
        text: 'Facebook',
        link: '/',
      },
      {
        text: 'Instagram',
        link: '/',
      },
      {
        text: 'Linkedin',
        link: '/',
      },
    ],
  },
];

storiesOf('Footer', module)
  .add('normal', () => <Footer logoUrl={TonsserLogo} categories={footerCat} />);
