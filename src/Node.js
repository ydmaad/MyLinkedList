// 노드 객체를 어떻게 만들 건지 정의
class Node {
  // 새 Node 객체를 만들 때 실행되는 생성자 함수
  constructor(data) {
    // 노드에 담길 실제 값
    this.data = data;
    // 다음 노드를 가리키는 포인터(처음엔 없으니 null)
    this.next = null;
  }
}

module.exports = Node;
