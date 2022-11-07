import Engine from 'src/engine/Engine'
import Camera from 'src/camera/Camera'
import Light from 'src/light/Light'
import BufferMesh from 'src/mesh/BufferMesh'
import { Nullable } from 'src/types/helper'

class Scene {
    private _engine: Engine
    private _camera: Camera[]
    private _activeCamera: Nullable<Camera>

    private _meshs: BufferMesh[]

    private _lights: Light[]

    constructor(engine: Engine) {
        this._engine = engine

        this._camera = []
        this._activeCamera = null

        this._meshs = []

        this._lights = []
    }

    public render(draw: Function) {
        this._engine.renderLoop(draw, this)
    }

    public pick(x: number, y: number) {}
}

export default Scene
