import React from 'react';

import Container from '../../components/Container/Container.jsx';
import Svg from '../../components/Svg/Svg.jsx';

import s from './OurTeamPage.Module.scss';

const teamArr = [
  {
    name: 'Alexander Lyakhotskiy',
    position: 'Team lead',
    preview:
      'https://media.discordapp.net/attachments/889954845128294490/889955019883937822/IMG_20210624_114748.jpg?width=320&height=427',
    linkedin: 'https://www.linkedin.com/in/alexander-lyakhotskiy-a64904155/',
    github: 'https://github.com/AlexLyakhotskiy',
  },
  {
    name: 'Dmitry Ignatev ',
    position: 'Full-Stack developer, Scrum master',
    preview: 'https://avatars.githubusercontent.com/u/83116137?v=4',
    linkedin: '#',
    github: 'https://github.com/IgnatevD',
  },
  {
    name: 'Taras Dovbyus',
    position: 'Full-Stack developer',
    preview: '',
    linkedin: 'https://www.linkedin.com/in/taras-dovbyus-07bb79207/',
    github: 'https://github.com/dstaras',
  },
  {
    name: 'Alina Oksentiuk',
    position: 'Full-Stack developer',
    preview: 'https://avatars.githubusercontent.com/u/83245089?v=4',
    linkedin: '#',
    github: 'https://github.com/mandarinka99',
  },
  {
    name: 'Masha Shytykova',
    position: 'Full-Stack developer',
    preview:
      'https://ca.slack-edge.com/T01UW5D5RDJ-U020SD6GU1F-5b19e948dcad-512',
    linkedin: 'https://www.linkedin.com/in/masha-shytykova-a28b8b15b/',
    github: 'https://github.com/Masha-Shytykova',
  },
  {
    name: 'Illia',
    position: 'Full-Stack developer',
    preview: '#',
    linkedin: '#',
    github: 'https://github.com/vip-master',
  },
];

export default function OurTeamPage() {
  return (
    <Container className={s.teamContainer}>
      <h1 className={s.title}>Наша команда</h1>
      <ul className={s.list}>
        {teamArr.map(({ preview, name, position, github, linkedin }) => (
          <li className={s.item} key={name}>
            <img className={s.images} src={preview} alt={name} />
            <div className={s.desc}>
              <h3>{name}</h3>
              <p>{position}</p>

              <ul className={s.listLink}>
                <li className={s.itemLink}>
                  <a href={github} className={s.iconLink}>
                    <Svg icon="#github" className={s.icon} />
                  </a>
                </li>

                <li className={s.itemLink}>
                  <a href={linkedin} className={s.iconLink}>
                    <Svg icon="#linkedin" className={s.icon} />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
