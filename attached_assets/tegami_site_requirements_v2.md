
# 手紙サイト 要件定義書

## 1. プロジェクト名
手紙サイト

## 2. 概要
彼女に向けた特別な手紙を、スマホのブラウザ上で閲覧できるWebアプリを作成する。
スケールや継続運用は想定せず、1度きりの使用が前提。

## 3. 想定ユーザー
- 閲覧者：彼女
- 作成者：本人（開発・運用）

## 4. 実現したい機能
| 機能名 | 概要 |
|---|---|
| ログイン機能 | 封筒デザインの画面で、タップ→パスワード入力→封筒が開く演出付きログイン |
| 手紙閲覧画面 | 封筒から便箋が出てくるアニメーション。本文は縦スクロールで閲覧可能 |

## 5. システム構成
- Webアプリ（スマホブラウザ対応）
- **サーバー不要のクライアントサイド完結型**

## 6. 外部連携
- なし

## 7. 運用方法
- 1度きりの使用を想定。
- イベント終了後は破棄も可能。

## 8. スケジュール
- イベント当日までに完成すればOK。

## 9. 非機能要件
| 項目 | 内容 |
|---|---|
| 対応端末 | 彼女のスマホブラウザ（iPhone or Android） |
| セキュリティ | ID・パスワードで簡易認証 |
| パフォーマンス | 想定アクセス1回のみ |
| 保守性 | 使い捨て前提で、ドキュメントは最小限 |
| デザイン | 特別感を演出し、スマホで見やすくオシャレに仕上げる |

## 10. デザイン要件
| 項目 | 内容 |
|---|---|
| 全体テーマ | ヨーロッパ風のおしゃれなレターセットをモチーフに。上品かつ特別感。 |
| カラー | ベージュ・クリーム・アイボリー・くすみピンク・薄いブルーグレーなど、アンティーク調。アクセントに封蝋風の赤やゴールドを使用。 |
| フォント | 本文は「やさしさアンチック」や「Noto Sans JP」、宛名は英字フォント「Lora」などを使用。 |
| レイアウト | スマホ縦画面。封筒を画面中央に配置→封筒タップ→パスワード入力→開封→便箋表示。 |
| 画像・イラスト | - 封筒：ヨーロッパ風デザイン（古地図風模様・花柄エンボス・封蝋付き） - 便箋：アンティーク風罫線や飾り枠入り |
| 装飾 | - 便箋の角に押し花や切手風モチーフ - パスワード入力欄も宛名欄風に装飾 |
| スマホ対応 | 片手でも見やすいレイアウト調整 |
| 演出効果 | - 封筒タップでズーム→パスワード欄出現 - ログイン成功で封筒がパカッと開く - 便箋がふわっと現れ本文表示 |

## 11. 追加デザイン要件
- さらにオシャレにする
    - イメージは高級感のあるヨーロッパのレターセット
    - 紙や封筒の質感までこだわる（紙の繊維感やかすれ風加工など）
    - 派手すぎず、でも「特別な手紙感」を強く伝えるデザイン
    - UIはシンプルに、余白を活かしてエレガントに

## 12. データ保持要件
| 項目 | 内容 |
|---|---|
| ログイン情報 | JSONファイルにユーザーIDと暗号化されたパスワードを保存 |
| 保持するデータ項目 | ユーザーID、暗号化済みパスワード |
| データ格納場所 | **クライアント側（Webアプリのファイル内）** |
| データ更新 | 事前に設定した内容を使う（運用中の更新なし） |
| データ保護 | - JSONファイル自体は簡単に覗けるが、パスワードはAESで暗号化 - 鍵はJavaScriptコードに埋め込み（運用不要のため割り切り） |

### 保存データイメージ
```json
{
    "user_id": "her",
    "password": "3+hbD7frhjsdH5=="
}
```

### 暗号化方式
| 項目 | 内容 |
|---|---|
| 方式 | AES-256（共通鍵暗号方式） |
| 鍵の管理 | JavaScript内に直接埋め込み |
| 平文復元 | ログイン時にのみ復号して認証 |
| ライブラリ | JavaScriptのWeb Crypto API またはcrypto-jsを想定 |

## 13. サーバー通信に関する要件
| 項目 | 内容 |
|---|---|
| 基本方針 | サーバーとの通信を必要としない |
| 実現方法 | - HTML+CSS+JavaScriptのみで構成 - JSONも**ローカルファイル**として同梱し、fetchで読み込む - 暗号化・復号もクライアント側で実施 |
| データ保持 | JSONファイルを**アプリと同じディレクトリ**に配置 |
| 配布方法 | ファイル一式を**Zip等で直接渡す** or **AirDrop**等で転送 |
| セキュリティ | サーバー通信がないため、通信盗聴リスクはなし |

---

## 参考イメージリンク
- [クラシカル封筒例](https://www.pinterest.jp/pin/298364162157809132/)
- [ヨーロッパ風便箋](https://www.pinterest.jp/pin/427138964799764373/)
- [封蝋デザイン](https://www.pinterest.jp/pin/544091198724466469/)
