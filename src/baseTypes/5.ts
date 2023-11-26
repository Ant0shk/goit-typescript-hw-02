/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let item: "string" | number;

type union = "enable" | "disable";
let item2: union = "disable";
item2 = "enable";
