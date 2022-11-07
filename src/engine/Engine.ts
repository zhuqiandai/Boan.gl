import { Nullable } from 'src/types/helper'
import Scene from 'src/scene/Scene'

class Engine {
    private _renderCanvas: Nullable<HTMLCanvasElement>
    private _renderTarget: Nullable<WebGLProgram>
    private _context: WebGL2RenderingContext
    private _scenes: Array<Scene>

    constructor(canvas?: HTMLCanvasElement) {
        this._renderCanvas = canvas ?? document.createElement('canvas')
        this._renderTarget = null

        if (!canvas) {
            document.body.appendChild(this._renderCanvas)
            this._renderCanvas.style.width = '100%'
            this._renderCanvas.style.height = '100%'
        }

        const context = this._renderCanvas.getContext('webgl2', {
            antialias: true,
            stencil: true,
        })

        if (!context) {
            console.error('Your brower maybe not suppost webgl')
        }

        this._context = context as WebGL2RenderingContext

        this._scenes = []
    }

    public get context() {
        return this._context
    }

    /**
     *  Core
     */
    public renderLoop(draw: Function, scene: Scene) {
        console.log('built scene:', scene)

        const loop = (time: number) => {
            draw(time)

            requestAnimationFrame(loop)
        }

        requestAnimationFrame(loop)
    }

    private initialize() {
        const program = this.createShaderProgram()

        const vertex = this._context.VERTEX_SHADER
        const vertexShader = this.createShader(vertex)

        const fragment = this._context.FRAGMENT_SHADER
        const fragmentShader = this.createShader(fragment)
    }

    /**
     *  WebGL
     */
    private createShaderProgram(): WebGLProgram {
        const program = this._context.createProgram() as WebGLProgram

        if (!program) {
            console.error('WebGL program create failed')
        }

        return program
    }

    private createShader(type: number): WebGLShader {
        const shader = this._context.createShader(type) as WebGLShader

        if (!shader) {
            console.error('WebGL shader create failed')
        }

        return shader
    }

    private createVertexBuffer() {}

    private createDynamicVertexBuffer() {}

    private createIndexBuffer() {}

    private createTexture() {}

    private createDynamicTexture() {}

    /**
     *  Frame
     */

    public beginFrame() {}

    public endFrame() {}
}

export default Engine
