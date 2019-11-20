type HashItem = [string, any];
export class HashTable {
  public keyMap: any = [];

  constructor(size: number) {
    this.keyMap = [...new Array(size)].map(item => []);
  }

  public set(key: string, value: any): void {
    const hash = this.hash(key);
    this.keyMap[hash].push([key, value]);
  }

  public get(key: string): any {
    const hash = this.hash(key);
    let valuePair = null;
    if (this.keyMap[hash].length > 1) {
      valuePair = this.keyMap[hash].find(h => {
        return h[0] === key;
      });
    } else {
      valuePair = this.keyMap[hash];
    }

    return valuePair ? valuePair[1] : undefined;
  }

  public keys(): string[] {
    const res = [];
    for (const item of this.keyMap) {
      item.forEach(element => {
        res.push(element[0]);
      });
    }

    return res;
  }

  public values(): any[] {
    const res = [];
    for (const item of this.keyMap) {
      item.forEach(element => {
        res.push(element[1]);
      });
    }

    return res;
  }

  private hash(key: string): number {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (const char of key) {
      const val = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + val) % this.keyMap.length;
    }

    return total;
  }
}
