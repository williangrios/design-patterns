import Button from "./Button";
import Label from "./Label";
import DarkButton from "./DarkButton";
import DarkLabel from "./DarkLabel";
import WidgetFactory from "./WidgetFactory";

export default class DarkWidgetFactory implements WidgetFactory{
    createButton(): Button {
        return new DarkButton()
    }
    createLabel(): Label {
        return new DarkLabel()
    }
}