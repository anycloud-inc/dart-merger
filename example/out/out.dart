import 'dart:math';


class Fuga {
  void run() {
    print(sin(1));
    _fuga_$valueOf("fuga");
  }
}

void _fuga_$valueOf(String name) {
  print(name);
}


class Hoge {
  void calculate() {
    print(sin(1));
    _hoge_$valueOf("hoge");
  }
}

void _hoge_$valueOf(String name) {
  print(name);
}



class Piyo extends Hoge {
  Fuga generateFuga() {
    return Fuga();
  }
}

