const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

// 최소 힙 클래스 정의
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 힙의 크기 반환
  size() {
    return this.heap.length;
  }

  // 새로운 원소를 힙에 추가
  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  // 최소값(루트)을 제거하고 반환
  pop() {
    if (this.size() === 0) return 0; // 힙이 비어있으면 0 반환
    if (this.size() === 1) return this.heap.pop(); // 원소가 하나면 그 원소를 반환

    const min = this.heap[0];
    this.heap[0] = this.heap.pop(); // 마지막 원소를 루트로 이동
    this.bubbleDown(); // 힙 속성 유지
    return min;
  }

  // 새로 추가된 원소를 올바른 위치로 올림
  bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      // 부모와 자식의 위치를 교환
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  // 루트에서 시작하여 올바른 위치로 내림
  bubbleDown() {
    let index = 0;
    while (true) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let smallest = index;

      // 왼쪽 자식이 더 작으면 교환 대상을 왼쪽 자식으로 변경
      if (leftChild < this.size() && this.heap[leftChild] < this.heap[smallest]) {
        smallest = leftChild;
      }
      // 오른쪽 자식이 더 작으면 교환 대상을 오른쪽 자식으로 변경
      if (rightChild < this.size() && this.heap[rightChild] < this.heap[smallest]) {
        smallest = rightChild;
      }

      if (smallest === index) break; // 교환이 필요 없으면 종료

      // 현재 노드와 가장 작은 자식을 교환
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

const minHeap = new MinHeap(); // 최소 힙 인스턴스 생성
const N = input[0]; // 연산의 개수
const result = []; // 결과를 저장할 배열

// 각 연산 처리
for (let i = 1; i <= N; i++) {
  if (input[i] !== 0) {
    minHeap.push(input[i]); // 자연수면 힙에 추가
  } else {
    result.push(minHeap.pop()); // 0이면 최소값 제거 후 결과에 추가
  }
}

// 모든 결과를 한 번에 출력
console.log(result.join('\n'));