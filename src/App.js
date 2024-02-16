import './App.css';
import { Faq } from './components/faq/faq';


function App() {
  return (
    <>
      <Faq dataFaq={dataFaq}/>
    </>
  );
}

const dataFaq = [
  {
    question: 'Как выбрать подходящий абонемент для себя?',
    answer: 'Рекомендуем начать с определения своих фитнес-целей и времени, которое вы готовы уделять тренировкам. Мы поможем вам выбрать наилучший вариант, учитывая ваши потребности.'
  },
  {
    question: 'Какие преимущества групповых тренировок перед индивидуальными?',
    answer: 'Рекомендуем начать с определения своих фитнес-целей и времени, которое вы готовы уделять тренировкам. Мы поможем вам выбрать наилучший вариант, учитывая ваши потребности.'
  },
  {
    question: 'Какие преимущества индивидуальных тренировок перед групповыми?',
    answer: 'Рекомендуем начать с определения своих фитнес-целей и времени, которое вы готовы уделять тренировкам. Мы поможем вам выбрать наилучший вариант, учитывая ваши потребности.'
  },
  {
    question: 'Какие услуги включены в стоимость абонемента?',
    answer: 'Рекомендуем начать с определения своих фитнес-целей и времени, которое вы готовы уделять тренировкам. Мы поможем вам выбрать наилучший вариант, учитывая ваши потребности.'
  },
  {
    question: 'Как узнать о расписании групповых тренировок?',
    answer: 'Рекомендуем начать с определения своих фитнес-целей и времени, которое вы готовы уделять тренировкам. Мы поможем вам выбрать наилучший вариант, учитывая ваши потребности.' 
  },
]

export default App;
