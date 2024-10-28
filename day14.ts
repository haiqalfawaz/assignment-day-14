/* soal 1. 
    - Buat sebuah fungsi bernama getFullName yang menerima parameter dengan tipe data Person. Tipe Person ini adalah sebuah type alias yang memiliki properti firstName (string) dan lastName (string).
    - Kembalikan hasil concatenasi dari firstName dan lastName, dipisahkan oleh spasi.
*/

type Person = {
  firstName: string;
  lastName: string;
};

function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

console.log(getFullName({ firstName: "Haiqal", lastName: "Fawaz Fadillah" }));

/* soal 2.
    - Buat fungsi wrapInArray yang menggunakan generic type untuk mengubah input menjadi array. Fungsi ini menerima satu parameter item dengan tipe T dan mengembalikan sebuah array berisi item tersebut.
    - Gunakan generic type T untuk mendefinisikan tipe parameter input dan hasil return.
*/

function wrapInArray<T>(input: T): T[] {
  return [input];
}

console.log(wrapInArray("Haiqal Fawaz Fadillah"));
console.log(wrapInArray(12345));
console.log(wrapInArray(true));
console.log(wrapInArray([11, 22, 33, 44, 55]));
console.log(
  wrapInArray({
    nama: "Haiqal Fawaz Fadillah",
    NPM: 183010081,
    Jurusan: "Teknik Industri",
  })
);

export {};
