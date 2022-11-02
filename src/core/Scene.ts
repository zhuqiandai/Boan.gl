import Engine from 'src/core/Engine'
import Camera from 'src/cameras/Camera'
import Light from 'src/lights/Light'
import BufferMesh from 'src/mesh/BufferMesh'

class Scene {
    private _engine: Engine
    private _camera: Camera
    private _meshs: BufferMesh[]
    private _lights: Light[]

    constructor(engine: Engine) {
        this._engine = engine
        this._camera = this.createDefaultCamera()
        this._meshs = []
        this._lights = []
    }

    public attachCamera(camera: Camera) {
        this._camera = camera
    }

    public render(draw: Function) {
        this._engine.renderLoop(draw, this)
    }

    private createDefaultCamera(): Camera {
        // todo
        return new Camera()
    }
}

export default Scene
