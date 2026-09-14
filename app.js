const categories = [
  {
    id: "python", title: "Python 기본", desc: "타입 · 조건 · 반복", color: "#78a9ff", source: "Wiki · 시험 범위 / book0 ch01", questions: [
      { title: "다음 코드에서 `temperature`의 자료형은 무엇인가요?", hint: "값의 형태를 먼저 확인하세요.", code: "temperature = 0.2", choices: ["int", "float", "str", "bool"], answer: 1, explain: "소수점이 있는 수는 Python에서 `float`입니다.", source: "Wiki 시험 범위 · 교육 저장소 ch01_python_basics.md", type: "코드 결과", level: "WARM-UP" },
      { title: "다음 코드가 출력하는 값은 무엇인가요?", hint: "조건이 참인지 먼저 판단하고, 실행되는 블록만 따라가세요.", code: "count = 3\nif count > 5:\n    count += 10\nelse:\n    count *= 2\nprint(count)", choices: ["3", "5", "6", "13"], answer: 2, explain: "3 > 5는 거짓이므로 `else`가 실행되어 3 × 2 = 6입니다.", source: "사용자 시험 힌트 · 교육 저장소 ch01_python_basics.md", type: "흐름 추적", level: "WARM-UP" },
      { title: "`match` 문을 사용하는 가장 가까운 목적은 무엇인가요?", hint: "다른 언어의 switch와 비교해보세요.", choices: ["여러 패턴이나 값에 따라 분기한다", "반복문을 무한히 실행한다", "함수를 비동기로 만든다", "객체를 JSON으로 바꾼다"], answer: 0, explain: "`match`는 값이나 패턴에 따른 다중 분기를 표현합니다.", source: "Wiki 시험 범위 · 사용자 시험 힌트", type: "개념 확인", level: "CORE" },
      { title: "다음 중 함수의 결과를 호출한 곳으로 전달하는 키워드는 무엇인가요?", choices: ["yield", "pass", "return", "break"], answer: 2, explain: "`return`은 함수 실행을 끝내고 값을 호출자에게 돌려줍니다.", source: "교육 저장소 ch01_python_basics.md", type: "개념 확인", level: "WARM-UP" },
      { title: "`for item in items:`의 기본 역할은 무엇인가요?", choices: ["items의 각 요소를 순서대로 처리한다", "items를 JSON으로 전송한다", "items를 클래스 인스턴스로 만든다", "items의 메모리를 삭제한다"], answer: 0, explain: "`for`는 반복 가능한 자료의 요소를 하나씩 꺼내 처리합니다.", source: "Wiki 시험 범위 · 교육 저장소 ch01_python_basics.md", type: "개념 확인", level: "WARM-UP" },
      { title: "타입 힌트에 대한 설명으로 가장 적절한 것은 무엇인가요?", choices: ["실행 중 모든 값을 강제로 변환한다", "코드의 예상 타입을 표현해 가독성과 도구 지원을 높인다", "JSON만 처리할 수 있게 한다", "예외 처리를 자동으로 한다"], answer: 1, explain: "타입 힌트는 주로 의도와 계약을 표현합니다. 값 검증은 Pydantic 같은 도구가 담당할 수 있습니다.", source: "교육 저장소 ch01_python_basics.md", type: "개념 확인", level: "CORE" }
    ]
  },
  {
    id: "data", title: "데이터 표현", desc: "list · dict · JSON · NumPy", color: "#ffb272", source: "Wiki · 시험 힌트 / book0 ch01", questions: [
      { title: "Python의 `dict`를 설명한 것으로 가장 적절한 것은 무엇인가요?", choices: ["키와 값의 쌍으로 데이터를 표현한다", "같은 타입의 숫자만 저장한다", "함수 실행 시간을 측정한다", "HTTP 요청만 저장한다"], answer: 0, explain: "`dict`는 키로 값을 찾는 구조라 요청·응답 데이터를 표현할 때 자주 사용합니다.", source: "사용자 시험 힌트 · 교육 저장소 ch01_python_basics.md", type: "개념 확인", level: "WARM-UP" },
      { title: "시스템 간 HTTP 데이터 전송에서 JSON의 역할은 무엇인가요?", choices: ["Python 함수 그 자체", "사람이 읽을 수 있는 구조화된 데이터 교환 형식", "NumPy 전용 배열", "서버 실행 명령"], answer: 1, explain: "JSON은 서로 다른 시스템이 구조화된 데이터를 주고받기 위한 직렬화 형식입니다.", source: "사용자 시험 힌트 · 교육 저장소 ch07_FullStack_기본.md", type: "개념 확인", level: "CORE" },
      { title: "다음 중 일반적인 `list`의 특징은 무엇인가요?", choices: ["서로 다른 타입의 값도 순서대로 담을 수 있다", "항상 하나의 값만 담는다", "반드시 JSON 문자열이다", "수치 연산만 가능하다"], answer: 0, explain: "Python list는 순서가 있고 여러 값, 심지어 서로 다른 타입도 담을 수 있습니다.", source: "교육 저장소 ch01_python_basics.md", type: "개념 확인", level: "WARM-UP" },
      { title: "한 가지 타입의 값을 연속적으로 다루는 데 적합한 선택은 무엇인가요?", choices: ["dict", "array", "set만 가능", "str"], answer: 1, explain: "array는 같은 자료형의 값을 연속적으로 저장하는 목적에 맞습니다. 수치 계산은 NumPy 배열이 더 적합할 수 있습니다.", source: "사용자 시험 힌트 · 교육 저장소 ch01/ch02", type: "비교 문제", level: "CORE" },
      { title: "NumPy 배열을 사용하는 대표적인 이유는 무엇인가요?", choices: ["웹 서버를 실행하기 위해", "수치 데이터의 배열 연산을 효율적으로 처리하기 위해", "예외를 숨기기 위해", "API 키를 검증하기 위해"], answer: 1, explain: "NumPy는 배열과 벡터화된 수치 연산에 강점이 있습니다.", source: "사용자 시험 힌트 · 교육 저장소 ch02_python_core", type: "개념 확인", level: "CORE" },
      { title: "다음 코드의 결과는 무엇인가요?", code: "payload = {\"status\": \"ok\", \"count\": 2}\nprint(payload[\"status\"])", choices: ["payload", "status", "ok", "2"], answer: 2, explain: "대괄호로 키 `status`를 조회하면 그 값인 문자열 `ok`가 출력됩니다.", source: "교육 저장소 ch01_python_basics.md", type: "코드 결과", level: "WARM-UP" }
    ]
  },
  {
    id: "core", title: "Python 구조", desc: "클래스 · 데코레이터 · 오류", color: "#c59cff", source: "Wiki · 시험 범위 / book0 ch02", questions: [
      { title: "클래스를 사용하는 가장 큰 이유는 무엇인가요?", choices: ["데이터와 관련 동작을 하나의 구조로 묶기 위해", "모든 오류를 없애기 위해", "함수를 JSON으로 직렬화하기 위해", "네트워크 연결을 자동으로 만들기 위해"], answer: 0, explain: "클래스는 상태(데이터)와 행동(메서드)을 함께 관리하는 틀입니다.", source: "Wiki 시험 범위 · 교육 저장소 ch02_python_core.md", type: "개념 확인", level: "CORE" },
      { title: "다음 데코레이터 문법이 의미하는 것은 무엇인가요?", code: "@decorator\ndef greet():\n    return \"hello\"", choices: ["decorator가 greet를 감싸 새 동작을 더한다", "greet를 삭제한다", "greet를 JSON으로 바꾼다", "decorator를 호출하지 않는다"], answer: 0, explain: "`greet = decorator(greet)`와 같은 의미로, 기존 함수 앞뒤에 공통 처리를 덧붙일 수 있습니다.", source: "Wiki 시험 범위 · 교육 저장소 ch02_python_core_데코레이터.md", type: "코드 해석", level: "CORE" },
      { title: "데코레이터에서 `functools.wraps`를 사용하는 이유는 무엇인가요?", choices: ["원래 함수의 메타데이터를 보존하기 위해", "함수를 비동기로 바꾸기 위해", "예외를 무조건 무시하기 위해", "인자를 자동으로 JSON으로 만들기 위해"], answer: 0, explain: "`wraps`는 wrapper가 원래 함수의 이름·문서 등 메타데이터를 유지하도록 돕습니다.", source: "교육 저장소 ch02_python_core_데코레이터.md", type: "개념 확인", level: "CORE" },
      { title: "예외가 발생할 수 있는 코드를 감싸는 기본 구문은 무엇인가요?", choices: ["if / match", "try / except", "for / in", "class / self"], answer: 1, explain: "`try`에서 예외 가능 코드를 실행하고 `except`에서 처리합니다. 필요하면 `finally`로 마무리 작업을 보장합니다.", source: "Wiki 시험 범위 · 교육 저장소 ch02_python_core.md", type: "개념 확인", level: "WARM-UP" },
      { title: "`logging`을 `print()` 대신 사용하는 이유로 가장 적절한 것은 무엇인가요?", choices: ["로그 수준·시간·출력 대상을 관리할 수 있어서", "코드가 자동으로 병렬화되어서", "예외가 절대 발생하지 않아서", "함수 반환값을 없애서"], answer: 0, explain: "logging은 DEBUG·INFO·WARNING·ERROR 같은 수준으로 실행 정보를 관리할 수 있습니다.", source: "교육 저장소 ch02_python_core.md", type: "개념 확인", level: "CORE" },
      { title: "`finally` 블록의 특징은 무엇인가요?", choices: ["예외가 있든 없든 마무리 실행이 필요한 코드를 둔다", "오직 예외가 없을 때만 실행된다", "함수를 선언한다", "반복을 시작한다"], answer: 0, explain: "`finally`는 예외 발생 여부와 관계없이 실행되는 정리 구간입니다.", source: "Wiki 시험 범위 · 교육 저장소 ch02_python_core.md", type: "개념 확인", level: "WARM-UP" }
    ]
  },
  {
    id: "async", title: "비동기", desc: "async · await · asyncio", color: "#f47fbd", source: "Wiki · 시험 범위 / book0 ch03", questions: [
      { title: "`asyncio`가 특히 적합한 작업은 무엇인가요?", choices: ["네트워크·DB처럼 기다림이 많은 I/O 작업", "모든 CPU 계산", "이미지의 색상 변경만", "정적 HTML 작성"], answer: 0, explain: "비동기는 대기 시간 동안 다른 작업을 진행할 여지가 있는 I/O 중심 작업에 적합합니다.", source: "Wiki 시험 범위 · 교육 저장소 ch03_asyncio.md", type: "개념 확인", level: "CORE" },
      { title: "`await`의 의미로 가장 가까운 것은 무엇인가요?", choices: ["비동기 작업의 결과를 기다리되 이벤트 루프가 다른 일을 할 수 있게 한다", "함수를 삭제한다", "예외를 무시한다", "프로세스를 강제 종료한다"], answer: 0, explain: "`await`는 코루틴의 결과를 기다리는 지점이며, 이벤트 루프가 다른 준비된 작업을 처리할 수 있습니다.", source: "교육 저장소 ch03_asyncio.md", type: "개념 확인", level: "CORE" },
      { title: "다음 중 코루틴을 실행하는 대표적인 시작 방식은 무엇인가요?", choices: ["asyncio.run(main())", "run.async(main)", "await.start(main)", "asyncio.print(main)"], answer: 0, explain: "일반적인 최상위 진입점에서는 `asyncio.run(main())`으로 이벤트 루프를 실행합니다.", source: "교육 저장소 ch03_asyncio.md", type: "코드 개념", level: "WARM-UP" },
      { title: "비동기 프로그래밍에 대한 설명 중 틀린 것은 무엇인가요?", choices: ["I/O 대기 시간을 활용할 수 있다", "여러 작업의 동시 진행을 표현할 수 있다", "CPU 계산을 자동으로 병렬 처리해 항상 빠르게 한다", "TaskGroup 같은 구조로 작업을 관리할 수 있다"], answer: 2, explain: "asyncio가 CPU 계산 자체를 자동으로 빠르게 하거나 병렬화하는 것은 아닙니다.", source: "Wiki academy · 교육 저장소 ch03_asyncio.md", type: "주의점", level: "TRICKY" },
      { title: "여러 독립적인 I/O 작업을 함께 실행할 때 고려할 구조는 무엇인가요?", choices: ["TaskGroup 또는 gather", "오직 while True", "문자열 slicing", "BaseModel 상속"], answer: 0, explain: "독립적인 비동기 작업은 TaskGroup이나 gather 같은 구조로 함께 관리할 수 있습니다.", source: "교육 저장소 ch03_asyncio.md", type: "적용 문제", level: "CORE" },
      { title: "비동기 작업에 시간 제한과 취소를 두는 이유는 무엇인가요?", choices: ["무한 대기와 자원 점유를 방지하기 위해", "모든 응답을 캐싱하기 위해", "타입 힌트를 제거하기 위해", "JSON 키를 정렬하기 위해"], answer: 0, explain: "외부 API나 DB가 지연될 수 있으므로 timeout과 cancellation으로 시스템이 계속 붙잡히는 것을 막습니다.", source: "교육 저장소 ch03_asyncio.md", type: "운영 개념", level: "CORE" }
    ]
  },
  {
    id: "pydantic", title: "Pydantic", desc: "BaseModel · 검증 · 계약", color: "#7ce2c1", source: "Wiki · 시험 범위 / book0 ch04", questions: [
      { title: "Pydantic `BaseModel`의 핵심 역할은 무엇인가요?", choices: ["외부 입력 데이터의 구조와 규칙을 검증한다", "웹 화면을 그린다", "DB를 자동 생성한다", "LLM을 학습시킨다"], answer: 0, explain: "BaseModel은 API 경계에서 입력·출력 데이터의 모양과 제약을 코드로 표현합니다.", source: "Wiki 시험 범위 · 교육 저장소 ch04_pydantic.md", type: "개념 확인", level: "WARM-UP" },
      { title: "다음 필드 선언의 의미는 무엇인가요?", code: "text: str = Field(min_length=2, max_length=500)", choices: ["text가 2~500자의 문자열이어야 한다", "text를 정수로 변환한다", "text를 암호화한다", "text를 필수로 입력하지 않아도 된다"], answer: 0, explain: "Field에 길이 제약을 두면 입력이 해당 범위를 벗어날 때 검증 오류가 발생합니다.", source: "교육 저장소 ch04_pydantic.md", type: "코드 해석", level: "CORE" },
      { title: "Pydantic 검증에 실패했을 때 대표적으로 확인하는 예외는 무엇인가요?", choices: ["ValidationError", "KeyError만", "SyntaxOnlyError", "HTTPConnectError"], answer: 0, explain: "ValidationError에는 어떤 필드가 어떤 규칙을 위반했는지 구조화된 정보가 담깁니다.", source: "Wiki 시험 범위 · 교육 저장소 ch04_pydantic_도입배경.md", type: "개념 확인", level: "WARM-UP" },
      { title: "Pydantic 2에서 모델을 딕셔너리로 변환하는 메서드는 무엇인가요?", choices: ["to_dict()", "model_dump()", "as_json_dict()", "dictify()"], answer: 1, explain: "Pydantic 2에서는 `model_dump()`로 모델 데이터를 딕셔너리로 변환합니다.", source: "교육 저장소 ch04_pydantic.md", type: "API 확인", level: "CORE" },
      { title: "요청 모델과 응답 모델을 분리하는 이유는 무엇인가요?", choices: ["입력과 출력의 데이터 계약을 각각 명확하게 하기 위해", "서버를 두 번 실행하기 위해", "예외를 숨기기 위해", "Streamlit을 제거하기 위해"], answer: 0, explain: "입력에 필요한 필드와 외부에 공개할 출력 필드는 다를 수 있으므로 모델을 분리하면 경계가 명확해집니다.", source: "Wiki academy · 교육 저장소 ch04_pydantic.md", type: "설계 문제", level: "CORE" },
      { title: "`request_id: str | None = None`의 의미는 무엇인가요?", choices: ["문자열 또는 None이며 기본값은 None이다", "항상 정수이며 0이다", "반드시 입력해야 한다", "JSON으로만 전송해야 한다"], answer: 0, explain: "Union 타입과 기본값을 함께 지정해 선택적 문자열 필드를 표현합니다.", source: "교육 저장소 ch04_pydantic.md", type: "코드 해석", level: "CORE" }
    ]
  },
  {
    id: "fastapi", title: "FastAPI REST", desc: "Route · HTTP · JSON", color: "#72d5ee", source: "Wiki · 시험 범위 / book0 ch05", questions: [
      { title: "FastAPI에서 `@app.get(\"/health\")`의 역할은 무엇인가요?", choices: ["GET /health 요청을 처리할 경로를 등록한다", "DB 테이블을 생성한다", "Streamlit 위젯을 만든다", "모델을 임베딩한다"], answer: 0, explain: "데코레이터로 HTTP method와 URL 경로를 Python 함수에 연결합니다.", source: "교육 저장소 ch05_fastapi_rest.md", type: "코드 해석", level: "WARM-UP" },
      { title: "FastAPI API의 일반적인 요청 처리 흐름은 무엇인가요?", choices: ["HTTP 요청 → Route → 검증 → Service → JSON 응답", "JSON 응답 → Route → 사용자 입력", "DB → 화면 → 함수 선언", "Prompt → Git → 이미지"], answer: 0, explain: "Route가 요청을 받고 Pydantic 검증과 서비스 로직을 거쳐 응답을 반환합니다.", source: "Wiki academy · 교육 저장소 ch05_fastapi_rest.md", type: "흐름 문제", level: "CORE" },
      { title: "새 리소스를 서버에 생성하는 REST method로 일반적으로 사용하는 것은 무엇인가요?", choices: ["GET", "POST", "TRACE", "HEAD"], answer: 1, explain: "POST는 요청 본문을 바탕으로 새 리소스를 생성하는 데 일반적으로 사용됩니다.", source: "교육 저장소 ch05_fastapi_rest.md", type: "개념 확인", level: "WARM-UP" },
      { title: "FastAPI의 `response_model`을 사용하는 목적은 무엇인가요?", choices: ["응답 데이터의 형식과 공개 필드를 검증·정의한다", "요청을 자동으로 재시도한다", "서버 포트를 바꾼다", "화면 색상을 변경한다"], answer: 0, explain: "응답 모델을 지정하면 반환 데이터의 구조를 명확히 하고 필드를 필터링할 수 있습니다.", source: "Wiki academy · 교육 저장소 ch05_fastapi_rest.md", type: "개념 확인", level: "CORE" },
      { title: "FastAPI 앱을 개발 서버로 실행하는 명령은 무엇인가요?", choices: ["python -m uvicorn main:app --reload", "python fastapi.start main", "streamlit run api.py", "uvicorn install app"], answer: 0, explain: "Uvicorn이 `main.py`의 `app` 객체를 찾아 개발 서버를 실행합니다.", source: "교육 저장소 ch05_fastapi_rest.md", type: "실행 명령", level: "WARM-UP" },
      { title: "POST 요청의 JSON 본문을 Pydantic으로 받는 이유는 무엇인가요?", choices: ["서버 경계에서 데이터 계약을 검증하기 위해", "브라우저를 설치하기 위해", "모든 요청을 GET으로 바꾸기 위해", "코드를 실행하지 않기 위해"], answer: 0, explain: "외부에서 들어온 JSON을 안전한 Python 모델로 변환·검증한 뒤 서비스 로직으로 넘깁니다.", source: "Wiki 시험 범위 · 교육 저장소 ch04/ch05", type: "설계 문제", level: "CORE" }
    ]
  },
  {
    id: "fullstack", title: "FullStack 연동", desc: "Streamlit ↔ FastAPI", color: "#f29b71", source: "Wiki · 시험 힌트 / book0 ch06-08", questions: [
      { title: "Streamlit과 FastAPI의 역할 조합으로 올바른 것은 무엇인가요?", choices: ["Streamlit은 UI, FastAPI는 데이터 검증·서비스 규칙", "Streamlit은 DB, FastAPI는 CSS", "둘 다 같은 화면만 담당", "Streamlit은 LLM 학습, FastAPI는 Git"], answer: 0, explain: "Streamlit은 사용자 입력·표시를, FastAPI는 HTTP 경계·검증·서비스 로직을 담당합니다.", source: "사용자 시험 힌트 · 교육 저장소 ch06_fastapi_streamlit.md", type: "개념 확인", level: "WARM-UP" },
      { title: "Streamlit 버튼 클릭부터 결과 표시까지의 순서를 고르세요.", choices: ["버튼 → HTTP/JSON → FastAPI → Pydantic → 서비스 → 응답 → 화면", "버튼 → Git push → DB → CSS", "버튼 → LLM 학습 → FastAPI 설치", "버튼 → JSON 삭제 → 화면"], answer: 0, explain: "시험에서 그림으로 그릴 핵심 흐름입니다. 요청·검증·처리·응답·표시를 구분하세요.", source: "사용자 시험 힌트 · Wiki 시험 범위", type: "흐름도", level: "MUST KNOW" },
      { title: "교육 자료의 기본 FullStack 포트 구성으로 적절한 것은 무엇인가요?", choices: ["Streamlit :8501 → FastAPI :8000", "Streamlit :8000 → FastAPI :8501", "둘 다 :80만 사용", "FastAPI만 포트를 사용"], answer: 0, explain: "교육 자료는 Streamlit UI를 8501, FastAPI 백엔드를 8000에서 독립 실행하는 구조를 제시합니다.", source: "교육 저장소 ch06_fastapi_streamlit.md / ch07_FullStack_기본.md", type: "구조 확인", level: "CORE" },
      { title: "Streamlit의 `st.session_state`는 무엇을 위해 사용하나요?", choices: ["사용자 세션 동안 값이나 대화 기록을 유지한다", "모든 사용자의 DB를 영구 저장한다", "API 서버를 실행한다", "Pydantic 오류를 무시한다"], answer: 0, explain: "Streamlit은 입력마다 스크립트를 다시 실행할 수 있어 세션 동안 유지할 값은 session_state에 둡니다.", source: "교육 저장소 ch08_streamlit.md", type: "개념 확인", level: "CORE" },
      { title: "`st.cache_data`와 `st.cache_resource`의 구분으로 적절한 것은 무엇인가요?", choices: ["전자는 데이터 결과 재사용, 후자는 모델·DB 연결 같은 리소스 재사용", "전자는 API 키, 후자는 HTML만 저장", "둘은 완전히 같은 기능", "둘 다 예외를 출력한다"], answer: 0, explain: "계산 결과는 cache_data, 공유할 모델·연결 리소스는 cache_resource가 목적입니다.", source: "교육 저장소 ch08_streamlit.md", type: "비교 문제", level: "CORE" },
      { title: "Pydantic 검증에 실패한 입력이 들어오면 일반적으로 어떤 흐름이 되나요?", choices: ["서비스 로직 전에 오류 응답이 반환되고 화면에 실패가 표시된다", "무조건 DB에 저장된다", "Streamlit이 FastAPI를 건너뛴다", "LLM이 자동으로 값을 추측한다"], answer: 0, explain: "검증은 서비스 로직 앞의 안전 경계입니다. 실패한 데이터는 정상 처리 단계로 넘어가지 않습니다.", source: "Wiki 시험 범위 · 교육 저장소 ch04/ch07", type: "흐름 문제", level: "MUST KNOW" }
    ]
  },
  {
    id: "rag", title: "RAG · LLM", desc: "Prompt · Context · 검증", color: "#e9ca6c", source: "Wiki · RAG 추정 / book0 ch10-18", questions: [
      { title: "RAG의 기본 질의 흐름으로 알맞은 것은 무엇인가요?", choices: ["질문 → 검색기 → Context → Prompt → LLM → 답변·출처", "질문 → Git push → CSS → 답변", "질문 → 모델 학습 → 문서 삭제", "질문 → FastAPI 설치 → 검색"], answer: 0, explain: "RAG는 관련 문서를 검색해 Context로 보강한 뒤 LLM이 답변하도록 합니다.", source: "교육 저장소 ch10_RAG_8단계.md", type: "흐름 문제", level: "MUST KNOW" },
      { title: "RAG 기준에서 Prompt와 Context의 관계는 무엇인가요?", choices: ["Prompt는 모델 입력 전체 구조이고 Context는 그 안의 작업 근거다", "Prompt와 Context는 항상 같은 문자열이다", "Context가 모델이고 Prompt가 DB다", "Prompt는 검색 결과만 의미한다"], answer: 0, explain: "Prompt에는 역할·규칙·Context·질문·출력 형식이 들어갈 수 있고, Context는 그중 참고 근거입니다.", source: "사용자 시험 추정 정정 · 교육 저장소 ch17_RAG_Prompt와Context.md", type: "개념 확인", level: "MUST KNOW" },
      { title: "RAG에서 Chunking을 수행하는 주된 이유는 무엇인가요?", choices: ["긴 문서를 검색 가능한 작은 단위로 나누기 위해", "문서를 이미지로 바꾸기 위해", "LLM을 삭제하기 위해", "API 포트를 정하기 위해"], answer: 0, explain: "문서를 적절한 크기의 Chunk로 나누어 검색 관련성과 Context 구성을 개선합니다.", source: "교육 저장소 ch10/ch12_RAG_문서Chunk.md", type: "개념 확인", level: "CORE" },
      { title: "Embedding과 Vector Store의 관계로 적절한 것은 무엇인가요?", choices: ["문서·Chunk를 벡터로 표현하고 저장해 유사도 검색에 활용한다", "문서를 HTML로 렌더링한다", "Prompt를 암호화한다", "FastAPI를 실행한다"], answer: 0, explain: "Embedding은 의미를 벡터로 바꾸고 Vector Store는 그 벡터와 문서·metadata를 저장합니다.", source: "교육 저장소 ch13_RAG_Embed.md / ch14_RAG_VectorStore.md", type: "파이프라인", level: "CORE" },
      { title: "Harness Engineering을 설명하는 가장 적절한 표현은 무엇인가요?", choices: ["LLM이 안정적으로 일하도록 입력·도구·흐름·검증 장치를 설계하는 것", "Python 자료형을 자동 변환하는 기능", "웹 페이지 색상을 정하는 작업", "Vector DB를 삭제하는 명령"], answer: 0, explain: "Harness는 모델 하나의 성능만 기대하지 않고 작업 환경과 실행·검증 구조를 함께 설계하는 접근입니다.", source: "Wiki 시험 범위 추가 · 교육 저장소 ch16-18", type: "개념 확인", level: "CORE" },
      { title: "LLM 출력 검증이 필요한 이유는 무엇인가요?", choices: ["모델 출력이 형식·근거·업무 규칙을 만족하는지 확인하기 위해", "모델이 항상 정답이기 때문에", "검색을 하지 않기 위해", "모든 예외를 숨기기 위해"], answer: 0, explain: "LLM은 형식 오류나 근거 없는 답변을 만들 수 있으므로 구조·근거·규칙을 별도로 검증해야 합니다.", source: "Wiki 시험 범위 · 교육 저장소 ch18_RAG_LLM_모델호출.md", type: "검증 설계", level: "MUST KNOW" }
    ]
  }
];

const extraQuestions = {
  python: [
    { title: "Python에서 `None`은 무엇을 의미하나요?", choices: ["숫자 0", "빈 문자열", "아직 값이 없음을 나타내는 특별한 값", "항상 거짓인 함수"], answer: 2, explain: "`None`은 값이 없거나 아직 결과가 정해지지 않았음을 표현하는 특별한 객체입니다.", source: "교육 저장소 ch01_python_basics.md", type: "자료형", level: "WARM-UP" },
    { title: "다음 코드가 출력하는 값은 무엇인가요?", code: "number = 1\nwhile number < 4:\n    number += 1\nprint(number)", choices: ["1", "3", "4", "5"], answer: 2, explain: "number는 1에서 시작해 2, 3, 4가 되고, 4 < 4가 거짓이 되면 반복을 종료합니다.", source: "Wiki 시험 범위 · 교육 저장소 ch01_python_basics.md", type: "흐름 추적", level: "CORE" },
    { title: "반복문 안에서 `break`를 실행하면 어떻게 되나요?", choices: ["현재 반복문을 즉시 종료한다", "현재 회차만 건너뛴다", "함수 전체를 다시 시작한다", "조건을 항상 참으로 바꾼다"], answer: 0, explain: "`break`는 자신이 포함된 가장 가까운 반복문을 즉시 빠져나옵니다.", source: "교육 저장소 ch01_python_basics.md", type: "제어문", level: "WARM-UP" },
    { title: "다음 비교식의 결과는 무엇인가요?", code: "result = not (3 > 5)\nprint(result)", choices: ["None", "False", "3", "True"], answer: 3, explain: "3 > 5는 False이고, `not False`는 True입니다.", source: "교육 저장소 ch01_python_basics.md", type: "코드 결과", level: "CORE" }
  ],
  data: [
    { title: "Python 객체를 JSON 문자열로 직렬화할 때 사용하는 함수는 무엇인가요?", choices: ["json.loads()", "json.dumps()", "json.open()", "dict.json()"], answer: 1, explain: "`json.dumps()`는 Python 객체를 JSON 문자열로 만들고, `json.loads()`는 JSON 문자열을 Python 객체로 읽습니다.", source: "사용자 시험 힌트 · 교육 저장소 ch01/ch07", type: "데이터 전송", level: "CORE" },
    { title: "다음 코드 실행 후 `items`의 값은 무엇인가요?", code: "items = [1, 2]\nitems.append(3)", choices: ["[3, 1, 2]", "[1, 2]", "[1, 2, 3]", "3"], answer: 2, explain: "`append()`는 리스트의 마지막에 요소 하나를 추가합니다.", source: "교육 저장소 ch01_python_basics.md", type: "코드 결과", level: "WARM-UP" },
    { title: "NumPy 배열 `values[1]`이 가리키는 값은 무엇인가요?", code: "values = np.array([10, 20, 30])", choices: ["10", "20", "30", "오류"], answer: 1, explain: "Python과 NumPy의 인덱스는 0부터 시작하므로 인덱스 1의 값은 20입니다.", source: "사용자 시험 힌트 · 교육 저장소 NumPy 예제", type: "배열 인덱싱", level: "WARM-UP" },
    { title: "시간이 지날수록 선이 계속 위로 올라가는 그래프가 가장 직접적으로 표현하는 것은 무엇인가요?", code: "요청 수\n  ↑          ╱\n  │       ╱\n  │    ╱\n  └────────→ 시간", choices: ["요청 수가 시간에 따라 증가한다", "요청 수가 일정하다", "시간이 거꾸로 흐른다", "자료형이 문자열로 변한다"], answer: 0, explain: "x축이 시간, y축이 요청 수이고 선이 상승하므로 시간에 따른 요청 증가를 나타냅니다.", source: "사용자 시험 힌트 · 그래프 의미 해석", type: "그래프 해석", level: "MUST KNOW" }
  ],
  core: [
    { title: "클래스의 `__init__` 메서드는 언제 주로 실행되나요?", choices: ["모듈을 삭제할 때", "인스턴스를 생성할 때 초기 상태를 설정한다", "예외가 발생할 때만", "JSON을 전송할 때"], answer: 1, explain: "`__init__`은 클래스의 인스턴스가 만들어질 때 속성 등 초기 상태를 설정합니다.", source: "교육 저장소 ch02_python_core.md", type: "클래스", level: "WARM-UP" },
    { title: "상속의 대표적인 목적은 무엇인가요?", choices: ["부모 클래스의 속성과 동작을 재사용·확장한다", "모든 메서드를 숨긴다", "HTTP 요청을 병렬화한다", "로그 파일을 삭제한다"], answer: 0, explain: "상속은 기존 클래스의 공통 동작을 이어받아 새로운 클래스에서 확장할 때 사용합니다.", source: "Wiki 학습 정리 · 교육 저장소 Python 객체지향", type: "클래스", level: "CORE" },
    { title: "`raise ValueError(\"본문을 입력하세요\")`의 역할은 무엇인가요?", choices: ["경고만 출력하고 계속 실행한다", "ValueError 예외를 명시적으로 발생시킨다", "문자열을 반환한다", "로그 수준을 바꾼다"], answer: 1, explain: "`raise`는 유효하지 않은 상태를 발견했을 때 지정한 예외를 직접 발생시킵니다.", source: "교육 저장소 ch02_python_core.md", type: "예외 처리", level: "CORE" },
    { title: "`try / except / else`에서 `else` 블록은 언제 실행되나요?", choices: ["항상 먼저 실행된다", "예외가 발생했을 때만", "try 블록에서 예외가 발생하지 않았을 때", "finally 다음에만"], answer: 2, explain: "`else`는 try 블록이 예외 없이 정상 완료된 경우 실행됩니다.", source: "교육 저장소 ch02_python_core.md", type: "예외 처리", level: "TRICKY" }
  ],
  async: [
    { title: "`async def fetch()`로 만든 함수를 호출만 하고 `await`하지 않으면 무엇을 얻나요?", choices: ["완료된 문자열", "코루틴 객체", "항상 None", "새 프로세스"], answer: 1, explain: "비동기 함수를 호출하면 코루틴 객체가 만들어지며 실제 결과를 받으려면 await하거나 이벤트 루프에 등록해야 합니다.", source: "교육 저장소 ch03_asyncio.md", type: "코루틴", level: "TRICKY" },
    { title: "동시성(concurrency)을 가장 잘 설명한 것은 무엇인가요?", choices: ["여러 작업의 진행 시간을 겹쳐 관리하는 것", "하나의 값만 저장하는 것", "CPU 코어를 반드시 하나 더 만드는 것", "모든 함수를 데코레이터로 감싸는 것"], answer: 0, explain: "동시성은 여러 작업이 진행 중인 상태를 관리하는 개념입니다. 반드시 물리적으로 같은 순간에 계산한다는 뜻은 아닙니다.", source: "교육 저장소 ch03_asyncio.md", type: "개념 비교", level: "CORE" },
    { title: "외부 API 응답을 무한정 기다리지 않도록 설정하는 것은 무엇인가요?", choices: ["timeout", "inheritance", "serialization", "slicing"], answer: 0, explain: "timeout은 정해진 시간 안에 작업이 끝나지 않을 때 대기를 중단하도록 합니다.", source: "교육 저장소 ch03_asyncio.md", type: "운영 개념", level: "CORE" },
    { title: "`asyncio.gather()`의 대표적인 용도는 무엇인가요?", choices: ["여러 awaitable을 함께 실행하고 결과를 모은다", "Pydantic 모델을 만든다", "HTTP 경로를 등록한다", "코드를 동기 함수로 바꾼다"], answer: 0, explain: "gather는 여러 비동기 작업을 함께 스케줄하고 완료 결과를 모을 때 사용합니다.", source: "교육 저장소 ch03_asyncio.md", type: "API 확인", level: "CORE" }
  ],
  pydantic: [
    { title: "`Field(ge=10, le=200)`이 표현하는 검증 규칙은 무엇인가요?", choices: ["문자열 길이가 정확히 10", "값이 10 이상 200 이하", "리스트 요소가 200개", "값이 10 또는 200만 가능"], answer: 1, explain: "`ge`는 greater than or equal, `le`는 less than or equal을 뜻합니다.", source: "교육 저장소 ch04_pydantic.md", type: "필드 검증", level: "CORE" },
    { title: "Pydantic의 `field_validator`는 언제 사용하나요?", choices: ["필드에 사용자 정의 검증 규칙을 적용할 때", "FastAPI 서버를 실행할 때", "HTML을 렌더링할 때", "Git 커밋을 만들 때"], answer: 0, explain: "기본 타입·범위 검증만으로 부족할 때 field_validator에 도메인 규칙을 작성할 수 있습니다.", source: "교육 저장소 ch04_pydantic.md", type: "사용자 검증", level: "CORE" },
    { title: "Pydantic의 strict 검증을 사용하는 목적은 무엇인가요?", choices: ["가능한 값을 무조건 문자열로 바꾼다", "느슨한 자동 형변환을 제한하고 정확한 타입을 요구한다", "응답을 스트리밍한다", "모델 필드를 숨긴다"], answer: 1, explain: "strict 모드는 예를 들어 문자열 숫자를 정수로 자동 변환하는 동작을 제한해 타입 경계를 엄격하게 만듭니다.", source: "교육 저장소 ch04_pydantic_도입배경.md", type: "검증 방식", level: "TRICKY" },
    { title: "FastAPI 요청 본문이 Pydantic 규칙을 통과하지 못했을 때 일반적인 상태 코드는 무엇인가요?", choices: ["200", "201", "404", "422"], answer: 3, explain: "FastAPI는 요청 데이터 검증 실패를 일반적으로 422 Unprocessable Entity 응답으로 알려줍니다.", source: "Wiki 요청 흐름 · 교육 저장소 ch04/ch05", type: "API 오류", level: "CORE" }
  ],
  fastapi: [
    { title: "`/users/{user_id}`의 `user_id`는 어떤 종류의 매개변수인가요?", choices: ["Request body", "Path parameter", "Header only", "Response model"], answer: 1, explain: "URL 경로 자체에 포함된 값은 path parameter입니다.", source: "교육 저장소 ch05_fastapi_rest.md", type: "REST 설계", level: "WARM-UP" },
    { title: "`/search?keyword=rag`의 `keyword`는 어떤 종류의 매개변수인가요?", choices: ["Path parameter", "Query parameter", "Cookie만", "클래스 속성"], answer: 1, explain: "물음표 뒤에 `key=value` 형태로 붙는 값은 query parameter입니다.", source: "교육 저장소 ch05_fastapi_rest.md", type: "REST 설계", level: "WARM-UP" },
    { title: "요청한 리소스를 찾을 수 없을 때 사용하는 대표적인 HTTP 상태 코드는 무엇인가요?", choices: ["201", "204", "404", "500만 가능"], answer: 2, explain: "404 Not Found는 요청한 경로나 리소스를 찾지 못했음을 나타냅니다.", source: "교육 저장소 ch05_fastapi_rest.md", type: "상태 코드", level: "WARM-UP" },
    { title: "FastAPI에서 의도한 오류 응답을 만들 때 사용하는 것은 무엇인가요?", choices: ["HTTPException", "ValidationLoop", "StreamlitError", "AsyncRouteStop"], answer: 0, explain: "`HTTPException(status_code=..., detail=...)`으로 API 사용자가 이해할 수 있는 오류 응답을 만듭니다.", source: "교육 저장소 ch05_fastapi_rest.md", type: "오류 처리", level: "CORE" }
  ],
  fullstack: [
    { title: "Streamlit에서 FastAPI를 비동기로 호출할 때 사용할 수 있는 HTTP 클라이언트는 무엇인가요?", choices: ["httpx.AsyncClient", "Pydantic.Field", "logging.Logger만", "numpy.ndarray"], answer: 0, explain: "교육 자료는 비동기 HTTP Client를 이용해 UI에서 FastAPI로 요청하는 흐름을 다룹니다.", source: "교육 저장소 ch06_fastapi_streamlit.md", type: "연동 코드", level: "CORE" },
    { title: "Streamlit에서 버튼을 누르거나 입력값이 바뀌면 기본적으로 어떤 일이 일어나나요?", choices: ["Python 스크립트가 위에서 아래로 다시 실행된다", "FastAPI 서버가 삭제된다", "GitHub에 자동 push된다", "브라우저가 항상 종료된다"], answer: 0, explain: "Streamlit은 상호작용이 발생하면 스크립트를 다시 실행하고 화면을 갱신합니다.", source: "교육 저장소 ch08_streamlit.md", type: "동작 구조", level: "MUST KNOW" },
    { title: "FastAPI Middleware의 대표적인 역할은 무엇인가요?", choices: ["모든 요청과 응답의 공통 전후 처리를 수행한다", "특정 리스트에 값 하나를 추가한다", "LLM을 재학습한다", "Streamlit 위젯을 만든다"], answer: 0, explain: "Middleware는 요청 시간 측정, 공통 로그, 헤더 처리처럼 여러 경로에 공통인 처리를 담당합니다.", source: "교육 저장소 ch06_fastapi_streamlit.md", type: "심화 기능", level: "CORE" },
    { title: "FastAPI `BackgroundTasks`가 적합한 예시는 무엇인가요?", choices: ["응답 후 짧은 감사 로그를 남기는 작업", "응답 전에 반드시 끝나야 하는 입력 검증", "브라우저에서 버튼을 그리는 작업", "CPU 집약 장기 학습을 무조건 실행하는 작업"], answer: 0, explain: "BackgroundTasks는 응답을 보낸 뒤 실행해도 되는 짧은 후처리 작업에 적합합니다.", source: "교육 저장소 ch06_fastapi_streamlit.md", type: "심화 기능", level: "CORE" }
  ],
  rag: [
    { title: "RAG 체인에서 `invoke`의 역할을 가장 잘 설명한 것은 무엇인가요?", choices: ["완성된 입력을 체인이나 모델에 한 번 전달하고 최종 응답을 받는다", "토큰을 하나씩 화면에만 표시한다", "문서를 영구 삭제한다", "검색 점수를 logprob로 바꾼다"], answer: 0, explain: "invoke는 검색과 Context 구성을 거친 입력을 한 번 호출해 완성된 결과를 받는 방식으로 설명할 수 있습니다.", source: "Wiki 시험 추정 · invoke/logprob/stream", type: "RAG 호출", level: "MUST KNOW" },
    { title: "RAG 응답의 `stream` 방식은 무엇인가요?", choices: ["완성된 응답만 한 번에 받는다", "생성되는 응답 조각을 순차적으로 받아 표시한다", "검색 문서를 모두 다운로드한다", "Vector Store를 초기화한다"], answer: 1, explain: "stream은 전체 생성이 끝날 때까지 기다리지 않고 토큰 또는 메시지 조각을 순차적으로 받는 방식입니다.", source: "Wiki 시험 추정 · 교육 저장소 ch18_RAG_LLM_모델호출.md", type: "RAG 호출", level: "MUST KNOW" },
    { title: "`logprob`과 검색 문서 관련도 점수의 관계로 올바른 것은 무엇인가요?", choices: ["항상 같은 값이다", "둘 다 HTTP 상태 코드다", "logprob은 토큰 선택 확률의 단서이고 검색 관련도 점수와는 다르다", "logprob은 문서 파일 크기다"], answer: 2, explain: "logprob은 모델이 토큰을 선택한 로그 확률 정보입니다. Retriever가 계산하는 문서 관련도와는 다른 계층의 값입니다.", source: "Wiki 시험 범위 · invoke/logprob/stream 정리", type: "개념 비교", level: "TRICKY" },
    { title: "RAG Harness에서 프롬프트 인젝션을 줄이기 위한 방법으로 가장 적절한 것은 무엇인가요?", choices: ["검색 문서 안의 모든 지시를 시스템 명령처럼 따른다", "신뢰 경계를 두고 문서 내용을 데이터로 취급하며 출력·도구 호출을 검증한다", "Context를 무조건 비운다", "정답 여부와 관계없이 첫 출력을 사용한다"], answer: 1, explain: "검색 문서는 신뢰할 수 없는 지시를 포함할 수 있습니다. 문서를 근거 데이터로 제한하고 실행과 출력을 검증하는 것이 Harness의 보안 역할 중 하나입니다.", source: "Wiki 사용자 시험 추정 · 하네스와 프롬프트 인젝션", type: "보안", level: "MUST KNOW" }
  ]
};

categories.forEach(category => category.questions.push(...extraQuestions[category.id]));

const allQuestions = categories.flatMap(category => category.questions.map((question, index) => ({ ...question, id: `${category.id}-${index + 1}`, categoryId: category.id, categoryTitle: category.title, index })));
const storageKey = "exam-lab-progress-v1";
const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
const state = {
  categoryId: "python",
  mode: "category",
  list: [],
  index: 0,
  selected: null,
  choiceOrders: {},
  attempts: saved.attempts || {},
  wrong: new Set(saved.wrong || [])
};

const $ = selector => document.querySelector(selector);
const categoryById = id => categories.find(category => category.id === id);
const getListForCategory = id => allQuestions.filter(question => question.categoryId === id);
function shuffle(array) {
  const copy = [...array];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function createChoiceOrder(question, correctPosition) {
  const distractors = shuffle(question.choices.map((_, index) => index).filter(index => index !== question.answer));
  const order = [];
  for (let position = 0; position < question.choices.length; position += 1) {
    order.push(position === correctPosition ? question.answer : distractors.shift());
  }
  return order;
}

function prepareChoiceOrders(list) {
  const offset = Math.floor(Math.random() * 4);
  return Object.fromEntries(list.map((question, index) => [
    question.id,
    createChoiceOrder(question, (index + offset) % question.choices.length)
  ]));
}

function getChoiceOrder(question) {
  return state.choiceOrders[question.id] || question.choices.map((_, index) => index);
}

function persist() {
  localStorage.setItem(storageKey, JSON.stringify({ attempts: state.attempts, wrong: [...state.wrong] }));
}

function categoryProgress(categoryId) {
  const list = getListForCategory(categoryId);
  return list.filter(question => state.attempts[question.id]).length;
}

function renderCategoryNav() {
  $("#category-nav").innerHTML = categories.map(category => {
    const completed = categoryProgress(category.id);
    return `<button class="category-item ${state.mode === "category" && state.categoryId === category.id ? "active" : ""}" data-category="${category.id}">
      <span class="category-color" style="background:${category.color}"></span>
      <span class="category-title">${category.title}</span><span class="category-count">${completed}/${category.questions.length}</span>
      <span class="category-desc">${category.desc}</span>
    </button>`;
  }).join("");
  document.querySelectorAll("[data-category]").forEach(button => button.addEventListener("click", () => startCategory(button.dataset.category)));
}

function setList(list, mode, categoryId = null) {
  state.list = list;
  state.mode = mode;
  state.categoryId = categoryId;
  state.index = 0;
  state.selected = null;
  state.choiceOrders = prepareChoiceOrders(list);
  renderCategoryNav();
  renderQuestion();
}

function startCategory(categoryId) { ensureQuizArea(); setList(getListForCategory(categoryId), "category", categoryId); }

function startMock() {
  ensureQuizArea();
  setList(shuffle(allQuestions).slice(0, 20), "mock");
  showToast("20문제 모의고사를 시작합니다");
}

function startWrong() {
  ensureQuizArea();
  const list = allQuestions.filter(question => state.wrong.has(question.id));
  if (!list.length) { showToast("아직 오답이 없습니다. 먼저 문제를 풀어보세요."); return; }
  setList(list, "wrong");
  showToast(`${list.length}개의 오답을 모았습니다`);
}

function restoreQuizArea() {
  $("#quiz-area").innerHTML = `<div class="quiz-toolbar">
    <div><span class="toolbar-kicker" id="mode-label"></span><span class="toolbar-sub" id="mode-sub"></span></div>
    <div class="toolbar-actions"><button class="icon-button" id="prev-question" aria-label="이전 문제">←</button><span id="question-counter"></span><button class="icon-button" id="next-question-top" aria-label="다음 문제">→</button></div>
  </div>
  <div class="quiz-progress"><span id="quiz-progress-bar"></span></div>
  <article class="question-card" id="question-card">
    <div class="question-meta"><span class="question-number" id="question-number"></span><span class="difficulty" id="difficulty"></span><span class="question-type" id="question-type"></span></div>
    <h2 id="question-title"></h2><p class="question-hint" id="question-hint"></p>
    <pre class="code-block" id="question-code" hidden><code></code></pre><div class="choices" id="choices"></div>
    <div class="feedback" id="feedback" hidden></div>
    <div class="question-footer"><span class="source-label" id="source-label"></span><button class="next-button" id="next-question">정답을 고르면 계속 <span>→</span></button></div>
  </article>`;
  $("#next-question").addEventListener("click", nextQuestion);
  $("#next-question-top").addEventListener("click", nextQuestion);
  $("#prev-question").addEventListener("click", previousQuestion);
}

function ensureQuizArea() { if (!$("#question-title")) restoreQuizArea(); }

function renderQuestion() {
  if (!state.list.length) { renderEmpty(); return; }
  const question = state.list[state.index];
  const category = categoryById(question.categoryId);
  state.selected = state.attempts[question.id]?.selected ?? null;
  $("#mode-label").textContent = state.mode === "mock" ? "MOCK EXAM · 20 QUESTIONS" : state.mode === "wrong" ? "WRONG ANSWERS" : category.title.toUpperCase();
  $("#mode-sub").textContent = state.mode === "mock" ? "전 범위 랜덤 출제" : state.mode === "wrong" ? "다시 맞힐 때까지 반복" : category.desc;
  $("#question-counter").textContent = `${String(state.index + 1).padStart(2, "0")} / ${String(state.list.length).padStart(2, "0")}`;
  $("#quiz-progress-bar").style.width = `${((state.index + 1) / state.list.length) * 100}%`;
  $("#question-number").textContent = `Q${String(state.index + 1).padStart(2, "0")}`;
  $("#difficulty").textContent = question.level;
  $("#question-type").textContent = question.type;
  $("#question-title").textContent = question.title;
  $("#question-hint").textContent = question.hint || "정답을 고른 뒤 해설과 근거를 확인하세요.";
  const code = $("#question-code");
  code.hidden = !question.code;
  code.querySelector("code").textContent = question.code || "";
  $("#source-label").textContent = `↳ ${question.source}`;
  $("#prev-question").disabled = state.index === 0;
  $("#next-question-top").disabled = state.index === state.list.length - 1;
  renderChoices(question);
  renderFeedback(question);
}

function renderChoices(question) {
  const letters = ["A", "B", "C", "D", "E"];
  const order = getChoiceOrder(question);
  $("#choices").innerHTML = order.map((choiceIndex, displayIndex) => {
    const choice = question.choices[choiceIndex];
    const picked = state.selected !== null;
    const classes = ["choice"];
    if (picked && choiceIndex === question.answer) classes.push("correct");
    if (picked && choiceIndex === state.selected && choiceIndex !== question.answer) classes.push("incorrect");
    return `<button class="${classes.join(" ")}" data-choice="${choiceIndex}" ${picked ? "disabled" : ""}><span class="choice-letter">${letters[displayIndex]}</span><span>${choice}</span></button>`;
  }).join("");
  document.querySelectorAll("[data-choice]").forEach(button => button.addEventListener("click", () => choose(Number(button.dataset.choice))));
}

function renderFeedback(question) {
  const feedback = $("#feedback");
  const next = $("#next-question");
  if (state.selected === null) { feedback.hidden = true; next.classList.remove("ready"); next.textContent = "정답을 고르면 계속 →"; return; }
  const isCorrect = state.selected === question.answer;
  const correctPosition = getChoiceOrder(question).indexOf(question.answer);
  feedback.hidden = false;
  feedback.className = `feedback ${isCorrect ? "" : "incorrect"}`;
  feedback.innerHTML = `<strong>${isCorrect ? "정답입니다 · 흐름을 잡았어요" : `아쉬워요 · 정답은 ${String.fromCharCode(65 + correctPosition)}번`}</strong>${question.explain}`;
  next.classList.add("ready");
  next.textContent = state.index === state.list.length - 1 ? "결과 보기 →" : "다음 문제 →";
}

function choose(index) {
  if (state.selected !== null) return;
  const question = state.list[state.index];
  state.selected = index;
  state.attempts[question.id] = { selected: index, correct: index === question.answer };
  if (index === question.answer) state.wrong.delete(question.id); else state.wrong.add(question.id);
  persist();
  renderChoices(question); renderFeedback(question); updateDashboard(); renderCategoryNav();
}

function nextQuestion() {
  if (state.selected === null) { showToast("먼저 정답을 선택하세요"); return; }
  if (state.index >= state.list.length - 1) { renderResult(); return; }
  state.index += 1; state.selected = null; renderQuestion(); window.scrollTo({ top: document.querySelector(".quiz-area").offsetTop - 25, behavior: "smooth" });
}

function previousQuestion() { if (state.index > 0) { state.index -= 1; renderQuestion(); } }
function renderResult() {
  const correct = state.list.filter(question => state.attempts[question.id]?.correct).length;
  const percent = Math.round((correct / state.list.length) * 100);
  $("#quiz-area").innerHTML = `<div class="question-card result-card"><div><div class="result-icon">✦</div><div class="eyebrow">SESSION COMPLETE</div><h2>${state.mode === "mock" ? "모의고사를 끝냈습니다." : "이 분야를 끝냈습니다."}</h2><div class="result-score">${percent}<small>%</small></div><p>${correct}개를 맞혔습니다. 틀린 문제는 오답 복습에서 다시 확인할 수 있습니다.</p><div class="result-actions"><button class="primary-button" id="restart-session">다시 풀기 <span>↻</span></button><button class="secondary-button" id="result-wrong">오답만 보기</button></div></div></div>`;
  $("#restart-session").addEventListener("click", () => { restoreQuizArea(); state.mode === "category" ? startCategory(state.categoryId) : state.mode === "mock" ? startMock() : startWrong(); });
  $("#result-wrong").addEventListener("click", () => { restoreQuizArea(); startWrong(); });
}

function renderEmpty() {
  $("#quiz-area").innerHTML = `<div class="question-card empty-state"><div class="result-icon">✓</div><h2>오답이 없습니다.</h2><p>모든 문제를 맞혔거나 아직 문제를 풀지 않았습니다. 분야를 골라 학습을 시작해보세요.</p><button class="primary-button" id="empty-start">Python 기본부터 시작 <span>→</span></button></div>`;
  $("#empty-start").addEventListener("click", () => startCategory("python"));
}

function updateDashboard() {
  const completed = Object.keys(state.attempts).length;
  const correct = Object.values(state.attempts).filter(item => item.correct).length;
  const accuracy = completed ? Math.round((correct / completed) * 100) : 0;
  $("#hero-completed").textContent = `${completed} / ${allQuestions.length}`;
  $("#hero-accuracy").innerHTML = `${accuracy}<span>%</span>`;
  $("#hero-meter").style.width = `${(completed / allQuestions.length) * 100}%`;
  $("#wrong-count").textContent = state.wrong.size;
}

let toastTimer;
function showToast(message) { const toast = $("#toast"); toast.textContent = message; toast.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("show"), 2200); }

$("#start-mock").addEventListener("click", startMock);
$("#start-wrong").addEventListener("click", startWrong);
$("#next-question").addEventListener("click", nextQuestion);
$("#next-question-top").addEventListener("click", nextQuestion);
$("#prev-question").addEventListener("click", previousQuestion);
$("#reset-progress").addEventListener("click", () => {
  if (!confirm("모든 풀이 기록과 오답 기록을 초기화할까요?")) return;
  state.attempts = {}; state.wrong = new Set(); persist(); updateDashboard(); renderCategoryNav(); startCategory("python"); showToast("진행 기록을 초기화했습니다");
});

updateDashboard(); renderCategoryNav(); startCategory("python");
