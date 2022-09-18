import Head from 'next/head';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="grid place-items-center h-screen">
      <div>
        <h1 className="text-7xl font-bold text-center">
          {currentTheme === 'dark' ? 'Dark' : 'Light'}{' '}
          <span className="text-purple-600">Mode</span>
        </h1>
        <p className="dark:text-purple-700 my-8 text-center">
          Click the button below to switch mode
        </p>
        <div className="flex justify-center">
          {currentTheme === 'dark' ? (
            <button
              className="bg-black-700 w-28 rounded-md border-purple-400 border-2 p-4 "
              onClick={() => setTheme('light')}
            >
              {' '}
              <Image src="/sun.svg" alt="logo" height="50px" width="50px" />
            </button>
          ) : (
            <button
              className="bg-gray-100 w-28 rounded-md border-purple-400 border-2 p-4 "
              onClick={() => setTheme('dark')}
            >
              <Image src="/moon.svg" alt="logo" height="50px" width="50px" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
