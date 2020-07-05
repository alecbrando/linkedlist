// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val);
        if(this.tail === null){
            this.tail = newNode;
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if(this.length === 0){
            return undefined;
        }
        let removeNode = this.tail;
        let current = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            while (current.next.next !== null){
                current = current.next;
            }
            this.tail = current;
            this.tail.next = null;
        }
        
        this.length--;
        return removeNode;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            let previousHead = this.head;
            this.head = newNode;
            this.head.next = previousHead;
        }

        this.length++;
        return this
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if(this.head === null){
            return undefined;
        } 
        let removed = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            let nextHead = this.head.next;
            this.head = nextHead;
        }
        this.length--;
        return removed;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let currentNode = this.head;
        while(currentNode.value !== target){
            currentNode = currentNode.next;
            if(currentNode == null){
                return false;
            }
        }
        return true;
    }

    // TODO: Implement the get method here
    get(index) {
        if(index < 0 || index > this.length) return null;
        let selectedNode = this.head;
        if(index === 0) return selectedNode;
        for(let i = 1; i <= index; i++){
            selectedNode = selectedNode.next;
        }
        return selectedNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let current = this.get(index);
        if(current === null){
            return false;
        } else {
            current.value = val;
            return true;
        }
        
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if(index === this.length) return this.addToTail(val);
        if(index === 0) return this.addToHead(val);
        if(index > this.length || index < 0) return false;
        let newNode = new Node(val);
        let previous = this.get(index - 1);
        let current = this.get(index);
        previous.next = newNode;
        newNode.next = current;
        this.length++;
        return true;

    }

    // TODO: Implement the remove method here
    remove(index) {
        if(index > this.length || index < 0) return undefined;
        let previous = this.get(index - 1);
        let after = this.get(index + 1);
        let removed = this.get(index);
        previous.next = after;
        this.length--;
        return removed;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
