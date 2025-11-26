"use client";

import { useState } from "react";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Restrict to @pewaukeeschools.org
  const isValidDomain = (email: string) =>
    email.toLowerCase().endsWith("@pewaukeeschools.org");

  const handleSignUp = async () => {
    if (!isValidDomain(email)) {
      setError("Email must end in @pewaukeeschools.org");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff7f50",
        padding: 20,
      }}
    >
      <div
        style={{
          background: "white",
          padding: 30,
          borderRadius: 12,
          width: "100%",
          maxWidth: 400,
          position: "relative",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        {/* Back Button */}
        <button
        onClick={() => router.push("/")}
        style={{
            position: "absolute",
            top: 20,
            left: 20,
            backgroundColor: "#fff",
            padding: "6px 12px",
            borderRadius: 6,
            border: "1px solid #ff7f50",
            color: "#ff7f50",
            fontWeight: "bold",
            cursor: "pointer",
            zIndex: 10,
        }}
        >
        ← Back
        </button>


        <h1 style={{ textAlign: "center", marginBottom: 20 }}>Create Account</h1>

        {error && <p style={{ color: "red", marginBottom: 10 }}>{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10, borderRadius: 6, border: "1px solid #ccc" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 20, borderRadius: 6, border: "1px solid #ccc" }}
        />

        <button
          onClick={handleSignUp}
          style={{
            width: "100%",
            padding: 12,
            backgroundColor: "#50d0ff",
            color: "black",
            border: "none",
            borderRadius: 8,
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
