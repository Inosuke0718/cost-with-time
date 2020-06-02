# README

## ・アプリ名
Cost With Time

## ・概要
#### 時間をお金に変換するタイマーです。
登録した時給と人数を基に、1秒毎に発生するコストをカウントします。  
記録機能もあり、過去の時間とコストデータがグラフ化されます。  
時間をお金に変換することで、「払った時間に対して正しいリターンが得られたか」を簡単に確認することができます。

#### 利用シーン例
会議、勉強、SNSやYouTube、ネットサーフィンなどの娯楽

## ・本番環境
#### 本番環境のURL
http://54.95.23.147/
#### ID/Pass
Guest Login（簡単ログイン）をご利用ください。

## ・制作背景(意図)
#### 「みんなで生産性の高い仕事がしたい」そんな思いからこのアプリを作成しました。
前の職場では、だらだらと結論の出ない会議をよくしていました。  
そのような会議に役職が上の方が出席していると、なかなか意見することも出来ず、歯痒い思いをしていました。  
もし、時間をわかりやすい価値に変換できたら、時間に対するコスト意識が向上するのではないかと考えました。  
このタイマーを見える位置に置き、会議を行えば全員の意識が高まり、よりよい仕事に繋がると思います。  

## ・DEMO
#### 時間をお金に変換するタイマー機能
![timer](https://i.gyazo.com/b7fc9928d86c07b0c40916c2d379f568.gif)
* Ajax, chart.js を使用

#### 履歴機能
![history](https://user-images.githubusercontent.com/63226783/83348909-646e4d80-a36b-11ea-925d-2851f94317b3.png)
* Ajax, chart.js を使用

#### 寿命カウンター
![lifelimit](https://i.gyazo.com/5c576bcd9435c94d092ba8901644cc1c.gif)
* スライドショー機能
  * 矢印ボタンを押すと寿命の単位が 秒→時間→日→月 と切り替わります。
* Ajaxを使用

#### ユーザー機能
* deviseを使用
* 新規登録、ログイン、ログアウト機能
* マイページ、登録情報編集機能


## ・工夫したポイント
#### トップページで余生をカウントダウン（※寿命を８０歳と仮定し算出）
時間の有限で大切なものということを思い出すようにこの機能を追加しました。  
実際に”人は「死」を意識すると、パフォーマンスが向上する”とう研究もあるので、効果が期待できると思います。  

#### jax通信を用いることで、リアルタイムでの金額計算
会議では人が出たり入ったりするので、リアルタイムでの金額計算が行えるようにしました。

#### 直感的に操作が理解できるデザイン
タイマー機能を邪魔しな様にシンプルなデザインを心がけました。  
また背景には、ぼかした画像を入れ、文字やグラフに立体感を出しました。  

## ・使用技術(開発環境)
* Ruby 2.5.1, Rails 5.0.7.2
* MySQL 5.6.47
* Capistrano, Nginx, Puma, unicorn
* AWS（VPC, EC2, RDS, Route 53, ALB, S3）
* Node.js
* RSpec
* Sass, jQuery
* Visual Studio Code  
* Github

## ・課題や今後実装したい機能
* Dockerを用いた仮想環境を作成、配布、実行
* CircleCIを用いたテスト、ビルド、デプロイの自動化
* 利便性を上げるために、iOSアプリやAndroidアプリでもこのアプリを作成 

## ・DB設計

### usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|encrypted_password|string|null: false|
|birthday|integer|null: false|

#### Association
- has_many :timers   

### timersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|money|integer||
|time|integer|null: false|
|wage|integer||
|people|integer||

#### Association
- belongs_to :user