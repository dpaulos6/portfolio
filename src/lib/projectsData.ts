import portfolioImg from '/portfolio.png'
import phoneBookImg from '/phone-book.png'
import quizImg from '/java-quiz.png'
import todoImg from '/java-todo.png'
import { Project } from '../interfaces/projects'

export const ProjectsData: Project[] = [
  {
    id: 1,
    title: 'Portfolio',
    description:
      'A personal portfolio showcasing my projects, skills, and experience, with a clean, responsive design.',
    img: portfolioImg,
    link: 'https://github.com/TahaZoabi/portfolio'
  },
  {
    id: 2,
    title: 'Phone-Book',
    description:
      'A simple phone book app for managing contacts, featuring options to add, edit, and delete entries.',
    img: phoneBookImg,
    link: 'https://github.com/TahaZoabi/Phone-Book-V2'
  },
  {
    id: 3,
    title: 'Java Quiz-App',
    description:
      'An interactive quiz app built with Java to test knowledge on various topics, with scoring and timer features.',
    img: quizImg,
    link: 'https://github.com/TahaZoabi/Quiz-Application'
  },
  {
    id: 4,
    title: 'Java Todo-List',
    description:
      'A basic task management app to create, edit, and track tasks, designed to keep you organized.',
    img: todoImg,
    link: 'https://github.com/TahaZoabi/JAVA-TODO'
  }
]
