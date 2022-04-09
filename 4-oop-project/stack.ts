{
    interface Stack {
        readonly size: number;
        push(value: string): void;
        pop(): string;
    }

    type Node = {
        readonly value: string;
        next: LinkedList | null
    }

    class LinkedList {
        node:Node;
        constructor(str:string) {
            this.node = {
                value: str,
                next: null,
            }
        }
        add(str: string) {
            this.node.next = new LinkedList(str);
        }
    }

    class StackImpl implements Stack {
        size: number = 1;
        constructor(private stack:LinkedList) {}
        push(value: string): void {
            this.stack.add(value);
            this.size += 1;
        }

        pop(): string {
            let node = this.stack.node;
            if (this.size < 1) {
                return 'Empty';
            }

            let prevNode: Node = node;
            while (node.next !== null) {
                prevNode = node;
                node = node.next.node;
            }
            prevNode.next = null;
            this.size -= 1;
            return node.value;
        }

        get getStack():LinkedList {
            return this.stack;
        }
    }

    const node = new LinkedList("first");
    const stack = new StackImpl(node);

    stack.push('second');
    console.log(stack.getStack);
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
}