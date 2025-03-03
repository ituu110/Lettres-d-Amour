import CryptoJS from "crypto-js";

// 本番環境では、これらの値を適切な値に変更してください
const ENCRYPTION_KEY = "bAQz29kNBZcfEkj4kS9e3yhGN+bj7q2uYkamnBaprJI=";
const STORED_HASH = "0vgPNU/l2n59rOSrdKuGP4sPF1vCw6YEbhnkteNwvDs="; // 暗号化済みパスワード
const FIXED_SALT = "tegami2025"; // 固定のソルト値

/**
 * パスワードを一貫した方法で暗号化する関数
 * @param password 暗号化するパスワード
 * @returns string 暗号化されたハッシュ値
 */
function encryptConsistently(password: string): string {
  // パスワードとソルトを結合
  const salted = password + FIXED_SALT;

  // SHA-256でハッシュ化してから、Base64エンコード
  const hash = CryptoJS.SHA256(salted);
  const base64 = CryptoJS.enc.Base64.stringify(hash);

  return base64;
}

/**
 * パスワードを検証する関数
 * @param password ユーザーが入力したパスワード
 * @returns boolean 認証成功ならtrue、失敗ならfalse
 */
export async function validatePassword(password: string): Promise<boolean> {
  try {
    // 入力されたパスワードを暗号化
    const encrypted = encryptConsistently(password);
    const match = encrypted === STORED_HASH;

    // 認証成功時にセッションストレージにフラグを設定
    if (match) {
      sessionStorage.setItem("authenticated", "true");
    }

    return match;
  } catch (error) {
    console.error("パスワード検証エラー:", error);
    return false;
  }
}

/**
 * 新しいパスワードのハッシュ値を生成する関数（開発用）
 * 注意: この関数は開発時のみ使用し、本番環境では削除してください
 */
export function generateHash(password: string): string {
  return encryptConsistently(password);
}
