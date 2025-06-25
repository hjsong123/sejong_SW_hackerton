import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useParams, useLocation } from "react-router-dom";

function SurveyForm() {
  const move_page = useNavigate();
  const location = useLocation();
  const questions = location.state; // 여기서 넘긴 props를 받음

  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  let { params } = useParams();

  useEffect(() => {
    console.log(questions);
  }, [])

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
        // alert("떙!!!!");
      }
    } catch (err) {
      // alert("네트워크 오류: " + err.message);
    }
  };

  // if (loading) return <p>질문을 불러오는 중입니다...</p>;

  return (
    <div className="survey-container">
      <Header />
      <form onSubmit={handleSubmit} className="survey-form">
        <h3>SURVEY</h3>

        {Array.isArray(questions) && questions.map((q, idx) => (
          <div className="question-block" key={q.questionId || idx}>
            <p>{q.questionText}</p>
            {q.questionType === "TYPE1" && (
              <input
                type="range"
                min="1"
                max="5"
                value={answers[q.questionId] || 1}
                onChange={e => handleChange(q.questionId, Number(e.target.value))}
              />
            )}
            {q.questionType === "TYPE2" && (
              <div className="button-group">
                {(q.options || ["A", "B", "C"]).map(option => (
                  <button
                    type="button"
                    key={option}
                    className={answers[q.questionId] === option ? "selected" : ""}
                    onClick={() => handleChange(q.questionId, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
            {q.questionType === "TYPE3" && (
              <input
                type="text"
                value={answers[q.questionId] || ""}
                onChange={e => handleChange(q.questionId, e.target.value)}
                placeholder="답변을 입력하세요"
              />
            )}
          </div>
        ))}
        {/* <div className="question-block">
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
        </div> */}

        <button onClick={() => {alert("설문이 성공적으로 전송되었습니다!");move_page("/student/home");}} className="submit-btn">제출</button>
      </form>
    </div>
  );
}

export default SurveyForm;
