// 1.Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin
// va ularning yig’indisini qaytarib bersin.
// function sum(x,y) {
// // code...
// }

// function sum(x , y){
//     return x + y;
// }

// console.log(sum(3 , 2));

// ========================================================================================================================================================

// 2.Minutlarni butun son sifatida qabul qilib, uni sekundlarga
// o’girib beradigan funksiya yasang.
// 1
// DASTURLASHDAN MASALALAR

// function toSekunds(minutes) {
//     return minutes * 60;
// }

// console.log(toSekunds(3));

// ==========================================================================================================================================================

// 3.Funksiya butun son qabul qiladi. Funksiya ushbu butun
// sondan keyingi sonni qaytarsin.

// function nextInteger(int) {
//     return int + 1;
// }

// console.log(nextInteger(34));

// ========================================================================================================================================================

// 4.Funskiya uchburchakning asosi va balandligini qabul qiladi.
// Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2

// function uchburchakYuzi(asos, balandlik) {
//     return asos * balandlik / 2;
// }

// console.log(uchburchakYuzi(3 , 2));

// ========================================================================================================================================================================================

// 5.Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya
// yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb
// oling.

// function ageToDays(age) {
//     return age * 365;
// }

// console.log(ageToDays(20));

// ======================================================================================================================================================================================

// 6.Quyidagi namunalarga muvofiq ravishda funksiyani tana
// qismini yozing.

// function kub(son) {
//   return son ** 3;
// }

// console.log(kub(3));

// ====================================================================================================================================================================================

// 7.Massivni ichidan birinchi elementini qaytaradigan funksiya
// yasang.

// function firstElement(arr) {
//   return arr[0];
// }

// console.log(firstElement([1, 2, 3]));

// ===============================================================================================================================================

// 8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi
// qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.

// function power(x, y) {
//   return x * y;
// }

// console.log(power(230 , 10));


// =================================================================================================================================================

// 9.Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan
// funksiya yasang.


// function hourToSekunds(hour) {
//     return hour * 3600;
// }

// console.log(hourToSekunds(2));

// =================================================================================================================================================

// 10.Uchburchakning uchinchi tomonining eng uzun qiymatini
// qaytaradigan funksiya yasang.
// Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1


// function uchinchiTomon(tomon1, tomon2) {
//     return (tomon1 + tomon2) - 1;
// }
// console.log(uchinchiTomon(8 , 10));


// ==================================================================================================================================================================

// 11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan
// funksiya yasang.

// function qoldiq(son1, son2) {
//     return son1 % son2 ;
// }

// console.log(qoldiq(-9 , 45));

// ========================================================================================================================================================

// 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab
// qaytaradigan funksiya yasang. Formula S = bo’yi * eni


// function turtburchakYuzi(boyi, eni) {
//     return boyi * eni ;
// }

// console.log(turtburchakYuzi(6 , 7));

// =========================================================================================================================================

// 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi.
// ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a”
// stringini birlashtirib qaytarsin.

// function stringQoshish(a) {
//     return  "something " + a;
// }
// console.log(stringQoshish("is better than nothing"));

// =========================================================================================================================================

// 14.Quyidagi namunalarga qaragan holatda funksiya yasang.
// Namuna: kvadrat(5) ᔍ 25

// function kvadrat(son){
//     return son ** 2 ;
// }
// console.log(kvadrat(5));

// =====================================================================================================================================

// 15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik
// yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.


// function noldan(raqam) {
//     return raqam <= 0;
// }

// console.log(noldan(-9));

// =======================================================================================================================================

// 16.Funksiya ko’p burchakli shaklning burchaklar sonini qabul
// qiladi. Natijada funksiya ushbu shaklning ichki burchaklar
// yig’indisini qaytarsin. Formula (n - 2) x 180


// function ichkiBurchaklar(n) {
//     return (n - 2) * 180;
// }
// console.log(ichkiBurchaklar(3));

// ===================================================================================================================================================

// 17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar
// mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar
// sonini va 2-argument sifatida uch ochkolik gollar sonini qabul
// qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.

// function ochkolar(x,y) {
//     return x * 2 + y * 3;
// }
// console.log(ochkolar(1 , 1));

// ===================================================================================================================================================

// 18.Quyidagi namunalarni kuzatgan holda unga muvofiq
// funksiya yasang.
// Namuna:
// nameString("Mubashir") ᔍ "MubashirEdabit"

// function nameString(ism){
//     return ism + "Edabit";
// }
// console.log(nameString("Mubashir"));

// ===================================================================================================================================================

// 19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina
// bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya
// yasang.

// function ikkitaSon(x,y){
//     return (x + y) < 100; 
// } 
// console.log(ikkitaSon(22 , 15));

// ===================================================================================================================================================

// 20.Quyidagi namunalarni kuzatgan holda unga muvofiq keladigan funksiya yasang.
// Namuna:
// printArray(1) ᔍ [1]
// printArray(3) ᔍ [1, 2, 3]

// function printArray(x){
//     let ms = [];
//     for(let i = 0; i < x ; i++){
//         ms[i] = i + 1;
//     }
    
//     return ms;
// }

// console.log(printArray(3));

// ===================================================================================================================================================

// 21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya
// yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari
// nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi
// argument sifatida tovuqlar sonini, ikkinchi argument sifatida
// qo’ylarni va uchinchi argument sifatida sigirlarning sonini
// qabul qiladi.

// function oyoqlar(tovuq, qoy, sigir) {
//     return  tovuq * 2 + qoy * 4 + sigir * 4;
// }

// console.log(oyoqlar(2 , 3 , 5));

// ===================================================================================================================================================

// 22.Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga
// muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!
// Namuna:
// and(true, false) ᔍ false
// and(true, true) ᔍ true
// and(false, true) ᔍ false
// and(false, false) ᔍ false

// function and(x , y){
//     if(x == true && y == true){
//         natija = true;
//     }
//     else{
//         natija = false;
//     }

//     return natija;
// }

// console.log(and(true , false));

// ===================================================================================================================================================

// 23.Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa
// teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala
// qiymatning ma’lumot turi bir xil bo’lsin.


// function tengMi(x, y) {
//     return x === y;
// }

// console.log(tengMi(2 , "2"));

// ===================================================================================================================================================

// 24.Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda
// funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini
// qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta
// mag’lubiyat = 0 ochko hisoblanadi.


// function futbolOchko(yutishlar, duranglar,
// maglubiyatlar) {
//     return yutishlar * 3 + duranglar;
// }
// console.log(futbolOchko(3 , 4 , 2));

// ===================================================================================================================================================

// 25.Funskiya soatlar va minutlarni argument sifatida qabul
// qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib
// ularning yig’indisini qaytarsin.

// function sekundlar(soat, minut) {
//     return soat * 3600 + minut * 60;
// }
// console.log(sekundlar(1 , 3));

// ===================================================================================================================================================

// 26.Quyidagi namunalarni kuzatgan holda funksiya yasang.
// Namuna:
// fun(4) ᔍ false
// fun(9) ᔍ false
// fun(7) ᔍ true

// function fun(x){
//     let son = Float32Array
//     if()                                                         Chiqmadi
// }

// =========================================================================================================================================

// 27.Funskiay 2ta istalgan turdagi qiymatlar qabul qiladi. Agar
// ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi
// jihatidan teng bo’lsa rost, aks holda funkisya yolg’on qiymat
// qaytarsin.

// function tengMi(x, y) {
//     if(x === y){
//         return true;
//     }
//     return false;
// }
// console.log(tengMi(1 , true));

// =============================================================================================================================================

// 28.Funksiya boolean qiymat qabul qiladi. Ushbu funksiya
// boolean qiymatni stringga o’girib qaytarib bersin.

// function booleanToString(bool) {
//     return String(bool);
// }
// console.log(booleanToString(true));

// ============================================================================================================================================

// 29.Arrow funksiyasini yarating ushbu funksiya shunchaki
// berilgan qiymatni qaytarsin.

// Namuna:
// arrowFunc(3) ᔍ 3
// arrowFunc("3") ᔍ "3"

// function arrowFunc(x){
//     return x;
// }
// console.log(arrowFunc("true"));

// =======================================================================================================================================

// 30.Framelar sonini hisoblaydigan funksiya yarating. Frame bu
// 1 sekundda necha marta ko’rinishlar soni aylanishi. Funksiya
// minutlar va 1 sekundda nechta framelar soni aylanishini argument sifatida qabul qiladi. Funksiya jami framelar sonini
// qaytarsin.

// function frameSoni(minut, frame) {
//     return minut * frame * 60;
// }
// console.log(frameSoni(10 , 25));

// ================================================================================================================================================

