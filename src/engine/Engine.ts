import { Nullable } from 'src/types/helper'
import Scene from 'src/scene/Scene'

class Engine {
    private _canvas: Nullable<HTMLCanvasElement>
    private _context: WebGL2RenderingContext

    constructor(canvas?: HTMLCanvasElement) {
        this._canvas = canvas ?? document.createElement('canvas')

        if (!canvas) {
            document.body.appendChild(this._canvas)
            this._canvas.style.width = '100%'
            this._canvas.style.height = '100%'
        }

        const context = this._canvas.getContext('webgl2')

        if (!context) {
            console.error('Your brower maybe not suppost webgl')
        }

        this._context = context as WebGL2RenderingContext
    }

    public get context() {
        return this._context
    }

    public renderLoop(draw: Function, scene: Scene) {
        console.log('built scene:', scene)

        const loop = (time: number) => {
            draw(time)

            requestAnimationFrame(loop)
        }

        requestAnimationFrame(loop)
    }

    private initialize() {
        const program = this.createProgram()

        const vertex = this._context.VERTEX_SHADER
        const vertexShader = this.createShader(vertex)

        const fragment = this._context.FRAGMENT_SHADER
        const fragmentShader = this.createShader(fragment)
    }

    private createProgram(): WebGLProgram {
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

    private createVertexShaderContext() {}
    private createFragmentShaderContext() {}
}

export default Engine
