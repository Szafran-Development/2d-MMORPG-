import { v4 as uuidv4 } from 'uuid'

export default {
    id: uuidv4(),
    name: 'test',
    x: 256,
    y: 256,
    width: 32,
    height: 48,
    visible: true,
    imageSrc: '',
    currentDirection: 0,
}
