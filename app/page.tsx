'use client';

import { Button } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

import quiz from '@/data/quiz.json';
import Text from '@/UI/Text';

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [step, setStep] = useState<number>(0);
  const [randomSortedQuestions, setRandomSortedQuestions] = useState<number[]>(
    [],
  );
  const getRandomizedArray = () => {
    const numbers = Array.from({ length: 39 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // Zamiana miejscami
    }

    return numbers;
  };

  useEffect(() => {
    setRandomSortedQuestions(getRandomizedArray());
  }, []);

  const currentQuiz = quiz[randomSortedQuestions[currentQuestion]];
  const {
    AnswerA,
    AnswerB,
    AnswerC,
    AnswerD,
    Category,
    CorrectAnswer,
    Question,
  } = currentQuiz ?? {};

  const handleNextQuestion = () => {
    if (step === 4) {
      setStep(0);
      return setCurrentQuestion((prev) => prev + 1);
    }
    setStep((prev) => prev + 1);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-neutral-1300 p-10">
      <div className="flex w-full justify-between">
        <div>
          <Text className="w-full text-neutral-400">Kroki:</Text>
          <div className="flex w-full flex-row gap-3">
            <Step isEnabled={step >= 0} stepName="Pierwsze" />
            <Step isEnabled={step >= 1} stepName="Categoria" />
            <Step isEnabled={step >= 2} stepName="Pytanie" />
            <Step isEnabled={step >= 3} stepName="A i B i C i D" />
            <Step isEnabled={step >= 4} stepName="Odpowiedz" />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-row items-end gap-5">
        <Block value={Category} block="Categoria" isOpen={step >= 1} />{' '}
        <Button type="primary" onClick={() => handleNextQuestion()}>
          Nastepny Krok
        </Button>
      </div>
      <Block value={Question} block="Pytanie" isOpen={step >= 2} />
      <div className="flex w-full flex-col gap-3">
        <div className="flex flex-row gap-5">
          <Block
            value={AnswerA}
            block="A"
            isOpen={step >= 3}
            correctAnswer={step >= 4 && CorrectAnswer === 'A'}
          />
          <Block
            value={AnswerB}
            block="B"
            isOpen={step >= 3}
            correctAnswer={step >= 4 && CorrectAnswer === 'B'}
          />
        </div>
        <div className="flex flex-row gap-5">
          <Block
            value={AnswerC}
            block="C"
            isOpen={step >= 3}
            correctAnswer={step >= 4 && CorrectAnswer === 'C'}
          />
          <Block
            value={AnswerD}
            block="D"
            isOpen={step >= 3}
            correctAnswer={step >= 4 && CorrectAnswer === 'D'}
          />
        </div>
      </div>
    </main>
  );
}

const Block = ({
  block,
  value,
  isOpen,
  correctAnswer,
}: {
  block: string;
  value: string;
  isOpen: boolean;
  correctAnswer?: boolean;
}) => {
  return (
    <div className={classNames('w-full', { 'bg-green-900': correctAnswer })}>
      <Text className="text-neutral-400">{block}:</Text>
      <div className="flex w-full items-center justify-center rounded-lg border border-neutral-400 px-4 py-2">
        <Text className="text-neutral-400">{isOpen ? value : '???'}</Text>
      </div>
    </div>
  );
};

const Step = ({
  isEnabled,
  stepName,
}: {
  isEnabled: boolean;
  stepName: string;
}) => {
  return (
    <div
      className={classNames('bg-neutral-1000 w-fit rounded-lg px-4 py-2', {
        '!bg-green-800': isEnabled,
      })}
    >
      <Text variant="body-caption" className=" text-neutral-400">
        {stepName}
      </Text>
    </div>
  );
};
