import InputText from "../../../../src/behavioral/observer/example1/InputText";
import Label from "../../../../src/behavioral/observer/example1/Label";


test("deve criar um componente reativo", function () {
  //nesta relação o input é observado
  //o label observa
  const inputText = new InputText("country");
  const labelA = new Label("País: {{country}}");
  const labelB = new Label("Country: {{country}}");
  inputText.register(labelA)
  inputText.register(labelB)
  inputText.setValue("brasil");
  expect(labelA.getValue()).toBe("País: brasil");
  expect(labelB.getValue()).toBe("Country: brasil");
});
