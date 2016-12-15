import React from 'react';
import { WorkCard } from '../../components';
import './Works.css';

function Works(props){
  return (
    <div className="works">
      <div className="row">
        <WorkCard
          iconAlt={"randomClock icon"}
          iconPath={"/images/randomClock/icon.jpg"}
          title='RandomClock'
          tags={['objective-c']}
          description='
            2012年11月リリース。
            目覚まし音が毎回同じだと、慣れてしまい起きれない人のための毎日ランダムでアラーム音が変わる目覚まし時計。
            自分の音楽を選択でき、再生位置も設定できる。'
          active='※公開終了'
        />
        <WorkCard
          iconAlt={"startupStory icon"}
          iconPath={"/images/startupStory/icon.jpg"}
          title='StartupStory'
          tags={['objective-c']}
          description='
            2012年12月リリース。
            podcastで配信されているStartupStoryのアプリ化。
            アプリ起動時に最新のアプリをダウンロード。バックグラウンド再生に対応。
            インターネットのない環境でも再生できます。'
          active='※公開終了'
        />
        <WorkCard
          iconAlt={"freezeAlarm icon"}
          iconPath={"/images/freezeAlarm/icon.jpg"}
          title='FreezeAlarm!'
          tags={['Titanium', 'JavaScript']}
          description={
            <span>
              2013年4月開発。機能が少なすぎるという理由でリジェクト。プロジェクト凍結。
              大学の近くが冬場は夜に水抜きをしないと水道管が凍結したので、その時にアラートを出してくれるアプリがあれば欲しかった。
              現在地から明日の最低気温を表示。※温度は<a target="_blank" href="https://ja.worldweatheronline.com/">World Weather Online</a>から取得。
              現在地を登録して、翌日の気温がマイナスになると通知。
            </span>
          }
          active='※公開終了'
        />
      </div>
    </div>
  );
}

export default Works;
