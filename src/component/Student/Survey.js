import React, { useState, useEffect } from "react";

function SurveyForm() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  // 질문 목록 가져오기
  useEffect(() => {
    fetch("http://54.180.175.139:9131/api/")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((err) => {
        alert("질문 목록을 불러오는 데 실패했습니다.");
        console.error(err);
      });
  }, []);

  const handleChange = (key, value) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: value,
    }));
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

  if (loading) return <p>질문을 불러오는 중입니다...</p>;

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((q) => (
        <div key={q.id}>
          <p>{q.text}</p>
          {q.options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name={q.key}
                value={option}
                checked={answers[q.key] === option}
                onChange={() => handleChange(q.key, option)}
                required
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      <button type="submit">제출</button>
    </form>
  );
}

export default SurveyForm;
