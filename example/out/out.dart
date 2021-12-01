import 'dart:math';


class Fuga {
  void run() {
    print(sin(1));
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

