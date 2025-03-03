import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { generateHash } from "@/lib/auth";

export default function HashGenerator() {
  const [password, setPassword] = useState("");
  const [hash, setHash] = useState("");

  const handleGenerateHash = () => {
    const newHash = generateHash(password);
    setHash(newHash);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f2eb] p-4">
      <div className="w-full max-w-md space-y-4 p-6 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-serif text-center mb-6">パスワードハッシュ生成</h1>
        <div className="space-y-4">
          <Input
            type="password"
            placeholder="新しいパスワードを入力"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button 
            onClick={handleGenerateHash}
            className="w-full"
          >
            ハッシュを生成
          </Button>
          {hash && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <p className="text-sm font-mono break-all">{hash}</p>
              <p className="text-xs text-gray-500 mt-2">
                このハッシュ値を auth.ts の STORED_HASH に設定してください
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
