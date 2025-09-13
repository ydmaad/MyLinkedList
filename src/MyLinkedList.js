const Node = require("./Node");
console.log("Node:", Node);

// 연결 리스트 구현
class MyLinkedList {
  constructor() {
    // 첫 번째 노드를 가리킴(리스트가 비어 있으면 null)
    this.head = null;
    // 리스트에 들어 있는 노드 개수
    this.size = 0;
  }

  // 마지막 위치에 새 노드 추가
  add(data) {
    const newNode = new Node(data);

    // 리스트가 비어 있다면 head가 새 노드를 가리킴
    if (!this.head) {
      this.head = newNode;
    } else {
      // 비어 있지 않으면 끝까지 이동 후 새 노드 연결
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // i번째 노드의 데이터 가져오기
  get(index) {
    // 인덱스 범위 확인
    this._checkIndex(index);

    let current = this.head;
    // index 위치까지 이동
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }

  // i번째 노드 삭제
  delete(index) {
    this._checkIndex(index);

    if (index === 0) {
      // 첫번째 노드를 삭제 -> head를 다음 노드로 변경
      this.head = this.head.next;
    } else {
      // 삭제할 노드의 이전 노드 찾기
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      // 이전 노드가 삭제할 노드의 다음 노드를 가리키도록 변경
      prev.next = prev.next.next;
    }
    // 크기 감소
    this.size--;
  }

  // 인덱스 유효성 검사
  _checkIndex(index) {
    if (index < 0 || index >= this.size) {
      throw new Error(`Index ${index} our of bounds`);
    }
  }

  // 현재 리스트 크기 반환
  length() {
    return this.size;
  }
}

module.exports = MyLinkedList;
