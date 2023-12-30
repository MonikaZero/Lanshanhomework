// 定义一个泛型函数，用于返回指定类型的数组  
function createArray<T>(length: number, value: T): T[] {  
  return Array.from({ length }, () => value);  
}  
  
// 使用泛型函数，例如创建一个数字数组  
const numbers = createArray<number>(5, 0); // [0, 0, 0, 0, 0]