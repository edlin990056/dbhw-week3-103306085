function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.numberOfValues = 0;
}

SinglyLinkedList.prototype.add = function(data) {
  var node = new Node(data);
  if(!this.head) {
  } else {
  }

};

SinglyLinkedList.prototype.remove = function(data) {
  var previous = this.head;
  var current = this.head;
};

SinglyLinkedList.prototype.insertAfter = function(data, toNodeData) {
  var current = this.head;
};

SinglyLinkedList.prototype.length = function() {
};

SinglyLinkedList.prototype.print = function() {
};



module.exports = {
  SinglyLinkedList : SinglyLinkedList,
  Node : Node
};
