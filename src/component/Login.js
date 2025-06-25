import React, { useState } from "react";
import '../CSS/Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://54.180.175.139:9131/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        if (data.accessToken) {
          localStorage.setItem("jwt", data.accessToken);
          alert("로그인 성공! JWT 저장 완료");
        } else {
          alert("로그인 성공, 하지만 토큰이 없습니다.");
        }
      } else {
        alert("로그인 실패");
      }
    } catch (error) {
      alert("오류 발생: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
<img src="/majorly_logo.svg" alt="Majorly 로고" className="logo-image" />
<h2 className="login-title">통합 로그인</h2>
        <p className="subtext">아이디는 학생은 학번, 교수자는 포털 아이디(이메일) 또는 직원번호입니다.</p>
       <label htmlFor="password">학번 / 아이디</label>
       <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
          <label htmlFor="password">비밀번호</label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="find-links">
          <a href="#">아이디 찾기 | 비밀번호 찾기</a>
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default Login;