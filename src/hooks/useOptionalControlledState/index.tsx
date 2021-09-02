import React from "react";
import { useConstant } from "hooks/useConstant";
import { UseOptionalControlledStateProps, UseOptionalControlledStateResponse } from "./interfaces";

export default function UseOptionalControlledState<Value>({controlledValue, initialValue, onChange }: UseOptionalControlledStateProps<Value>) {
  const isControlled = controlledValue !== undefined;
  const initialIsControlled = useConstant(() => isControlled);
  const [stateValue, setStateValue] = React.useState(initialValue);
  const __DEV__ = process.env.NODE_ENV === "development" || "test";

  if(__DEV__) {
    if(initialValue === undefined && controlledValue === undefined) {
      throw new Error("Either an initial value or a controlled value should be provided!");
    };

    if(initialIsControlled && !isControlled) {
      throw new Error("Can not change from controlled to uncontrolled mode. If `undefined` needs to be used for controlled values, please use `null` instead.")
    };

    if(isControlled && !initialIsControlled) {
      throw new Error("Can not change from controlled to uncontrolled mode. Please provide an initial value other than `undefined` to make the state controlled over its lifecycle. If `undefined` needs to be used for controlled values, consider using `null` install")
    };
  }

  const value = isControlled ? controlledValue : stateValue;

  const onValueChange = (nextValue: Value) => {
    if(!isControlled) setStateValue(nextValue);
    if(onChange) setStateValue(nextValue);
  };

  return [value, onValueChange];
};