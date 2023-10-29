import { ImageEditor } from "./image-editor";
import { ImageEditorBackupManager } from "./image-editor-backup-manager";

const imageEditor = new ImageEditor('/media/image.png', 'png')
const backupManager = new ImageEditorBackupManager(imageEditor)

console.log(imageEditor)
backupManager.backup()
imageEditor.convertFormatTo('gif')
console.log(imageEditor)

backupManager.backup()
imageEditor.convertFormatTo('bmp')
console.log(imageEditor)

backupManager.backup()
imageEditor.convertFormatTo('jpg')
console.log(imageEditor)

backupManager.undo()
console.log(imageEditor)
backupManager.undo()
