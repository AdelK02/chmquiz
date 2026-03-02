/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Info,
  Trophy,
  BookOpen,
  Layout
} from 'lucide-react';
import { pages, Question, PageData } from './data';

// Helper to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [questionId: number]: { [blank: string]: string } }>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<{ [questionId: number]: boolean }>({});
  const [scores, setScores] = useState<{ [questionId: number]: number }>({});

  const currentPageData = pages[currentPageIndex];

  useEffect(() => {
    // Shuffle questions and their options for the current page
    const processedQuestions = shuffleArray(currentPageData.questions).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));
    setShuffledQuestions(processedQuestions);
    setCurrentQuestionIndex(0);

    // Clear state for the new page
    setUserAnswers({});
    setSubmittedQuestions({});
    setScores({});
  }, [currentPageIndex, currentPageData.questions]);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleSelect = (blank: string, verb: string) => {
    if (submittedQuestions[currentQuestion.id]) return;

    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: {
        ...(prev[currentQuestion.id] || {}),
        [blank]: verb
      }
    }));
  };

  const handleSubmit = () => {
    const answers = userAnswers[currentQuestion.id] || {};
    let correctCount = 0;

    Object.entries(currentQuestion.correctAnswers).forEach(([blank, correctVerb]) => {
      if (answers[blank] === correctVerb) {
        correctCount++;
      }
    });

    setScores(prev => ({ ...prev, [currentQuestion.id]: correctCount }));
    setSubmittedQuestions(prev => ({ ...prev, [currentQuestion.id]: true }));
  };

  const handleTryAgain = () => {
    setUserAnswers(prev => {
      const next = { ...prev };
      delete next[currentQuestion.id];
      return next;
    });
    setSubmittedQuestions(prev => {
      const next = { ...prev };
      delete next[currentQuestion.id];
      return next;
    });
    setScores(prev => {
      const next = { ...prev };
      delete next[currentQuestion.id];
      return next;
    });
  };

  const isCurrentQuestionComplete = useMemo(() => {
    if (!currentQuestion) return false;
    const answers = userAnswers[currentQuestion.id] || {};
    const blanks = Object.keys(currentQuestion.correctAnswers);
    return blanks.every(b => !!answers[b]);
  }, [userAnswers, currentQuestion]);

  const isPageComplete = useMemo(() => {
    return shuffledQuestions.every(q => submittedQuestions[q.id]);
  }, [shuffledQuestions, submittedQuestions]);

  const canGoNextQuestion = submittedQuestions[currentQuestion?.id];

  const handleNextPage = () => {
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex(prev => prev + 1);
    }
  };

  if (shuffledQuestions.length === 0 || !currentQuestion) return null;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-zinc-300 pb-24">
      {/* Header */}
      <header className="bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800/50 py-6 px-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-zinc-500" />
              {currentPageData.title}
            </h1>
            <p className="text-sm text-zinc-500 font-medium uppercase tracking-widest mt-1">
              {currentPageData.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-zinc-600 uppercase tracking-tighter">Page</p>
              <p className="text-lg font-mono font-bold text-zinc-400">
                {currentPageIndex + 1} / {pages.length}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-zinc-600 uppercase tracking-tighter">Question</p>
              <p className="text-lg font-mono font-bold text-zinc-400">
                {currentQuestionIndex + 1} / {shuffledQuestions.length}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentPageIndex}-${currentQuestion.id}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Paragraph Section */}
            <section className="bg-zinc-900/40 rounded-2xl p-8 shadow-sm border border-zinc-800/50">
              <h2 className="text-sm font-bold text-zinc-600 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Info className="w-4 h-4" />
                Complete the paragraph
              </h2>
              <div className="text-xl leading-relaxed text-zinc-400 font-serif italic">
                {currentQuestion.paragraph.split(/(\[\[[a-e]\]\])/).map((part, index) => {
                  const match = part.match(/\[\[([a-e])\]\]/);
                  if (match) {
                    const blank = match[1];
                    const selectedVerb = userAnswers[currentQuestion.id]?.[blank];
                    const isSubmitted = submittedQuestions[currentQuestion.id];
                    const isCorrect = selectedVerb === currentQuestion.correctAnswers[blank];

                    return (
                      <span
                        key={index}
                        className={`inline-flex items-center justify-center min-w-[120px] h-9 px-3 rounded-lg border-b-2 mx-1 transition-all duration-300 font-bold ${isSubmitted
                          ? isCorrect
                            ? "border-emerald-500 bg-emerald-900/30 text-emerald-400"
                            : "border-rose-500 bg-rose-900/30 text-rose-400"
                          : selectedVerb
                            ? "border-white bg-zinc-800 text-white scale-[1.05] shadow-lg shadow-white/5"
                            : "border-zinc-800 border-dashed text-zinc-600"
                          }`}
                      >
                        {selectedVerb || `(${blank})`}
                      </span>
                    );
                  }
                  return <span key={index}>{part}</span>;
                })}
              </div>
            </section>

            {/* Options Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.options.map((option, idx) => {
                const isSubmitted = submittedQuestions[currentQuestion.id];
                const answers = userAnswers[currentQuestion.id] || {};
                const assignedBlank = Object.keys(answers).find(key => answers[key] === option.verb);

                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border transition-all duration-300 flex flex-col gap-3 ${assignedBlank
                      ? "bg-zinc-100 border-white text-zinc-950 shadow-xl shadow-white/10 ring-2 ring-white scale-[1.02] z-10"
                      : "bg-zinc-900/40 border-zinc-800 text-zinc-500 opacity-60 hover:opacity-100"
                      }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className={`font-mono font-bold text-lg ${assignedBlank ? 'text-zinc-950' : 'text-zinc-300'}`}>{option.verb}</span>
                      <div className="flex gap-1">
                        {['a', 'b', 'c', 'd', 'e'].map(blank => {
                          const isSelected = answers[blank] === option.verb;
                          const isCorrect = currentQuestion.correctAnswers[blank] === option.verb;

                          return (
                            <button
                              key={blank}
                              disabled={isSubmitted}
                              onClick={() => handleSelect(blank, option.verb)}
                              className={`w-8 h-8 rounded-lg text-xs font-bold uppercase transition-all flex items-center justify-center border ${isSelected
                                ? isSubmitted
                                  ? isCorrect
                                    ? "bg-emerald-600 border-emerald-500 text-white"
                                    : "bg-rose-600 border-rose-500 text-white"
                                  : "bg-zinc-950 border-zinc-950 text-white shadow-lg ring-2 ring-zinc-500"
                                : isSubmitted
                                  ? "bg-zinc-800 border-zinc-700 text-zinc-500 opacity-50"
                                  : assignedBlank
                                    ? "bg-zinc-200 border-zinc-300 text-zinc-500 hover:bg-zinc-300"
                                    : "bg-zinc-800 border-zinc-700 text-zinc-500 hover:bg-zinc-700 hover:text-zinc-300 shadow-sm"
                                }`}
                            >
                              {blank}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {isSubmitted && assignedBlank && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className={`text-xs p-2 rounded bg-white/10 mt-1 ${assignedBlank === Object.keys(currentQuestion.correctAnswers).find(k => currentQuestion.correctAnswers[k] === option.verb)
                          ? "text-emerald-700"
                          : "text-rose-700"
                          }`}
                      >
                        <p className="font-medium">{option.explanation}</p>
                        {assignedBlank !== Object.keys(currentQuestion.correctAnswers).find(k => currentQuestion.correctAnswers[k] === option.verb) && (
                          <p className="mt-1 font-bold">
                            Correct position: ({Object.keys(currentQuestion.correctAnswers).find(k => currentQuestion.correctAnswers[k] === option.verb) || 'None'})
                          </p>
                        )}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </section>

            {/* Actions & Feedback */}
            <section className="flex flex-col items-center gap-6 pt-4">
              {submittedQuestions[currentQuestion.id] ? (
                <div className="w-full flex flex-col items-center gap-6">
                  <div className="flex items-center gap-8 bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/50 shadow-sm w-full justify-center">
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-bold text-zinc-600 uppercase tracking-widest mb-1">Score</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-mono font-black text-white">{scores[currentQuestion.id]}</span>
                        <span className="text-xl font-mono font-bold text-zinc-600">/ 5</span>
                      </div>
                    </div>
                    <div className="h-12 w-px bg-zinc-800" />
                    <div className="flex items-center gap-3">
                      {scores[currentQuestion.id] === 5 ? (
                        <>
                          <Trophy className="w-8 h-8 text-amber-500" />
                          <span className="font-bold text-zinc-300">Perfect! You've mastered this part.</span>
                        </>
                      ) : (
                        <span className="font-medium text-zinc-400">Keep practicing! Review the explanations above.</span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-4 w-full">
                    <button
                      onClick={handleTryAgain}
                      className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold hover:bg-zinc-800 hover:text-white transition-all shadow-md"
                    >
                      <RotateCcw className="w-5 h-5" />
                      Try Again
                    </button>
                    {currentQuestionIndex < shuffledQuestions.length - 1 ? (
                      <button
                        onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                        className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-all shadow-lg shadow-white/5"
                      >
                        Next Question
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    ) : isPageComplete && currentPageIndex < pages.length - 1 ? (
                      <button
                        onClick={handleNextPage}
                        className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/40"
                      >
                        Go to Next Page
                        <Layout className="w-5 h-5" />
                      </button>
                    ) : (
                      <button
                        onClick={() => setCurrentPageIndex(0)}
                        className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/40 animate-pulse"
                      >
                        <RotateCcw className="w-5 h-5" />
                        Retake Full Test
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <button
                  disabled={!isCurrentQuestionComplete}
                  onClick={handleSubmit}
                  className={`w-full max-w-md py-5 rounded-2xl font-black text-lg uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 ${isCurrentQuestionComplete
                    ? "bg-white text-zinc-950 hover:scale-[1.02] active:scale-95 shadow-white/10"
                    : "bg-zinc-900 text-zinc-700 cursor-not-allowed shadow-none border border-zinc-800"
                    }`}
                >
                  Check Answers
                  <CheckCircle2 className="w-6 h-6" />
                </button>
              )}
            </section>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-zinc-950/80 backdrop-blur-md border-t border-zinc-900/50 p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button
            disabled={currentQuestionIndex === 0}
            onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
            className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-zinc-900 disabled:opacity-30 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <div className="flex gap-2">
            {shuffledQuestions.map((q, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentQuestionIndex
                  ? "w-8 bg-white"
                  : submittedQuestions[q.id]
                    ? "bg-emerald-500"
                    : "bg-zinc-800"
                  }`}
              />
            ))}
          </div>

          <button
            disabled={!canGoNextQuestion || currentQuestionIndex === shuffledQuestions.length - 1}
            onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
            className="flex items-center gap-2 text-sm font-bold text-zinc-600 hover:text-zinc-300 disabled:opacity-30 transition-colors"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}
