package com.demorn;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.Callback;

import java.util.Map;
import java.util.HashMap;

public class CalculatorModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  private static final String OPERATOR_ADD = "ADD";
  private static final String OPERATOR_SUB = "SUB";
  private static final String OPERATOR_MUL = "MUL";
  private static final String OPERATOR_DIV = "DIV";

  CalculatorModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  public String getName() {
    return "CustomCalculator";
  }

  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();

    constants.put(OPERATOR_ADD, "+");
    constants.put(OPERATOR_SUB, "-");
    constants.put(OPERATOR_MUL, "*");
    constants.put(OPERATOR_DIV, "/");

    return constants;
  }

  @ReactMethod
  public void applyWithPromise(int x, int y, String operator, Promise promise) {
    int result = 0;

    switch (operator) {
      case "+":
        result = x + y;
        break;
      case "-":
        result = x - y;
        break;
      case "*":
        result = x * y;
        break;
      case "/":
        result = x / y;
        break;
    }

    promise.resolve(result);
  }

  @ReactMethod
  public void applyWithCallback(int x, int y, String operator, Callback successCallback) {
    int result = 0;

    switch (operator) {
      case "+":
        result = x + y;
        break;
      case "-":
        result = x - y;
        break;
      case "*":
        result = x * y;
        break;
      case "/":
        result = x / y;
        break;
    }

    successCallback.invoke(result);
  }
}