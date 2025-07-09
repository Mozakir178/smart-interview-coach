
### 🧩 PHASE-WISE ROADMAP

#### **PHASE 1: Project Setup**

* [ ] Setup GitHub repo with folder structure
* [ ] Initialize React app (Vite + Tailwind)
* [ ] Setup Express server
* [ ] Connect to MongoDB Atlas
* [ ] Setup basic routes and test API

#### **PHASE 2: Authentication**

* [ ] Implement JWT or Firebase Auth
* [ ] Signup/Login pages
* [ ] Protected routes on frontend
* [ ] Store token securely (cookies/localStorage)

#### **PHASE 3: AI-Based Question Generator**

* [ ] Topic & difficulty selection UI
* [ ] API call to OpenAI or local LLM
* [ ] Return question in desired format (coding/theory/scenario)
* [ ] Save history in MongoDB

#### **PHASE 4: Mock Interview (Text + Voice)**

* [ ] Build mock interview UI
* [ ] Integrate Web Speech API for voice input
* [ ] Handle speech-to-text and show transcript
* [ ] Send transcript to backend → GPT feedback

#### **PHASE 5: Answer Feedback & Scoring**

* [ ] GPT evaluates answer structure, accuracy, depth
* [ ] Return score + suggestions
* [ ] Show color-coded feedback and graphs

#### **PHASE 6: Progress Dashboard**

* [ ] Show topics covered, accuracy over time
* [ ] Graph of scores by topic/difficulty
* [ ] Track strengths/weaknesses

#### **PHASE 7: Peer Review Mode (Optional)**

* [ ] Upload/submit answer
* [ ] Peer can comment
* [ ] GPT summarizes peer feedback

#### **PHASE 8: Advanced Features (Optional)**

* [ ] Upload resume/system design → GPT feedback
* [ ] Customize mock based on SDE level

#### **PHASE 9: Deployment**

* [ ] Vercel (Frontend), Render/Railway (Backend)
* [ ] Environment variables setup
* [ ] Domain setup and testing

---

smart-interview-coach/
├── client/              # React Frontend (Vite + Tailwind)
├── server/              # Node.js + Express Backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── config/
│   ├── utils/
│   ├── middleware/
│   └── index.js         # Entry point
└── README.md
