import 'dart:math';

class _$Moti {
  _$Moti._() {
    print("private constructor");
  }

  void run() {
    print(sin(1));
    _$valueOf("moti");
  }
}

void _$valueOf(String name) {
  print(name);
}
