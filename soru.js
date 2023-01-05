function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru(
      "1-Which one is a package management application of Javascript ?",
      { a: "Node.js", b: "Typescript", c: "Npm" },
      "c"
    ),
    new Soru(
      "2-Which one is a backend development technology ?",
      { a: "Node.js", b: "Typescript", c: "Vue.js" },
      "a"
    ),
    new Soru(
      "3-Which one is an one of the Javascript technologies ?",
      { a: "C#", b: "Java", c: "React" },
      "c"
    ),
    new Soru(
      "4-Which one is a type safe programming language ?",
      { a: "Node.js", b: "Typescript", c: "Javascript" },
      "b"
    ),
  ];