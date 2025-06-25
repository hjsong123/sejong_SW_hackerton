import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./Footer";

function Choice(){
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(true);
    const move_page = useNavigate();
    
      
      useEffect(() => {
        // fetch("http://54.180.175.139:9131/api/questions")
        //   .then((res) => res.json())
        //   .then((data) => {
        //     setQuestions(data);
        //     setLoading(false);
        //   })
        //   .catch((err) => {
        //     alert("질문 목록을 불러오는 데 실패했습니다.");
        //     console.error(err);
        //   });
      }, []);

    return(
        <div className="choice-container">
            <Header></Header>
            <div className="choice-box">
                <div class="test-list-container">
                    <div class="test-header">
                        <div class="test-title">
                        <p class="semester">2025-1</p>
                        <h2>Test List</h2>
                        </div>
                        <img src="pencil.png" alt="연필" class="header-icon" />
                    </div>

                    <div class="test-group">
                        <p class="group-title">Type 1 Test</p>
                        <div class="week-buttons">
                        <button>week 02</button><button>week 04</button><button>week 06</button>
                        <button>week 08</button><button>week 10</button><button>week 12</button>
                        <button>week 14</button><button>week 16</button>
                        </div>
                    </div>

                    <div class="test-group">
                        <p class="group-title">Type 2 Test</p>
                        <div class="week-buttons">
                        <button>week 06</button><button>week 14</button>
                        </div>
                    </div>

                    <div class="test-group">
                        <p class="group-title">Type 3 Test</p>
                        <div class="week-buttons">
                        <button>week 16</button>
                        </div>
                    </div>
                    </div>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default Choice;