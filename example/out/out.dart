import 'dart:math';


class Fuga {
  void run() {
    print(sin(1));
    this._fuga_$valueOf("hoge");
  }

  void _fuga_$valueOf(String name) {
    print(name);
  }
}


class Hoge {
  void calculate() {
    print(sin(1));
  }
}



class Piyo extends Hoge {
  Fuga generateFuga() {
    return Fuga();
  }
}

