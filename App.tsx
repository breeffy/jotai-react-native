import React from 'react';
import { View } from 'react-native';
import deepFreeze from 'deep-freeze';
import {atom, Provider, useAtom} from 'jotai'

interface Tag {
  id: string;
  isSelected: boolean;
}

const originalTagAtom = atom<Tag>(get => {
  return {id: '123456', isSelected: false}
})

const updatedTagAtom = atom<Tag>(get => {
  const originalTag = get(originalTagAtom);
  originalTag.isSelected = true;
  return originalTag;
})

const UITag = () => {
  const [originalTag] = useAtom(originalTagAtom);
  console.log(`originalTag: ${JSON.stringify(originalTag)}`)
  const [updatedTag] = useAtom(updatedTagAtom);
  console.log(`originalTag: ${JSON.stringify(originalTag)}`)
  console.log(`updatedTag: ${JSON.stringify(updatedTag)}`)
  return <View></View>
}

export default function App() {
  return (
    <Provider freeze={deepFreeze}>
      <UITag />
    </Provider>
  );
}
