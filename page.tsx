'use client';

import { useState } from 'react';
import * as math from 'mathjs';

export default function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleNumber = (num: string) => {
    if (result && !expression) {
      // If result exists but no new expression, start fresh
      setExpression(num);
      setResult('');
    } else {
      setExpression(expression + num);
    }
  };

  const handleOperator = (op: string) => {
    if (result && !expression) {
      // If result exists but no expression, use result as base for new calculation
      setExpression(result + op);
      setResult('');
    } else {
      setExpression(expression + op);
    }
  };

  const handleFunction = (func: string) => {
    setExpression(expression + func);
  };

  const handleDelete = () => {
    setExpression(expression.slice(0, -1));
  };

  const handleClear = () => {
    setExpression('');
    setResult('');
  };

  const handleEqual = () => {
    if (!expression) return;

    try {
      const evaluated = math.evaluate(expression);
      const formatted = math.format(evaluated, { precision: 14 });
      setResult(formatted);
      setExpression('');
    } catch (error) {
      setResult('Syntax ERROR');
      setExpression('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 rounded-xl shadow-2xl p-6 w-full max-w-sm">
        {/* Display Screen */}
        <div className="bg-[#c2d6b3] rounded-lg p-4 mb-6 shadow-inner">
          {/* Expression Line */}
          <div className="text-right text-sm text-gray-700 h-6 overflow-hidden truncate font-mono">
            {expression}
          </div>
          {/* Result Line */}
          <div className="text-right text-4xl font-bold text-gray-900 h-12 flex items-end justify-end font-mono">
            {result || expression || '0'}
          </div>
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-4 gap-2">
          {/* Row 1: AC, DEL, / */}
          <button
            onClick={handleClear}
            className="col-span-2 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold py-3 rounded-lg transition"
          >
            AC
          </button>
          <button
            onClick={handleDelete}
            className="bg-orange-600 hover:bg-orange-700 active:scale-95 text-white font-bold py-3 rounded-lg transition"
          >
            DEL
          </button>
          <button
            onClick={() => handleOperator('/')}
            className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold py-3 rounded-lg transition"
          >
            ÷
          </button>

          {/* Row 2: 7, 8, 9, * */}
          <button
            onClick={() => handleNumber('7')}
            className="bg-gray-700 hover:bg-gray-600 active:scale-95 text-white font-bold py-3 rounded-lg transition"
          >
            7
          </button>
          <button
            onClick={() => handleNumber('8')}
            className="bg-gray-700 hover:bg-gray-600 active:scale-95 text-white font-bold py-3 rounded-lg transition"
          >
            8
          </button>
          <button
            onClick={() => handleNumber('9')}
            className="bg-gray-700 hover:bg-gray-600 active:scale-95 text-white font-bold py-3 rounded-lg transition"
          >
            9
          </button>
          <button
            onClick={() => handleOperator('*')}
            className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold py-3 rounded-lg transition"
          >
            ×
          </button>

          {/* Row 3: 4, 5, 6, - */}
          <button
            onClick={() => handleNumber('4')}
            className="bg-gray-700 hover:bg-gray-600 active:scale-95 text-white font-bold py-3 rounded-lg transition"
          >
            4
          </button>
          <button
            onClick={() => handleNumber('5')}
            className="bg-gray-700 hover:bg-gray-600 active:scale-95 text-white font-bold py-3 rounded-lg transition"
          >
            5
          </button>
          <button
            onClick={() => handleNumber('6')}
            className="bg-gray-700 hover:bg-gray-600 active:scale-95 text-white font-bold py-3 rounded-lg transition"
          >
            6
          </button>
          <button
            onClick={() => handleOperator('-')}
            className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold py-3 rounded-lg transition"
          >
            −
          </button>

          {/* Row 4: 1, 2, 3, + */}
          <button
            onClick={() => handleNumber('1')}
            className="bg-gray-700 hover:bg-gray-600 active:scale-95 text-white font-bold py-3 rounded-lg transition"
          >
            1
          </button>
          <button
            onClick={() => handleNumber('2')}
            className="bg-gray-700 hover:bg-gray-600 active:scale-95 text-white font-bold py-3 rounded-lg transition"
          >
            2
          </button>
          <button
            onClick={() => handleNumber('3')}
            className="bg-gray-700 hover:bg-gray-600 active:scale-95 text-white font-bold py-3 rounded-lg transition"
          >
            3
          </button>
          <button
            onClick={() => handleOperator('+')}
            className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold py-3 rounded-lg transition"
          >
            +
          </button>

          {/* Row 5: 0 (spans 2), ., = */}
          <button
            onClick={() => handleNumber('0')}
            className="col-span-2 bg-gray-700 hover:bg-gray-600 active:scale-95 text-white font-bold py-3 rounded-lg transition"
          >
            0
          </button>
          <button
            onClick={() => handleNumber('.')}
            className="bg-gray-700 hover:bg-gray-600 active:scale-95 text-white font-bold py-3 rounded-lg transition"
          >
            .
          </button>
          <button
            onClick={handleEqual}
            className="bg-green-600 hover:bg-green-700 active:scale-95 text-white font-bold py-3 rounded-lg transition"
          >
            =
          </button>

          {/* Row 6: sin, cos, tan, log */}
          <button
            onClick={() => handleFunction('sin(')}
            className="bg-purple-700 hover:bg-purple-600 active:scale-95 text-white font-bold py-2 text-xs rounded-lg transition"
          >
            sin
          </button>
          <button
            onClick={() => handleFunction('cos(')}
            className="bg-purple-700 hover:bg-purple-600 active:scale-95 text-white font-bold py-2 text-xs rounded-lg transition"
          >
            cos
          </button>
          <button
            onClick={() => handleFunction('tan(')}
            className="bg-purple-700 hover:bg-purple-600 active:scale-95 text-white font-bold py-2 text-xs rounded-lg transition"
          >
            tan
          </button>
          <button
            onClick={() => handleFunction('log10(')}
            className="bg-purple-700 hover:bg-purple-600 active:scale-95 text-white font-bold py-2 text-xs rounded-lg transition"
          >
            log
          </button>

          {/* Row 7: ln, sqrt, ^, π */}
          <button
            onClick={() => handleFunction('log(')}
            className="bg-purple-700 hover:bg-purple-600 active:scale-95 text-white font-bold py-2 text-xs rounded-lg transition"
          >
            ln
          </button>
          <button
            onClick={() => handleFunction('sqrt(')}
            className="bg-purple-700 hover:bg-purple-600 active:scale-95 text-white font-bold py-2 text-xs rounded-lg transition"
          >
            √
          </button>
          <button
            onClick={() => handleFunction('^')}
            className="bg-purple-700 hover:bg-purple-600 active:scale-95 text-white font-bold py-2 text-xs rounded-lg transition"
          >
            ^
          </button>
          <button
            onClick={() => handleFunction('pi')}
            className="bg-purple-700 hover:bg-purple-600 active:scale-95 text-white font-bold py-2 text-xs rounded-lg transition"
          >
            π
          </button>

          {/* Row 8: (, ), e */}
          <button
            onClick={() => handleFunction('(')}
            className="bg-indigo-700 hover:bg-indigo-600 active:scale-95 text-white font-bold py-2 text-xs rounded-lg transition"
          >
            (
          </button>
          <button
            onClick={() => handleFunction(')')}
            className="bg-indigo-700 hover:bg-indigo-600 active:scale-95 text-white font-bold py-2 text-xs rounded-lg transition"
          >
            )
          </button>
          <button
            onClick={() => handleFunction('e')}
            className="bg-purple-700 hover:bg-purple-600 active:scale-95 text-white font-bold py-2 text-xs rounded-lg transition col-span-2"
          >
            e
          </button>
        </div>
      </div>
    </div>
  );
}
