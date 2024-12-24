'use client';

import Image from 'next/image';
import React from 'react';

export default function Home(): JSX.Element {
  const getEmailAddress = (): void => {
    grecaptcha.ready(() => {
      grecaptcha
        .execute('6LdGg6QqAAAAANqZ499XllUpeymCqesPrW9nX4RW', { action: 'submit' })
        .then((token: string) => {
          console.log(token);
        });
    });
  };
  return (
    <div
      className='
      grid grid-rows-[20px_1fr_20px]
      items-center justify-items-center
      min-h-screen p-8 pb-20 gap-16 sm:p-20
    '>
      <main className='flex flex-col gap-3 row-start-2'>
        <p>Leonardo Holguin Arias</p>
        <div className='w-full flex justify-center'>
          <a
            className='mx-1'
            href='https://github.com/leonardo-holguin'
            target='_blank'>
            <Image
              className='dark:invert'
              src='/github-icon.svg'
              alt='Github Icon'
              width={30}
              height={30}
              priority
            />
          </a>
          <a
            className='mx-1'
            href='https://www.linkedin.com/in/leoholguinarias/'
            target='_blank'>
            <Image
              className='dark:invert'
              src='/linkedin-icon.svg'
              alt='Linkedin Icon'
              width={30}
              height={30}
              priority
            />
          </a>
          <Image
            onClick={getEmailAddress}
            className='dark:invert mx-1 cursor-pointer'
            src='/email-icon.svg'
            alt='Email Icon'
            width={30}
            height={30}
            priority
          />
        </div>
      </main>
    </div>
  );
}
