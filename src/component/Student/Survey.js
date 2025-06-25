import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";

function SurveyForm() {
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  let { params } = useParams();

  const handleChange = (key, value) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleActivitySelect = (value) => {
    setAnswers((prev) => ({ ...prev, activity: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answers),
      });

      if (response.ok) {
        alert("설문이 성공적으로 전송되었습니다!");
      } else {
        alert("서버 오류 발생");
      }
    } catch (err) {
      alert("네트워크 오류: " + err.message);
    }
  };

  // if (loading) return <p>질문을 불러오는 중입니다...</p>;

  return (
    <div className="survey-container">
      <Header />
      <form onSubmit={handleSubmit} className="survey-form">
        <h2>2025-1 n번째</h2>
        <h3>Type 1 Test</h3>

        <div className="question-block">
          <p>이번 주차 학업 활동(강의·과제·토론 등)에 대한 흥미도는 어느 정도였나요?</p>
          <input
            type="range"
            min="1"
            max="5"
            value={answers.interest}
            onChange={(e) => handleChange("interest", Number(e.target.value))}
          />
        </div>

        <div className="question-block">
          <p>이번 주차 학습 난이도 체감은 어땠나요?</p>
          <input
            type="range"
            min="1"
            max="5"
            value={answers.difficulty}
            onChange={(e) => handleChange("difficulty", Number(e.target.value))}
          />
        </div>

        <div className="question-block">
          <p>이번 주차 가장 인상 깊었던 학습 활동을 선택해주세요.</p>
          <div className="button-group">
            {["강의 참여", "과제 수행", "그룹 토론", "자료 학습"].map((label) => (
              <button
                type="button"
                key={label}
                className={answers.activity === label ? "selected" : ""}
                onClick={() => handleActivitySelect(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-btn">제출</button>
      </form>
    </div>
  );
}

export default SurveyForm;
