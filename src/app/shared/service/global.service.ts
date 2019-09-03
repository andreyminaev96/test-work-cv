import { Injectable } from '@angular/core';
import { Skill, MenuItem, ContentWork, TextContent} from './../interface';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  public skills: Skill[] = [
    {
      appChart: ["JavaScript", "TypeScript"],
      data: [85, 70],
      text: 'Programming Languages',
      id: 'languages'
    },
    {
      appChart: [
        'Angular',
        'RxJs',
        'React',
        'Stencil',
        'Redux',
        'Cloud Functions',
        'Flex',
        'Node.js',
        'Express',
        'BEM',
        'Materialize',
        'Ajax',
        'Bootstrap',
        'JQuery',
        'HTML5',
        'CSS'
      ],
      id: 'web',
      data: [85, 60, 70, 90, 60, 85, 95, 50, 60, 90, 90, 95, 100, 60, 100, 94],
      text: 'Web Frontend Technologies'
    },
    {
      appChart: ["Git", "Bitbucket", "Asana"],
      id: 'miscellaneous',
      data: [75, 90, 100],
      text: 'Miscellaneous'
    },
    {
      appChart: ["Firebase", "MongoDB"],
      id: 'databases',
      data: [65, 50],
      text: 'Databases'
    },
    {
      appChart: ["Webpack", "Rollup"],
      id: 'project',
      data: [40, 70],
      text: 'Project Builders'
    },
    {
      appChart: ["Sass"],
      id: 'CSS',
      data: [100],
      text: 'CSS preprocessors'
    },
  ]

  public menuItems: Array<MenuItem> = [
    {
      icon: 'home',
      label: 'HOME',
      link: ''
    },
    {
      icon: 'person',
      label: 'ABOUT',
      link: 'about'
    },
    {
      icon: 'school',
      label: 'EXPERIENCE',
      link: 'experience'
    },
    {
      icon: 'briefcase',
      label: 'SKILLS',
      link: 'skills'
    }
  ];

  public works: ContentWork[] = [
    {
      position: 'Front-end developer',
      company: 'Holding "Imperial',
      data: '01.12.2017 - 10.02.2018 ',
      text: 'It was a corporate project in which the role was Frontend developer, the development team was of 8 people technologies that were used : React, Redux'
    },
    {
      position: 'Frond-end developer',
      company: 'Lardan Soft',
      data: '07.03.2018 - 25.05.2018 ',
      text: 'in this company managed to work in three large projects related to the sale of houses in America the team was of twelve people, technology used : Angular, Ionic'
    },
    {
      position: 'Frond-end developer',
      company: 'ODM soft',
      data: '05.06.2018 - 02.01.2019 ',
      text: 'in this company managed to work in three large projects related to the sale of houses in America the team was of twelve people, technology used : Angular, Ionic'
    },
    {
      position: 'Frond-end developer',
      company: 'Mobiform',
      data: '05.01.2019 - Present',
      text: `Mobiform is a startup which helps people to make online the kitchen also in
      the future it will be a platform in which a person will be able to open a business
      with a native laptop. Front-end programmer developer. In this project, I use
      Ionic, Stencil ,Firebase, Cloud Functions, TypeScript, JavaScript, and Angular`
    },
  ];

  public contents: TextContent[] = [
    {
      title: 'Andrey Minaev',
      text_1: 'City: Odesa, Ukraine',
      text_2: 'Phone: +380632190550',
      text_3: 'Email: andrey.minaev.simba@mail.com',
      text_4: 'Skype: +380632190550',
      text_5: 'LinkedIn: https://www.linkedin.com/in/andrey-minaev-b2781416a/'
    },
    {
      title: 'Objective',
      text_1: `To obtain a position of Angular Developer
      that will allow me to follow my passion and utilize an
      experience in software engineering; obtain a new expertise and become grow professionally in an IT industry.`
    },
    {
      title: 'Education',
      text_1: `ONPU (Odessa national Polytechnic University) IBEIT, Odessa Higher education,
      from 08.2013 to 12.2018 (5 years). Computer and economic Sciences, Odessa;
      Master’s Degree`,
      text_2: 'Front-end Development courses at Beetroot Academy.',
      text_3: 'JavaScript + Angular course at Easy Code School.'
    }
  ];
}

