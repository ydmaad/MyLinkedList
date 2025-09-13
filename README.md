# 과제 08. MyLinkedList 구현 과제

## 📌 과제 목표

LinkedList 자료구조를 학습하고, 직접 구현해 본 `MyLinkedList` 클래스입니다.  
아래와 같은 메서드를 제공합니다.

- `add(data)`: 마지막 노드에 data 추가
- `get(index)`: i번째 노드의 data 반환
- `delete(index)`: i번째 노드 삭제
- `length()`: 현재 리스트 크기 반환

---

## 📂 프로젝트 구조

```
📦 my-linked-list
 ┗ 📦 src
    ┣ 📜 MyLinkedList.js #노드 정의
    ┣ 📜 Node.js # LinkedList 구현
    ┗ 📜 index.js # 실행 코드
```

---

## 🚀 실행 방법

1. 프로젝트 폴더 이동

   ```
   cd my-linked-list
   ```

2. 실행
   ```
   npm start
   ```

---

## 🧪 실행 예시

```
현재 플레이리스트:
1번 곡: 좋은 날 - 아이유
2번 곡: Hype Boy - NewJeans
3번 곡: Dynamite - BTS
```

- add() 메서드로 노드가 차례대로 추가됨
- get() 메서드로 각 인덱스 노드 값 확인 가능
- delete() 메서드로 특정 인덱스 노드 삭제 가능
