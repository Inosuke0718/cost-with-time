# README

## ・アプリ名
Cost With Time

## ・概要
#### 時間をお金に変換するタイマーです。
登録した時給と人数を基に、1秒毎に発生するコストをカウントします。
記録機能もあり、過去の時間とコストデータのグラフ化し、表示します。
お金に変換することで、時間の大切さを再認識することができます。

#### 利用シーン例
会議、勉強、SNSやYouTube、ネットサーフィンなどの娯楽

## ・本番環境
#### □ 本番環境のURL
http://54.95.23.147/
#### □ ID/Pass
ログインID：test_account@test.com  /  PassWord：aaaaaaaa (aが８つです)

## ・制作背景(意図)
#### 「みんなで生産性の高い仕事がしたい」そんな思いからこのアプリを作成しました。
前の職場では、だらだらと結論の出ない会議をよくしていました。
そのような会議に役職が上の方が出席していると、なかなか意見することも出来ず、歯痒い思いをしていました。
もし、時間をわかりやすい価値に変換できたら、時間に対するコスト意識が向上するのではないかと考えました。
このタイマーを見える位置に置き、会議を行えば全員の意識が高まり、よりよい仕事に繋がると思います。

## ・DEMO
#### 時間をお金に変換するタイマー機能
![timer](https://i.gyazo.com/b6ab0e516c6b4dba9c7c00d5fa705fb6.gif)

#### 履歴機能
![history](https://i.gyazo.com/8e0935eeab218a3c8d4fb24c287cdf86.png)

#### 寿命カウンター
![lifelimit](https://i.gyazo.com/c57defdcf4ec1c2e16908c41f043da44.gif)

## ・工夫したポイント
#### □ トップページで余生をカウントダウン（※寿命を８０歳と仮定し算出）
#### 時間の有限で大切なものということを思い出すようにこの機能を追加しました。
実際に”人は「死」を意識すると、パフォーマンスが向上する”とう研究もあるので、効果が期待できると思います。

#### □ 直感的に操作が理解できるデザイン
#### タイマー機能を邪魔しな様にシンプルなデザインを心がけました。
また背景には、ぼかした画像を入れ、文字やグラフに立体感を出しました。

## ・使用技術(開発環境)
Ruby/Ruby on Rails/JavaScript/MySQL/Github/AWS/Visual Studio Code

## ・課題や今後実装したい機能
利便性を上げるために、iOSアプリやAndroidアプリでもこのアプリを作成してみたいです。

## ・DB設計

### usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|age|integer||

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