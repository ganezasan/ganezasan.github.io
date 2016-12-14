import React from 'react';
import Markdown from 'react-markdown';
import './About.css';

function getDefeaultSource() {
  return [
    '## Contact',
    'Email:',
    '[istaka12@gmail.com](mailto:istaka12@gmail.com)',
    '',
    '## About me',
    '私はエンジニアであり、株式会社チイキットの代表をしています。',
    'ここ3年ほどはずっとリモートワークをしていて、家かカフェで仕事をしています。',
    '',
    'フロントエンドからサーバサイド、アプリ開発まで一貫して開発を行ってきました。',
    '',
    'メイン言語はJavaScriptで d3.js を使ったデータビジュアライゼーションの開発を行っています。',
    'JavaScriptはフロントもサーバもアプリも全ての範囲をカバーできるので最高です。',
    '',
    '最近だとReactとd3、Serverless Framework(AWS lambda, API Gateway)をメインで使っています。',
    '興味がある分野は、データを使ったサービス、統計に関するものです。',
    '趣味は料理を作ることと、読書です。',
    '',
    '[Twitter](https://twitter.com/ganezasan)や[Blog](http://ganeza.hatenablog.com/)もやっているので近況はこちらを見てください'
  ].join('\n');
}

function About(props){
  return (
    <div className="about">
      <div className="image-box">
        <img src="/profile.jpg" className="rounded-circle profile" />
      </div>
      <Markdown source={getDefeaultSource()} />
    </div>
  );
}

export default About;
