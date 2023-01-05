import React from 'react';
import { View } from 'react-native';
import Label from '../label';
import Panel from '../panel';
import styles from './assets/styles';
import type { CommentCardProps } from './assets/types';

function Loading({ comment, user, createDate }: CommentCardProps) {
  // TODOYunus: Kullanıcı adı ve soyadı ekenecek
  // yuvarlak için de baş harfler yunus güneş => YG
  // isim soyisim => y**** g*** a**** formatinda olacak

  const date = new Date(createDate);

  return (
    <Panel style={styles.padding8}>
      <View style={styles.startCont}>
        {/* <StartView value={point} disabled={disabledStart} /> */}
      </View>
      <View style={styles.message}>
        <Label title={comment} />
        <View style={styles.content}>
          <Label title={user} secondary />
          <Label title={date?.toLocaleDateString()} secondary />
        </View>
      </View>
    </Panel>
  );
}

export default Loading;
