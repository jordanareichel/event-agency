import React, { useContext, useEffect, useState } from 'react';

import router from 'next/router';

import { listEvents } from '../../apk/Events';
import { EventResume } from '../../apk/Events/types';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header/Header.comp';
import { Input } from '../../components/Input';
import { UserContext } from '../../context/Auth/context';
import { CardView, Wrapper, Search } from '../../pages_components/home/styles';
export type UserProps = {
  name: string;
  code: string;
};

export default function Home() {
  const { isLogged } = useContext(UserContext);
  const [data, setData] = useState<EventResume[]>([]);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    getData();
  }, [data]);

  async function getData() {
    try {
      const results = await listEvents();
      setData(results);
    } catch (err) {
      alert(err);
    }
  }

  function handleSubmit(code: string) {
    router.push(`/purchase/${code}`);
  }

  function handleChange(value: any) {
    setValue(value);
  }


  function handleViewEvent(code: string) {
    router.push(`/details/${code}`);
  }

  return (
    <Wrapper>
      <Header
        title={isLogged ? 'Logout' : 'Login'}
        isLogged={isLogged}
        url={isLogged ? '/logout' : '/login'}
      />
      <Search>
        <Input
          value={value}
          placeholder="Procurar evento"
          type="text"
          onChangeText={value => handleChange(value)}
        />
      </Search>
      <CardView>
        {data
          .filter(
            item =>
              !value ||
              item.code?.toLowerCase().includes(value.toLowerCase()) ||
              item.title?.toLowerCase().includes(value.toLowerCase()),
          )
          .map((list, index) => (
            <Card
              onClick={() => handleViewEvent(list.code)}
              onSubmit={() => handleSubmit(list.code)}
              key={index}
              title={list.title}
              local={list.local}
              image={list.image}
              date={list.createdAt}
              withoutFooter
            />
          ))}
      </CardView>
    </Wrapper>
  );
}
