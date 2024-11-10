'use client';

import { Button } from 'antd';

import Text from '@/UI/Text';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Text variant="title">Hello</Text>
      <Text variant="titleS">Hello</Text>
      <Text variant="body-m">Hello</Text>

      <Button onClick={() => console.log('Hello')} type="primary">
        Hello
      </Button>
    </main>
  );
}
