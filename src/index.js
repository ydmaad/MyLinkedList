const MyLinkedList = require("./MyLinkedList");

const playlist = new MyLinkedList();

playlist.add("좋은 날 - 아이유");
playlist.add("Hype Boy - NewJeans");
playlist.add("Dynamite - BTS");

console.log("현재 플레이리스트:");
for (let i = 0; i < playlist.length(); i++) {
  console.log(`${i + 1}번 곡: ${playlist.get(i)}`);
}

console.log("\n2번 곡 삭제 후:");
playlist.delete(1);
for (let i = 0; i < playlist.length(); i++) {
  console.log(`${i + 1}번 곡: ${playlist.get(i)}`);
}
