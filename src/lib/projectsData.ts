import portfolioImg from '../../public/portfolio.png'
import phoneBookImg from '../../public/phone-book.png'
import quizImg from '../../public/java-quiz.png'
import todoImg from '../../public/java-todo.png'

type Project = {
  id: number
  title: string
  description: string
  img: string
  sourceCode: string
}

export const ProjectsData: Project[] = [
  {
    id: 1,
    title: 'Portfolio',
    description: 'A personal portfolio showcasing my projects and skills.',
    img: portfolioImg,
    sourceCode: 'https://github.com/TahaZoabi/portfolio'
  },
  {
    id: 2,
    title: 'Phone-Book',
    description: 'A user-friendly phone book application to manage contacts.',
    img: phoneBookImg,
    sourceCode: 'https://github.com/TahaZoabi/Phone-Book-V2'
  },
  {
    id: 3,
    title: 'Java Quiz-App',
    description:
      'An interactive quiz application to test your knowledge on various topics.',
    img: quizImg,
    sourceCode: 'https://github.com/TahaZoabi/Quiz-Application'
  },
  {
    id: 4,
    title: 'Java Todo-List',
    description:
      'A simple yet effective todo list application for task management.',
    img: todoImg,
    sourceCode: 'https://github.com/TahaZoabi/JAVA-TODO'
  }
]
